function solve(a, b) {
  let counterArr = [];

  for (let i = 0; i < b.length; i++) {
    let viewCount = 0;

    for (let j = 0; j < a.length; j++) {
      if (b[i] === a[j]) {
        viewCount++;
      }
    }
    
    counterArr.push(viewCount);
  }

  return counterArr;
}

console.log(solve(["abc", "abc", "xyz", "abcd", "cde"], ["abc", "cde", "uap"]));


const solve2 = (a, b) => b.map((str) => a.filter((val) => val === str).length);


console.log(solve2(["abc", "abc", "xyz", "abcd", "cde"], ["abc", "cde", "uap"]));