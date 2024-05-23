

Array.prototype.filter = function(cb){
 const result = [];

 for(let i=0; i<this.length; i++){
    if(cb(this[i],i,this)){
        result.push(this[i])
    }
 }
 return result
}

var arr = [1,2,3,5,4]

let l = arr.filter(i=>{
    return i>3
})

console.log(l)