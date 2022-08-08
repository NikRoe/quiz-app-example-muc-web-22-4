const button = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer-text"]');
const bookmark = document.querySelector('[data-js="question-bookmark"]');

function handleButtonClick() {
  answer.classList.toggle("hidden");
}

button.addEventListener("click", handleButtonClick);

function handleBookmarkClick() {
  bookmark.classList.toggle("question__svg-active");
}

bookmark.addEventListener("click", handleBookmarkClick);
