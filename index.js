const burger = document.querySelector(".burger");
const nav = document.querySelector("nav ul");
const navLink = document.querySelectorAll("nav ul li");
const navSlide = () => {
  burger.onclick = () => {
    togglenav();
  };
};
navSlide();
const togglenav = () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("active");
  navLink.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
  });
};
