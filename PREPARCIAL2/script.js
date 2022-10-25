
//Valor de los pesos
var inputPesos = document.getElementById("pesos")
//Selector de monedas
var selectMoneda = document.getElementById("currencies")
//Botón para hacer el cálculo
var BotonCalcular = document.getElementById("calcular")



//Nueva moneda
var nuevaMoneda = document.getElementById("newCurrency")
var valorNueva = document.getElementById("cost")
var BotonAgregar = document.getElementById("addCurrency")

//Pasar resultado a input
var resultadoInput = document.getElementById("foreign")


var cotizaciones = {
    dollars: 105.75,
    euros: 120.5,
  }

function ConversionPesos(){
    if (inputPesos.value == ""){
        alert("Debe ingresar un número")
    }
    else{
        var valorPesos = Number(inputPesos.value)
        var valorMoneda = Number(cotizaciones[selectMoneda.value])

        var precioFinal = valorPesos / valorMoneda
        resultadoInput.value = precioFinal
    }
}

function NuevaMoneda(){
    if (nuevaMoneda.value == "" | valorNueva.value == ""){
        alert("Debe ingresar un nombre/valor para la nueva moneda")
    }
    else{
        var nombreMoneda = nuevaMoneda.value
        var valorMoneda = Number(valorNueva.value)
    
        selectMoneda.options.add(new Option(nombreMoneda))
    
        cotizaciones[nombreMoneda] = valorMoneda
    
        nuevaMoneda.value = ""
        valorNueva.value = ""
    }
    
}

BotonCalcular.onclick = function () {
    ConversionPesos()
}



BotonAgregar.onclick = function () {
     NuevaMoneda()
}