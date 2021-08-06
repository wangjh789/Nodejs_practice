function longRuningTask(){
  console.log('작업 끝');
}

console.log('시작');
longRuningTask(); //블로킹 방식의 작업
console.log('다음 작업');