
function descendingOrder(num){
    //...
    let str = num.toString();
    let arr = str.split('');
    return parseInt(arr.sort((a,b)=>b-a).join(""))
  }


//   console.log(descendingOrder(42145))
//   console.log(descendingOrder(1021))

function descendingOrder2(num){
    let str =  num.toString();
    let arr = str.split('');

    for(let i = 0 ; i < arr.length;  i++){
        for(let j = i+1; j < arr.length; j++ ){
            if(arr[i] < arr[j]){
                let temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }



    return arr.join("")
}


console.log(descendingOrder2(42145))