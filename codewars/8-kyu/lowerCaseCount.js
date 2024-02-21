

function lowerCaseCount(str){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
            count++;
        }
    }
    return count;
}

console.log(lowerCaseCount("abcDlkfdjs"))


// refactor
function lowerCaseCount2(str){
    let lowerCaseMatches = str.match(/[a-z]/g);
    return lowerCaseMatches?lowerCaseMatches.length:0
}

console.log(lowerCaseCount2("abc"))