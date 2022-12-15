/*
 * DOTS: Level One
 *
 */

const ball = document.querySelector('.js-ball')
const score = document.querySelector('.js-score')
let counter = parseInt(score.textContent)
const winner = document.querySelector('.level-winner')

const scorePlus = function () {
    counter += 10
    score.innerHTML = counter
    if (score.textContent === '100'){
        winner.style.opacity = 1
    }
}

ball.addEventListener('click', scorePlus)
