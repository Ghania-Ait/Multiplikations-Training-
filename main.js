const numb1 = Math.ceil(Math.random() * 10);
const numb2 = Math.ceil(Math.random() * 10);
const input = document.getElementById('input');
const questionEl = document.getElementById('question');
const form = document.getElementById('form');
const scoreEl = document.getElementById('score');
// const resetEl = document.getElementById('reset');

let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
    score = 0;
}
scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `Was ist ${numb1} x ${numb2} ?`;
const correctAnswer = numb1 * numb2;

form.addEventListener('submit', () => {
    const userAns = +input.value;
    if (userAns === correctAnswer) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage() {
    localStorage.setItem('score', JSON.stringify(score));
}

// resetEl.addEventListener('click', () => {
//     window.reload();
//     const reset = localStorage.setItem('score', JSON.stringify(0));
//     scoreEl.innerText = `score: ${reset.JSON.parse(reset)}`;
// });
