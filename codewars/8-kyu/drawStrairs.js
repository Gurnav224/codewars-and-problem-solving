

function drawStairs(n){
    let result = "";
    for (let i = 0; i < n; i++) {
        // Add spaces before "I" characters to create the staircase pattern
        for (let j = 0; j < i; j++) {
            result += " ";
        }
        // Add "I" character for the current step
        result += "I";
        // Add newline character if it's not the last step
        if (i < n - 1) {
            result += "\n";
        }
    }
    return result;
}

console.log(drawStairs(3))