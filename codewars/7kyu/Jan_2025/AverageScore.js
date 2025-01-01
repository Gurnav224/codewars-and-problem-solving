
function average(scores) {
    // code to calculate the average
    
  if (scores.length === 0) return 0;
  
  const totalScore = scores.reduce((total, score) => total + score, 0);
  
  return Math.round(totalScore / scores.length);
    
}

const scores = [90,98,89,100,100,86,94];
console.log(average(scores))