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
const btnSubmit = document.getElementById("btn-submit");
const numberStickers = document.getElementById("number-stickers");

const allCheckboxs = Array.from(
    document.querySelectorAll('input[type="checkbox"]')
);
const allDivCheckboxs = Array.from(document.querySelectorAll(".checkbox"));

// Validation decrease sticker button
function validationNumberStickers() {
    if (numberStickers.value <= 0) {
        btnMinus.children[0].children[0].classList.add("button__disabled");
        numberStickers.classList.add("input__error");
    } else {
        btnMinus.children[0].children[0].classList.remove("button__disabled");
        numberStickers.classList.remove("input__error");
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

// Checkbox marker and value sticker button validation.
function validationCheckboxNumberStickers() {
    let ctrlCheckboxs = 0;

    allCheckboxs.map((element) => {
        if (!element.checked) {
            ctrlCheckboxs++;
        }
    });

    if ((ctrlCheckboxs === allCheckboxs.length) & (numberStickers.value == 0)) {
        allDivCheckboxs.map((element) => {
            element.classList.add("checkbox__error");
        });
        numberStickers.classList.add("input__error");
    } else if (ctrlCheckboxs === allCheckboxs.length) {
        allDivCheckboxs.map((element) => {
            element.classList.add("checkbox__error");
        });
    } else {
        numberStickers.classList.add("input__error");
    }
}

// Event click: Increase the value number stickers.
btnPlus.addEventListener("click", numberStickersPlus);
// Event click: Decrease the value number stickers.
btnMinus.addEventListener("click", numberStickersMinus);
// Event click: Validate form.
btnSubmit.addEventListener("click", validationCheckboxNumberStickers);
