let input = document.getElementById('pantalla');

let button1 = document.getElementById('boton1');
let button2 = document.getElementById('boton2');
let button3 = document.getElementById('boton3');
let button4 = document.getElementById('boton4');
let button5 = document.getElementById('boton5');
let button6 = document.getElementById('boton6');
let button7 = document.getElementById('boton7');
let button8 = document.getElementById('boton8');
let button9 = document.getElementById('boton9');
let button0 = document.getElementById('boton0');

button1.onclick = () => { alert(button1.innerText); };
button2.onclick = () => { alert(button2.innerText); };
button3.onclick = () => { alert(button3.innerText); };
button4.onclick = () => { alert(button4.innerText); };
button5.onclick = () => { alert(button5.innerText); };
button6.onclick = () => { alert(button6.innerText); };
button7.onclick = () => { alert(button7.innerText); };
button8.onclick = () => { alert(button8.innerText); };
button9.onclick = () => { alert(button9.innerText); };
button0.onclick = () => { alert(button0.innerText); };

function enviar(num){
    input.value += num;
}
function calcular() {
  try {
    input.value = eval(input.value);
  } catch {
    input.value = "Error";
  }
}