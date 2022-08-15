import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('input', throttle(handleInputValue), 500);
form.addEventListener('submit', submitSend);

let formData = {};

readFormData();

function readFormData() {
  if (!JSON.parse(localStorage.getItem('feedback-form-state'))) {
    return;
  }
  input.value =
    JSON.parse(localStorage.getItem('feedback-form-state')).value || '';
  textarea.value =
    JSON.parse(localStorage.getItem('feedback-form-state')).value || '';
}

function handleInputValue(event) {
  formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function submitSend(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
