


function sentence_capital(str:string):string{
  let normalized_str = str.toLowerCase();
  return normalized_str.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')
}

console.log(sentence_capital('hello how are you'))