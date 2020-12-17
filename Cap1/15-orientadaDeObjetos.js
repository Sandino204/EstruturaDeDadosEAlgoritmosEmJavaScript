class Book {
    constructor (title, pages, isbn){
        this.title = title, 
        this.pages = pages, 
        this.isbn = isbn
    }
    printIsbn(){
        console.log(this.isbn)
    }
}

let book = new Book('title, pages, isbn')
console.log(book.title)
book.title = 'new title'
console.log(book.title)

class ITBook extends Book{
    constructor(title, pages, isbn, technology){
        super(title, pages, isbn)
        this.technology = technology
    }
    printTecnology(){
        console.log(this.technology)
    }
}

let jsbBook = new ITBook('Learning JS Algorithms', '200', '123456789', 'JavaScript')
console.log(jsbBook.title)
console.log(jsbBook.printIsbn())
console.log(jsbBook.printTecnology())

class Person {
    constructor(name){
        this._name = name        
    }
    
    get name(){
        return this._name
    }
    set name(value){
        this._name = value
    }
}

let lotrChar = new Person('Frodo')
console.log(lotrChar.name)
lotrChar.name = 'Gandalf'
console.log(lotrChar.name)
lotrChar._name = 'Sam'
console.log(lotrChar)
