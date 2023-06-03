console.log('<<<<<< FUNÇÕES >>>>>>')


function soma(n1, n2) {
    console.log(n1 + n2)
}

soma() // NaN
soma(5, 3) // 8

function boasVindas(nome) {
    console.log('Sejam bem-vindo ' + nome + '!') // Sejam bem-vindo Emanuel!
}

boasVindas('Emanuel')


function somaComReturn(n1, n2) {
    return n1 + n2
}

var total = somaComReturn(4, 7)
console.log(total) // 11