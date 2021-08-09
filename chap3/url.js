const url = require('url');

const {URL} = url;
const myUrl = new URL('http://www.golbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor')
console.log('new URL()',myUrl)
console.log('url.format',url.format(myUrl))
console.log('----------')
const parseUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?001001000#anchor')
console.log('parse',parseUrl)
console.log('format',url.format(parseUrl));