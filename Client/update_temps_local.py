import gc
import machine
# import micropython
import machine
import utime
import network
import urequests as requests
import json
import ubinascii


sensor_temp = machine.ADC(4)
conversion_factor = 3.3 / 65535
 
while True:
    reading = sensor_temp.read_u16() * conversion_factor 
    temperature = round(27 - (reading - 0.706)/0.001721, 2)
    print(temperature)
    mac = ubinascii.hexlify(network.WLAN().config('mac'),':').decode()
    try:
        payload = {
            'temperature': str(temperature), 'mac': str(mac)
            }
        r = requests.post('http://192.168.1.90:3003/post_temp', data = json.dumps(payload))
        # r = requests.post('https://tmdash.rimell.cc/api/post_temp', data = str(temperature))
        
        # print('free:', str(gc.mem_free()))
        # print('info:', str(gc.mem_alloc()))
        # print('info:', str(micropython.mem_info()))
        try:
            gc.collect()
        except Exception as e:
            print("memory couldn't be collected")
    except Exception as e:
        print(e)
    utime.sleep(5)
    

