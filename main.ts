function next_fibonacci () {
    next_fib = fib1 + fib2
    // Calculate the next Fibonacci number
    ___tempvar2 = [fib2, next_fib]
    fib1 = ___tempvar2[0]
    fib2 = ___tempvar2[1]
    // Update for the next call
    return next_fib
}
input.onButtonPressed(Button.AB, function () {
    group = next_fibonacci()
    basic.showNumber(group)
    radio.setGroup(group)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "strength") {
        strength = Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -95, -42, 0, 9)
    }
    led.plotBarGraph(
    strength,
    9
    )
})
let strength = 0
let ___tempvar2: number[] = []
let fib1 = 0
let next_fib = 0
let fib2 = 0
let group = 0
group = 1
fib2 = 1
radio.setGroup(group)
basic.showNumber(group)
basic.forever(function () {
	
})
