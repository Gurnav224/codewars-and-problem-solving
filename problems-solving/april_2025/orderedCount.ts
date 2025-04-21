/*
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

*/
const orderedCount = function (text: string): [string, number][] {
  let arr: [string, number][] = [];
  let seen = new Set<string>();

  // Iterate through the string once to maintain order
  for (let char of text) {
    if (!seen.has(char)) {
      seen.add(char);
      // Count occurrences of the character in the entire string
      const count = text.split(char).length - 1;
      arr.push([char, count]);
    }
  }

  return arr;
}

console.log(orderedCount("abracadabra"))
console.log(orderedCount("2333312"))