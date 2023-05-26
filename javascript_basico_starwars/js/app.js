console.log('Olá Javascript, seja bem-vindo!')

var userName = 'Emanuel Santos'
document.getElementById('user-name').innerHTML = userName


// ***********************************************

// Variáveis //

var nome = 'Mestre Yoda'
var idade = 100
var jedi = true

console.log(typeof nome) // string
console.log(typeof idade) // number
console.log(typeof jedi) // boolean

// ***********************************************

// Operadores Matemáticos //

// + para somar
// - para subtrair
// * para multiplicar
// / para dividir

var n1 = 5
var n2 = 5
var total = n1 + n2
console.log(total) // 10

var n3 = 10
var n4 = '10'
var total_2 = n3 + n4
console.log(total_2) // 1010

var total_3 = n3 + parseInt(n4)
console.log(total_3) // 20

var n5 = 10
var n6 = 'dez'
var total_4 = n5 + parseInt(n6)
console.log(total_4) // NaN