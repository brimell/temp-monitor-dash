import urequests as requests
import network
import utime
from machine import ADC, Pin, mem32


def connectToWiFi():
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    wlan.connect("ssid", "pswd")
    print("connected to WiFi")
    utime.sleep(2)
    
def disconnectFromWiFi():
    wlan.active(False)
    

def getCode():
    url = "https://raw.githubusercontent.com/brimell/temp-monitor-dash/master/Client/update_temps.py"
    r = requests.get(url)
    code = r.content
    r.close()
    return code

def flashLED():
    led = Pin("LED", Pin.OUT)
    led.on()
    utime.sleep(1)
    led.off()
    
connectToWiFi()

print("fetching...")

try:
    print("fetched code from url...")
    
    # turn on led to indicate finished connection
    flashLED()
    
    code = getCode()
    disconnectFromWiFi()
    exec(code)
except Exception as err:
    print("failed to get code...")
    print(err)
