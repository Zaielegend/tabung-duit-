basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.logoIsPressed()) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.UntilDone)
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.showIcon(IconNames.Heart)
        basic.pause(2000)
        basic.clearScreen()
    }
})
