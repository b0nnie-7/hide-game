input.onPinPressed(TouchPin.P0, function () {
    ship.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P1, function () {
    ship.change(LedSpriteProperty.X, 1)
})
let alien: game.LedSprite = null
let ship: game.LedSprite = null
ship = game.createSprite(2, 3)
basic.forever(function () {
    alien = game.createSprite(randint(0, 4), 0)
    basic.pause(200)
    for (let index = 0; index < 4; index++) {
        alien.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
        if (alien.isTouching(ship)) {
            game.gameOver()
        }
    }
    if (alien.isTouchingEdge()) {
        alien.delete()
    }
})
