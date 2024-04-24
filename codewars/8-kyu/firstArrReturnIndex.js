

function returnArrIndex(arr,n=1){

  
    if(n===undefined) return arr[0]

    let newarr = []
    for(let i=0; i<n; i++){
        if(i>=arr.length) break;
    newarr.push(arr[i])
    }
    return newarr
}


var arr = ['a', 'b', 'c', 'd', 'e'];

console.log(returnArrIndex([...arr],2))
console.log(returnArrIndex([...arr]))