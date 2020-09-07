/* eslint-disable no-return-assign */
const characters = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'маг', health: 0 },
  { name: 'лучник', health: 0 },
];

const alive = characters.filter((item) => item.health > 0);

// eslint-disable-next-line no-param-reassign
alive.forEach((item) => item.health += 100);
