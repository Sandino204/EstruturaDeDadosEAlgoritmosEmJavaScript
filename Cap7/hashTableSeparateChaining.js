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

class HashTableSeparateChaining{

    constructor(){
        this._table = []
    }

    loseLoseHashCode(key){
        let hash = 0
        for(let i = 0; i < key.length; i++){
            hash += key.charCodeAt(i)
        }

        return hash % 37
    }

    valuePair(key, value){
        return {
            key: key, 
            value: value
        }
    }

    put(key, value){
        let position = this.loseLoseHashCode(key)
        
        if(this._table[position] === undefined){
            this._table[position] = new LinkedList()
        }
        
        this._table[position].append(this.valuePair(key, value))
    }

    get(key){

        let position = this.loseLoseHashCode(key)

        if(this._table[position] !== undefined){

            let current = this._table[position].getHead()
            
            
            while(current.next){
                if(current.element.key === key){
                    return current.element.value
                }

                current = current.next
            }

            if(current.element.key === key){
                return current.element.value
            }

        }

        return undefined
    }

    remove(key){
        let position = this.loseLoseHashCode(key)

        if(this._table[position] !== undefined){
            let current = this._table[position].getHead()
            
            while(current.next){
                if(current.element.key === key){
                    this._table[position].remove(current.element)
                    if(this._table[position].isEmpty()){
                        this._table[position] = undefined
                    }
                    return true
                }

                current = current.next
            }

            if(current.element.key === key){
                this._table[position].remove(current.element)
                if(this._table[position].isEmpty()){
                    this._table[position] = undefined
                }

                return true
            }

            
        }

        return false
    }

    print(){
        for(let i = 0; i < this._table.length; i++){
            if(this._table[i] !== undefined){
                console.log(i + ': ' + this._table[i])
            }
        }
    }

}

