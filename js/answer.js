export default function answer() {
  const questionCards = document.querySelectorAll('[data-js="question-card"]');

  questionCards.forEach((questionCard) => {
    const button = questionCard.querySelector('[data-js="answer-button"]');
    const answer = questionCard.querySelector('[data-js="answer-text"]');

    let isShown = false;

    button.addEventListener("click", () => {
      answer.classList.toggle("hidden");
      isShown = !isShown;

      button.innerText = isShown ? "Hide answer" : "Show answer";
    });
  });
}
