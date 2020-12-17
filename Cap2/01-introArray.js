let averageTemp = []
averageTemp[0] = 31.9
averageTemp[1] = 35.3
averageTemp[0] = 42.4
averageTemp[0] = 52
averageTemp[0] = 68.8

let daysOfWeek = []
daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturnday"]
console.log(daysOfWeek.length)


// Acessando elementos e iterando em um array
for(let i = 0; i <= daysOfWeek.length; i++){
    console.log(daysOfWeek[i])
}

let fibonacci = []

fibonacci[1] = 1
fibonacci[2] = 1

for(i = 3; i <= 20; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
}

for(i = 1; i < fibonacci.length; i++){
    console.log(fibonacci[i])
}

//Acrecentando elementos 
var numbers = [0,1,2,3, 4, 5, 6, 7, 8, 9]

numbers[numbers.length] = 10

//Usando o metodo push

numbers.push(11)

numbers.push(12, 13)

//inserindo elementos na primeira posição

for(i = numbers.length; i >= 0; i--){
    numbers[i] = numbers[i - 1]
}
numbers[0] = -1

// Usando o metodo unshift 

numbers.unshift(-2)
numbers.unshift(-4, -3)

// Removendo Elementos 

numbers.pop()

// Removendo um elemento da primeira posição

for(i = 0; i < numbers.length; i++){
    numbers[i] = numbers[i + 1]
}

// Usando o metodo Shift
numbers.shift()

// Acrescentando e removendo elementos de uma posição especifica 

numbers.slice(5, 3)

//Primeiro Valor e a posição, o segundo e os valores a ser deletado, os outros sao os valores a serem adicionados na posição preenchida
numbers.slice(5, 0, 2, 3, 4)

//Arrays bidimensionais e multidimensionais

let averageTempDay1 = [72, 75, 79, 79, 81, 81]
let averageTempDay2 = [81,79, 75, 75, 73, 72]

let averageTemps = []
averageTemps[0] = averageTempDay1
averageTemps[1] = averageTempDay2

console.log(averageTemps[0][3])
console.log(averageTemps[1][4])

//Iterando pelos elementos de um array

function printMatrix(myMatrix){
    for(let i = 0; i < myMatrix.length; i++){
        for(let j = 0; j < myMatrix[i].length; j++){
            console.log(myMatrix[i][j])
        }
    }
}

printMatrix(averageTemps)

// Arrays multidimensionais

let matrix3x3x3 = []
for(i = 0; i < 3; i++){
    matrix3x3x3[i] = []
    for(let j = 0; j < 3; j++){
        matrix3x3x3[i][j] = []
        for(let h = 0; h < 3; h++){
            matrix3x3x3[i][j][h] = i+j+h
        }
    }
}

for(i = 0; i < matrix3x3x3.length; i++){
    for(j = 0; j < matrix3x3x3[i].length; j++){
        for(h = 0; h < matrix3x3x3[i][j].length; h++){
            console.log(matrix3x3x3[i][j][h])
        }
    }
}

//Referencias para metodos de array em javascript

//Juntando varios arrays

let zero = 0
let positiveNumbers = [1,2,3]
let negativeNumbers = [-3,-2,-1]

let num = negativeNumbers.concat(zero, positiveNumbers)

// Funções de iteração

let isEven = function(x){

    console.log(x)

    return(x % 2 == 0) ? true : false
}

//Iterando o metodo Every
// Ele testará cada elemento começando pelo primeiro e se não for par a função irá parar, no caso ele ta testando
// Se cada elemento do array atende a especificação
numbers.every(isEven)

//Iterando o metodo some

//ele interará cada elemento ate que a função retorne true
numbers.some(isEven)

numbers.forEach(function(x){
    console.log((x % 2 == 0))
})

// Usando o Map
let myMap = numbers.map(isEven)
//Ele devolve um array so com os valores true e false

//Usando o metodo filter
var evenNumbers = numbers.filter(isEven)
// ele devolve os valores que deram true, no caso os numeros pares

//Usando o metodo Reduce 
numbers.reduce(function(previous, current, index){
    return previous + current
})

// Iterando forEach com ArrowFunctions

numbers.forEach(number => {
    console.log(((number % 2) == number))
})

//Iterando o laço for...of

for(let n of numbers){
    console.log((n % 2 == 0) ? 'even' : 'odd')
}

//usando o novo 
let iterator = numbers[Symbol.iterator]()
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)

//metodo entries, keys e values do array

let aEntries = numbers.entries()
console.log(aEntries.next().value)
console.log(aEntries.next().value)
console.log(aEntries.next().value)
// resulta em [posição, valor] para cada entrada

let aKeys = numbers.keys()
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
// resulta em [indice, (true ou false) se for o ultimo valor do array ele retorna true se não ele retorna false]

let aValues = numbers.values()
console.log(aValues.next())
console.log(aValues.next())
console.log(aValues.next())
// retorna em [valores, (true ou false) se for o ultimo valor do array ele retorna true se não ele retorna false]

//usando o metodo from
let numbers2 = Array.from(numbers)

let evens = Array.from(numbers, x => (x % 2 == 0))

// usando Array.of 

let numbers3 = Array.of(1)
let numbers4 = Array.of(1,2,3,4,5,6)

let numbersCopy = Array.of(...numbers4)

// Usando o metodo fill 
numbersCopy.fill(0)

//podemos passar o indice do inicio do fill 
numbersCopy.fill(2, 1)

//podemos passar o indice ate o final do preenchimento
numbersCopy.fill(1, 3, 4)

let ones = Array(6).fill(1)

let copyArray = [1,2,3,4,5,6]

copyArray.copyWithin(0, 3)


copyArray = [1,2,3,4,5,6]

//copia os valores 
copyArray.copyWithin(1, 3, 5)

//Ordenando elementos
numbers.reverse()
//reverte os valores, o ultimo vira o primeiro e vice versa

numbers.sort()
//Ordena em ordem lexografica 

numbers.sort((a, b) => {
    return a - b
})

function compare(a, b){
    if(a < b){
        return -1
    }if(a > b){
        return 1
    }else{
        return 0
    }
}

numbers.sort(compare)

//Ordenação personalizada

let friends = [
    {name: 'Jhon', age: 30}, 
    {name: 'Ana', age: 20}, 
    {name: 'Chris', age: 25}
]

function comparePerson(a, b){
    if(a.age < b.age){
        return -1
    }else if(a.age > b.age){
        return 1
    }else{
        return 0
    }
}

console.log(friends.sort(comparePerson))

//Ordenando strings

let names = ['Ana', 'ana', 'john', 'John']
console.log(names.sort())

names.sort((a, b) => {
    if(a.toLowerCase() < b.toLowerCase()){
        return -1
    }else if(a.toLowerCase > b.toLowerCase){
        return 1
    }else{
        return 0
    }
})

console.log(names)

var names2 = ['Maéve', 'Maeve']

console.log(names2.sort((a, b) => {
    return a.localeCompare(b)
}))

//Pesquisa
console.log(numbers.indexOf(10))

console.log(numbers.indexOf(100))

numbers.push(10)

console.log(numbers.lastIndexOf(10))
console.log(numbers.lastIndexOf(100))

// usando o metodo find e findIndex, um retorna o primeiro valor encontrado, o sengundo retorna o indice
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function multipleOf13(element, index, array){
    return (element % 13 == 0) ? true : false
}
console.log(numbers.find(multipleOf13))
console.log(numbers.findIndex(multipleOf13))

//Usando o metodo Includes
console.log(numbers.includes(15))
console.log(numbers.includes(20))

//podemos colocar o indice minimo para a procura do includes (numero, indice)
console.log(numbers.includes(4, 5))

//convertendo array em uma string

console.log(numbers.toString())

//Separar os elementos com um separador diferente

let numberString = numbers.join('-')
console.log(numberString)
