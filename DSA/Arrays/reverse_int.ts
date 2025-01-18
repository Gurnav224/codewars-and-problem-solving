function reverse_int(num:number):number{
  let reverse = num.toString().split('').reverse().join('');
  
  return parseInt(reverse)
  
};


console.log(reverse_int(12324));