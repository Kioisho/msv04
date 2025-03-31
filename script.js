const toggleMoveBtn = document.getElementById("toggleMove");
const toggleFlipBtn = document.getElementById("toggleFlip");
const brownBox = document.querySelector(".brown-box");
const whiteBox = document.querySelector(".white-box");
const hiddenText = document.querySelector(".hidden-text");
const hiddenImage = document.querySelector(".hidden-image");

let moved = false;
let flipped = false;


toggleMoveBtn.addEventListener("click", () => {
    if (!moved) {
        brownBox.style.bottom = "0px";
        whiteBox.style.bottom = "650px"; // Se mueve hacia arriba
        hiddenText.style.opacity = "1"; // Muestra el texto
        toggleMoveBtn.textContent = "Ocultar";
    } else {
        whiteBox.style.bottom = "10px"; // Regresa a su posición original
        hiddenText.style.opacity = "0"; // Oculta el texto
        toggleMoveBtn.textContent = "Abrir";
    }
    moved = !moved;
});

toggleFlipBtn.addEventListener("click", () => {
    if (!flipped) {
        brownBox.style.transform = "rotateY(180deg)";
        hiddenText.style.opacity = "0"; // Oculta el texto
        setTimeout(() => {
            hiddenImage.style.display = "block";
        }, 250);
    } else {
        hiddenImage.style.display = "none";
        brownBox.style.transform = "rotateY(0deg)";
        hiddenText.style.opacity = "1"; // Muestra el texto
    }
    flipped = !flipped;
});
