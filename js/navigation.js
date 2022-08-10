export default function navigation() {
  const navbarHome = document.querySelector('[data-js="navbar__home"]');
  const navbarBookmarks = document.querySelector(
    '[data-js="navbar__bookmark"]'
  );
  const navbarProfile = document.querySelector('[data-js="navbar__profile"]');

  const navigationItems = [navbarBookmarks, navbarHome, navbarProfile];

  const homePage = document.querySelector('[data-js="home"]');
  const bookmarkPage = document.querySelector('[data-js="bookmarks"]');
  const profilePage = document.querySelector('[data-js="profile"]');

  const pages = [homePage, bookmarkPage, profilePage];

  navbarHome.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
    });
    homePage.classList.remove("hidden");

    navigationItems.forEach((item) => {
      item.classList.remove("navigation__item--active");
    });
    navbarHome.classList.add("navigation__item--active");
  });

  navbarBookmarks.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
    });
    bookmarkPage.classList.remove("hidden");
    navigationItems.forEach((item) => {
      item.classList.remove("navigation__item--active");
    });
    navbarBookmarks.classList.add("navigation__item--active");
  });

  navbarProfile.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
    });
    profilePage.classList.remove("hidden");
    navigationItems.forEach((item) => {
      item.classList.remove("navigation__item--active");
    });
    navbarProfile.classList.add("navigation__item--active");
  });
}
