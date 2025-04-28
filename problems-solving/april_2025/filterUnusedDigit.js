

/*
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"

Note: the digits in the resulting string should be sorted.

*/

function unusedDigits(...arg) {
   return [...Array(10).keys()].filter(x => !arg.join('').includes(x)).join('');
}
console.log(unusedDigits(12,34,56,78))