

function subtractSum(n){
    const fruits = [
        "kiwi", "pear", "kiwi", "banana", "melon", "banana", "melon", "pineapple", "apple", "pineapple",
        "cucumber", "pineapple", "cucumber", "orange", "grape", "orange", "grape", "apple", "grape",
        "cherry", "pear", "cherry", "pear", "kiwi", "banana", "kiwi", "apple", "melon", "banana",
        "melon", "pineapple", "melon", "pineapple", "cucumber", "orange", "apple", "orange", "grape",
        "orange", "grape", "cherry", "pear", "cherry", "pear", "apple", "pear", "kiwi", "banana",
        "kiwi", "banana", "melon", "pineapple", "melon", "apple", "cucumber", "pineapple", "cucumber",
        "orange", "cucumber", "orange", "grape", "cherry", "apple", "cherry", "pear", "cherry",
        "pear", "kiwi", "pear", "kiwi", "banana", "apple", "banana", "melon", "pineapple", "melon",
        "pineapple", "cucumber", "pineapple", "cucumber", "apple", "grape", "orange", "grape",
        "cherry", "grape", "cherry", "pear", "cherry", "apple", "kiwi", "banana", "kiwi", "banana",
        "melon", "banana", "melon", "pineapple", "apple", "pineapple"
    ];

    while(true){
        let sum = Array.from(String(n),Number).reduce((acc,curr)=>acc+curr,0);
        n -= sum;
        console.log(n)

        if(n<=100){
            return fruits[n-1]
        }
    }
}


console.log(subtractSum(60))