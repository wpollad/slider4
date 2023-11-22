const carousel = document.querySelector(".house-slider_images");
const images = carousel.querySelectorAll(".house-slider_images img");
const arrowIcons = document.querySelectorAll(".house-slider_arrow");
const imageDivs = carousel.querySelectorAll(".house-slider_images div");
const mainImage = document.querySelector(".house-slider_main img");
console.log(mainImage)

mainImage.src = images[0].src;

let imageWidth = images[0].clientWidth + 16;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const countImages = images.length;
let currentImg = 1;

const showIcons = () => {
    arrowIcons[0].style.opacity = carousel.scrollLeft < 5 ? "0.5" : "1";
    arrowIcons[1].style.opacity = carousel.scrollLeft >= scrollWidth - 5 ? "0.5" : "1";
}

showIcons();

const chose = (number) => {
    imageDivs.forEach((div) => {
        console.log(div.id);
        mainImage.src = images[number - 1].src
        if (+div.id === number) {
            div.classList.add("chosed");
        } else {
            div.classList.remove("chosed");
        }
    })
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        if (icon.id === "left") {
            carousel.scrollLeft -= imageWidth;
            currentImg -= currentImg > 1 ? 1 : 0;
        } else {
            carousel.scrollLeft += imageWidth;
            currentImg += currentImg < countImages ? 1 : 0;
        }
        console.log(currentImg);
        chose(currentImg);
        setTimeout(() => showIcons(), 400);
    })
});

imageDivs.forEach((div) => {
    div.addEventListener("click", () => {
        currentImg = +div.id;
        chose(currentImg);
    })
})