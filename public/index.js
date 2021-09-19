const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const contents = document.getElementById("contents");

menuBtn.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add("block");
    contents.classList.add("opacity-60");
    menuBtn.src = "./img/icon-close.svg";
  } else if (menu.classList.contains("block")) {
    menu.classList.remove("block");
    menu.classList.add("hidden");
    menuBtn.src = "./img/icon-hamburger.svg";
    contents.classList.remove("opacity-60");
  }
});
