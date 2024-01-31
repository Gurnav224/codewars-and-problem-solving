

function enumerable(all,fun){

    for(let i=0; i<all.length; i++){
       if(!fun(all[i])){
        return false
       }
    }
    return true
}


console.log(enumerable([1,2,,3,4],function(v){return v<9}))