const button = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer-text"]');
const bookmark = document.querySelector('[data-js="question-bookmark"]');

let isShown = false;

function handleButtonClick() {
  answer.classList.toggle("hidden");
  isShown = !isShown;

  button.innerText = isShown ? "Hide answer" : "Show answer";
}

button.addEventListener("click", handleButtonClick);

function handleBookmarkClick() {
  bookmark.classList.toggle("question__svg-active");
}

bookmark.addEventListener("click", handleBookmarkClick);
