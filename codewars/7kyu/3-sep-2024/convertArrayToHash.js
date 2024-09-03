

function convertArrayToHash(hash){
    const keys = Object.keys(hash);

    return keys.map((key)=>[key,hash[key]]).sort()
}


console.log(convertArrayToHash({name: 'Jeremy', age: 24, role: 'Software Engineer'}))


// input {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// output [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

// approach 
/*
get keys of from the object 
eg  [name,age,role];

// map over the keys
.map((key)=>[key,hash[key]])
*/