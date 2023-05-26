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

// ***********************************************

// Operadores de Comparação //

// Operador de igualdade (==)
// Operador de igualdade estrita (===)
// Operador de desigualdade (!=)
// Operador de desigualdade estrita (!==)
// Operador maior que (>)
// Operador maior ou igual que (>=)
// Operador menor que (<)
// Operador menor ou igual que (<=)

var v1 = 5
var v2 = 5
var resultado = v1 === v2
console.log(resultado) // true

var v3 = 5
var v4 = '5'
var resultado = v3 === v4
console.log(resultado) // false

var resultado = v3 == v4
console.log(resultado) // true

var resultado = v3 != v4
console.log(resultado) // false

var resultado = v3 !== v4
console.log(resultado) // true