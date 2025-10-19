function fn() {
  const user1 = { name: 'Marcus' };
  let user2 = { name: 'Aurelius' };

  user1.name = 'Marcus Aurelius';
  user2.name = 'Marcus Aurelius';

  user2 = { name: 'Antoninus' }; 

  console.log(user1);
  console.log(user2);
}

function createUser(name, city) {
  return { name, city };
}

fn();
console.log(createUser('Marcus Aurelius', 'Roma'));
