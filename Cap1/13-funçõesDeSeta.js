// var circleArea = function circleArea(r){
//     let PI = 3.14
//     let area = PI * r * r
//     return area
// }

let circleArea = (r) => {
    const PI = 3.14
    let area = PI * r * r
    return area
}

console.log(circleArea(2))

function sum(x = 1, y = 2, z = 3){
    return x + y + z
}
console.log(sum(4,2))