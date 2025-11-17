const worksAsButton = document.querySelector(".works-button");
const subMenu = document.querySelector(".submenu");

worksAsButton.addEventListener("click", openMenu);

function openMenu() {
  subMenu.classList.toggle("show");
}
