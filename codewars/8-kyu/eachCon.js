

function each_cons(list, n) {
    let result = [];
    for (let i = 0; i <= list.length - n; i++) {
        result.push(list.slice(i, i + n));
    }
    return result;
}


console.log(each_cons([1,2,3,4,5],2))

function each_cons2(list,n){
 let newArr =[];
 for(let i=0; i<=list.length-n; i++){
    newArr.push(list.slice(i,i+n))
 }
 return newArr
}

console.log(each_cons2([1,2,3,4,5],3))
