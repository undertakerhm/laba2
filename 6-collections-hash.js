const phoneBook = {
  'Marcus Aurelius': '+380445554433',
  'Gaius Julius': '+380667778899',
  'Lucius Annaeus': '+380501234567',
};

function findPhoneByName(name) {
  return phoneBook[name] || 'Not found';
}

console.log(findPhoneByName('Gaius Julius'));
console.log(findPhoneByName('Unknown'));
