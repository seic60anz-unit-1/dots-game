# DOTS: The Game

Dots is an interactive game with up to 3 levels. In each level, the user has to click a moving ball until they reach a certain score, at which point they can move on to the next level.

---

### Getting Started

1. Fork this repo and `git clone` it down to your computer
1. When you're finished or when time is up, push your work to your remote repo, and file a Pull Request

---

### Tips & Hints
- You can keep track of the score as a number using a variable (set to `0` at the start of the game) and then overwrite the text of the `.score` element whenever the score changes.
- When the score is greater than or equal to 100, the player has beat the level! All you need to do is add a `game-over` class to the `body` element.
- When you access some content from the DOM (`textContent`, `innerHTML`, `data-*`, etc.), the values will be returned to you as strings. If you need to do math with the value, you can first convert the string value to a whole number using `parseInt()`.
    ``` js
    const numStr = '10'
    console.log(numStr + 10) // -> '1010'

    // Convert numStr into a number type first
    console.log(parseInt(numStr) + 10) // -> 20
    ```

### Level 1
- Open [level-one.html](level-one.html) in your browser.
- Write your code in [`level-one.js`](level-one.js).
- Add a single click event listener on the `.js-ball` element.
- When the user clicks on the ball, it should increment their score by 10 points.
- When the user reaches 100 points, show the `.level-winner` overlay.

### Level 2
- Open [level-two.html](level-two.html) in your browser.
- Write your code in [`level-two.js`](level-two.js).
- Level 2 has 3 moving balls that the user can click on to increment their score.
- Implement a click event handler for each ball to listen for when a user clicks on one of the them and increment the user's score by 10 until it reaches 100.
- When the user reaches 100 points, show the `.level-winner` overlay.

### Level 3
- Open [level-three.html](level-three.html) in your browser.
- Write your code in [`level-three.js`](level-three.js).
- Level 3 also has 3 moving balls but of different sizes! Each ball is worth a different number of points. The number of points the user should get for each ball is saved inside of a `data-increment` attribute on the ball HTML elements. You can access the data attribute of an element from the event object by looking at the event target's `dataset` property. Read the [MDN docs on dataset here](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset).
- When the user clicks on a ball, increment their score based on how many points that ball is worth until they reach 100.
- When the user reaches 100 points, show the `.level-winner` overlay.
