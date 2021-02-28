basic.forever(function () {
    if (0 > input.acceleration(Dimension.X)) {
        basic.showString("r")
    }
    if (0 < input.acceleration(Dimension.X)) {
        basic.showString("l")
    }
})
basic.forever(function () {
    if (0 > input.acceleration(Dimension.Y)) {
        basic.showString("n")
    }
    if (0 < input.acceleration(Dimension.Y)) {
        basic.showString("b")
    }
})
basic.forever(function () {
    if (0 > input.acceleration(Dimension.Z)) {
        basic.showString("u")
    }
    if (0 < input.acceleration(Dimension.Z)) {
        basic.showString("d")
    }
})
