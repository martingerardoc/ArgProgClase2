function miCallback() {
    console.log("La suma se ha calculado.");
    
  }
  
  function suma(a, b, callback) {
    let c = a + b;
    console.log(c);
    callback();
  }
  
  suma(3, 3, miCallback); // Llamamos a la función suma con el callback miCallback


document.getElementById("add").addEventListener("click", function() {
    calcular('add');
});

document.getElementById("subtract").addEventListener("click", function() {
    calcular('subtract');
});

document.getElementById("multiply").addEventListener("click", function() {
    calcular('multiply');
});

document.getElementById("divide").addEventListener("click", function() {
    calcular('divide');
});

document.getElementById("clear").addEventListener("click", function() {
    limpiarCampos();
});

function calcular(operacion) {
    var operando1 = parseFloat(document.getElementById("operand1").value);
    var operando2 = parseFloat(document.getElementById("operand2").value);
    var resultado = 0;

    if (isNaN(operando1) || isNaN(operando2)) {
        alert("Por favor ingrese números válidos en ambos campos.");
    } else {
        switch (operacion) {
            case 'add':
                resultado = operando1 + operando2;
                break;
            case 'subtract':
                resultado = operando1 - operando2;
                break;
            case 'multiply':
                resultado = operando1 * operando2;
                break;
            case 'divide':
                if (operando2 === 0) {
                    alert("No se puede dividir por cero.");
                } else {
                    resultado = operando1 / operando2;
                }
                break;
        }

        document.getElementById("result").textContent = resultado;
    }
}

function limpiarCampos() {
    document.getElementById("operand1").value = "";
    document.getElementById("operand2").value = "";
    document.getElementById("result").textContent = "0";
}

