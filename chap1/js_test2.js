// function run(){
//   console.log('3초 후 실행')
// }
const run = ()=>{console.log('3초후 실행')}

console.log('시작');
setTimeout(run,3000); //논 블로킹 방식의 작업
console.log('끝');

