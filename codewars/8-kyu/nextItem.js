const { it } = require("node:test");




function nextItem(xs,item){

    array = xs[Symbol.iterator]();


    for(let ele of array){
       if(ele === item){
           return array.next().value
       }
    }

}

console.log(nextItem([1, 2, 3, 4, 5, 6, 7], 3))
console.log(nextItem('testing',"t"))
console.log(nextItem(['a','b','c'],'d'))