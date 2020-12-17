class Set {
    
    constructor(){
        this._items = {}
    }

    has(value){

        return this._items.hasOwnProperty(value)
    
    }

    add(value){

        if(!this.has(value)){
        
            this._items[value] = value
            return true
        
        }

        return false
    
    }

    delete(value){

        if(this.has(value)){

            delete this._items[value]
            return true

        }

        return false

    }

    clear(){
        this._items = {}
    }

    size(){
        return Object.keys(this._items).length
    }

    values(){
        
        let values = []

        for(let i = 0 , keys = Object.keys(this._items); i < keys.length; i++){
            values.push(this._items[keys[i]])
        }

        return values

    }

    union(otherSet){
        
        const unionSet = new Set()
        this.values().forEach(value => unionSet.add(value))
        otherSet.values().forEach(value => unionSet.add(value))
        return unionSet

    }   

    intersection(otherSet){

        let intersectionSet = new Set()

        let values = this.values()

        for(let i = 0; i < values.length; i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i])
            }
        }

        return intersectionSet

    }

    difference(otherSet){
        let differenceSet = new Set()

        let values = this.values()

        for(let i = 0; i < values.length; i++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i])
            }
        }

        return differenceSet
    }

    subSet(otherSet){
        if(this.size() > otherSet.size()){
            return false
        }else{
            let values = this.values()
            for(let i = 0; i < values.length; i++){
                if(!otherSet.has(values[i])){
                    return false
                }
            }
        }

        return true
    }

}
