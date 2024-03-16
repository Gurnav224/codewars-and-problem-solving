

function fakeBin(str){
 let result = '';

 for(let i=0; i<str.length; i++){
    let digit = parseInt(str[i],10);
    if(digit<5){
        result = result+"0"
    }
    else{
        result = result+"1"
    }
 }
 return result
}

console.log(fakeBin('45385593107843568'))