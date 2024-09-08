

function likeOrDislike(buttons) {
    
     let currentState  = "Nothing";

     for(let button of buttons){
        if(button === currentState){
            currentState = "Nothing"
        }
        else{
            currentState = button
        }
     }
     return currentState
  }

  console.log(likeOrDislike(["Dislike","Like"]))
  console.log(likeOrDislike([]))
  console.log(likeOrDislike(["Dislike"]))