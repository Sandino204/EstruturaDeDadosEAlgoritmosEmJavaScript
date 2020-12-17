class ArrayList{

    constructor(){
        this._array = []
    }

    insert(item){
        this._array.push(item)
    }

    toString(){
        return this._array.join()
    }

    sequentialSearch(item){
        for(var i = 0; i < this._array.length; i++){
            if(item === this._array[i]){
                return i
            }
        }

        return -1
    }

    swap(array, index1, index2){
        // let aux = array[index1]
        // array[index1] = array[index2] 
        // array[index2] = aux
        [array[index1], array[index2]] = [array[index2], array[index1]]
    }

    
    partition(array, left, right){
        let pivot = array[Math.floor((right + left) / 2)]
        let i = left
        let j = right

        while(i <= j){
            while(array[i] < pivot){
                i++
            }
            while(array[j] > pivot){
                j--
            }
            if(i <= j){
                this.swap(array, i, j)
                i++
                j--
            }
        }

        return i
    }

    quick(array, left, right){
        let index
        if(array.length > 1){
            index = this.partition(array, left, right)

            if(left < index -1){
                this.quick(array, left, index - 1)
            }

            if(index < right){
                this.quick(array, index, right)
            }
        }
    }

    quickSort(){
        this.quick(this._array, 0, this._array.length - 1)
    }

    binarySearch(item){
        this.quickSort()

        let low = 0
        let high = this._array.length - 1
        let mid
        let element

        while(low <= high){
            mid = Math.floor((low + high) / 2)

            element = array[mid]

            if(element < item){
                low = mid + 1 
            }else if(element > item){
                high = mid - 1
            }else{
                return mid
            }
        }

        return -1
    }



}

let array = new ArrayList

array.insert(5)
array.insert(4)
array.insert(3)
array.insert(2)
array.insert(1)
array.insert(6)

console.log(array.sequentialSearch(2))
console.log(array.binarySearch(2))
