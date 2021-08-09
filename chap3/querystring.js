const url = require('url')
const qureystring = require('querystring')

const parseUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript')
const query = qureystring.parse(parseUrl.query)

console.log('querystring.parse()',query);
console.log('stringfy()',qureystring.stringify(query))