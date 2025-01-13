

function removeAnchorUrl(url:string):string{
  // url.split('#')[0]
  return url.replace(/#.*/gi,'')
}

const linkUrl = "www.codewars.com#about" 

console.log(removeAnchorUrl(linkUrl))