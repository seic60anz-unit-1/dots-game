/*
 * DOTS: Level Two
 *
 */

// Level 2
// Open level-two.html in your browser.
// Write your code in level-two.js.
// Level 2 has 3 moving balls that the user can click on to increment their score.
// Implement a click event handler for each ball to listen for when a user clicks on one of the them and increment the user's score by 10 until it reaches 100.
// When the user reaches 100 points, show the .level-winner overlay.

const balls = document.querySelectorAll('.js-ball')
const body = document.querySelector('body')
// const winner = document.querySelector('.level-winner')
let pointAdd = parseInt(document.querySelector('.js-score').innerText)

console.log(balls)

for(let ball of balls){
    console.log(ball)
    ball.addEventListener('click', function(){
        pointAdd +=10
        document.querySelector('.js-score').innerText = ('0000'+ pointAdd).slice(-4)
        if(pointAdd === 100){
            body.className = "game-over"
        }
    })

}