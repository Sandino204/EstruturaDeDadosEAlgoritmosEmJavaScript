class BinaryTree{
    
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

    insertNode(node, newNode){
        if(newNode.key < node.key){
            if(node.left === null){
                node.left = newNode
            }else{
                this.insertNode(node.left, newNode)
            }
        }else{
            if(node.right === null){
                node.right = newNode
            }else{
                this.insertNode(node.right, newNode)
            }
        }
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

function printNode(value){
    console.log(value)
}

let tree = new BinaryTree

tree.insert(11)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)

// tree.inOrderTraverse(printNode)
// tree.preOrderTraverse(printNode)
// tree.postOrderTraverse(printNode)
console.log(tree.min())
console.log(tree.max())
console.log(tree.search(1))
console.log(tree.search(8))
