var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']


personagens.forEach(function (p) {
    console.log(p)
})
// Mestre Yoda
// Luke Skywalker
// Princesa Leia
// Darth Vader


for (var i in personagens) {
    console.log(i)
}
// 0
// 1
// 2
// 3


for (var i in personagens) {
    console.log(personagens[i])
}
// Mestre Yoda
// Luke Skywalker
// Princesa Leia
// Darth Vader


for (var i = 0; i <= 5; i++) {
    console.log(i)
}
// 0
// 1
// 2
// 3
// 4
// 5