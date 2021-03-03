let Strikes = 0
let Balls = 0
input.onButtonPressed(Button.A, function () {
    Strikes += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.pause(1000)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showNumber(Strikes)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showNumber(Balls)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Balls += 1
})
input.onGesture(Gesture.Shake, function () {
    Strikes = 0
    Balls = 0
})
basic.forever(function () {
    if (Strikes == 3) {
        basic.showString("OUT")
        Strikes = 0
        Balls = 0
    }
    if (Balls == 4) {
        basic.showString("WALK")
        Strikes = 0
        Balls = 0
    }
})
