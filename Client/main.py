import urequests as requests
import network
import utime
from machine import ADC, Pin, mem32


def connectToWiFi():
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    wlan.connect("daytime", "ryderpawpatrol")

def getCode():
    url = "https://rimell.cc/bill/update_temps.py"
    r = requests.get(url)
    return r

def lightOn():
    led = Pin("LED", Pin.OUT)
    led.on()
    
connectToWiFi()
print("connected to WiFi")
utime.sleep(2)

print("fetching...")

try:
    getCode()
    print("fetched code from url...")
    # turn on led to indicate finished connection
    lightOn()

    exec(getCode().content)
except Exception as err:
    print("failed to get code...")
    print(err)
