class Dictionary{
    
    constructor(){
        this._items = {}
    }

    has(key){
        return key in this._items
    }

    set(key, value){
        this._items[key] = value
    }

    get(key){
        return this.has(key) ? this._items[key] : undefined
    }

    delete(key){

        if(this.has(key)){
            delete this._items[key]
            return true
        }

        return false
    }

    values(){
        let values = []
        for(let k in this._items){
            if(this.has(k)){
                values.push(this._items[k])
            }
        }

        return values
    }

    keys(){
        return Object.keys(this._items)
    }

    getItems(){
        return this._items
    }

    clear(){
        this._items = {}
    }

    size(){
        return Object.keys(this._items).length
    }

    isEmpty() {
        return this.size() === 0;
    }
}


