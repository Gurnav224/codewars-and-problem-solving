class MyArray  {
    constructor(){
        this.length = 0;
        this.data = {}
    }
    push(item){
         this.data[this.length] = item;
        this.length++
        return this.length
    }
    getAll(){
        return  Object.values(this.data)
    }
    get(index){
        return this.data[index]
    }
    pop(){
        if(this.length===0) return undefined
        let lastItem  = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem
    }
    shift(){
        if(this.length===0) return undefined
        const firstItem = this.data[0];

        for(let i=0; i<this.length; i++){
            this.data[i] = this.data[i+1]
        }

        delete this.data[this.length-1];

        this.length--;

        return firstItem
    }

    delete(index){
        if(index >= this.length || index < 0) return undefined
       let item = this.data[index];

       for(let i=index; i<this.length; i++){
         this.data[i] = this.data[i+1]
       }

       delete this.data[this.length-1];

       this.length--;

       return item
    }
}

const myArr = new MyArray();


console.log(myArr.push('hello'))

console.log(myArr.push('how'))
console.log(myArr.push('are'))
console.log(myArr.push('you'))

console.log(myArr.delete(0))




console.log(myArr.shift())

console.log(myArr.push('one'))
console.log(myArr.push('two'))
console.log(myArr.push('three'))

console.log(myArr.getAll())


console.log(myArr.shift())