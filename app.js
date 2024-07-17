let numeroSecreto = 0;   
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10 
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numerosDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numerosDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numerosDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El númeor secreto es menor');
        } else {
            asignarTextoElemento('p','El númeor secreto es mayor');  
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; 
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si el número generado esta incluido en la lista
    console.log(numeroGenerado);
    console.log(numerosSorteados);
    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        if (numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Número Screto UwU');
    asignarTextoElemento('p', `indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //mensaje de incio
    //generar número aleatorio
    //inicializar número de intentos
    condicionesIniciales(); 
    //deshabilitar boton de reinicio
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();


