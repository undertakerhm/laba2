'use strict';

const arr = [true, 'hello', 5, 12, -200, false, false, 'word', null, undefined, { a: 1 }, [1, 2], 3.14];

const types = {};

for (const el of arr) {
  const type = typeof el;
  if (!types[type]) {
    types[type] = 0;
  }
  types[type]++;
}

console.log(types);
