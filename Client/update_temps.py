import gc
from machine import ADC, Pin
# import micropython
import utime
import network
import urequests as requests
import json
import ubinascii


temp_sensor = ADC(4)
conversion_factor = 3.3 / 65535
 
vsys = ADC(29)                      # reads the system input voltage
charging = Pin(24, Pin.IN)          # reading GP24 tells us whether or not USB power is connected

# full_battery = 4.2                  # these are our reference voltages for a full/empty battery, in volts
# empty_battery = 2.8                 # the values could vary by battery size/manufacturer so you might need to adjust them

while True:
    reading = temp_sensor.read_u16() * conversion_factor 
    temperature = round(27 - (reading - 0.706)/0.001721, 2)
    print(temperature)
    mac = ubinascii.hexlify(network.WLAN().config('mac'),':').decode()
    
    # convert the raw ADC read into a voltage, and then a percentage
    # voltage = vsys.read_u16() * conversion_factor
    # percentage = 100 * ((voltage - empty_battery) / (full_battery - empty_battery))
    # if percentage > 100:
    #     percentage = 100.00
        
    try:
        payload = {
            'temperature': str(temperature), 'mac': str(mac)
            }
        r = requests.post('http://192.168.1.90:3003/post_temp', data = json.dumps(payload))
        # r = requests.post('https://tmdash.rimell.cc/api/post_temp', data = json.dumps(payload))
        
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
    

