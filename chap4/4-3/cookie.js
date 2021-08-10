const http = require('http')

http.createServer((req,res)=>{
  console.log(req.url,req.headers.cookie);
  res.writeHead(200,{'Set-Cookie':'mycookie=test'})
  res.end('Hello Cookie')
})
  .listen(8000,()=>{
    console.log('Server listening on 8000 Port')
  })