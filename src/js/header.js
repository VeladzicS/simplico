const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

window.addEventListener("scroll", function () {
  const headerNav = document.getElementById("navigationSection");
  const logoImage = document.getElementById("logo");
  const burger = document.querySelector(".menu-btn__burger");
  let windowPosition = window.scrollY > 80;
  headerNav.classList.toggle("scrolling-active", windowPosition);
  logoImage.classList.toggle("scrolling-active--logo", windowPosition);
  burger.classList.toggle("menu-btn__burger--special", windowPosition);

  windowPosition
    ? (logoImage.src = "/assets/images/logo/logoSticky.png")
    : (logoImage.src = "/assets/images/logo/logo.png");
});
