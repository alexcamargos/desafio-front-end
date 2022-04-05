/*
# -------------------------------------------------------------------------------------------------
#
# Name: vagas.js
# Version: 0.0.2
#
# Summary: Desafio Front-end VAGAS.com
#
# Author: Alexsander Lopes Camargos
# Author-email: alcamargos@vivaldi.net
#
# License: MIT
#
# -------------------------------------------------------------------------------------------------
*/

const btnMinus = document.getElementById("btn-minus");
const btnPlus = document.getElementById("btn-plus");
const numberStickers = document.getElementById("number-stickers");

// Validation decrease sticker button
function validationNumberStickers() {
    if (numberStickers.value <= 0) {
        btnMinus.children[0].children[0].classList.add("button__disabled");
    } else {
        btnMinus.children[0].children[0].classList.remove("button__disabled");
    }
}

// Increase the value number stickers.
function numberStickersPlus() {
    numberStickers.value = parseInt(numberStickers.value) + 1;
    validationNumberStickers();
}

// Decrease the value number stickers.
function numberStickersMinus() {
    if (numberStickers.value > 0) {
        numberStickers.value = parseInt(numberStickers.value) - 1;
    }
    validationNumberStickers();
}

// Event click: Increase the value number stickers.
btnPlus.addEventListener("click", numberStickersPlus);
// Event click: Decrease the value number stickers.
btnMinus.addEventListener("click", numberStickersMinus);
