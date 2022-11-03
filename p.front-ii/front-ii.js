const calcularBtn = document.getElementById('calcular')
const idadeVal = document.getElementById('idade')
const pesoVal = document.getElementById('peso')
const riscoVal = document.getElementById('risco')
let grupoRisco = 0

function idade(){
    if (idadeVal.value < 20){
        if (pesoVal.value < 60){
            grupoRisco = 9
        } else if (pesoVal.value >= 60 && pesoVal.value <= 90){
            grupoRisco = 8
        } else
            grupoRisco = 7
    } else if(idadeVal.value >= 20 && idadeVal.value <= 50){
        if (pesoVal.value < 60){
            grupoRisco = 6
        } else if (pesoVal.value >= 60 && pesoVal.value <= 90){
            grupoRisco = 5
        } else
            grupoRisco = 4
    } else {
        if (pesoVal.value < 60){
            grupoRisco = 3
        } else if (pesoVal.value >= 60 && pesoVal.value <= 90){
            grupoRisco = 2
        } else
            grupoRisco = 1
    }

    riscoVal.textContent = 'Seu risco é: ' + grupoRisco
}

// calcularBtn.addEventListener('click', function(){
//     // alert('Idade: ' + (parseInt(idadeVal.value) + 2))
//     riscoVal.textContent = 'Seu risco é: 2'
// })

calcularBtn.addEventListener('click', function(){idade()})