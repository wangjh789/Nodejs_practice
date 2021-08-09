console.log('ㅁㄴㅇㄹ')

module.exports = 'find me'

require('./var');

console.log('cache')
console.log(require.cache)
console.log('main')
console.log(require.main === module)
console.log(require.main.filename);