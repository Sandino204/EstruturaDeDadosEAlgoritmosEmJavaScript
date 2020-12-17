class LinkedList{

    constructor(){
        this._head = null
        this._length = 0
    }

    node(element, next = null){
        return {
            element: element, 
            next: next
        }
    }  

    append(element){
        
        let node = this.node(element)

        let current

        if(this._head === null){
            
            this._head = node
        
        }else{

            current = this._head

            while(current.next){
                current = current.next
            }

            current.next = node

        }

        this.length++


    }

    removeAt(position){
        
        if(position >= 0 && position < this._length){
          
            let current = this._head
            let previous = null
            let index = 0

            if(position === 0){
                this._head = current.next
            }else{

                while(index++ < position){
                    previous = current
                    current = current.next
                }

                this._length--

                return current.element
            }
            
        }else{
            return null
        }
    }

    insert(position, element){
        
        if(position >= 0 && position <= this._length){

            let node = this.node(element)

            let current = this._head

            let previous

            let index = 0

            if(position === 0){
                node.next = current
                this._head = node
            }else{
                while (index++ < position){
                    previous = current;
                    current = next 
                }

                node.next = current
                previous.next = node
            }

            this.length++

            return true

        }else{
            false
        }

    }

    toString(){

        let current = this._head
        let string = ''

        while(current){
            string += current.element
            current = current.next
            string += ' '
        }

        return string
    }

    indexOf(element){
        let current = this._head
        let index = -1

        while(current){
            if(element === current.element){
                return index;
            }
            index++
            current = current.next
        }

        return -1
    }

    remove(element){
        let index = this.indexOf(element)
        return this.removeAt(index)
    }

    isEmpty(){
        return this._length === 0
    }

    size(){
        return this._length
    }

    getHead(){
        return this._head
    }
}

class DoublyLinkedList{

    constructor(){
        this._head = null
        this._length = 0
        this._tail = null
    }



    node(element, next = null, prev = null){
        return {
            element: element, 
            next: next, 
            prev: prev
        }
    }  

    push(element){
        let node = this.node(element)

        if(this._head === null){
            this._head = node
            this._tail = node
        }else{
            this._tail.next = node
            node.prev = this._tail
            this._tail = node
        }

        this._length++
    }
  
    insert(position, element){
        
        if(position >= 0 && position <= this._length){

            
            let node = this.node(element)
            let current = this._head
            let previous
            let index = 0
            
            if(position === 0){
                if(!this._head){
                    this._head = node
                    this._tail = node
                }else{
                    node.next = node
                    current.prev = node
                    this._head = node
                }
            }else if(position === this._length){
                current =  this._tail
                current.next = node
                node.prev = current
                this._tail = node
            }else{

                while(index++ < position){
                    previous = current
                    current = current.next
                }

                node.next = current
                previous.next = node

                current.prev = node
                node.prev = previous
            }

            this._length++

            return true

        }else{

            return false
        
        }

        
    }

    removeAt(position){

        if(position > -1 && position < this._length){
            
            let currrent = this._head
            let previous = 0
            let index = 0

            if(position === 0){
                
                this._head = currrent.next

                if(this._length === 1){

                    this._tail = null
                
                }else{

                    this._head.prev = null
                
                }
            
            }else if(position === this._length - 1){
                
                currrent = this._tail
                this._tail = currrent.prev
                this._tail.next = null
            
            }else{

                while(index++ < position){
                    previous = currrent
                    currrent = currrent.next        
                }

                previous.next = currrent.next
                currrent.next.prev = previous

            }

            this._length--

            return currrent.element

        }else{ 

            return null
        
        }
    }

    indexOf(element){
        
        let current = this._head
        let index = 0

        while(current !== null){

            if(element === current.element){
                
                return index
            
            }
            
            index++
            current = current.next

        }

        return -1
    }

    getHead(){
        
        return this._head
    
    }

    getTail(){
    
        return this._tail
    
    }

    toString(){
        
        if(this._head == null){
            return ''
        }

        let objString = ` ${this._head.element} `
        let current = this._head.next
        while(current !== null){
            objString = ` ${objString}, ${current.element} `
            current = current.next
        }

        return objString
        
    }

    inverseToString(){

        if(this._tail){
            
            return ''

        }

        let objString = ` ${this._tail.element} `
        let previous = this._tail.prev

        while(previous !== null){

            objString += ` ${objString} , ${previous.element} `
            previous = previous.prev

        }

        return objString

    }

    size(){
        return this._length
    }

}
