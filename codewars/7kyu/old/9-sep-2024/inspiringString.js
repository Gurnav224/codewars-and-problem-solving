

function longestWord(stringOfWords) {
    // Give me back the longest word!
    let arr = stringOfWords.split(" ")
    return arr.reduce((longestWord,currentWord) => longestWord.length > currentWord.length ? longestWord : currentWord, arr[0])
  }


  console.log(longestWord("red white blue"))