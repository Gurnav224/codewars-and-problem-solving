function last(x) {
  const words = x
    .split(" ")
    .sort((a, b) => a[a.length - 1].localeCompare(b[b.length - 1]));
  return words;
}

console.log(last("man i need a taxi up to ubud"));
