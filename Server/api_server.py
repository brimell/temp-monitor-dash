from flask import Flask, json, request
import mysql.connector
from datetime import datetime

api = Flask(__name__)

temp_db = mysql.connector.connect(
    host="www.rimell.cc",
    user="tempdb",
    passwd="tempdb123",
    database="temperature_db",
    # auth_plugin="mysql_native_password",
)
mycursor = temp_db.cursor()

# data structure

# temperatures table
# temperature, timestamp, device_id

# devices table
# device_id (auto incremented), alias, x, y, tags (upstairs, downstairs), ip


@api.route("/get_temps", methods=["GET"])
def get_temps():
    return json.dumps()


@api.route("/post_temp", methods=["POST"])
def post_temp():
    dt = datetime.now()
    ts = datetime.timestamp(dt)

    print(float(request.data))
    sql = f"INSERT INTO temperature_db.temperatures (temperature, timestamp, device_id) VALUES ({float(request.data)}, '{dt}', 1)"
    # sql = f"INSERT INTO 'temperature_db'.'temperatures' (`temperature`, `timestamp`, `device_id`) VALUES ('{float(request.data)}', '', '{request.device_id}');"
    mycursor.execute(sql)
    temp_db.commit()

    return " "


if __name__ == "__main__":
    api.run(host="0.0.0.0", port=3003)
