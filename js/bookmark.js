export default function bookmark() {
  const bookmarks = document.querySelectorAll('[data-js="question-bookmark"]');

  bookmarks.forEach((bookmark) => {
    function handleBookmarkClick() {
      bookmark.classList.toggle("question__svg-active");
    }

    bookmark.addEventListener("click", handleBookmarkClick);
  });
}
