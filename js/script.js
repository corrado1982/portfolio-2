const worksAsButton = document.querySelector(".works-button");
const subMenu = document.querySelector(".submenu");
const main = document.querySelector("main");

main.addEventListener("click", closeMenu);
worksAsButton.addEventListener("click", openMenu);

function openMenu() {
  subMenu.classList.toggle("show");
}
function closeMenu() {
  console.log("di");
  if (subMenu.classList.contains("show")) {
    subMenu.classList.remove("show");
  }
}
