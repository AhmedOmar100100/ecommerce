const bar = document.getElementById("bar");
const nav = document.getElementById("nav-links");
const close = document.getElementById("close");


if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active")
    })
}

// single product slider

let mainImage = document.getElementById("main-image")
let smallImages = document.getElementsByClassName("small-image")

smallImages[0].onclick = function () {
    mainImage.src = smallImages[0].src;
}
smallImages[1].onclick = function () {
    mainImage.src = smallImages[1].src;
}
smallImages[2].onclick = function () {
    mainImage.src = smallImages[2].src;
}
smallImages[3].onclick = function () {
    mainImage.src = smallImages[3].src;
}

