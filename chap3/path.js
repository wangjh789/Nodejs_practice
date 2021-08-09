const path = require('path')

const string = __filename

console.log('sep',path.sep)
console.log('delimiter',path.delimiter)
console.log('-------------------')
console.log('dirname()',path.dirname(string))
console.log('extname()',path.extname(string))
console.log('basename()',path.basename(string))
console.log('basename - extname',path.basename(string,path.extname(string)))
console.log('-------------------')
console.log('parse()',path.parse(string))
console.log('format()',path.format({
  dir:'C:/user/temp',
  name:'path',
  ext:'.js'
}))
console.log('normalize()',path.normalize('C:/user/temp/path.js'))
