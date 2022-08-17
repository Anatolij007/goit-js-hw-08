import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const LOCAL_KEY = 'feedback-form-state';
const parseJson = JSON.parse(localStorage.getItem(LOCAL_KEY));
const formData = parseJson || {};

form.addEventListener('submit', submitSend);
form.addEventListener('input', throttle(handleInputValue, 500));

readFormData();

function readFormData() {
  if (!parseJson) return;
  input.value = parseJson.input || '';
  textarea.value = parseJson.textarea || '';
}

function handleInputValue(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function submitSend(event) {
  event.preventDefault();
  event.currentTarget.reset();

  localStorage.removeItem(LOCAL_KEY);
  console.log(formData);
}
