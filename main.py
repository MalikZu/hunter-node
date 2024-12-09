def next_fibonacci():
    global next_fib, ___tempvar2, fib1, fib2
    next_fib = fib1 + fib2
    # Calculate the next Fibonacci number
    ___tempvar2 = [fib2, next_fib]
    fib1 = ___tempvar2[0]
    fib2 = ___tempvar2[1]
    # Update for the next call
    return next_fib

def on_button_pressed_ab():
    global group
    group = next_fibonacci()
    basic.show_number(group)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    global strength
    if receivedString == "strength":
        strength = Math.map(strength, -95, -42, 0, 9)
        led.plot_bar_graph(strength, 9)
radio.on_received_string(on_received_string)

strength = 0
___tempvar2: List[number] = []
fib1 = 0
next_fib = 0
fib2 = 0
group = 1
radio.set_group(group)
fib2 = 1

def on_forever():
    pass
basic.forever(on_forever)
