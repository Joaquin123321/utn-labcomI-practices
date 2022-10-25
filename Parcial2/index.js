const color = document.getElementById("color")
const marca = document.getElementById("marca")
const cantidad = document.getElementById("cantidad")
const cotizar = document.getElementById("cotizar")
const result = document.getElementById("result")

result.style.visibility = "hidden"

var cotizaciones = {
    fiat: 1000000,
    ford: 1500000,
    volkswagen: 1750000,
    honda: 2000000
}

cotizar.onclick = function calculatePrice (){

    if (color.value == 0){
        document.getElementById('result').innerHTML = "Falta ingresar el color"
        result.style.backgroundColor = "red"
        result.style.visibility = "visible"
    }
    else if (marca.value == 0){
        document.getElementById('result').innerHTML = "Falta ingresar la marca"
        result.style.backgroundColor = "red"
        result.style.visibility = "visible"
    }
    else if (cantidad.value == 0){
        document.getElementById('result').innerHTML = "Falta ingresar la cantidad"
        result.style.backgroundColor = "red"
        result.style.visibility = "visible"
    }
    else{
        total = cantidad.value * cotizaciones[marca.value]
        document.getElementById('result').innerHTML = "Cotización: $" + total
        result.style.backgroundColor = "green"
        result.style.visibility = "visible"
    }

}
