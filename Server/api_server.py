from flask import Flask, jsonify, request, abort, json
from flask_cors import CORS

from werkzeug.exceptions import HTTPException

import mysql.connector
from datetime import datetime
from time import sleep

# from python_arptable import get_arp_table

api = Flask(__name__)
cors = CORS(api, resources={r"*": {"origins": "*"}})


# data structure

# temperatures table
# temperature, timestamp, device_id

# devices table
# device_id (auto incremented), alias, x, y, tags (upstairs, downstairs), ip

# def mac_from_ip(ip):
#     arp_table = get_arp_table()

#     for entry in arp_table:
#         if entry['IP address'] == ip:
#             return entry['HW address']
#     return None

settings_state = {
    "mode": "normal",  # normal / saver
    "sleep_time": 5,  # in seconds
    "send_to_server_interval": 1/6,  # in minutes
    "ds_send_to_server_interval": 10,  # in minutes -> for {mode: saver}
}


def connectCursor():
    temp_db = mysql.connector.connect(
        host="www.rimell.cc",
        user="tempdb",
        passwd="tempdb123",
        database="temperature_db",
        # auth_plugin="mysql_native_password",
    )
    return (temp_db.cursor(), temp_db)


def get_recent_temps_sql(cursor):
    cursor.execute(f"SELECT * FROM temperatures ORDER BY timestamp DESC LIMIT 1000")
    return list(cursor.fetchall())


@api.route("/get_latest_temps", methods=["GET"])
def get_temps():
    try:
        cursor, temp_db = connectCursor()

        temperatures = get_recent_temps_sql(cursor)

        devices_temp_list = {}
        found_dev_temps = []
        for temp in temperatures:
            if temp[2] not in found_dev_temps:
                devices_temp_list[temp[2]] = temp  # temp[2] is "device_id"
                found_dev_temps.append(temp[2])

        # cursor.close()
        return devices_temp_list
    except Exception as err:
        print(err)
        return abort(503)


@api.route("/get_time", methods=["GET"])
def get_time():
    dt = datetime.now()
    date = str(dt) + "~" + str(dt.weekday())
    return date


@api.route("/get_settings", endpoint="func1", methods=["GET"])
def get_mode():
    return settings_state


@api.route("/set_mode", endpoint="func2", methods=["POST"])
def get_mode():
    global settings_state
    payload = json.loads(request.data)
    settings_state["mode"] = payload.mode


@api.route("/post_temp", methods=["GET"])
def post_temp():

    cursor, temp_db = connectCursor()

    def getDeviceID(client_mac):
        sql = "SELECT * FROM temperature_db.devices WHERE mac = %s"
        data = (str(client_mac),)
        cursor.execute(sql, data)
        sql_res = cursor.fetchall() 
        
        if sql_res:
            # if device id exists in the db
            return sql_res[0][0] # [0][0] because the sql fetches the row
        else:
            # if the device hasn't been added to the db yet
            addNewDevice(client_mac) # add device to db
            return getDeviceID(client_mac) # then return its ID

    def addTempToDB(temp, ts, d_id):
        sql = f"INSERT INTO temperature_db.temperatures (temperature, timestamp, device_id) VALUES (%s, %s, %s)"
        data = (temp, ts, d_id)
        cursor.execute(sql, data)

    def addBatteryPercToDB(perc, cstat, ts, d_id):
        sql = f"INSERT INTO temperature_db.battery_usage (battery_percentage, charging_status, timestamp, device_id) VALUES (%s, %s, %s, %s)"
        data = (perc, cstat, ts, d_id)
        cursor.execute(sql, data)

    def addNewDevice(client_mac):
        sql = f"INSERT INTO temperature_db.devices (mac) VALUES (%s);"
        data = (str(client_mac),)
        cursor.execute(sql, data)

    payload = json.loads(request.data)
    client_mac = payload[0]["mac"]
    device_id = getDeviceID(client_mac)

    for i in range(len(payload)):
        client_ip = request.remote_addr
        ts = payload[i]["ts"]
        ts = datetime.fromtimestamp(ts)
        temp = payload[i]["temperature"]

        perc = payload[i]["battery_percentage"]
        cstat = payload[i]["charging_status"]

        # check if the device exists in the device db
        addTempToDB(temp, ts, device_id)
        addBatteryPercToDB(perc, cstat, ts, device_id)
    temp_db.commit()  # commit after inserts so that only 1 commit is made
    cursor.close()

    return " "


# error handling


@api.errorhandler(503)
def overload(error):
    return error, 503


@api.errorhandler(HTTPException)
def handle_exception(e):
    """Return JSON instead of HTML for HTTP errors."""
    # start with the correct headers and status code from the error
    response = e.get_response()
    # replace the body with JSON
    response.data = json.dumps(
        {
            "code": e.code,
            "name": e.name,
            "description": e.description,
        }
    )
    response.content_type = "application/json"
    return response


if __name__ == "__main__":
    api.run(host="0.0.0.0", port=3003)
