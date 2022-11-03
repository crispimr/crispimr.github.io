// Ex 01
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


// Ex 02 ------------------------------------------------------------------------------
const idade2Val = document.getElementById('idade2')
const calcularBtn2 = document.getElementById('calcular2')
const categoriaVal = document.getElementById('categoria')
let cat  = 'blank'

function categoria(){
    if (idade2Val.value < 5){
        cat = 'Sem categoria para esta idade'
    } else if (idade2Val.value >= 5 && idade2Val.value <= 7){
        cat = 'Infantil'
    } else if (idade2Val.value >= 8 && idade2Val.value <= 10){
        cat = 'Juvenil - Nivel 1'
    } else if (idade2Val.value >= 11 && idade2Val.value <= 15){
        cat = 'Juvenil - Nivel 2'
    } else if (idade2Val.value >= 16 && idade2Val.value <= 30){
        cat = 'Adulto'
    } else
        cat = 'Sênior'
    
    categoriaVal.textContent = 'Sua categoria é: ' + cat
}

calcularBtn2.addEventListener('click', function(){categoria()})

// calcularBtn.addEventListener('click', function(){idade()})
// calcularBtn2.addEventListener('click', function(){alert(idade2Val.value)})

// Ex 03 ---------------------------------------------------------------------------
const calcularBtn3 = document.getElementById('calcular3')
const anoVal = document.getElementById('ano')
const votoVal = document.getElementById('voto')
let voto = 'NA'

function ano(){
    if (anoVal.value <= 2004){
        voto = 'Pode :('
    } else
        voto = 'Não :)'
    
    votoVal.textContent = 'Pode votar? ' + voto
}

calcularBtn3.addEventListener('click', function(){ano()})
