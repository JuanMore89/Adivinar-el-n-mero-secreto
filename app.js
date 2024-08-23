let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = parseInt(prompt("Dime un numero como rango máximo para adivinar"));


function asignarTextoElemento(eLemento, texto){

    let elementoHTML = document.querySelector(eLemento);
    elementoHTML.innerHTML = texto;
    return;

}

function verificarIntento() {
    
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log("Numero de intentos:", intentos);
    
    if (numeroDeUsuario === numeroSecreto) {

        document.getElementById('reiniciar').removeAttribute('disabled');
        asignarTextoElemento('p', `¡Acertaste! el número era ${numeroSecreto}.`+` Te tomó ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        deshabilitarIntentar();
    }

    else if (numeroDeUsuario > numeroSecreto){

        asignarTextoElemento('p', 'El número es menor')
    }
    
    else {

        asignarTextoElemento('p', 'El número es mayor')
    }

    intentos++
    limpiarCaja();

    return;
    
}

function limpiarCaja(){

    document.querySelector('#valorUsuario').value = "";
    


}

function generarNumeroSecreto() {

let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;   


console.log("Numero generado: ", numeroGenerado);
console.log("Lista: ", listaNumerosSorteados);

//Si ya sorteamos todos los números, nos salimos
if (listaNumerosSorteados.length == numeroMaximo){
    
    asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
     
} else {


// Si El número generado está incluido, hacemos la operación, de lo contrario otra
if(listaNumerosSorteados.includes(numeroGenerado)){

    return generarNumeroSecreto();

}else{

    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}

}
}

function condicionesIniciales() {

    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Dígita un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.querySelector("#reiniciar").setAttribute('disabled','true');
    document.getElementById('intentar').removeAttribute('disabled');

}

function reiniciarJuego(){
//Limpiar caja
limpiarCaja();
//Indicar mensaje de intervalo de numeros
//Generar numero aleatorio
//Reiniciar el número de intentos
//Deshabilitar el botón de nuevo juego
condicionesIniciales();
console.log("Número secreto:", numeroSecreto);

}

//Función para deshabilitar el botón de intentar
function deshabilitarIntentar(){

    document.querySelector("#intentar").setAttribute('disabled','true');
}

condicionesIniciales();
console.log("Número secreto:", numeroSecreto);
asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', `Dígita un número del 1 al ${numeroMaximo}`);