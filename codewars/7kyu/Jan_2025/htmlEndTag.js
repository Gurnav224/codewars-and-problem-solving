function htmlEndTagByStartTag(startTag) {
  //coding and coding..

  const tagNameMatch = startTag.match(/^<\s*([a-zA-Z0-9\-]+)/);
  
  if(tagNameMatch){
    const tag = tagNameMatch[1]
    return `</${tag}>`
  }

  return null

}

// console.log(htmlEndTagByStartTag('<p>'))
// console.log(htmlEndTagByStartTag('<div>'))
// console.log(htmlEndTagByStartTag('<button>'));
console.log(htmlEndTagByStartTag("<div id='my_area' class='data' title='This is a test for title on Div tag'>"))


