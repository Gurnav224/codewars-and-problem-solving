
function squareDigits(num){
    let str = num.toString();
    let numbers = str.split('');
    let square = '';
    
    for(let i=0; i<numbers.length; i++){
      square += numbers[i] * numbers[i]
    }
    return parseInt(square)
  }


  console.log(squareDigits(23832))