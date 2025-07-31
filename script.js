// variaveis do usuario
let papel = document.querySelector("#papel")
let pedra = document.querySelector("#pedra")
let tesoura = document.querySelector("#tesoura")
let resultado = document.getElementById("resultado")

// variaveis do adversario
let adversario = document.querySelector(".adversario")
let shake = document.getElementById("shake")


// Armazenar valores ao atualizar
let vitorias = parseInt(localStorage.getItem("vitorias")) || 0
let derrotas = parseInt(localStorage.getItem("derrotas")) || 0

// variaveis do placar
let vitoria = document.querySelector("#vit")
vitoria.textContent = vitorias

let derrota = document.querySelector("#derr")
derrota.textContent = derrotas

// Ao selecionar papel
papel.addEventListener("click", () => {
    const numero = Math.floor(Math.random() * 3) + 1;
    console.log(numero)

    shake.style.display = "none"

    // Remover imagem anterior
    let imgAnterior = document.getElementById("imagem")
    if(imgAnterior) {
        imgAnterior.remove()
    }

    // Criar imagem
    let imagem = document.createElement("img")
    imagem.id = "imagem"
    adversario.appendChild(imagem)
    resultado.before(imagem)

    if (numero === 1) { //Papel
        imagem.src = "img/papel.png"
        resultado.textContent = "EMPATOU!"

    } else if (numero === 2) { //Pedra
        imagem.src = "img/pedra.png"
        vitorias+=1
        vitoria.textContent = vitorias
        localStorage.setItem("vitorias", vitorias);
        resultado.textContent = "GANHOU!"

    } else {
        imagem.src = "img/tesoura.png"
        derrotas+=1
        derrota.textContent = derrotas
        localStorage.setItem("derrotas", derrotas);
        resultado.textContent = "PERDEU!"
    }

    resultado.style.visibility = "visible"

})

// Ao selecionar pedra
pedra.addEventListener("click", () => {
    const numero = Math.floor(Math.random() * 3) + 1;
    console.log(numero)

    shake.style.display = "none"

    // Remover imagem anterior
    let imgAnterior = document.getElementById("imagem")
    if(imgAnterior) {
        imgAnterior.remove()
    }

    // Criar imagem
    let imagem = document.createElement("img")
    imagem.id = "imagem"
    adversario.appendChild(imagem)
    resultado.before(imagem)

    if (numero === 1) { //Papel
        imagem.src = "img/papel.png"
        derrotas+=1
        derrota.textContent = derrotas
        localStorage.setItem("derrotas", derrotas);
        resultado.textContent = "PERDEU!"
    } else if (numero === 2) { //Pedra
        imagem.src = "img/pedra.png"
        resultado.textContent = "EMPATOU!"
    } else {
        imagem.src = "img/tesoura.png"
        vitorias+=1
        vitoria.textContent = vitorias
        localStorage.setItem("vitorias", vitorias);
        resultado.textContent = "GANHOU!"
    }

    resultado.style.visibility = "visible"

})

// Ao selecionar tesoura
tesoura.addEventListener("click", () => {
    const numero = Math.floor(Math.random() * 3) + 1;
    console.log(numero)

    shake.style.display = "none"

    // Remover imagem anterior
    let imgAnterior = document.getElementById("imagem")
    if(imgAnterior) {
        imgAnterior.remove()
    }

    // Criar imagem
    let imagem = document.createElement("img")
    imagem.id = "imagem"
    adversario.appendChild(imagem)
    resultado.before(imagem)

    if (numero === 1) { //Papel
        imagem.src = "img/papel.png"
        vitorias+=1
        vitoria.textContent = vitorias
        localStorage.setItem("vitorias", vitorias);
        resultado.textContent = "GANHOU!"
    } else if (numero === 2) { //Pedra
        imagem.src = "img/pedra.png"
        derrotas+=1
        derrota.textContent = derrotas
        localStorage.setItem("derrotas", derrotas);
        resultado.textContent = "PERDEU!"
    } else {
        imagem.src = "img/tesoura.png"
        resultado.textContent = "EMPATE!"
    }

    resultado.style.visibility = "visible"
})

// Zerar placar
let zerar = document.querySelector("#zerar")

zerar.addEventListener("click", () => {
    localStorage.clear()
    vitorias = 0
    derrotas = 0
    
    vitoria.textContent = 0
    derrota.textContent = 0
})