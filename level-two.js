/*
 * DOTS: Level Two
 *
 */
// ### Level 2
// - Open [level-two.html](level-two.html) in your browser.
// - Write your code in [`level-two.js`](level-two.js).
// - Level 2 has 3 moving balls that the user can click on to increment their score.
// - Implement a click event handler for each ball to listen for when a user clicks on one of the them and increment the user's score by 10 until it reaches 100.
// - When the user reaches 100 points, show the `.level-winner` overlay.

let score = document.querySelector(`.js-score`)
let points = parseInt(score.textContent)

const balls = document.querySelectorAll(`.js-ball`)

for ( ball of balls) {
    const ballClick = function () {
        points += 10;
        score.textContent = points;
        if ( points >= 100 ) {
            document.querySelector(`.level-winner`).style.opacity = 1
        }
    }
    ball.addEventListener(`click`, ballClick)
}

// const ballClick = function () {
//     points += 10;
//     score.textContent = points;
//     if ( points >= 100 ) {
//         document.querySelector(`.level-winner`).style.opacity = 1
//     }
// }

