'use strict';

function inc(num) {
  num.n += 1;
}

const obj = { n: 3 };
inc(obj);
console.dir(obj);
