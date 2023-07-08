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