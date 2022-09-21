input.onGesture(Gesture.LogoUp, function () {
    basic.showNumber(num2)
    num2 += 1
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showNumber(num1)
    num1 += 1
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showNumber(num1)
    num1 += 1
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showNumber(num2)
    num2 += 1
})
let num2 = 0
let num1 = 0
basic.showIcon(IconNames.Happy)
num1 = randint(1, 100)
num2 = randint(1, 100)
