

function isLochNessMonster(input){
    const lowerCase = input.toLowerCase();
    return (lowerCase.includes("tree fiddy") || lowerCase.includes("3.50") || lowerCase.includes("three fifty"))
}


const conversation1 = "The musician asked for tree fiddy.";
const conversation2 = "I gave the street performer 3.50 as a tip.";
const conversation3 = "The Loch Ness Monster asked me for three fifty.";

console.log(isLochNessMonster(conversation1)); // Output: true
console.log(isLochNessMonster(conversation2)); // Output: true
console.log(isLochNessMonster(conversation3)); // Output: true