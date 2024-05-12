



function uefaEuro2016(teams,scores){
//  let str = `At match`;

//  if(scores[0]>scores[1]){
//     str +=  ` ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
//  }
// else if(scores[1]>scores[0]){
//     str += ` ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
// }
// else{
//     str  += ` ${teams[0]} - ${teams[1]}, teams played draw.`
// }
//  return str

const [team1, team2] = teams;
const [score1,score2] = scores;

const winner = score1> score2 ? team1: team2;

return score1=== score2 ? `At match ${team1} - ${team2}, teams played draw.`:`At match ${team1} - ${team2}, ${winner} won!`
}

console.log(uefaEuro2016(['Germany', 'Ukraine'],[2, 0])) // "At match Germany - Ukraine, Germany won!"
console.log(uefaEuro2016(['Belgium', 'Italy'],[0, 2])) // "At match Belgium - Italy, Italy won!"
console.log(uefaEuro2016(['Portugal', 'Iceland'],[1, 1])) // "At match Portugal - Iceland, teams played draw."


