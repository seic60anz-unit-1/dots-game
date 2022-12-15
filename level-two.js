/*
 * DOTS: Level Two
 *
 */

// get the balls
const balls = document.querySelectorAll('.js-ball')
console.log(balls)

// get the level
const level = document.querySelector('.js-score')
let count = 0

for (let ball of balls) {
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
}