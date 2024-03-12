

function hotpo(num){
 let count = 0;
    if(num==0) return 0;

    while(num!==1){
        if(num%2===0){
            num = num/2
        }
        else{
            num = 3*num+1
        }
        count++
    }
return count
  
}

console.log(hotpo(5))