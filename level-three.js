/*
 * DOTS: Level Three
 *
 */
// Open level-three.html in your browser.
// Write your code in level-three.js.
// Level 3 also has 3 moving balls but of different sizes! Each ball is worth a different number of points. The number of points the user should get for each ball is saved inside of a data-increment attribute on the ball HTML elements. You can access the data attribute of an element from the event object by looking at the event target's dataset property. Read the MDN docs on dataset here.
// When the user clicks on a ball, increment their score based on how many points that ball is worth until they reach 100.
// When the user reaches 100 points, show the .level-winner overlay.

const balls = document.querySelectorAll('.js-ball')
const body = document.querySelector('body')
// const winner = document.querySelector('.level-winner')
let pointAdd = 0

for(let ball of balls){
    ball.addEventListener('click', function(){
        pointAdd += parseInt(ball.dataset.increment)
        console.log(ball.dataset.increment)
        document.querySelector('.js-score').innerText = ('0000'+ pointAdd).slice(-4)
        console.log(pointAdd)
        if(pointAdd >= 100){
            body.className = "game-over"
        }
    })
}