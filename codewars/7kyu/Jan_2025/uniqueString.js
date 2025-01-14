


function uniqueString(arr){
  
  const normalized = arr.map((str) => 
    [...new Set(str.replace(/\s/g,'').toLowerCase())].sort().join())
  
  for (let i = 0; i < normalized.length; i++){
    if(normalized.indexOf(normalized[i]) === normalized.lastIndexOf(normalized[i])){
      return arr[i]
    }
  }
  
  
 return null

}

console.log(uniqueString([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]))