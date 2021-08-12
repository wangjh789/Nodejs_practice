const mongoose = require('mongoose')

const connect = ()=>{
  if(process.env.NODE_ENV !== 'production'){
    mongoose.set('debug',true)
  }

  mongoose.connect('mongodb://woowang:741852@localhost:27017/admin',{
  dbName :'nodejs',
  useNewUrlParser:true,
  useCreateIndex:true,
},(err)=>{
  if(err){
    console.log('mongodb connect error',error)
  }else{
    console.log('mongodb connect success')
  }
})
}

mongoose.connection.on('error',(err)=>{
  console.error('mongodb connect error',err)
})
mongoose.connection.on('disconnection',()=>{
  console.error('mongodb disconnection, try again')
  connect();
})

module.exports = connect;