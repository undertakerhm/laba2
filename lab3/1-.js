function random(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('random(5, 10) ->', random(5, 10));
console.log('random(10) ->', random(10));


function generateKey(length, characters) {
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = random(0, characters.length - 1);
    key += characters[index];
  }
  return key;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log('Generated key:', key);

function ipToNumber(ip = '127.0.0.1') {
  return ip
    .split('.')
    .map(Number)
    .reduce((acc, num, i) => acc + (num << ((3 - i) * 8)), 0);
}

console.log("127.0.0.1 ->", ipToNumber('127.0.0.1'));
console.log("10.0.0.1 ->", ipToNumber('10.0.0.1'));
console.log("192.168.1.10 ->", ipToNumber('192.168.1.10'));
console.log("165.225.133.150 ->", ipToNumber('165.225.133.150'));
console.log("0.0.0.0 ->", ipToNumber('0.0.0.0'));
console.log("8.8.8.8 ->", ipToNumber('8.8.8.8').toString(16));


function introspect(iface) {
  const result = [];
  for (const key in iface) {
    if (typeof iface[key] === 'function') {
      result.push([key, iface[key].length]);
    }
  }
  return result;
}

const obj = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};

console.log('Интроспекция:', introspect(obj));
