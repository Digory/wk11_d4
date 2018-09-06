document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  form = document.querySelector('#new-item-form');
  deleteForm = document.querySelector('#delete-form');
  form.addEventListener('submit', handleFormSubmit);
  deleteForm.addEventListener('submit', handleDeleteButton);
});

const handleFormSubmit = function(event) {
  event.preventDefault();
  const readingList = document.querySelector('#reading-list');
  const newItem = document.createElement('li');
  newItem.textContent = `${event.target.title.value} by ${event.target.author.value} (${event.target.category.value})`;
  console.log(event.target);
  readingList.appendChild(newItem);
  form.reset();
};

const handleDeleteButton = function(event) {
  event.preventDefault();
  const readingList = document.querySelector('#reading-list');
  while (readingList.firstChild) {
    readingList.removeChild(readingList.firstChild);
  }
};

