

function getFirstPython(list) {
  // Thank you for checking out my kata :)
  const developer = list.find((person) => person.language === 'Python');
  
  return developer ? `${developer.firstName}, ${developer.country}` : 'There will be no Python developers'
}


var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];


console.log(getFirstPython(list1))
