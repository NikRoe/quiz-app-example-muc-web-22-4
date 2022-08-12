export default function navigation() {
  const homePage = document.querySelector('[data-js="home"]');
  const bookmarkPage = document.querySelector('[data-js="bookmarks"]');
  const profilePage = document.querySelector('[data-js="profile"]');

  const pages = [homePage, bookmarkPage, profilePage];

  const navHome = document.querySelector('[data-js="nav-home"]');
  const navBookmarks = document.querySelector('[data-js="nav-bookmarks"]');
  const navProfile = document.querySelector('[data-js="nav-profile"]');

  navHome.addEventListener("click", () => {
    pages.forEach((brokkoli) => {
      brokkoli.classList.add("hidden");
    });
    homePage.classList.remove("hidden");
  });

  navBookmarks.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
    });
    bookmarkPage.classList.remove("hidden");
  });

  navProfile.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
    });
    profilePage.classList.remove("hidden");
  });
}
