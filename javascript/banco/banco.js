let Banco = class {
    constructor(agencia, tipoDeConta, conta, saldo) {
        this.agencia = agencia
        this.tipoDeConta = tipoDeConta
        this.conta = conta
        this.saldo = saldo
    }

    buscarSaldo = function() {
        console.log(`Seu saldo é ${this.saldo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`)
    }

    deposito = function(valor) {
        this.saldo += Number(valor)
    }

    saque = function(valor) {
        var retorno = false
        var valorDoSaque = Number(valor)
        if (this.saldo > valorDoSaque) {
            retorno = true
            this.saldo -= valorDoSaque
        } else {
            retorno = false
            console.log(`Saldo insuficiente para o saque de ${valorDoSaque.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`)
        }
        return retorno
    }

    numeroDaConta = function() {
        return this.conta
    }
}

let suaConta = new Banco(0001,'corrente',100100,1000)
console.log(`O número da sua contta é ${suaConta.numeroDaConta()}.`)
suaConta.buscarSaldo()
var deposito = 585.65
suaConta.deposito(deposito)
console.log(`Houve um depósito de ${deposito.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em sua conta.`)
suaConta.buscarSaldo()
var saque = 1500
console.log(`Valor a ser sacado ${saque.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`)
if (suaConta.saque(saque)) {
    console.log(`Houve um saque de ${saque.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em sua conta.`)
}
suaConta.buscarSaldo()

