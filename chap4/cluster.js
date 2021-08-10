const cluster= require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length

if(cluster.isMaster){
  console.log(`마스터 프로세스 아이디 : ${process.pid}`)
  for(let i =0;i<numCPUs;i+=1){
    cluster.fork() //cpu개수 만큼 워커를 생산
  }
  cluster.on('exit',(worker,code,signal)=>{
    console.log(`${worker.process.pid}번 워커가 종료되었습니다.`)
    console.log('code',code,'signal',signal)
    cluster.fork()
  })
}else{
  http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html; charset=utf-8'})
    res.write('<h1>Hello world</h1>')
    res.end('<p>Node Node</p>')
    setTimeout(()=>{
      process.exit()
    },1000)
  }).listen(8006)
  console.log(`${process.pid}번 워커실행`)
}