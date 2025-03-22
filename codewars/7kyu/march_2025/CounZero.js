

function countZero(n){
 let count = 0
 for(let i = 1; i <= n ; i++) {
   console.log(i.toString().split('0'))
  count += (i.toString().split('0').length - 1)
 }
 
return count

}
console.log(countZero(100))