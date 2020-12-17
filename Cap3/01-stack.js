// //Criando a pilha 

// function Stack(){
//     //Propriedades e metodos devem ser inseridos aqui

//     let items = []

//     //Empilhando elementos na pilha

//     this.push = function(element){
//         items.push(element)
//     }

//     //desempilhando elementos da pilha
//     this.pop = function(){
//         return items.pop
//     }

//     //Dando uma espiada no elemento que está no topo da pilha
//     this.peek = function(){
//         return items[items.length - 1]
//     }

//     //Verificando se a pilha está vazia
//     this.isEmpty = function(){
//         return items.length == 0
//     }

//     //Demostra o tamanho da pilha
//     this.size = function(){
//         return items.length
//     }

//     //Limpando 
//     this.clear = function(){
//         items = []
//     }

//     //Exibindo os elementos da pilha
//     this.print = function(){
//         console.log(items.toString())
//     }

// }
// //

// let stack = new Stack()

// console.log(stack.isEmpty())

// stack.push(5)
// stack.push(8)

// console.log(stack.peek())
// console.log(stack.print())

// stack.push(11)
// console.log(stack.size())
// console.log(stack.isEmpty())

// stack.push(15)

// stack.pop()
// stack.pop()
// console.log(stack.size())
// stack.print()

// //Declarando a classe Stack usando a sintaxe da ES6

// class Stack2 {
//     constructor(){
//         this.items = []
//     }
//     push(e){
//         this.items.push(e)
//     }
//     pop(){
//         return this.items.pop()
//     }
//     peek(){
//         return items[items.length - 1]
//     }
//     //Verificando se a pilha está vazia
//     isEmpty(){
//         return items.length == 0
//     }

//     //Demostra o tamanho da pilha
//     size(){
//         return items.length
//     }

//     //Limpando 
//     clear(){
//         items = []
//     }

//     //Exibindo os elementos da pilha
//     print(){
//         console.log(items.toString())
//     }
// }

// //Classs

// class Stack3 {
//     constructor(){
//         this.items = []
//     }
//     push(e){
//         this.items.push(e)
//     }
//     pop(){
//         return this.items.pop()
//     }
//     peek(){
//         return items[items.length - 1]
//     }
//     //Verificando se a pilha está vazia
//     isEmpty(){
//         return items.length == 0
//     }

//     //Demostra o tamanho da pilha
//     size(){
//         return items.length
//     }

//     //Limpando 
//     clear(){
//         items = []
//     }

//     //Exibindo os elementos da pilha
//     print(){
//         console.log(items.toString())
//     }
// }

// // Classe ES6 Symbols no escopo 

// const _items = Symbol('stackItems');

// class Stack5 {
//   constructor() {
//     this[_items] = [];
//   }

//   push(element) {
//     this[_items].push(element);
//   }

//   pop() {
//     return this[_items].pop();
//   }

//   peek() {
//     return this[_items][this[_items].length - 1];
//   }

//   isEmpty() {
//     return this[_items].length === 0;
//   }

//   size() {
//     return this[_items].length;
//   }

//   clear() {
//     this[_items] = [];
//   }

//   print() {
//     console.log(this.toString());
//   }

//   toString() {
//     return this[_items].toString();
//   }
// }

// const stack5 = new Stack5();
// const objectSymbols = Object.getOwnPropertySymbols(stack5);
// console.log(objectSymbols.length); // 1
// console.log(objectSymbols); // [Symbol()]
// console.log(objectSymbols[0]); // Symbol()
// stack5[objectSymbols[0]].push(1);
// stack5.print(); // 5, 8, 1

// //Classes ES6 com weakMap

class Stack {
  constructor() {
    this._items = [];
    this._count = [];
  }

  push(element) {
    const items = this._items;
    const count = this._count;
    items[count] = element;
    this._count = count + 1;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const items = this._items;
    let count = this._count;
    count--;
    this._count = count;
    const result = items[count];
    delete items[count];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    const items = this._items;
    const count = this._count;
    return items[count - 1];
  }

  isEmpty() {
    return this._count === 0;
  }

  size() {
    return this._count;
  }

  clear() {
    /* while (!this.isEmpty()) {
        this.pop();
      } */
    this._count = 0
    this._items = [];
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const items = this._items;
    const count = this._count;
    let objString = `${items[0]}`;
    for (let i = 1; i < count; i++) {
      objString = ` ${objString} , ${items[i]} `;
    }
    return objString;
  }
}

// decimal para binario 

function divideBy2(decNumber){
  var remStack = new Stack() 
  var rem 
  var binaryString = ''

  while(decNumber > 0){
    rem = Math.floor(decNumber % 2)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / 2)
  }
  while(!remStack.isEmpty()){
    binaryString += remStack.pop().toString()
  }
  return binaryString;
}

console.log(divideBy2(233))
console.log(divideBy2(10))
console.log(divideBy2(1000))


function baseConverter(decNumber, base){

  var remStack = new Stack
  var rem
  var baseString = ''
  var digits = '0123456789ABCDEF'

  while(decNumber > 0){
    rem = Math.floor(decNumber % base)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / base)
  }
  while(!remStack.isEmpty()){
    baseString += digits[remStack.pop()]
  }

  return baseString;
}

console.log(baseConverter(100345, 2))
console.log(baseConverter(100345, 8))
console.log(baseConverter(100345, 16))
