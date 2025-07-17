


function reverse(array){
    let rev = [];

    for(let i = array.length - 1; i >=0; i--){
        rev.push(array[i])
    }

    return rev
}


console.log(reverse([1,2,3]))