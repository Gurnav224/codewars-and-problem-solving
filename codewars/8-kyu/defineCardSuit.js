

function defineSuitCard(card){
    let cardLower = card.charAt(card.length-1).toLowerCase();

    if(cardLower === '♣'){
        return "clubs"
    }
    else if(cardLower === '♦'){
        return "diamonds"
    }
    else if(cardLower==='♥'){
        return "hearts"
    }
    else if(cardLower === '♠'){
        return "spades"
    }
    else{
        return "angry"
    }
}

console.log(defineSuitCard("A♠"))