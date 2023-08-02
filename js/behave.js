let menuButton = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .flex .navbar");

menuButton.onclick = () => {
  menuButton.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
