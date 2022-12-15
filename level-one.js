// /*
//  * DOTS: Level One
//  *
//  */

// ### Tips & Hints
// - You can keep track of the score as a number using a variable (set to `0` at the start of the game) and then overwrite the text of the `.score` element whenever the score changes.
// - When the score is greater than or equal to 100, the player has beat the level! All you need to do is add a `game-over` class to the `body` element.
// - When you access some content from the DOM (`textContent`, `innerHTML`, `data-*`, etc.), the values will be returned to you as strings. If you need to do math with the value, you can first convert the string value to a whole number using `parseInt()`.
//     ``` js
//     const numStr = '10'
//     console.log(numStr + 10) // -> '1010'

//     // Convert numStr into a number type first
//     console.log(parseInt(numStr) + 10) // -> 20
//     ```

// ### Level 1
// - Open [level-one.html](level-one.html) in your browser.
// - Write your code in [`level-one.js`](level-one.js).
// - Add a single click event listener on the `.js-ball` element.
// - When the user clicks on the ball, it should increment their score by 10 points.
// - When the user reaches 100 points, show the `.level-winner` overlay.

let score = document.querySelector(`.js-score`)
let points = parseInt(score.textContent)

const ball = document.querySelector(`.js-ball`)

const ballClick = function () {
    points += 10;
    score.textContent = points;
    if ( points >= 100 ) {
        document.querySelector(`.level-winner`).style.opacity = 1
    }
}

ball.addEventListener(`click`, ballClick)

// VARIABLES
// const incrementButton = document.querySelector(`.increment`)
// const decrementButton = document.querySelector(`.decrement`)
// const count = document.querySelector(`.count`)
// let number = parseInt(count.textContent)

// // INCREMENT
// const btnClickPlus = function () {
//     number++
//     count.textContent = number;
// }

// incrementButton.addEventListener(`click`, btnClickPlus)
