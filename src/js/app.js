/* eslint-disable no-console */
// TODO: write code here
import { findBy } from './findBy';

console.log('app.js bundled');

const obj = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
];
const finder = findBy('name', 'урон');

console.log('Исходный объект:');
console.table(obj);
console.log('Функция поиска:');
console.log(finder);
console.log('Дас ист фантастиш, вот результат поиска:');
console.table(obj.filter(finder));
