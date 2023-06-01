console.log('<<<<<< OBJETOS >>>>>>')


var yoda = {}

yoda.nome = 'Mestre Yoda'
yoda.idade = 100
yoda.jedi = true

console.log(yoda)
// { nome: 'Mestre Yoda', idade: 100, jedi: true}


var pessoa = {
    nome: 'Emanuel Santos',
    idade: 37,
    profissao: 'Analista QA',
    estudante: true,
    mostrarIdade: function () {
        console.log(`A idade de ${this.nome} é ${this.idade} anos de idade.`)
    }
}

console.log(pessoa)
// {nome: 'Emanuel Santos', idade: 37, profissao: 'Analista QA', estudante: true, mostrarIdade: ƒ}

pessoa.mostrarIdade()
// A idade de Emanuel Santos é 37 anos de idade.