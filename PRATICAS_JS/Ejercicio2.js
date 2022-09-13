function suma (num1, num2){

    var resultado = num1 + num2
    prompt(resultado)
}

var num1 = parseInt(prompt("Ingresar el primer número:"))
var num2 = parseInt(prompt("Ingresar el segundo número:"))

if (Math.sign(num1) == -1){

    num1 = num1 + (num1 * 2)
        
}
else if (Math.sign(num2) == -1){

    num2 = num2 + (num2 * 2)
}

suma(num1, num2)