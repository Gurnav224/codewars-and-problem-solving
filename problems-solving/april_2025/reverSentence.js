
/*


Output

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"


*/

// approach 
// convert the string into array using .split('') method
// run a loop over the string of array 
// reverse the each word of array of string using .split('').reverse().join('')
// return arr.join('')

function reverseWord(str){
  let arr = str.split(' ');
  
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i].split('').reverse().join('')
  }
  return arr.join(' ')
}


console.log(reverseWord("This is an example!"))