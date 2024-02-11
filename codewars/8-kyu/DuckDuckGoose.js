

function duckDuckGoose(players,goose){ 
    var index = (goose-1)/players.length;

    return players[index].name

}

let players = [
    { name: "Alice" },
    { name: "Bob" },
    { name: "Charlie" }
];


console.log(duckDuckGoose(players, 1))

