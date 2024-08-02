function findGlasses(arr) {
  // Good luck!

  let pattern = /O-+O/;

  for (let i = 0; i < arr.length; i++) {
    if (pattern.test(arr[i])) {
      return i;
    }
  }
  return -1;
}

console.log(findGlasses(["phone", "O-O", "coins", "keys"]));
console.log(findGlasses(["OO", "wallet", "O##O", "O----O"]));
console.log(findGlasses(["O--#--O", "dustO---Odust", "more dust"]));
