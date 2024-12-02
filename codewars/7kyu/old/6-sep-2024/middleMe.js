function middleMe(N, X, Y) {
  let repeatedY = Y.repeat(N);
  let middleIndex = repeatedY.length / 2;

  repeatedY =
    repeatedY.slice(0, middleIndex) + X + repeatedY.slice(middleIndex);

  if (repeatedY.indexOf(X) !== middleIndex) return X;

  return repeatedY;
}

console.log(middleMe(10, "A", "*"));

console.log(middleMe(18, "z", "#"));
console.log(middleMe(19, "z", "#"));
