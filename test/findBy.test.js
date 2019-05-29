import { findBy } from '../src/js/findBy';

test('Test findBy "name", "урон" ', () => {
  const sourceData = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const finder = findBy('name', 'урон');

  const result = sourceData.filter(finder);

  const expected = [{
    name: 'урон',
    type: 'help',
    description: 'Страница описания элемента интерфейса',
  }];

  expect(result).toEqual(expected);
});

test('Test findBy "type", "attack" ', () => {
  const sourceData = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const finder = findBy('type', 'attack');

  const result = sourceData.filter(finder);

  const expected = [{
    name: 'заклинание',
    type: 'attack',
    description: 'Атака магическим заклинанием',
  }];

  expect(result).toEqual(expected);
});
