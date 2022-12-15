/*
 * DOTS: Level One
 *
 */

// get the level
const level = document.querySelector('.js-score')
let count = 0
// get the ball
const ball = document.querySelector('.js-ball')

ball.addEventListener('click', function() {
    count += 10

    if (count === 100) {
        const levelWinner = document.querySelector('.level-winner')
        levelWinner.style.opacity = "100"
    }

    let countStr = count.toString()
    countStr = countStr.padStart(4, "0")

    level.textContent = countStr
})
