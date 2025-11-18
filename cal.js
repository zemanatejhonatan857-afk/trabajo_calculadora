let pantalla = document.getElementById('pantalla');
let valorActual = "";

function enviarvalue(valor) {
    valorActual += valor;
    pantalla.value = valorActual;
}


function clearpantalla() {
    valorActual = "";
    pantalla.value = "";
}


function eliminar() {
    valorActual = valorActual.slice(0, -1);
    pantalla.value = valorActual;
}


function resultado() {
    try {
        valorActual = eval(valorActual);
        pantalla.value = valorActual;
    } catch (e) {
        pantalla.value = "Error";
    }
}