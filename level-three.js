/*
 * DOTS: Level Three
 *
 */
// ### Level 3
// - Open [level-three.html](level-three.html) in your browser.
// - Write your code in [`level-three.js`](level-three.js).
// - Level 3 also has 3 moving balls but of different sizes! Each ball is worth a different number of points. The number of points the user should get for each ball is saved inside of a `data-increment` attribute on the ball HTML elements. You can access the data attribute of an element from the event object by looking at the event target's `dataset` property. Read the [MDN docs on dataset here](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset).
// - When the user clicks on a ball, increment their score based on how many points that ball is worth until they reach 100.
// - When the user reaches 100 points, show the `.level-winner` overlay.

// const red = document.querySelector(`.red`)
// const yellow = document.querySelector(`.yellow`)
// const white = document.querySelector(`.white`)
// const blue = document.querySelector(`.blue`)

// const redColor = red.dataset.color; 
// const yellowColor = yellow.dataset.color;
// const whiteColor = white.dataset.color; 
// const blueColor = blue.dataset.color; 

// // RED
// const redClick = function () {
//     document.body.className = redColor;
//     // document.body.style.backgroundColor = "red";
// }

// red.addEventListener(`click`, redClick)

let score = document.querySelector(`.js-score`)
let points = parseInt(score.textContent)

const smallBall = document.querySelectorAll(`.js-ball`)
// const smallScore = smallBall.dataset.increment;

// const ballClick = function () {
//     points += smallScore
//     score.textContent = points;
//     if ( points >= 100 ) {
//         document.querySelector(`.level-winner`).style.opacity = 1
//     }
// }

// smallBall.addEventListener(`click`, ballClick)

for ( ball of smallBall ) {
    const ballClick = function (event) {
        points += parseInt(event.target.dataset.increment)
        score.textContent = points;
        if ( points >= 100 ) {
            document.querySelector(`.level-winner`).style.opacity = 1
        }
    }
    smallBall.addEventListener(`click`, ballClick)
}


// for (let ball of balls.children) {
//     ball.addEventListener("click", function(event) {
//         event.target.dataset.increment
//         console.log(event.target.dataset.increment);
//         score = score + parseInt(event.target.dataset.increment);
//         document.querySelector(".js-score").textContent = score;
//         if (score >= 100) {
//             document.querySelector(".level-winner").style.opacity = 100;
//             }
//     })
// }