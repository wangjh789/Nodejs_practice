class Human{
  constructor(type='human'){
    this.type = type;
  }
  static isHuman(human){
    return human instanceof Human;
  }
  breathe(){
    alert('sksksk')
  }
}
class Zero extends Human{
  constructor(type,first,last){
    super(type);
    this.first = first;
    this.last = last;
  }

  sayName(){
    super.breathe();
    alert(`${this.first} ${this.last}`);
  }
}

const person = new Zero('human','woo','wang');
console.log(Human.isHuman(person));