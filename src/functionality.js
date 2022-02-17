const itemsArray = [];

const addItems = () => {
  const addAction = document.querySelector('.btn-add');

  addAction.addEventListener('onclick', addItemToList);
};

// Whats to be done when the add buton is clicked
function addItemToList(item) {
  const inputValue = document.querySelector('.form-input').value;
  const arrayLength = itemsArray.length();

  const newObject = {
    index: arrayLength + 1,
    description: inputValue,
    completed: false,
  };

  itemsArray.push(newObject);

  return itemsArray;
}

export default addItems;
// export itemsArray;