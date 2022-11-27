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


@api.route("/post_temp", methods=["POST"])
def post_temp():

    cursor, temp_db = connectCursor()

    dt = datetime.now()
    ts = datetime.timestamp(dt)

    payload = json.loads(request.data)
    client_ip = request.remote_addr
    client_mac = payload["mac"]
    
    def getDeviceID():
        sql = f"SELECT * FROM temperature_db.devices WHERE mac = '{client_mac}'"
        cursor.execute(sql)
        return cursor.fetchall()[0][0]  # [0][0] because the sql fetches the row
    
    device_id = getDeviceID()

    def addTempToDB():
        sql = f"INSERT INTO temperature_db.temperatures (temperature, timestamp, device_id) VALUES ({payload['temperature']}, '{dt}', {device_id})"
        cursor.execute(sql)
        temp_db.commit()

    def addBatteryPercToDB():
        sql = f"INSERT INTO temperature_db.battery_usage (battery_percentage, timestamp, device_id) VALUES ({payload['battery_percentage']}, '{dt}', {device_id})"
        cursor.execute(sql)
        temp_db.commit()

    def addNewDevice():
        sql = f"INSERT INTO temperature_db.devices (mac) VALUES ('{client_mac}');"
        cursor.execute(sql)
        temp_db.commit()

    # check if the device exists in the device db
    if device_id:
        addTempToDB()
        # addBatteryPercToDB()
    else:
        # add new device if the device does not exist yet
        addNewDevice()
        addTempToDB()
        # addBatteryPercToDB()

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
