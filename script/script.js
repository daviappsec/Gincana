"use strict"

const logo = document.querySelector(".img-titulo");
const menu = document.querySelector(".nav-inicio2");

logo.addEventListener("click", function () {

    menu.classList.toggle("ativo")
})

