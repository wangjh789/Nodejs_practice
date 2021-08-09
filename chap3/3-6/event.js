const EvnetEmitter = require('events')

const myEvent = new EvnetEmitter();
myEvent.addListener('event1',()=>{
  console.log('이벤트 1');
})
myEvent.on('event2',()=>{
  console.log('이벤트 2');
})
myEvent.on('event2',()=>{
  console.log('이벤트2 추가')
})
myEvent.once('event3',()=>{
  console.log('이벤트3')
})//한번만 실행

myEvent.emit('event1');
myEvent.emit('event2');

myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event4',()=>{
  console.log('이벤트 4')
})
myEvent.removeAllListeners('evnet4');
myEvent.emit('event4');

const listener = ()=>{
  console.log('이벤트5');
}
myEvent.on('evnet5',listener);
myEvent.removeListener('evnet5',listener)
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'));