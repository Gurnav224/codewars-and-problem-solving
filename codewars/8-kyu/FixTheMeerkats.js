

function fixTheMeerkats(arr){

    if(arr.length>3){
        return "invalid input"
    }

    [arr[0],arr[2]]= [arr[2],arr[0]]

    return arr
}

console.log(fixTheMeerkats(["tail", "body", "head"]))