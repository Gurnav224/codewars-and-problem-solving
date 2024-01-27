function sumArray(array) {

    let max = array[0];
    let min = array[0];
    let sum = 0;
    

    for(let i=0; i<array.length; i++){

        sum += array[i]

        if(max<array[i]  ){
            max = array[i]
           
        }

       if(min>array[i]){
        min = array[i]
       }

    }

    sum -= max+min

return sum
}


console.log(sumArray([6,2,1,10,8]))