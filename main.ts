basic.forever(function () {
    for (let x = 0; x <= 4; x++) {
        led.plot(4 - x, 4)
        basic.pause(100)
    }
    for (let x = 0; x <= 4; x++) {
        led.plot(x + 0, 3)
        basic.pause(100)
    }
    for (let x = 0; x <= 4; x++) {
        led.plot(4 - x, 2)
        basic.pause(100)
    }
    for (let x = 0; x <= 4; x++) {
        led.plot(x + 0, 1)
        basic.pause(100)
    }
    for (let x = 0; x <= 4; x++) {
        led.plot(4 - x, 0)
        basic.pause(100)
    }
    basic.clearScreen()
})
