function Counter() {
    this.value = 0

  }

Counter.prototype.increase = function(){
  return this.value  = this.value +1
}

const counter = new Counter();

console.log(counter.increase())

