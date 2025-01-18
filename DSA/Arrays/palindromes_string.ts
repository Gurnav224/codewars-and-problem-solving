// check string is palindormes or not;


function checkForPalindormes(str: string):boolean{
  return str.split('').reverse().join('') === str
}


console.log(checkForPalindormes('eye'));