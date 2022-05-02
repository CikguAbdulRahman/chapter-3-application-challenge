input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
})
for (let index = 0; index < 5; index++) {
    soundExpression.hello.play()
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
}
basic.clearScreen()
