

var min = function(list){

    let minNum = list[0]
    
    for(let i=0; i<list.length; i++){
        if(minNum>list[i]){
            minNum = list[i]
        }
    }

    return minNum
}


var max = function(list){
    let maxNum = list[0]
    for(let i=0; i<list.length; i++){
        if(maxNum<list[i]){
            maxNum = list[i]
        }
    }
   return maxNum
}

console.log(min([4,6,2,1,9,63,-134,566]))

console.log(max([4,6,2,1,9,63,-134,566] ))