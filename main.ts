input.onButtonPressed(Button.A, function () {
    radio.sendString("hi")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    radio.sendString("message recived")
})
radio.setGroup(50)
basic.forever(function () {
	
})
