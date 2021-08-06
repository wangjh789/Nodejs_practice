var candyMachine = {
  status:{
    name:'node',
    count:5,
  },
  getCandy(){
    this.status.count--;
    return this.status.count;
  }
};

const {getCandy, status:{count}} = candyMachine;

var array = ['node.js',{},10,true];
var [node, obj,,bool] = array;