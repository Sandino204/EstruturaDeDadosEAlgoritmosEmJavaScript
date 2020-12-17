var params = [3, 4, 5]

function sum(x, y, z){
    return(x + y + z)
}

console.log(sum(...params))

function restParameterFunction(x, y, ...a){
    return (x + y)* a.length
}

console.log(restParameterFunction(1, 2, "hello", true, 7))

var [x, y] = ['a', 'b']

console.log(x, y)

[x, y] = [y, x]

console.log(x, y)

var obj = {x, y}

console.log(obj)

var hello = {
    name: 'abcdef', 
    printHello(){
        console.log("Hello")
    }
}

console.log(hello.printHello())

