function mostFrequentItemCount(collection) {
 if(collection.length === 0) return 0;
  let count = {};
  
  for (let i = 0; i < collection.length; i++){
    count[collection[i]] = (count[collection[i]] || 0)+1;
  }
  
  const max = Object.values(count)
  
  return Math.max(...max)
}


console.log(mostFrequentItemCount( [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]))
console.log(mostFrequentItemCount([]))