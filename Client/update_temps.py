import gc
import json
import ubinascii
import micropython
from datetime import datetime

print("code execution started")

def setPad(gpio, value):
    mem32[0x4001C000 | (4 + (4 * gpio))] = value


def getPad(gpio):
    return mem32[0x4001C000 | (4 + (4 * gpio))]


def readVsys():
    oldpad = getPad(29)
    setPad(29, 128)  # no pulls, no output, no input
    adc_Vsys = ADC(3)
    Vsys = (
        adc_Vsys.read_u16() * CONVERSION_FACTOR * 3
    )  # convert the raw ADC read into a voltage
    setPad(29, oldpad)
    return Vsys

def printMemoryUsage():
    print("free:", str(gc.mem_free()))
    print("info:", str(gc.mem_alloc()))
    # print("info:", str(micropython.mem_info()))

def getBatteryPercentage():
    voltage = readVsys()
    # convert the voltage into a percentage
    percentage = round(100 * ((voltage - EMPTY_BATTERY) / (FULL_BATTERY - EMPTY_BATTERY)),1)
    if percentage > 100:
        percentage = 100.0
    if percentage < 0:
        percentage = 0.0
    return percentage

def getChargingStatus():
    if CHARGING.value() == 1:
        charging_status = 1
    else:
        charging_status = 0
    return charging_status

def getTemp():
    reading = TEMP_SENSOR.read_u16() * CONVERSION_FACTOR
    temperature = round(27 - (reading - 0.706) / 0.001721, 1)
    return temperature

def collectData():
    dt = datetime.now()
    ts = datetime.timestamp(dt)
    
    data_unit = {
            "temperature": str(getTemp()),
            "mac": str(MAC),
            "battery_percentage": str(getBatteryPercentage()),
            "charging_status": getChargingStatus(),
            "ts": ts
        }
    cached_data.append(data_unit)
def sendData():
    connectToWifi()
    
    # r = requests.post('http://192.168.1.90:3003/post_temp', data = json.dumps(payload))
    r = requests.post(
        "https://tmdash.rimell.cc/api/post_temp", data=json.dumps(payload)
    )
    r.close()
    disconnectFromWifi()

MAC = ubinascii.hexlify(network.WLAN().config("mac"), ":").decode()
TEMP_SENSOR = ADC(4)
CONVERSION_FACTOR = 3.3 / 65535

CHARGING = Pin(24, Pin.IN)  # reading GP24 tells us whether or not USB power is connected

# the values could vary by battery size/manufacturer so you might need to adjust them
FULL_BATTERY = 4.2
EMPTY_BATTERY = 2.8

cached_data = []

while True:
    try:
        collectData()
    except Exception as e:
        print(e)
    gc.collect()

    utime.sleep(5)
