
// solution 1
function allStartCodeChallenge(words,char){
 let count = 0;
 let wordLowerCase = words.toLowerCase();
 let charLowerCase = char.toLowerCase()

 for(let i=0; i<wordLowerCase.length; i++){
     if(wordLowerCase.charAt(i)===charLowerCase){
        count++;
     }

 }
 return count
}


console.log(allStartCodeChallenge("HellO","L"))


// solution 2


function allStartCodeChallenge2(words,char){
    let count = 0;
    let wordLowerCase = words.toLowerCase();
    let charLowerCase = char.toLowerCase();

    let chars = wordLowerCase.split("");

    for(let i=0; i<chars.length; i++){
        if(chars[i]===charLowerCase){
            count++
        }
    }
    return count
}


console.log(allStartCodeChallenge2("Hello","L"))