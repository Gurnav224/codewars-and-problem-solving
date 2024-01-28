

function howMuchILoveYou(nbPetals){

    let phrases = ['I love you','a little','a lot','passionately','madly','not at all'];

    let lastPhraseIndex = (nbPetals-1)%phrases.length;

  

    return phrases[lastPhraseIndex]
}

console.log(howMuchILoveYou(15))