/*
# -------------------------------------------------------------------------------------------------
#
# Name: vagas.js
# Version: 0.0.1
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

const btn_minus = document.getElementById("minus");
const btn_plus = document.getElementById("plus");
const qtd_stickers = document.getElementById("qtd_stickers");

function qtd_stickers_plus() {
    qtd_stickers.value = parseInt(qtd_stickers.value) + 1;
}

function qtd_stickers_minus() {
    if (qtd_stickers.value > 1) {
        qtd_stickers.value = parseInt(qtd_stickers.value) - 1;
    }
}
