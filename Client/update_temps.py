print("code execution started")

import gc
import json
import ubinascii
import micropython
from time import time
import ntptime

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

def setTime():
    # r = requests.get('https://tmdash.rimell.cc/api/get_time')
    ntptime.settime()

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
    charging = Pin('WL_GPIO2', Pin.IN)  # reading GP24 tells us whether or not USB power is connected
    if charging.value() == 1:
        charging_status = 1
    else:
        charging_status = 0
    return charging_status

def getTemp():
    reading = TEMP_SENSOR.read_u16() * CONVERSION_FACTOR
    temperature = round(27 - (reading - 0.706) / 0.001721, 1)
    return temperature

def collectData():
    global cached_data
    ts = time()
    
    data_unit = {
            "temperature": str(getTemp()),
            "mac": str(MAC),
            "battery_percentage": str(getBatteryPercentage()),
            "charging_status": getChargingStatus(),
            "ts": ts
        }
    cached_data.append(data_unit)
    print('data collected - temp:', data_unit['temperature'])
def sendData():
    global cached_data
    connectToWiFi()

    # r = requests.post('http://192.168.1.90:3003/post_temp', data = json.dumps(cached_data))
    r = requests.post(
        "https://tmdash.rimell.cc/api/post_temp", data=json.dumps(cached_data)
    )
    print('sent data', cached_data)
    r.close()
    disconnectFromWiFi()
    cached_data = []

MAC = ubinascii.hexlify(network.WLAN().config("mac"), ":").decode()
TEMP_SENSOR = ADC(4)
CONVERSION_FACTOR = 3.3 / 65535

# the values could vary by battery size/manufacturer so you might need to adjust them
FULL_BATTERY = 4.2
EMPTY_BATTERY = 2.8

SLEEP_TIME = 5 # in seconds
SEND_TO_SERVER_INTERVAL = 1 # in minutes

cached_data = []

setTime()
disconnectFromWiFi()

while True:
    if len(cached_data) >= SEND_TO_SERVER_INTERVAL * (60 / SLEEP_TIME): # minutes * 60 / sleep_time = frequency
        sendData()
    
    try:
        collectData()
    except Exception as e:
        print(e)
        
    gc.collect()
    # utime.sleep(SLEEP_TIME)
    machine.lightsleep(SLEEP_TIME * 1000)
