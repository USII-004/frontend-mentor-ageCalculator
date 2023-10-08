

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
      submitButton = document.getElementById('svg-btn'),
      desktopSubmitButton = document.getElementById('desktop-svg-btn')

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
  }else if (monthInput.value < 1 || monthInput.value > 12) {
    monthLabel.classList.add('error__state__color')
    monthInput.classList.add('input__error__state')
    monthErrorMsg.classList.add('error__state__color')
    monthErrorMsg.innerText = 'Please enter a valid month'
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
    
  }
})

/*====================== CALCULATE AGE ===================*/
// retrive input values

const currentDate = new Date();

function calculateAge(props) {
  const birth = new Date(props);

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

/*====================== COUNT UP THE VALUE ===================*/
function countUpToValue(targetElement, targetValue, duration) {
  const startValue = 0;
  const intervalTime = Math.abs(Math.floor(duration / (targetValue - startValue)));
  let currentValue = startValue;
  let interval = null;

  interval = setInterval(() => {
    currentValue++;

    // Update the target element with the current value
    targetElement.innerText = currentValue;

    if (currentValue === targetValue) {
        clearInterval(interval);
    }
  }, intervalTime);
}

submitButton.addEventListener('click', () => {
  const year = yearInput.value
  const month = monthInput.value
  const day = dayInput.value

  // Array to store the number of days in each month (0 index-based)
  const daysInMonth = [
    0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  ];

  // Adjust February days for leap years
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    daysInMonth[2] = 29;
  }

  if (day < 1 || day > daysInMonth[month]) {
    dayLabel.classList.add('error__state__color')
    dayInput.classList.add('input__error__state')
    dayErrorMsg.classList.add('error__state__color')
    dayErrorMsg.innerText = 'Please enter a valid month'

    return;
  }
  
  if (year > currentDate.getFullYear()) {
    yearLabel.classList.add('error__state__color')
    yearInput.classList.add('input__error__state')
    yearErrorMsg.classList.add('error__state__color')
    yearErrorMsg.innerText = 'Please input a year that is not in the future'

    return;
  } 
  // create birthdate string using the input vlues above
  const birthDate = `${year}-${month}-${day}`

  // calculate age
  const age = calculateAge(birthDate)

  // display age
  // Use countUpToValue function to animate counting up
  countUpToValue(yearDisplay, age.years, 1000); // 1000ms (1 second) animation duration
  countUpToValue(monthDisplay, age.months, 1000); // 1000ms (1 second) animation duration
  countUpToValue(dayDisplay, age.days, 1000); // 1000ms (1 second) animation duration
})

desktopSubmitButton.addEventListener('click', () => {
  const year = yearInput.value
  const month = monthInput.value
  const day = dayInput.value

  // Array to store the number of days in each month (0 index-based)
  const daysInMonth = [
    0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  ];

  // Adjust February days for leap years
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    daysInMonth[2] = 29;
  }

  if (day < 1 || day > daysInMonth[month]) {
    dayLabel.classList.add('error__state__color')
    dayInput.classList.add('input__error__state')
    dayErrorMsg.classList.add('error__state__color')
    dayErrorMsg.innerText = 'Please enter a valid month'

    return;
  }
  
  if (year > currentDate.getFullYear()) {
    yearLabel.classList.add('error__state__color')
    yearInput.classList.add('input__error__state')
    yearErrorMsg.classList.add('error__state__color')
    yearErrorMsg.innerText = 'Please input a year that is not in the future'

    return;
  } 
  // create birthdate string using the input vlues above
  const birthDate = `${year}-${month}-${day}`

  // calculate age
  const age = calculateAge(birthDate)

  // display age
  // Use countUpToValue function to animate counting up
  countUpToValue(yearDisplay, age.years, 1000); // 1000ms (1 second) animation duration
  countUpToValue(monthDisplay, age.months, 1000); // 1000ms (1 second) animation duration
  countUpToValue(dayDisplay, age.days, 1000); // 1000ms (1 second) animation duration
})