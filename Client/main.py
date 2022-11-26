import urequests as requests
import network
import utime
from machine import Pin

wlan = network.WLAN(network.STA_IF)
wlan.active(True)
wlan.connect("daytime", "ryderpawpatrol")
utime.sleep(2)

# url = 'https://raw.githubusercontent.com/brimell/temp-monitor-dash/master/Client/update_temps_local.py'
url = 'https://raw.githubusercontent.com/brimell/temp-monitor-dash/master/Client/update_temps.py'
r = requests.get(url)

# turn on led to indicate finished connection
led = Pin('LED', Pin.OUT)
led.on()

exec(r.content)