

String.prototype.reverse = function(){
 let str = "";
 for(let i=this.length-1; i>=0; i--){
    str = str+this[i]
 }
 return str
}

let l = "helllo";

l.reverse();
console.log(l.reverse())
