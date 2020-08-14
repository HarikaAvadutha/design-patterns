// The Observer pattern offers a subscription model in which objects subscribe to an event and get notified when the event occurs.

class Click {
  constructor() {
    this.handlers = []; // observers
  }

  subscribe(fn) {
    this.handlers.push(fn);
  }

  unsubscribe(fn) {
    this.handlers = this.handlers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
  }

  fire(obj, thisObj) {
    let scope = thisObj || window;
    this.handlers.forEach(function (item) {
      item.call(scope, obj);
    });
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

let clickHandler = function (item) {
  log.add('fired: ' + item);
};

let click = new Click();

click.subscribe(clickHandler);
click.fire('event #1');
click.unsubscribe(clickHandler);
click.fire('event #2');
click.subscribe(clickHandler);
click.fire('event #3');

log.show();
/* Output:
fired: event #1
fired: event #3
*/
