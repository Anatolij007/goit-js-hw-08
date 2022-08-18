import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

let formData = {};

form.addEventListener('submit', submitSend);
form.addEventListener('input', throttle(handleInputValue, 500));

readFormData();

function readFormData() {
  const dataSave = JSON.parse(localStorage.getItem(LOCAL_KEY));
  if (!dataSave) return;
  form.email.value = dataSave.email || '';
  form.message.value = dataSave.message || '';
}

function handleInputValue(event) {
  formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
  formData[event.target.name] = event.target.value;

  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function submitSend(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCAL_KEY)));

  event.currentTarget.reset();

  localStorage.removeItem(LOCAL_KEY);
}
