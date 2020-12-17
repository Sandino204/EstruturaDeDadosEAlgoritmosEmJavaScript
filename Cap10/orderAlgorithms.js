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

    swap(array, index1, index2){
        // let aux = array[index1]
        // array[index1] = array[index2] 
        // array[index2] = aux
        [array[index1], array[index2]] = [array[index2], array[index1]]
    }

    bubbleSort(order){
        let length = this._array.length
        if(order === -1){
            for(let i = 0; i < length; i++){
                for(let j = 0; j < length-1-i; j++){
                    if(this._array[j] < this._array[j+1]){
                        this.swap(this._array, j, j+1)
                    }
                }
            }
        }
        else{
            for(let i = 0; i < length; i++){
                for(let j = 0; j < length-1-i; j++){
                    if(this._array[j] > this._array[j+1]){
                        this.swap(this._array, j, j+1)
                    }
                }
            }
        }
    }

    selectionSort(order){
        let length = this._array.length
        let indexMin

        if(order === -1){
            for(let i = 0; i < length-1; i++){
                indexMin = i
                for(let j = i; j < length; j++){
                    if(this._array[indexMin] < this._array[j]){
                        indexMin = j
                    }
                }
                if(i !== indexMin){
                    this.swap(this._array, i, indexMin)
                }
            }
        }else{
            for(let i = 0; i < length-1; i++){
                indexMin = i
                for(let j = i; j < length; j++){
                    if(this._array[indexMin] > this._array[j]){
                        indexMin = j
                    }
                }
                if(i !== indexMin){
                    this.swap(this._array, i, indexMin)
                }
            }
        }
    }

    insectionSort(order){
        let length = this._array.length
        let j 
        let temp       
        if(order === -1){
            for(let i = 1; i < length; i++){
                j = i
                temp = this._array[i]
                while(j > 0 && this._array[j - 1] < temp){
                    this._array[j] = this._array[j-1]
                    j--
                }
                this._array[j] = temp
            }    
        }else{
            for(let i = 1; i < length; i++){
                j = i
                temp = this._array[i]
                while(j > 0 && this._array[j - 1] > temp){
                    this._array[j] = this._array[j-1]
                    j--
                }
                this._array[j] = temp
            }
        }
    }

    merge(left, right, order){
        let result = []
        let il = 0
        let ir = 0
            
            while(il < left.length && ir < right.length){
                if(left[il] < right[ir]){
                    result.push(left[il++])
                }else{
                    result.push(right[ir++])
                }
            }

            while(il < left.length){
                result.push(left[il++])
            }

            while(ir < right.length){
                result.push(right[ir++])
            }
        

        return result
    }

    mergeSortRec(array){
        let length = array.length

        if(length === 1){
            return array
        }

        let mid = Math.floor(length / 2)
        let left = array.slice(0, mid)
        let right = array.slice(mid, length)

        return this.merge(this.mergeSortRec(left), this.mergeSortRec(right))
        
    }

    mergeSort(){
        array = this.mergeSortRec(this._array)
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

    heapify(array, heapSize, i){
        let left = i * 2 + 1
        let right = i * 2 + 2
        let largest = i

        if(left < heapSize && array[left] > array[largest]){
            largest = left
        }

        if(right < heapSize && array[right] > array[largest]){
            largest = right
        }

        if(largest !== i){
            this.swap(array, i, largest)
            this.heapify(array, heapSize, largest)
        }
        
    }

    buildHeap(array){
        let heapSize = array.length
        for(let i = Math.floor(array.length / 2); i >= 0; i--){
            this.heapify(array, heapSize, i)
        }
    }

    heapSort(){
        let heapSize = this._array.length
        this.buildHeap(this._array)

        while(heapSize > 1){
            heapSize--;
            this.swap(this._array, 0, heapSize)
            this.heapify(array, heapSize, 0)
        }
    }

}

// let array = new ArrayList

// array.insert(5)
// array.insert(4)
// array.insert(3)
// array.insert(2)
// array.insert(1)
// array.insert(6)

// // console.log(array.toString())
// // array.bubbleSort()
// // console.log(array.toString())
// // array.bubbleSort(-1)
// // console.log(array.toString())

// // console.log(array.toString())
// // array.selectionSort()
// // console.log(array.toString())
// // array.selectionSort(-1)
// // console.log(array.toString())

// // console.log(array.toString())
// // array.insectionSort()
// // console.log(array.toString())
// // array.insectionSort(-1)
// // console.log(array.toString())

// // console.log(array.toString())
// // array.mergeSort()
// // console.log(array.toString())

// // console.log(array.toString())
// // array.quickSort()
// // console.log(array.toString())

// console.log(array.toString())
// array.heapSort()
// console.log(array.toString())
