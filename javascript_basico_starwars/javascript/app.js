const LIST = [
    {
        id: 1,
        nome: 'Mestre Yoda',
        avatar: 'images/yoda.png'
    },
    {
        id: 2,
        nome: 'C3pO',
        avatar: 'images/c3po.png'
    },
    {
        id: 3,
        nome: 'Chewbacca',
        avatar: 'images/chewbacca.png'
    },
    {
        id: 4,
        nome: 'Han Solo',
        avatar: 'images/hansolo.png'
    },
    {
        id: 5,
        nome: 'Princesa Leia',
        avatar: 'images/leia.png'
    },
    {
        id: 6,
        nome: 'Luke Skywalker',
        avatar: 'images/luke.png'
    },
    {
        id: 7,
        nome: 'R2D2',
        avatar: 'images/r2d2.png'
    },
    {
        id: 8,
        nome: 'Darth Vader',
        avatar: 'images/vader.png'
    },
]

const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Emanuel',
        characters: LIST
    }
})
