const fs = require('fs');

fs.watch('./target.txt',(envetType,filename)=>{
  console.log(envetType,filename);
})