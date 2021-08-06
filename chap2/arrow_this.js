var relationship1={
  name:'zero',
  friends:['1','2','3'],
  logFriends : function(){
    var that = this;
    this.friends.forEach(function (friend){
      console.log(that.name,friend); //여기서 this.name 을 쓰면 각 friend 의 name을 의미
    })
  }
}

relationship1.logFriends();

const relationship2 = {
  name:'zero',
  friends:['1','2','3'],
  logFriends(){
    this.friends.forEach(friend=>{
      console.log(this.name,friend);
    })
  }
}
relationship2.logFriends()