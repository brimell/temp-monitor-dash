#include <stdio.h>
#include "pico/stdlib.h"
#include "pico/sleep.h"

#include "hardware/rtc.h"

static bool awake;

static void sleep_callback(void)
{
    awake = true;
}

static void rtc_sleep(void)
{
    datetime_t t = {
        .year = 2020,
        .month = 06,
        .day = 05,
        .dotw = 5,
        .hour = 15,
        .minutes = 45,
        .sec = 0,
    } datetime_t t = {
        .year = 2020,
        .month = 06,
        .day = 05,
        .dotw = 5,
        .hour = 15,
        .minutes = 45,
        .sec = 10,
    }

    rtc_init();
    rtc_set_datetime(&t)

        sleep_goto_sleep_until(&t_alarm, &sleep_callback)
}

int main()
{
    awake = false;

    rtc_sleep();

    while (!awake)
    {
        tight_loop_contents();
    }
    while (awake)
    {
        tight_loop_contents();
    }

    return 0;
}