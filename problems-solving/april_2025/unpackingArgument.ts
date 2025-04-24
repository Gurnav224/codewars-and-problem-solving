
/*
You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.

eg:

spread(someFunction, [1, true, "Foo", "bar"] ) 
// is the same as...
someFunction(1, true, "Foo", "bar")


*/

function spread<T extends any[], R>(func: (...args: T) => R, args: T): R {
  // ...
  return func(...args);
}

console.log(spread(function(x: number, y: number) { return x + y; }, [1, 2] as [number, number]));