namespace SpriteKind {
    export const Cloud = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Cloud, function (sprite) {
    game.over(true, effects.confetti)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(1)
})
let raindrop: Sprite = null
let cloud = sprites.createProjectileFromSide(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 1 1 1 1 . . . . 
    . . . . . . 1 1 1 1 1 1 1 . . . 
    . . . . . 1 1 1 1 1 1 1 1 1 . . 
    . . . . 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . . . 1 1 1 1 1 1 1 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 10, 0)
game.onUpdateInterval(500, function () {
    raindrop = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 9 . . . . . . . . . . . . . 
        . . 9 . . . . . . . . . . . . . 
        . . 9 . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, cloud, 0, 50)
    raindrop.setFlag(SpriteFlag.Ghost, true)
    raindrop.y += 3
    raindrop.x += randint(1, 14)
})
