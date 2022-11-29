import urequests as requests
import network
import utime
from machine import ADC, Pin, mem32

wlan = network.WLAN(network.STA_IF)
def connectToWiFi():
    print('connecting to wifi')
    wlan.active(True)
    wlan.connect("ssid", "pswd")
    utime.sleep(5)
    while not wlan.isconnected():
        print('no connection')
        utime.sleep(2)
    print("connected to WiFi")
    
def disconnectFromWiFi():
    wlan.active(False)
    print("disconnected from WiFi")
    

def getCode():
    url = "https://raw.githubusercontent.com/brimell/temp-monitor-dash/master/Client/update_temps.py"
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

    # turn on led to indicate finished connection
    flashLED()
    print("fetching...")
    code = getCode()
    disconnectFromWiFi()
    exec(code)
except Exception as err:
    print("!!! failed to get code or run code !!!")
    print(err)

