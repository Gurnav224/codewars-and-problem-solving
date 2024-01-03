String.prototype.toJadenCase = function () {
    // Check if the input is empty or undefined
    if (!this || this.length === 0) {
      return '';
    }
  
    let capitalizeNext = true;
    let result = '';
  
    for (let i = 0; i < this.length; i++) {
      if (this[i] === ' ') {
        // If the character is a space, set capitalizeNext to true
        result += ' ';
        capitalizeNext = true;
      } else {
        // If the character is not a space and capitalizeNext is true, capitalize it
        result += capitalizeNext ? this[i].toUpperCase() : this[i].toLowerCase();
        capitalizeNext = false;
      }
    }
  
    return result;
  };
  
  // Example usage:
  let originalQuote = "the only way to do great work is to love what you do";
  let jadenStyleQuote = originalQuote.toJadenCase();
  console.log(jadenStyleQuote);
  