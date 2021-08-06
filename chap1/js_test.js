function frist(){
  seconde();
  console.log('첫번쨰');
}
function seconde(){
  third();
  console.log('두번쨰');
}
function third(){
  console.log("세번쨰")
}

frist();