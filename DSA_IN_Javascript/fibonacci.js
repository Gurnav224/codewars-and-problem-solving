
function fibo(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    let fib = [0, 1]; // Initialize array with first two Fibonacci numbers
    
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // Calculate Fibonacci numbers up to 
    }
    
    return fib[n]; // Return the nth Fibonacci number
}

console.log(fibo(10)); // Output: 55
