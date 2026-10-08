"use strict"


let form2 = document.getElementById("formulario2")
let form3 = document.getElementById("formulario3")
let form4 = document.getElementById("formulario4")
let form5 = document.getElementById("formulario5")

let descontarUrso = document.getElementById("descontar-ursos")
let descontarPredadores = document.getElementById("descontar-predadores")
let descontarAnubis = document.getElementById("descontar-anubis")
let descontarAruana = document.getElementById("descontar-aruana")

let pontos = [
    document.getElementById("pontos0"),
    document.getElementById("pontos1"),
    document.getElementById("pontos2"),
    document.getElementById("pontos3")
]


let equipe = [
    {
        nome: "Ursos de guerra",
        pontosGanhos: 20,
        pontosPerdidos: 10
    },

      {
        nome: "Predadores",
        pontosGanhos: 20,
        pontosPerdidos: 10
    },

    {
        nome: "I.Anubis",
        pontosGanhos: 20,
        pontosPerdidos: 10
    },

    {
        nome: "E.Aruana",
        pontosGanhos: 20,
        pontosPerdidos: 10
    }
]

function ganharPontos(indice, valor) {

    equipe[indice].pontosGanhos += valor;

    pontos[indice].innerText = equipe[indice].pontosGanhos - equipe[indice].pontosPerdidos;
}

function perderPontos(indice, valor) {
    equipe[indice].pontosPerdidos += valor;

    pontos[indice].innerText = equipe[indice].pontosGanhos - equipe[indice].pontosPerdidos;
}


// URSOS

form2.addEventListener("submit", function (event){
    event.preventDefault()

    let pontoUrso = Number(document.getElementById("pontos-ursos").value)

    ganharPontos(0, pontoUrso)
})


descontarUrso.addEventListener("click", function () {

    let pontoPerdido = Number(
        document.getElementById("perdidos-ursos").value
    )

    perderPontos(0, pontoPerdido)

})


//PREDADORES

form3.addEventListener("submit", function (event){
    event.preventDefault()

    let pontoPredadores = Number(document.getElementById("pontos-predadores").value)

    ganharPontos(1, pontoPredadores)
})



descontarPredadores.addEventListener("click", function () {

    let pontoPerdido = Number(
        document.getElementById("perdidos-predadores").value
    )

    perderPontos(1, pontoPerdido)

})



//ANUBIS

form4.addEventListener("submit", function (event){
    event.preventDefault()

    let pontoAnubis = Number(document.getElementById("pontos-anubis").value)

    ganharPontos(2, pontoAnubis)
})



descontarAnubis.addEventListener("click", function () {

    let pontoPerdido = Number(
        document.getElementById("perdidos-anubis").value
    )

    perderPontos(2, pontoPerdido)

})

// ARUANA


descontarAruana.addEventListener("click", function () {

    let pontoPerdido = Number(
        document.getElementById("perdidos-aruana").value
    )

    perderPontos(3, pontoPerdido)

})

form5.addEventListener("submit", function (event){
    event.preventDefault()

    let pontoAruana = Number(document.getElementById("pontos-aruana").value)

    ganharPontos(3, pontoAruana)
})

