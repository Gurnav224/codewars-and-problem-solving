// There is an array. All elements are the same except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 4, 4, 'foo', 4 ]) === 'foo'


function findUniq(arr) {
  
  const counts = new Map();

    for (const item of arr) {
        counts.set(item, (counts.get(item) || 0) + 1);
    }

    // Find the key with a count of 1
    for (const [key, value] of counts) {
        if (value === 1) {
            return key; // Return the unique element directly
        }
    }

    throw new Error("No unique element found");
  
}


console.log(findUniq([1, 1, 1, 2, 1, 1]));          // Expected: 2
console.log(findUniq([4, 4, 'foo', 4]));            // Expected: 'foo'
console.log(findUniq([false, false, 0, false]));    // Expected: 0
console.log(findUniq([false, undefined, false]));   // Expected: undefined
console.log(findUniq([null, undefined, null]));     // Expected: undefined
console.log(findUniq([{}, {}, [], {}]));            // Expected: []
console.log(findUniq([{}, {}, {}, {}]));            // Expected: {}
