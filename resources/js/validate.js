/*====================== ELEMENTS  ===================*/ 

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


// Array to store the number of days in each month (0 index-based)
const daysInMonth = [
0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
];

/*====================== COUNT UP THE VALUE ===================*/
function countUpToValue(targetElement, targetValue, duration) {
  const startValue = 0;
  const startTime = performance.now();

  function animate(now) {
    const progress = (now - startTime) / duration;
    const currentValue = Math.floor(startValue + progress * (targetValue - startValue));
    targetElement.innerText = currentValue;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

/*====================== LEAP YEAR ===================*/
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function isValidDate(year, month, day) {
  if (month === 2 ) {
    if(isLeapYear(year)) {
      return day <= 29;
    }
    return day <= 28;
  }

  day <= daysInMonth[month];
}


/*====================== SHOW ERROR ===================*/
function showError (label, input, errorMsg, message) {
  label.classList.remove('correct__state__color');
  label.classList.add('error__state__color');
  input.classList.remove('input__error__state');
  errorMsg.innerText = message;
}

/*====================== CLEAR ERROR ===================*/
function clearError (label, input, errorMsg) {
  label.classList.remove('error__state__color');
  label.classList.add('correct__state__color');
  input.classList.remove('input__error__state');
  errorMsg.innerText = '';
}

/*====================== CALCULATE AGE ===================*/     
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

/*====================== BUTTON CLICK HANDLER ===================*/
function handleButtonClick() {
  event.preventDefault();
  if (dayInput.value === "" || dayInput.value < 1 || dayInput.value > 31) {
    showError(dayLabel, dayInput, dayErrorMsg, 'please enter a valid day between 1 and 31');
    return;
  }else {
    clearError(dayLabel, dayInput, dayErrorMsg);
  }

  if (monthInput.value === "" || monthInput.value < 1 || monthInput.value > 12) {
    showError(monthLabel, monthInput, monthErrorMsg, 'please enter a valid month between 1 and 12');
    return;
  }else {
    clearError(monthLabel, monthInput, monthErrorMsg);
  }
  
  if (yearInput.value === "" || yearInput.value < 1900 || yearInput.value > currentDate.getFullYear()) {
    showError(yearLabel, yearInput, yearErrorMsg, 'please enter a valid year between 1900 and current year');
    return;
  }else {
    clearError(yearLabel, yearInput, yearErrorMsg);
  }

  const year = parseInt(yearInput.value, 10);
  const month = parseInt(monthInput.value, 10);
  const day = parseInt(dayInput.value, 10);

  if (!isValidDate(year, month, day)) {
    showError(dayLabel, dayInput, dayErrorMsg, 'please enter a valid date');
    return;
  }else {
    clearError(dayLabel, dayInput, dayErrorMsg);
  }

  const birthDate = new Date(year, month - 1, day);
  const age = calculateAge(birthDate);

  countUpToValue(yearDisplay, age.years, 1000);
  countUpToValue(monthDisplay, age.months, 1000);
  countUpToValue(dayDisplay, age.days, 1000);
}


submitButton.addEventListener('click', handleButtonClick)

desktopSubmitButton.addEventListener('click', handleButtonClick)

// the function above do not correctly handle leap years as it accepts 29 days for february in all years