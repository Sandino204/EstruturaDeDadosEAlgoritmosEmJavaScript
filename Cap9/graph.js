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

class Queue {

    constructor(){
      this._items = []
    }
  
    get front(){
      return this._items[0]
    }
  
    enqueue(element){
      
      return this._items.push(element)
      
    }
  
    dequeue(){
  
      return this._items.shift()
    
    }
  
    isEmpty(){
      return this._items.length == 0
    }
  
    size(){
      return this._items.length
    }
  
}

class Stack {
    constructor() {
      this._items = [];
      this._count = [];
    }
  
    push(element) {
      const items = this._items;
      const count = this._count;
      items[count] = element;
      this._count = count + 1;
    }
  
    pop() {
      if (this.isEmpty()) {
        return undefined;
      }
      const items = this._items;
      let count = this._count;
      count--;
      this._count = count;
      const result = items[count];
      delete items[count];
      return result;
    }
  
    peek() {
      if (this.isEmpty()) {
        return undefined;
      }
      const items = this._items;
      const count = this._count;
      return items[count - 1];
    }
  
    isEmpty() {
      return this._count === 0;
    }
  
    size() {
      return this._count;
    }
  
    clear() {
      /* while (!this.isEmpty()) {
          this.pop();
        } */
      this._count = 0
      this._items = [];
    }
  
    toString() {
      if (this.isEmpty()) {
        return '';
      }
      const items = this._items;
      const count = this._count;
      let objString = `${items[0]}`;
      for (let i = 1; i < count; i++) {
        objString = ` ${objString} , ${items[i]} `;
      }
      return objString;
    }
}

class Graph{
    
    constructor(){
        this._vertex = []
        this._adjList = new Dictionary
        this._time = 0
    }

    addVertex(v){
        this._vertex.push(v)
        this._adjList.set(v, [])
    }

    addEdje(v, w){
        this._adjList.get(v).push(w)
        this._adjList.get(w).push(v)
    }

    initializeColor(){
        let color = []
        for(let i = 0; i < this._vertex.length; i++){
            color[this._vertex[i]] = 'white'
        }
        return color
    }

    bfs(v, callback){

        let color = this.initializeColor()
        let queue = new Queue
        let d = []
        let pred = []
        queue.enqueue(v)

        for(let i = 0; i < this._vertex.length; i++){
            d[this._vertex[i]] = 0
            pred[this._vertex[i]] = null
        }

        while(!queue.isEmpty()){
        
            let u = queue.dequeue()
            neighbors = this._adjList.get(u)
            color[u] = 'grey'

            for(let i = 0; i < neighbors.length; i++){
                let w = neighbors[i]
                if(color[w] === 'white'){
                    color[w] = 'grey'
                    d[w] = d[u] + 1
                    pred[w] = u
                    queue.enqueue(w)
                }
            }

            color[u] = 'black'   
        
        }
        
        return{ 
            distances: d, 
            predecessors: pred
        }

    }

    dfsVisit(u, color, d, f, p){
        color[u] = 'grey'
        d[u] = ++time

        let neighbors = this._adjList.get(u)
        for(let i = 0; i < neighbors.length; i++){
            let w = neighbors[i]
            if(color[w] === 'white'){
                this.dfsVisit(w, color, callback)
            }
        }
        color[u] = 'black'
        f[u] = ++time
    }

    dfs(callback){
        let color = this.initializeColor()
        

        let d = []
        let f = []
        let p = []
        this._time = 0
        
        for(let i = 0; i < this._vertex.length; i++){
            f[this._vertex[i]] = 0 
            d[this._vertex[i]] = 0 
            p[this._vertex[i]] = null
        }

        for(var i = 0; i < this._vertex.length; i++){
            if(color[this._vertex[i]] === 'white'){
                this.dfgVisit(this._vertex[i], color, d, f, p)
            }
        }

        return {
            discovery: d, 
            finished: f, 
            predecessors: p
        }
    }

    

    getVertices() {
        return this._vertex;
    }
    
    getAdjList() {
        return this._adjList;
    }

}