/*
 * DOTS: Level One
 *
 */

const jsball = document.querySelector('.js-ball');
const score = document.querySelector('.js-score');
const winner = document.querySelector('.level-winner');
const textWin = document.querySelector('.--xl-large')
const linkWin = document.querySelector('.level-winner > p')
const lv2 = document.querySelector('.level-winner > p > a')

console.log(lv3)

jsball.addEventListener('click', function() {
    let num = 0;
    num = parseInt(score.textContent) + 10;
    score.textContent = '0000'.substring(String(num).length) + num;
    console.log(parseInt(score.textContent));

    if (parseInt(score.textContent) >= 100) {
        winner.style.opacity = '1';
        winner.style.backgroundColor = 'white';
        textWin.style.color = 'black';
        linkWin.style.color = 'black';
        lv3.style.color = 'blue';
    }
})















