// Show end calculation (final result of y=mx+b)
input.onPinPressed(TouchPin.P0, function () {
    basic.showString("y=" + "" + Slope + "x" + "" + "+" + yint,100)
})
input.onButtonPressed(Button.A, function () {
    if (Main == 0 && MainSecondary == 0) {
        // x1
        x1 += -1
        basic.showString("x1:" + x1)
    } else if (Main == 0 && MainSecondary == 1) {
        // x2
        x2 += -1
        basic.showString("x2:" + x2)
    } else if (Main == 1 && MainSecondary == 0) {
        // y1
        y1 += -1
        basic.showString("y1:" + y1)
    } else if (Main == 1 && MainSecondary == 1) {
        // y2
        y2 += -1
        basic.showString("y2:" + y2)
    }
})
// alternate variation #1
input.onPinPressed(TouchPin.P2, function () {
    if (MainSecondary == 0) {
        MainSecondary = 1
    } else {
        MainSecondary = 0
    }
})
// "Calculate"
// press once: calculate slope
// press twice: calculate y-int
input.onButtonPressed(Button.AB, function () {
    // Calc slope
    Slope = (y2 - y1) / (x2 - x1)
    basic.showString("m:" + Slope)
    yint = y1 - Slope * x1
    basic.showString("b:" + yint)
})
input.onButtonPressed(Button.B, function () {
    if (Main == 0 && MainSecondary == 0) {
        // x1
        x1 += 1
        basic.showString("x1:" + x1)
    } else if (Main == 0 && MainSecondary == 1) {
        // x2
        x2 += 1
        basic.showString("x2:" + x2)
    } else if (Main == 1 && MainSecondary == 0) {
        // y1
        y1 += 1
        basic.showString("y1:" + y1)
    } else if (Main == 1 && MainSecondary == 1) {
        // y2
        y2 += 1
        basic.showString("y2:" + y2)
    }
})
// alternate variation #1
input.onPinPressed(TouchPin.P1, function () {
    if (Main == 0) {
        Main = 1
    } else {
        Main = 0
    }
})
function start () {
    Main = 0
    MainSecondary = 0
    x1 = 0
    y1 = 0
    x2 = 0
    y2 = 0
    Slope = 0
    yint = 0
}
let y2 = 0
let y1 = 0
let x2 = 0
let x1 = 0
let MainSecondary = 0
let Main = 0
let Slope = 0
let yint = 0
start()
basic.showString("l")
basic.forever(function () {
	
})
