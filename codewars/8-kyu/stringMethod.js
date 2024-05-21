

function firstToLast(str,c){
 let first = str.indexOf(c);
 let last = str.lastIndexOf(c);
 if(last-first>1){
  return last-first
 }
 else if(last===first && first!==-1){
    return 0
 }
 else{
    return -1
 }
}


console.log(firstToLast('ababc','a'))
console.log(firstToLast('ababc','c'))
console.log(firstToLast('ababc','d'))