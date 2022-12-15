/*
 * DOTS: Level Three
 *
 */

const balls = document.querySelectorAll('.js-ball')
const score = document.querySelector('.js-score')
let counter = parseInt(score.textContent)
const winner = document.querySelector('.level-winner')

const scorePlus = function (event) {

    counter += parseInt(event.target.dataset.increment)
    score.innerHTML = counter
//     if (score.textContent === '100'){
//         winner.style.opacity = 1
// }
}
    for (let i=0; i<balls.length; i++){
        balls[i].addEventListener('click', scorePlus)
}
