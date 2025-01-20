function countVowel(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "o" ||
      string[i] === "i" ||
      string[i] === "u"
    ) {
      count = count + 1;
    }
  }

  return count;
}

console.log(countVowel("abcdefghklmsfa"));
