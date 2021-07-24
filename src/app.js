import menuIt from "./templates/menu-card.hbs";
import menuItem from "./menu.json";
const menuList = document.querySelector(".js-menu");
const cardItem = createMenuItems(menuItem);
menuList.insertAdjacentHTML("beforeend", cardItem);
function createMenuItems(e) {
  return menuItem.map(menuIt).join("");
}
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const themeSwitch = document.querySelector(".theme-switch");
const body = document.querySelector("body");
const input = document.querySelector("#theme-switch-toggle");
if (JSON.parse(localStorage.getItem("isThemeDark"))) {
  body.classList.add(Theme.DARK);
  input.checked = true;
} else {
  body.classList.add(Theme.LIGHT);
}
input.addEventListener("click", onToggleSwitch);
function onToggleSwitch() {
  if (input.checked === false) {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
  } else {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
  }
  localStorage.setItem("isThemeDark", input.checked);
}
