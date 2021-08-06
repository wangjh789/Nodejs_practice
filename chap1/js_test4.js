function longRunningTask(){
  console.log('작업 끝');
}
console.log('시작')
setTimeout(longRunningTask,0); //블로킹 작업을 논 블로킹 작업으로..
console.log('다음 작업')