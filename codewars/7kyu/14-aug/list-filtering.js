
function filter_list(arr){
    const filterArr = arr.filter((val=> typeof val !== "string"));

    return filterArr
}

console.log(filter_list([1,2,'a','b']))