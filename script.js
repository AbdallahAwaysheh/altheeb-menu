const btn = document.getElementById("styleToggle");
const body = document.body;
const container = document.querySelector(".container");
const arMenu= document.getElementById("ar-menu");
const enMenu = document.getElementById("en-menu");



btn.addEventListener("click", () => {
    enMenu.classList.toggle("hidden");
    arMenu.classList.toggle("hidden");
});