window.document.querySelector('input#btnCalcularMediaTresNotas').addEventListener('click', calcularMediaTresNotas)
window.document.querySelector('input#btnLimparMediaTresNotas').addEventListener('click', limparTresNotas)

window.document.querySelector('input#btnCalcularMediaDuasNotas').addEventListener('click', calcularMediaDuasNotas)
window.document.querySelector('input#btnLimparMediaDuasNotas').addEventListener('click', limparDuasNotas)

var nota13 = window.document.querySelector('input#nota1-3')
var nota23 = window.document.querySelector('input#nota2-3')
var nota33 = window.document.querySelector('input#nota3-3')
var media3 = 0
var resultado3 = window.document.querySelector('div#resultado-tres-notas')

var nota12 = window.document.querySelector('input#nota1-2')
var nota22 = window.document.querySelector('input#nota2-2')
var media2 = 0
var resultado2 = window.document.querySelector('div#resultado-duas-notas')


function calcularMediaTresNotas() {
    var n13 = Number(nota13.value)
    var n23 = Number(nota23.value)
    var n33 = Number(nota33.value)
    media3 = (n13 + n23 + n33) / 3

    var resultado = `A média do aluno é <strong>${media3.toFixed(2)}</strong>. `
    if (media3 >= 7) {
        resultado += `Congratulações! <strong>APROVADO</strong>.`
    } else {
        resultado += `Lamentamos. <strong>REPROVADO</strong>.`
    }

    resultado3.innerHTML = resultado
}

function limparTresNotas() {
    nota13.value = ''
    nota23.value = ''
    nota33.value = ''
    media3 = 0
    resultado3.innerHTML = 'Resultado'
}

function calcularMediaDuasNotas() {
    var n12 = Number(nota12.value)
    var n22 = Number(nota22.value)
    media2 = (n12 + n22) / 2

    var resultado = `A média do aluno é <strong>${media2.toFixed(2)}</strong>. `
    if (media2 >= 7) {
        resultado += `Congratulações! <strong>APROVADO</strong>.`
    } else {
        resultado += `Lamentamos. <strong>REPROVADO</strong>.`
    }

    resultado2.innerHTML = resultado
}

function limparDuasNotas() {
    nota12.value = ''
    nota22.value = ''
    media2 = 0
    resultado2.innerHTML = 'Resultado'
}
