function toggleNav() {
    const container = document.getElementById("outer-container");
    const nav = document.querySelector("nav");
    nav.classList.toggle("show");
    container.classList.toggle("toggle-grid");
}

document.getElementById("menu")
    .addEventListener("click", toggleNav);

