const drpDwn = document.querySelector(".js-drp-dwn");
const navBar = document.querySelector("nav");
const header = document.querySelector(".js-header");

/**
 * Event listener for the window scroll event.
 * Adds or removes the "win-scrl" class from the drpDwn element based on the scroll position and window width.
 */

let setTimeoutId;
function checkCursorOnDrpDwn() {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 85) {
      clearTimeout(setTimeoutId);
      drpDwn.classList.add("win-scrl");
    } else if (window.scrollY <= 0) {
      setTimeoutId = setTimeout(() => {
        drpDwn.classList.remove("win-scrl");
      }, 1500);
    }
  });
}
checkCursorOnDrpDwn();

const menuBtn = document.querySelectorAll(".js-menu");
const closeMenuBtn = document.querySelector(".js-close-menu");
const navbarShadow = document.querySelector(".js-navbar-shadow");

menuBtn.forEach(menu => {
  menu.addEventListener("click", () => {
    navBar.classList.add("navbar-visible");
    navbarShadow.classList.add("navbar-shadow-visible");
  });
});
closeMenuBtn.addEventListener("click", () => {
  navBar.classList.remove("navbar-visible");
  setTimeout(() => {
    navbarShadow.classList.remove("navbar-shadow-visible");
  }, 400);
});

// remove navbar when outside of it is clicked
document.onclick = (e) => {
  if (!navBar.contains(e.target) && !header.contains(e.target) && !drpDwn.contains(e.target)) {
    navBar.classList.remove("navbar-visible");
    setTimeout(() => {
      navbarShadow.classList.remove("navbar-shadow-visible");
    }, 400);
  } else if (e.target.className === "link") {
    navBar.classList.remove("navbar-visible");
    navbarShadow.classList.remove("navbar-shadow-visible");
  }
};