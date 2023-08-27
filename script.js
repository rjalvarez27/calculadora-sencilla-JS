// Esto agrega a la pantalla el valor del boton 

function agregar(valor){
    document.getElementById("pantalla").value += valor
} 

// Para el botom C borrar todo 

function borrar (){
    document.getElementById("pantalla").value = ""
}

// Para el boton =

function calcular() {
    const valorpantalla = document.getElementById('pantalla').value 
    const resultado = eval(valorpantalla)
    document.getElementById("pantalla").value = resultado
}

