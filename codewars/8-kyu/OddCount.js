

function  oddCount(n){
    function oddCount(n){
        // your code here
         let count = 0;
          for(let i=1; i<n; i++){
              if(i%3==1){
                  count++;
              }
          }
      
          return count
      }
}


console.log(oddCount(15))