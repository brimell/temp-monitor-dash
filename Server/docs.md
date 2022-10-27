We first import machine & utime. The machine module provides the ADC() class to work with ADC pins.
If you print the value of the temperature value you are going to get an integer number between 0 and 65535. So, we have to convert this value either to the Celsius or Fahrenheit degree scales.

The temperature sensor works by delivering a voltage to the ADC4 pin that is proportional to the temperature. From the datasheet, a temperature of 27 degrees Celsius delivers a voltage of 0.706 V. With each additional degree the voltage reduces by 1.721 mV or 0.001721 V. The first step in converting the 16-bit temperature is to convert it back to volts, which is done based on the 3.3 V maximum voltage used by the Pico board.

With this conversion, the temperature value holds a value between 0 and 3.3. We again have to do the second conversion which brings the temperature to the Celsius scale.

`gc.collect()` clears the memory -> so the device doesn't run out of memory
there was originally the error `OSERROR: [Errno 12] ENOMEM` and this solved it