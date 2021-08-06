var sayNode = ()=>{
  console.log('Node');
}
var es = 'ES';
var oldObject = {
  sayJs: ()=>{
    console.log('JS');   
  },
  sayNode: sayNode,
}

oldObject[es+6]='TEMP';
oldObject.sayNode();
oldObject.sayJs()
console.log(oldObject.ES6);

const newObject = {
  sayJs(){
    console.log('JS')
  },
  sayNode,
  [es+6]:'TEMP2'
}

newObject.sayNode();
newObject.sayJs();
console.log(newObject.ES6)