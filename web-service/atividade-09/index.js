import {
    calcularPrecoPrazo,
    consultarCep,
    rastrearEncomendas,
} from 'correios-brasil'

const { consultarCep } = require('correios-brasil')

const cep = '21770200'

consultarCep(cep).then(response => {
    console.log(response);
})

const { calcularPrecoPrazo } = require('correios-brasil')

let args = {
    sCepOrigem: '81200100',
    sCepDestino: '21770200',
    nVlPeso: '1',
    nCdFormato: '1',
    nVlComprimento: '20',
    nVlAltura: '20',
    nVlLargura: '20',
    nCdServico: ['04014', '04510'], 
    nVlDiametro: '0',
}

calcularPrecoPrazo(args).then(response => {
    console.log(response);
})

const { rastrearEncomendas } = require('correios-brasil')

let codRastreio = ['OU341933668BR', 'LB290784401HK']

rastrearEncomendas(codRastreio).then(response => {
    console.log(response)
})

