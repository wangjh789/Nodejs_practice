const fs= require('fs').promises

setInterval(()=>{
  fs.unlink('./temp.js');
},1000)