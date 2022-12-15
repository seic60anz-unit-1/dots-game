/*
 * DOTS: Level One
 *
 */
const body = document.querySelector('body');

const jsball = document.querySelector('.js-ball');
const score = document.querySelector('.js-score');
const winner = document.querySelector('.level-winner');
const textWin = document.querySelector('.--xl-large')
const linkWin = document.querySelector('.level-winner > p')
const lv2 = document.querySelector('.level-winner > p > a')



jsball.addEventListener('click', function() {
    let num = 0;
    num = parseInt(score.textContent) + 50;
    score.textContent = '0000'.substring(String(num).length) + num;
    console.log(parseInt(score.textContent));

    if (parseInt(score.textContent) >= 100) {
        body.className = 'game-over'
        // winner.style.opacity = '1';
        // winner.style.backgroundColor = 'white';
        // textWin.style.color = 'black';
        // linkWin.style.color = 'black';
        // lv2.style.color = 'blue';
    }
})















