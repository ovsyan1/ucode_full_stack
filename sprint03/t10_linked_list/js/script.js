class LinkedList {
  constructor(arr) {
    this.data = arr;
  }
  add(value) {
    return this.data.push(value);
  }
  remove(value) {
    let index = this.data.indexOf(value);
    if (index == -1) {
      return false;
      //return 0
    }
    return this.data.splice(index, 1);
  }
  contains(value) {
    let index = this.data.indexOf(value);
    if (index == -1) {
      return false;
    }
    return true
  }
  count(){
    return this.data.length     
  }
  *[Symbol.iterator](){
     for(let item of this.data) {
         yield item;
     }
  }
  result = this[Symbol.iterator]()
  next(){
     return this.result.next()
  }
  clear(){
    this.data = [];
  }
  log() {
    console.log(this.data.join(", "));
  }
}
function createLinkedList(arr) {
  return new LinkedList(arr);
}

const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
console.log(ll.count());
ll.log();
// "100, 1, 2, 3, 100, 4, 5, 100"
// console.log('next');
// console.log(ll.next());
// console.log(ll.next());
// console.log(ll.next());
// console.log(ll.next());
// console.log(ll.next());
// console.log(ll.next());
// console.log(ll.next());
// console.log(ll.next());
// console.log(ll.next());
while (ll.remove(100));
ll.log();
// "1, 2, 3, 4, 5"
ll.add(10);
ll.log();
// "1, 2, 3, 4, 5, 10"
console.log(ll.contains(10));
// "true"
let sum = 0;
for(const n of ll){
    sum += n;
}
console.log(sum);
// "25"
ll.clear();
ll.log();