function HQ9(code) {
  //finish me
  if (code === "H") {
    return "Hello World!";
  } else if (code === "Q") {
    return code;
  } else if (code === "9") {
    let lyrics = "";
    for (let i = 99; i > 0; i--) {
        lyrics += `${i} bottle${i === 1 ? '' : 's'} of beer on the wall, ${i} bottle${i === 1 ? '' : 's'} of beer.\n`;
        lyrics += `Take one down and pass it around, ${i - 1 === 0 ? 'no more' : i - 1} bottle${i - 1 === 1 ? '' : 's'} of beer on the wall.\n`;
    }
    lyrics += `No more bottles of beer on the wall, no more bottles of beer.\n`;
    lyrics += `Go to the store and buy some more, 99 bottles of beer on the wall.`;
    return lyrics;
  } else {
    return undefined;
  }
}

console.log(HQ9("H"));
console.log(HQ9("Q"));
console.log(HQ9("9"));
