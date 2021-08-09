const {URL} = require('url');

const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParmas',myURL.searchParams)
console.log('getAll()',myURL.searchParams.getAll('category'))
console.log('get()',myURL.searchParams.get('limit'))
console.log('has',myURL.searchParams.has('page'))

console.log('keys()',myURL.searchParams.keys())
console.log('values()',myURL.searchParams.values())

myURL.searchParams.append('filter','es3');
myURL.searchParams.append('filter','es5');


myURL.searchParams.set('filter','es6');
console.log(myURL.searchParams.getAll('filter'))

console.log('toString()',myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();
