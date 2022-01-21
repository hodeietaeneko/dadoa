input.onButtonPressed(Button.A, function () {
    dadoa = randint(1, 6)
    basic.clearScreen()
    radio.sendString("" + (dadoa))
})
input.onGesture(Gesture.Shake, function () {
	
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    zenbakia = randint(1, 6)
    basic.clearScreen()
    radio.sendString("" + (zenbakia))
})
let zenbakia = 0
let dadoa = 0
radio.setGroup(23)
basic.forever(function () {
	
})
