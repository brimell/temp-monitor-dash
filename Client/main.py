import urequests as requests
import network
import utime

wlan = network.WLAN(network.STA_IF)
wlan.active(True)
wlan.connect("daytime", "ryderpawpatrol")
utime.sleep(2)

url = 'https://raw.githubusercontent.com/brimell/temp-monitor-dash/master/Client/update_temps.py'
r = requests.get(url)
exec(r.content)
