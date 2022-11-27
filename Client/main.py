import urequests as requests
import network
import utime
from machine import ADC, Pin, mem32

def connectToWiFi():
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    wlan.connect("daytime", "ryderpawpatrol")
    
connectToWiFi()
print('connected to WiFi')
utime.sleep(1)

print('fetching...')

url = 'https://raw.githubusercontent.com/brimell/temp-monitor-dash/master/Client/update_temps.py'
r = requests.get(url)

print('fetched code from github...')

# turn on led to indicate finished connection
led = Pin('LED', Pin.OUT)
led.on()

exec(r.content)