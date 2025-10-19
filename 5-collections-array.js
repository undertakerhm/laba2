const phoneBook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Gaius Julius', phone: '+380667778899' },
  { name: 'Lucius Annaeus', phone: '+380501234567' },
];

function findPhoneByName(name) {
  for (const record of phoneBook) {
    if (record.name === name) {
      return record.phone;
    }
  }
  return 'Not found';
}

console.log(findPhoneByName('Marcus Aurelius'));
console.log(findPhoneByName('Unknown'));
