


function check(a,x){
    for(let i=0; i<a.length; i++){
        if(a[i]==x){
            return true
        }
    }

    return false
}

console.log(check([66,101],66));


function check2(a,x){
    return a.some((val)=>val===x)
}

console.log(check2([66,101],66))