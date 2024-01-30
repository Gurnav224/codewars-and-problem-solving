

function isRealyNaN(val){
   
    return typeof val==='number' && isNaN(val)
}


console.log(isRealyNaN('123'))