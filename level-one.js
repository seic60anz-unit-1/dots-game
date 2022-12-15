/*
 * DOTS: Level One
 *
 */

// Level 1
// Open level-one.html in your browser.
// Write your code in level-one.js.
// Add a single click event listener on the .js-ball element.
// When the user clicks on the ball, it should increment their score by 10 points.
// When the user reaches 100 points, show the .level-winner overlay.


const ball = document.querySelector('.js-ball')
const body = document.querySelector('body')
// const winner = document.querySelector('.level-winner')
let pointAdd = parseInt(document.querySelector('.js-score').innerText)

ball.addEventListener('click', function(){
    pointAdd +=10
    document.querySelector('.js-score').innerText = ('0000'+ pointAdd).slice(-4)
    if(pointAdd === 100){
        body.className = "game-over"
    }
})

