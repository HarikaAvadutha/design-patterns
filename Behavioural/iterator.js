//The Iterator pattern allows to effectively loop over a collection of objects
//The Iterator design pattern solves this problem by separating the collection of objects from the traversal of these objects by implementing a specialized iterator.

class Iterator {
  constructor(items) {
    this.index = 0;
    this.items = items;
  }

  first() {
    this.reset();
    return this.next();
  }

  next() {
    return this.items[this.index++];
  }

  hasNext() {
    return this.index <= this.items.length;
  }

  reset() {
    this.index = 0;
  }

  each(callback) {
    for (var item = this.first(); this.hasNext(); item = this.next()) {
      callback(item);
    }
  }
}

// log helper
let log = (function () {
  let log = '';
  return {
    add: function (msg) {
      log += msg + '\n';
    },
    show: function () {
      console.log(log);
      log = '';
    },
  };
})();

let items = ['one', 2, 'circle', true, 'three', false];
let iter = new Iterator(items);

// using for loop
for (let item = iter.first(); iter.hasNext(); item = iter.next()) {
  log.add(item);
}
log.add('');

// using Iterator's each method
iter.each(function (item) {
  log.add(item);
});

log.show();
/* Output
one
2
circle
true
three
false
*/
