import gc
import json
import ubinascii

temp_sensor = ADC(4)
conversion_factor = 3.3 / 65535
 
def setPad(gpio, value):
    mem32[0x4001c000 | (4+ (4 * gpio))] = value
    
def getPad(gpio):
    return mem32[0x4001c000 | (4+ (4 * gpio))]


def readVsys():
    oldpad = getPad(29)
    setPad(29,128)  #no pulls, no output, no input
    adc_Vsys = ADC(3)
    Vsys = adc_Vsys.read_u16() * 3.0 * conversion_factor # convert the raw ADC read into a voltage
    setPad(29,oldpad)
    return Vsys
 
voltage = readVsys()                # reads the system input voltage
charging = Pin(24, Pin.IN)          # reading GP24 tells us whether or not USB power is connected

full_battery = 4.2                  # these are our reference voltages for a full/empty battery, in volts
empty_battery = 2.8                 # the values could vary by battery size/manufacturer so you might need to adjust them

while True:
    gc.collect()
    reading = temp_sensor.read_u16() * conversion_factor 
    temperature = round(27 - (reading - 0.706)/0.001721, 2)
    print(temperature)
    mac = ubinascii.hexlify(network.WLAN().config('mac'),':').decode()
    
    # convert the voltage into a percentage
    voltage = readVsys()

    percentage = 100 * ((voltage - empty_battery) / (full_battery - empty_battery))
    if percentage > 100:
        percentage = 100.00
        
    try:
        payload = {
            'temperature': str(temperature), 'mac': str(mac), 'battery_percentage': str(percentage)
            }
        # r = requests.post('http://192.168.1.90:3003/post_temp', data = json.dumps(payload))
        r = requests.post('https://tmdash.rimell.cc/api/post_temp', data = json.dumps(payload))
        
        # print('free:', str(gc.mem_free()))
        # print('info:', str(gc.mem_alloc()))
        # print('info:', str(micropython.mem_info()))
        try:
            gc.collect()
        except Exception:
            print("memory couldn't be collected")
    except Exception as e:
        print(e)
    utime.sleep(5)