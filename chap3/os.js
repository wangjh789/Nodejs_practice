const os = require('os');

console.log('운영체제 정보')
console.log('arch',os.arch());
console.log('platform',os.platform());
console.log('type',os.type());
console.log('uptime',os.uptime())
console.log('hostname',os.hostname())
console.log('release',os.release())

console.log('경로')
console.log('homedir',os.homedir())
console.log('tmpdir',os.tmpdir)

console.log('cpu 정보')
console.log('cpus',os.cpus())
console.log('cpus().length',os.cpus().length)

console.log('메모리 정보')
console.log('freemem',os.freemem())
console.log('totalmem',os.totalmem())
