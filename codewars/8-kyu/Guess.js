

 class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
    guess(n) {
      if(this.lives<=0){
        throw new Error("No more guesses allowed. Game over!");
      }

      if(n===this.number){
        return true
      }
      else{
        this.lives--;
        return false
      }
    }
  }

  const game = new Guesser(42, 3); // The correct number is 42, and the user has 3 guesses

  try {
    console.log(game.guess(30)); // Incorrect guess, returns false
    console.log(game.guess(40)); // Incorrect guess, returns false
    console.log(game.guess(42)); // Correct guess, returns true
    // console.log(game.guess(50)); // Uncommenting this line would throw an error due to exceeding the maximum guesses
  } catch (error) {
    console.error(error.message);
  }(42, 3); // The correct number is 42, and the user has 3 guesses

try {
  console.log(game.guess(30)); // Incorrect guess, returns false
  console.log(game.guess(40)); // Incorrect guess, returns false
  console.log(game.guess(42)); // Correct guess, returns true
  // console.log(game.guess(50)); // Uncommenting this line would throw an error due to exceeding the maximum guesses
} catch (error) {
  console.error(error.message);
}