class hashTableLinearProbing{

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
            this._table[position] = this.valuePair(key, value)
        }else{
            let index = ++position
            
            while(this._table[index] !== undefined){
                index++
            }

            this._table[index] = this.valuePair(key, value)

        }
    }

    get(key){

        let position = this.loseLoseHashCode(key)

        if(this._table[position] !== undefined){
            if(this._table[position].key === key){
                return this._table[position].value
            }else{
                let index = ++position
                while(this._table[index] !== undefined && (this._table[index]) && this._table[index].key !== key){
                    index++
                }
                if(this._table[index] && this._table[index].key === key){
                    return table[index].value
                }
            }
        }

        return undefined
    }

    remove(key){

        let position = this.loseLoseHashCode(key)

        if(this._table[position] !== undefined){
            if(this._table[position].key === key){
                this._table[position].value = undefined

                return true
            }else{

                let index = ++position
                while(this._table[index] !== undefined && (this._table[index]) && this._table[index].key !== key){
                    index++
                }
                if(this._table[index] && this._table[index].key === key){
                    table[index].value = undefined
                    return true
                }
            }
        }

        return false
    }

}