/*====================== VARIABLES  ===================*/ 

const dayInput = document.getElementById('day-input'),
      monthInput = document.getElementById('month-input'),
      yearInput = document.getElementById('year-input'),

      dayLabel = document.getElementById('day-label'),
      monthLabel = document.getElementById('month-label'),
      yearLabel = document.getElementById('year-label'),

      dayErrorMsg = document.getElementById('day-error-msg'),
      monthErrorMsg = document.getElementById('month-error-msg'),
      yearErrorMsg = document.getElementById('year-error-msg')

      
/*====================== EMPTY FIELD VERIFICATION ===================*/

dayInput.addEventListener('change', () => {
  if(dayInput.value == "") {
    dayLabel.classList.add('error__state__color')
    dayInput.classList.add('input__error__state')
    dayErrorMsg.classList.add('error__state__color')
    dayErrorMsg.innerText = 'This field is required'
  }else {
    dayLabel.classList.remove('error__state__color')
    dayInput.classList.remove('input__error__state')
    dayErrorMsg.classList.remove('error__state__color')
    dayErrorMsg.innerText = ''
  }
})

monthInput.addEventListener('change', () => {
  if(monthInput.value == "") {
    monthLabel.classList.add('error__state__color')
    monthInput.classList.add('input__error__state')
    monthErrorMsg.classList.add('error__state__color')
    monthErrorMsg.innerText = 'This field is required'
  }else {
    monthLabel.classList.remove('error__state__color')
    monthInput.classList.remove('input__error__state')
    monthErrorMsg.classList.remove('error__state__color')
    monthErrorMsg.innerText = ''
  }
})

yearInput.addEventListener('chnage', () => {
  if(yearInput.value == "") {
    yearLabel.classList.add('error__state__color')
    yearInput.classList.add('input__error__state')
    yearErrorMsg.classList.add('error__state__color')
    yearErrorMsg.innerText = 'This field is required'
  }else {
    yearLabel.classList.remove('error__state__color')
    yearInput.classList.remove('input__error__state')
    yearErrorMsg.classList.remove('error__state__color')
    yearErrorMsg.innerText = ''
  }
})


/*====================== CALCULATE AGE ===================*/
