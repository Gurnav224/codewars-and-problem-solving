function nthSmallest(arr, n) {
  // Clone and sort the array
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted[n - 1];
}
console.log(nthSmallest([3, 1, 2, 5, 4], 2)); // 2
console.log(nthSmallest([10, 20, 30, 40, 50], 5)); // 50
console.log(nthSmallest([7, 7, 12, 3, 1], 3)); // 7
