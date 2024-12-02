

function solve(str){
    let arr = str.split('');

    let lowercaseCount = 0;
    let uppercaseCount = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i].match(/[a-z]/)){
            lowercaseCount ++
        }
        else{
            uppercaseCount++
        }
    }

    if(lowercaseCount > uppercaseCount){
       str =  str.toLowerCase()
    }
    else if(uppercaseCount > lowercaseCount){
      str =   str.toUpperCase()
    }
    else{
     str =   str.toUpperCase()
    }

 return str
}

console.log(solve('Code'))
console.log(solve('COde'))
console.log(solve('CODe'))
console.log(solve('codE'))