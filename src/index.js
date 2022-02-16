// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';

const arrayItems = [
  {
    index: 1,
    description: 'Go to the market',
    completed: true,
  },
  {
    index: 2,
    description: 'Meet my  boss',
    completed: false,
  },
  {
    index: 3,
    description: 'Clean the house',
    completed: true,
  },
  {
    index: 4,
    description: 'Drop the kids to school',
    completed: true,
  },
  {
    index: 5,
    description: 'Pick the kids from school',
    completed: false,
  },
];

const ulReceiver = document.querySelector('.to-do-list');
arrayItems.forEach((item) => {
  const listItem = `<hr>
  <div class="inner-items"><input class="inner-input" type="checkbox">
  <li class="items">${item.description}</li>
  <button class="item-img">
  <i class="bi bi-three-dots-vertical"></i>
  <i class="bi bi-trash"></i>
  </button>
  </div>`;
  ulReceiver.innerHTML += listItem;
});

// function component() {
//   const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// document.body.appendChild(component());