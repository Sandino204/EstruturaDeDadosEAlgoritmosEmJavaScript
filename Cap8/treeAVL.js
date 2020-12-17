class TreeAVL{
    
    constructor(){
        this._root = null
    }

    node(key){
        return{
            key: key,
            left: null,
            right: null 
        }
    }

    heightNode(node){
        if(node === null){
            return -1
        }else{
            return Math.max(this.heightNode(node.left)), 
                this.heightNode(node.right) + 1 
        }
    }

    rotationRR(node){
        let tmp = node.right
        node.right = tmp.left
        tmp.left = node
        return tmp
    }

    rotationLL(node){
        let tmp = node.left
        node.left = tmp.right
        tmp.right = node
        return tmp
    }

    rotationLR(node){
        node.left = this.rotationRR(node.left)
        return this.rotationLL(node)
    }

    rotationRL(node){
        node.right = this.rotationLL(node.right)
        return this.rotationRR(node)
    }

    insertNode(node, element){
        if(node === null){
            node = this.node(element)
        }else if(element < node.key){
            node.left = this.insertNode(node.left, element)
            if(node.left !== null){
                if((this.heightNode(node.left) - this.heightNode(node.right)) > 1){
                    if(element < node.left.key){
                        node = this.rotationLL(node)
                    }else{
                        node = this.rotationLR(node)
                    }
                }
            }   
        }else if(element > node.key){
            node.right = this.insertNode(node.right, element)
            if(node.right !== null){
                if((this.heightNode(node.right) - this.heightNode(node.left)) > 1){
                    if(element > node.right.key){
                        node = node.rotationRR(node)
                    }else{
                        node = this.rotationRL(node)
                    }
                }
            }
        }

        return node
    }

    insert(key){
        let newNode = this.node(key)
        if(this._root === null){
            this._root = newNode
        }else{
            this.insertNode(this._root, newNode)
        }
    }

    inOrderTraverseNode(node, callback){
        if(node !== null){
            this.inOrderTraverseNode(node.left, callback)
            callback(node.key)
            this.inOrderTraverseNode(node.right, callback)
        }
    }

    inOrderTraverse(callback){
        this.inOrderTraverseNode(this._root, callback)
    }

    preOrderTraverseNode(node, callback){
        if(node !== null){
            callback(node.key)
            this.preOrderTraverseNode(node.left, callback)
            this.preOrderTraverseNode(node.right, callback)
        }
    }

    preOrderTraverse(callback){
        this.preOrderTraverseNode(this._root, callback)
    }

    postOrderTraverseNode(node, callback){
        if(node !== null){
            this.postOrderTraverseNode(node.left, callback)
            this.postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }

    postOrderTraverse(callback){
        this.postOrderTraverseNode(this._root, callback)
    }

    minNode(node){
        if(node){
            while(node && node.left !== null){
                node = node.left
            }

            return node.key
        }

        return null
    }

    min(){
        return this.minNode(this._root)
    }

    maxNode(node){
        if(node){
            while(node  && node.right !== null){
                node = node.right
            }

            return node.key
        }

        return null
    }


    max(){
        return this.maxNode(this._root)
    }

    searchNode(node, key){
        if(node === null){
            return false
        }
        if(key < node.key){
            return this.searchNode(node.left, key)
        }else if(key < node.key){
            return this.searchNode(node.right, key)
        }else{
            return true
        }

    }

    search(key){
        return this.searchNode(this._root, key)
    }

    findMinNode(node){
        while(node && node.left !== null){
            node = node.left
        }
        return node
    }

    removeNode(node, key){
        if(node === null){
            return null
        }
        if(key < node.key){
            node.left = this.removeNode(node.left, key)
            return node
        }else if(key > node.key){
            node.right = this.removeNode(node.right, key)
            return node
        }else{
            if(node.left === null && node.right === null){
                node = null
                return node
            }

            if(node.left === null){
                node = node.right
                return node
            }else if(node.right === null){
                node = node.left;
                return node
            }

            let aux = this.findMinNode(node.right)
            node.key = aux.key
            node.right = this.removeNode(node.right, aux.key)
            return node
        }
    }

    remove(key){
        this._root = this.removeNode(this._root, key)
    }

}