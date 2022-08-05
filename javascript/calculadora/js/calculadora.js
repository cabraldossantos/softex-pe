
var numero1 = Number(prompt(`Você está preste a realizar uma operação matemática em uma calculadora simples.\n
Digite o 1º (primeiro) número da operação.`))
var numero2 = Number(prompt('Digite o 2º (segundo) número da operação.'))

document.write(`<p>Números digitados para a operação: ${numero1} e ${numero2}.</p>`)

var operacao = prompt(`Qual operação você deseja realizar?\n
Digite um dos símbolos aritméticos abaixo:
(+) Adição;
(-) Subtração;
(*) Multiplicação; e
(/) Divisão.`)

if ((numero2 == 0) && (operacao == '/')) {
    window.alert('Divisão não possível nos números reais.\nO segundo número (divisor) não pode ser "0 (zero)".')
}

switch (operacao) {
    case '+':
        document.write(`A operação escolhida foi Adição. `)
        var resultado = numero1 + numero2
        document.write(`E o resultado é ${resultado}.`)
        break
    case '-':
        document.write(`A operação escolhida foi Subtração. `)
        var resultado = numero1 - numero2
        document.write(`E o resultado é ${resultado}.`)
        break
    case '*':
        document.write(`A operação escolhida foi Multiplicação. `)
        var resultado = numero1 * numero2
        document.write(`E o resultado é ${resultado}.`)
        break
    case '/':
        document.write(`A operação escolhida foi Divisão. `)
        if ( numero1 > numero2) {
            var resultado = Number.parseInt(Number.parseInt(numero1) / Number.parseInt(numero2))
            var resto = numero1 % numero2
            if (resto != 0) {
                document.write(`O quociente é ${resultado} e o resto é ${resto}.`)
            } else {
                document.write(`E o resultado é ${resultado}.`)
            }
        } else {
            var resultado = numero1 / numero2
            document.write(`Considerando que o "Dividendo" é menor que "Divisor" o resultado ${resultado} contém casas decimais.`)
        }
        break
    default:
        document.write(`Desculpe-nos, houve algum problema com a operação para o símbolo aritmético "${operacao}".`)
}

document.write(`<p>Para outra operação clique <a href="javascript:document.location.reload()">aqui</a>.</p>`)