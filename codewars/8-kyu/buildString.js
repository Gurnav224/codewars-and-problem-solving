
function buildString(...template){
return `I like ${template.join(', ')}!`;
}

console.log(buildString('Cheese','Milk','Chocolate'))