// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById("nombreAmigo");
    let nombreAmigo = inputAmigo.value;

    if(!nombreAmigo){
        alert("Por favor ingrese un nombre");
        return;
    }
    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();
}

function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("No hay amigos para sortear");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    // Limpiar la consola de juego y reiniciar
    setTimeout(() => {
        limpiarConsola();
        alert("La consola ha sido limpiada. Puedes realizar otro sorteo.");
    }, 3000); // Espera 3 segundos antes de limpiar
}

function limpiarConsola(){
    amigos = [];
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    let inputAmigo = document.getElementById("nombreAmigo");
    inputAmigo.value = "";
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}
