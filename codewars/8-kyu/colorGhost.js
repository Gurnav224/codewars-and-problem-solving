
var Ghost = function(colors){
    if(colors===undefined && colors.length===0){
        this.colors = ["white", "yellow", "purple", "red"];
    }
    else{
        this.colors = colors
    }

    this.colors = this.colors[Math.floor(Math.random()*this.colors.length)]
}

let randomColor = new Ghost(["white", "yellow", "purple", "red"]);
console.log(randomColor.colors)