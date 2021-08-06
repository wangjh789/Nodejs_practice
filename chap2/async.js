const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');

console.log('adsfasdf');
(async ()=>{
  for await (promise of [promise1,promise2]){
    console.log(promise);
  }
})();

console.log('adsfasdf');