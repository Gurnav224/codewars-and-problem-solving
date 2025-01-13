

function extractDomain(domain:string) : string {
  // const url = new URL(domain);
  return domain.replace(/.+\/\/|www.|\..+/g, '')
  // return url.hostname.split('.')[0]
}

let url = "http://github.com/carbonfive/raygun"
console.log(extractDomain(url))