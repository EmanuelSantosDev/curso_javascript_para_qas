console.log('<<<<<< CONTROLE DE FLUXO COM BDD >>>>>>')


// SENDO um cliente correntista do banco
// POSSO sacar dinheiro em caixas eletrônicos
// PARA poder comprar em lugares que não aceitam o cartão de débito ou crédito


// Cenario 1: Saque com sucesso
// Dado que meu saldo é de 1.000 reais
// Quando eu faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo


var saldo = 1000

function saque(valor) {
    saldo = saldo - valor
    console.log(saldo)
}

saque(500) // 500



// Cenario 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1.000 reais
// Quando eu faço um saque de 1.001 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor não é permitido


var saldo = 1000

function saque(valor) {
    if (valor > saldo) {
        console.log('Valor do saque superior ao saldo')
    } else {
        saldo = saldo - valor
        console.log(saldo)
    }
}

saque(1001) // Valor do saque superior ao saldo
saque(300) // 700


// Cenario 3: Saque com valor máximo
// Dado que meu saldo é de 1.000 reais
// E o valor máximo por operação é de 700 reais
// Quando faço um saque no valor de 701 reis
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação


var saldo = 1000

function saque(valor) {
    if (valor > saldo) {
        console.log('Valor do saque superior ao saldo')
    } else if (valor > 700) {
        console.log('O valor do saque é superior ao máximo permitido por operação')
    } else {
        saldo = saldo - valor
        console.log(saldo)
    }
}

saque(701) // O valor do saque é superior ao máximo permitido por operação
saque(650) // 350