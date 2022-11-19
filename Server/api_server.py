from flask import Flask, jsonify, request
from flask_cors import CORS
import json

import mysql.connector
from datetime import datetime

api = Flask(__name__)
cors = CORS(api, resources={r"*": {"origins": "*"}})

temp_db = mysql.connector.connect(
    host="www.rimell.cc",
    user="tempdb",
    passwd="tempdb123",
    database="temperature_db",
    # auth_plugin="mysql_native_password",
)

# data structure

# temperatures table
# temperature, timestamp, device_id

# devices table
# device_id (auto incremented), alias, x, y, tags (upstairs, downstairs), ip


@api.route("/get_latest_temps", methods=["GET"])
def get_temps():
    try:
        cursor = temp_db.cursor()
        cursor.execute(f"SELECT * FROM devices")
        num_devices = len(cursor.fetchall())

        cursor.execute(f"SELECT * FROM temperatures ORDER BY timestamp DESC LIMIT 1000")
        temperatures = list(cursor.fetchall())

        devices_temp_list = {}
        found_dev_temps = []
        for temp in temperatures:
            if temp[2] not in found_dev_temps:
                devices_temp_list[temp[2]] = temp  # temp[2] is "device_id"
                found_dev_temps.append(temp[2])

        cursor = temp_db.cursor().close()
        return devices_temp_list
    except Exception as err:
        print(err)
        cursor = temp_db.cursor().close()
        return " "


@api.route("/post_temp", methods=["POST"])
def post_temp():
    cursor = temp_db.cursor()

    dt = datetime.now()
    ts = datetime.timestamp(dt)
    
    payload = json.loads(request.data)

    sql = f"INSERT INTO temperature_db.temperatures (temperature, timestamp, device_id) VALUES ({payload['temperature']}, '{dt}', {payload['device_id']})"
    cursor.execute(sql)
    temp_db.commit()
    
    cursor = temp_db.cursor().close()

    return " "


if __name__ == "__main__":
    api.run(host="0.0.0.0", port=3003)
