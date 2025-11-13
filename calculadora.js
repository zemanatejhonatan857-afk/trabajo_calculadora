let pantalla = document.getElementById("pantalla");

function appendValue(value) {
    pantalla.value += value;
}

function clearpantalla() {
    display.value = "";
}

function eliminar() {
    pantalla.value = pantalla.value.slice(0,-1);
}

function calcular() {
    try {
        pantalla.value = eval(pantalla.value);
    } catch {
        pantalla.value = "Error";
    }
}