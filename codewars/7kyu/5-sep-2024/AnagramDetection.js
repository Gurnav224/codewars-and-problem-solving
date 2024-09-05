

var isAnagram = function(test ,original){
  if(test.length !== original.length) return false;

  let testCounter = {};
  let originalCounter = {};

  for(let char of test.toLowerCase()){
    testCounter[char] = (testCounter[char] || 0) + 1;

  }


  for(let char of original.toLowerCase()){
    originalCounter[char] = (originalCounter[char] || 0) + 1;
  }


  for( let char in testCounter){
    if(testCounter[char] !== originalCounter[char]){
        return false
    }
  }

  return true
}


console.log(isAnagram( "foefet", "toffee" ))
console.log(isAnagram("dumble","bumble"))