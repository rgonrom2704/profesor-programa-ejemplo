input.onButtonPressed(Button.A, function () {
    basic.showNumber(contador)
})
let contador = 0
basic.showNumber(0)
basic.pause(100)
basic.showNumber(0)
basic.pause(100)
basic.showNumber(0)
basic.pause(100)
contador = 0
basic.forever(function () {
    basic.pause(100)
    contador += 1
})
