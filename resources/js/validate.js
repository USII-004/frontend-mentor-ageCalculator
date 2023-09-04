/*====================== VARIABLES  ===================*/ 

const dayInput = document.getElementById('day-input'),
      monthInput = document.getElementById('month-input'),
      yearInput = document.getElementById('year-input'),

      dayLabel = document.getElementById('day-label'),
      monthLabel = document.getElementById('month-label'),
      yearLabel = document.getElementById('year-label'),

      dayErrorMsg = document.getElementById('day-error-msg'),
      monthErrorMsg = document.getElementById('month-error-msg'),
      yearErrorMsg = document.getElementById('year-error-msg'),

      yearDisplay = document.getElementById('years-display'),
      monthDisplay = document.getElementById('months-display'),
      dayDisplay = document.getElementById('days-display'),

      year = yearInput.value,
      month = monthInput.value,
      day = dayInput.value,
      birthDate = `${year}-${month}-${day}`


/*====================== CALCULATE AGE ===================*/
// retrive input values


function calculateAge(birthDate) {
  const currentDate = new Date();
  const birth = new Date(birthDate);

  let years = currentDate.getFullYear() - birth.getFullYear();
  let months = currentDate.getMonth() - birth.getMonth();
  let days = currentDate.getDate() - birth.getDate();

  // Check if the birth date has occurred this year
  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12; // Add 12 months to account for the previous year
  }

  // Calculate the difference in months and days
  if (days < 0) {
    const prevMonth = new Date(currentDate);
    prevMonth.setMonth(currentDate.getMonth() - 1);
    const daysInPrevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    days += daysInPrevMonth;
    months--;
  }
  
  return {
    years,
    months,
    days,
  };
}
      
      
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

yearInput.addEventListener('change', () => {
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
    
    const age = calculateAge(birthDate)
    yearDisplay.innerText = `${age.years}`
    monthDisplay.innerText = `${age.months}`
    dayDisplay.innerText = `${age.days}`
  }
})
