

function Combat(health,damage){
  
        let newHealth = health-damage

       
        return Math.max(newHealth,0)
}

console.log(Combat(100,500))