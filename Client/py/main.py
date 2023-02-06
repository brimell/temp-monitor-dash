import urequests as requests
import network
import utime
from machine import ADC, Pin, mem32, RTC

wlan = network.WLAN(network.STA_IF)
SSID="ssid"
PWD="pwd"
def connectToWiFi():
    print('connecting to wifi')
    wlan.active(True)
    wlan.connect(SSID, PWD)
    count = 0
    while not wlan.isconnected():
        print('no connection')
        utime.sleep(2)
        count += 1
        if count >= 5:
            wlan.active(False)
            wlan.active(True)
            wlan.connect(SSID, PWD)
            count = 0
    print("connected to WiFi")
    
def disconnectFromWiFi():
    wlan.disconnect()
    while wlan.isconnected():
        print('disconnecting...')
        utime.sleep(2)
    print("disconnected from WiFi")
    

def getCode():
    print("fetching...")
    
    # url = "https://raw.githubusercontent.com/brimell/temp-monitor-dash/master/Client/py/update_temps.py"
    url = "https://rimell.cc/bill/update_temps.py"
    
    r = requests.get(url)
    code = r.content
    r.close()
    print("fetched code from url...")
    return code

def flashLED():
    led = Pin("LED", Pin.OUT)
    led.on()
    utime.sleep(1)
    led.off()

try:
    connectToWiFi()

    code = getCode()
    exec(code)
except Exception as err:
    print("!!! failed to get code or run code !!!")
    print(err)
    

