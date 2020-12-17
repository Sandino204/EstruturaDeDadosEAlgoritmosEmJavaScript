var framework = 'Angular'
var framework = "React"
console.log(framework)

let language = 'JavaScript!'
// let language = 'Ruby!' Da Erro
console.log(language)

let movie = 'Lord of the Rings'
// var movie = "Batman vs Superman" da um erro pois a variavel ja foin declarado

function starWarsFan(){
    movie = 'Star Wars'
    return movie
}

function marvelFan(){
    movie = 'The Avengers'
    return movie
}

function blizzardFan(){
    let isFan = true
    let phrase = 'Warcraft'
    console.log('Before if: ' + phrase)
    if(isFan){
        let phrase = 'initial text'
        phrase = 'For the Horde!'
        console.log('Inside if: ' + phrase)
    }
    phrase = 'For the Aliance!'
    console.log("after if: " + phrase)
}

console.log(movie)
console.log(starWarsFan())
console.log(marvelFan())
console.log(movie)
blizzardFan()

const PI = 3.14
// PI = 3.0 lança um erro pois PI e uma constante
console.log(PI)