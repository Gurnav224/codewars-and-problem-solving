function meeting(s) {
  // your code
  return s.toUpperCase().split(';').map((name) => {
    const [first , last] = name.split(':')
    return {first, last}
  })
  .sort((a, b) => {
    if(a.last === b.last){
      return a.first.localeCompare(b.first)
    }
    return a.last.localeCompare(b.last)
  }).map(({first, last}) => `(${last}, ${first})`).join('')
}
let s =
  "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

console.log(meeting(s));
