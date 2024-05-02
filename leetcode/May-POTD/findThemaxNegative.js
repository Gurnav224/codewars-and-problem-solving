

var findMaxK = function(nums){
var maxK = -1;
let newObj = new Set(nums)
for (const num of newObj) {
    if(newObj.has(-num)){
        maxK = Math.max(maxK,Math.abs(num))
    }
}
return maxK
}

console.log(findMaxK( [-1,2,-3,3]))