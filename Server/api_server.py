from flask import Flask, json, request
import mysql.connector

api = Flask(__name__)

temperatures = []

temp_db = mysql.connector.connect(
  host="www.rimell.cc",
  user="tempdb",
  password="tempdb123",
  database="temperature_db"
)
mycursor = temp_db.cursor()

# data structure

# temperatures table
# temperature, timestamp, device_id

# devices table
# device_id (auto incremented), alias, x, y, tags (upstairs, downstairs), ip

@api.route("/get_temps", methods=["GET"])
def get_temps():
    return json.dumps(temperatures)


@api.route("/post_temp", methods=["POST"])
def post_temp():
    temperatures.append(float(request.data))
    print(float(request.data))
    return " "


if __name__ == "__main__":
    api.run(host="0.0.0.0", port=3003)
