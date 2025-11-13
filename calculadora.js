let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function cleardisplay() {
    display.value = "";
}

function eliminar() {
    display.value = display.value.slice(0,-1);
}

function calcular() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}