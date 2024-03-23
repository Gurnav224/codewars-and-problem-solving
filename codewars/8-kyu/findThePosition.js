

function position(letter){
    let lowerCase = letter.toLowerCase();
    let position = lowerCase.charCodeAt(0)-96;

   
 return 'Position of alphabet: '+position

}
console.log(position('a'))