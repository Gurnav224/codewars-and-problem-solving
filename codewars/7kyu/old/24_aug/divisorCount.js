


function divisorCount(n){
    let count = 0;

    for(let i=1; i<=n; i++){
        if(n%i===0){
            count++
        }
    }
    return count
}

console.log(divisorCount(30))