import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';
const parseJson = JSON.parse(localStorage.getItem(LOCAL_KEY));
const formData = parseJson || {};

readFormData();

form.addEventListener('submit', submitSend);
form.addEventListener('input', throttle(handleInputValue, 500));

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

function readFormData() {
  if (parseJson) {
    Object.entries(parseJson).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
