import urequests as requests
import network
import utime
from machine import ADC, Pin, mem32


def connectToWiFi():
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)

def getCode():
    url = "https://rimell.cc/bill/update_temps.py"
    r = requests.get(url)
    code = r.content
    r.close()
    return code

def lightOn():
    led = Pin("LED", Pin.OUT)
    led.on()
    
connectToWiFi()
print("connected to WiFi")
utime.sleep(2)

print("fetching...")

try:
    print("fetched code from url...")
    
    # turn on led to indicate finished connection
    lightOn()
    
    exec(getCode())
except Exception as err:
    print("failed to get code...")
    print(err)
