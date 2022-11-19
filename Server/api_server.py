from flask import Flask, jsonify, request, abort, json
from flask_cors import CORS

from werkzeug.exceptions import HTTPException

import mysql.connector
from datetime import datetime
from time import sleep

api = Flask(__name__)
cors = CORS(api, resources={r"*": {"origins": "*"}})


# data structure

# temperatures table
# temperature, timestamp, device_id

# devices table
# device_id (auto incremented), alias, x, y, tags (upstairs, downstairs), ip


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

    sql = f"INSERT INTO temperature_db.temperatures (temperature, timestamp, device_id) VALUES ({payload['temperature']}, '{dt}', {payload['device_id']})"
    cursor.execute(sql)
    temp_db.commit()

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
