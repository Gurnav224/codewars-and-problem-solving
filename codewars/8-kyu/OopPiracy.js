

class Ship{
    constructor(draft,crew){
        this.draft = draft
        this.crew = crew;
    }

    isWorthIt(){
        return this.draft - 1.5 * this.crew > 20;
      }
}

const titanic = new Ship(15,10);

console.log(titanic.isworthIt())