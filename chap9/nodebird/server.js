const app = require('./app')

app.listen(app.get('port'),()=>{
  console.log(app.get('port'),'번에서 포트 대기중')
})