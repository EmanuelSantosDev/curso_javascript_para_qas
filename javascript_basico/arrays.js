console.log('<<<<<< ARRAYS >>>>>>')


// >>>>>> Exemplo 1


var gaveta = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']

console.log(gaveta[0])
// Meias
console.log(gaveta[2])
// Documentos


// >>>>>> Exemplo 2


var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

personagens.push('C3pO')
personagens.push('R2D2')

console.log(personagens)
// ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader', 'C3pO', 'R2D2']

personagens.pop()

console.log(personagens)
// ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader', 'C3pO']

personagens = personagens.filter(function (p) {
    return p !== 'Darth Vader'
})

console.log(personagens)
// ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'C3pO']

personagens = personagens.filter(function (p) {
    return p === 'Mestre Yoda'
})

console.log(personagens)
// ['Mestre Yoda']