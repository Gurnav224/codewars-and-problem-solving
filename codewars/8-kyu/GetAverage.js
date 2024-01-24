function getAverage(marks){
    let sum = 0;
  
    for(let i=0; i<marks.length; i++){
      sum = sum+marks[i]
    }
    return Math.floor(sum/marks.length)
}
const marks = [75, 80, 95, 60, 70];
console.log(getAverage(marks))