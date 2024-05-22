

function countWords(str){

    str = str.trim();

    if(str===''){
        return 0
    }

    const wordPattern = /[a-zA-Z0-9]+(?:[-'`][a-zA-Z0-9]+)*/g;

    const words = str.match(wordPattern);

    return words?words.length:0
}


console.log(countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))