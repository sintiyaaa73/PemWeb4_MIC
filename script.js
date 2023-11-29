//Toggle class active untuk menu
const navbarnav = document.querySelector(".navbar-nav");
//ketika menu di klik
document.querySelector("#menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

//Toogle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelecor('#search-button').onclick = () => {
  searchForm.classList.toggle('active');
  searchBox.focus();
};

//klik diluar syber untuk menghilangkan nav
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
