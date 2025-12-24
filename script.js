const btn = document.getElementById("styleToggle");
const body = document.body;
const container = document.querySelector(".container");
const arMenu= document.getElementById("ar-menu");
const enMenu = document.getElementById("en-menu");



btn.addEventListener("click", () => {
    body.classList.toggle("styled-bg");
    container.classList.toggle("blur-style");
    enMenu.classList.toggle("hidden");
    arMenu.classList.toggle("hidden");
});