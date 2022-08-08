
var numero1 = Number(prompt(`Você está preste a realizar uma operação matemática em uma calculadora simples.\n
Digite o 1º (primeiro) número da operação.`))
var numero2 = Number(prompt('Digite o 2º (segundo) número da operação.'))

//document.write(`<p>Números digitados para a operação: ${numero1} e ${numero2}.</p>`)
window.document.body.innerHTML += `<p>Números digitados para a operação: ${numero1} e ${numero2}.</p>`

var operacao = prompt(`Qual operação você deseja realizar?\n
Digite um dos símbolos aritméticos abaixo:
(+) Adição;
(-) Subtração;
(*) Multiplicação; e
(/) Divisão.`)

function divisaoPorZero() {
    if ((numero2 == 0) && (operacao == '/')) {
        window.alert('Divisão não possível nos números reais.\nO segundo número (divisor) não pode ser "0 (zero)".')
    }
}

function divisao(numero1, numero2) {
    if ( numero1 >= numero2) {
        var resultado = Number.parseInt(Number.parseInt(numero1) / Number.parseInt(numero2))
        var resto = calculadora('%')
        if (resto != 0) {
            window.document.body.innerHTML += `O quociente é ${resultado} e o resto é ${resto}.`
        } else {
            window.document.body.innerHTML += `E o resultado é ${resultado}.`
        }
    } else if (numero1 == 0) {
        var resultado = numero1 / numero2
        window.document.body.innerHTML += `E o resultado é ${resultado}.`
    } else {
        var resultado = numero1 / numero2
        window.document.body.innerHTML += `Considerando que o "Dividendo" é menor que "Divisor" o resultado ${resultado} contém casas decimais.`
    }
}

const calculadora = (operador,[num1, num2]=[numero1, numero2])=> eval(`${num1} ${operador} ${num2}`)

divisaoPorZero()

switch (operacao) {
    case '+':
        window.document.body.innerHTML += `A operação escolhida foi Adição. `
        var resultado = calculadora(operacao)
        window.document.body.innerHTML += `E o resultado é ${resultado}.`
        break
    case '-':
        window.document.body.innerHTML += `A operação escolhida foi Subtração. `
        var resultado = calculadora(operacao)
        window.document.body.innerHTML = `E o resultado é ${resultado}.`
        break
    case '*':
        window.document.body.innerHTML += `A operação escolhida foi Multiplicação. `
        var resultado = calculadora(operacao)
        window.document.body.innerHTML += `E o resultado é ${resultado}.`
        break
    case '/':
        window.document.body.innerHTML += `A operação escolhida foi Divisão. `
        divisao(numero1, numero2)
        break
    default:
        window.document.body.innerHTML += `Desculpe-nos, houve algum problema com a operação para o símbolo aritmético "${operacao}".`
}

window.document.body.innerHTML += `<p>Para outra operação clique <a href="javascript:document.location.reload()">aqui</a>.</p>`