const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');

const dayLabel = document.getElementById('day-label')
const monthLabel = document.getElementById('month-label')
const yearLabel = document.getElementById('year-label')

const dayErrorMsg = document.getElementById('day-error-mg')
const monthErrorMsg = document.getElementById('month-error-msg')
const yearErrorMsg = document.getElementById('year-error-msg')

const submit = document.getElementById('svg-img');

submit.addEventListener('click', () => {
  if (dayInput.value == "") {
    dayLabel.classList.add(error__state__color);
    dayInput.classList.remove('input__correct__state');
    dayInput.classList.add('input__error__state');
    dayErrorMsg.innerText = 'This field is required';
    dayErrorMsg.classList.add('error__state__color');    
  } else if (monthInput.value == "") {
    monthLabel.classList.add(error__state__color);
    monthInput.classList.remove('input__correct__state');
    monthInput.classList.add('input__error__state');
    monthErrorMsg.innerText = 'This field is required';
    monthErrorMsg.classList.add('error__state__color');
  } else if (yearInput.value == "") {
    yearLabel.classList.add(error__state__color);
    yearInput.classList.remove('input__correct__state');
    yearInput.classList.add('input__error__state');
    yearErrorMsg.innerText = 'This field is required';
    yearErrorMsg.classList.add('error__state__color');
  }

})

// validation not working cus  I can't get my event listener to work on the svg