from flask import Flask, json, request

api = Flask(__name__)

temperatures = []


@api.route("/get_temps", methods=["GET"])
def get_temps():
    return json.dumps(temperatures)


@api.route("/post_temp", methods=["POST"])
def post_temp():
    temperatures.append(float(request.data))
    print(temperatures)
    return " "


if __name__ == "__main__":
    api.run(host="0.0.0.0", port=5000)
