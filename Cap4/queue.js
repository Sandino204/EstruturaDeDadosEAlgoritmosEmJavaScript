


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



class PriorityQueue{

  constructor(){
    this._items = []
  }

  enqueue(element, priority){
    
    let queueElement = {
      element: element, 
      priority: priority
    }

    let added = false

    for(let i = 0; i < this._items.length; i++){
      
      if(queueElement.priority < this._items[i].priority){
        
        this._items.splice(i, 0, queueElement)
        added = true
        break

      }

    }

    if(!added){
      this._items.push(queueElement)
    }

    return queueElement

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

function hotPotato (nameList, num){

  let queue = new Queue

  for(let i = 0; i < nameList.length; i++){
    queue.enqueue(nameList[i])
  }

  let eliminated = ''
  while(queue.size() > 1){
    for(let i = 0; i < num; i++){
      queue.enqueue(queue.dequeue())
    }
    
    eliminated = queue.dequeue()

    console.log(eliminated + ' was eliminated from the hot potato game.')

  }

  return queue.dequeue()
}

let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
let winner = hotPotato(names, 7)
console.log('The winner is: ' + winner)