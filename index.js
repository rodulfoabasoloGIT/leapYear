// if its divisible by 4 and divisible by 400 it is a leap year
// if its divisible by 100 its not a leap year
// but if its divisible by 100 and its divisible by 400 and divisible by 1000 it is a leap year

const test = document.getElementById("input");
const results = document.getElementById("result");
const maxYear = 1582;
const leapYeear = (year) => {
  // const emp = null;
  if (year % 4 == 0 && year % 400 == 0 && year % 100 == 0) {
    results.innerHTML = `Year ${year} is divisible by 4, divisible by 400 and divisible by 100 it is a leap year`;
  }
  if (year % 4 == 0 && year % 100 != 0) {
    results.innerHTML = `Year ${year} is divisible by four but not divisible by 100 this is a leap year`;
  }
  if (year % 4 == 0 && year % 100 == 0 && year % 400 != 0) {
    results.innerHTML = `Year ${year} is divisible by 4, divisible by 100 but not divisible by 400. this is not a leap year`;
  }
  if (year % 4 != 0 && year) {
    results.innerHTML = `${year} is not divisible by 4, this is not a leap year`;
  }
  if (year <= maxYear) {
    results.innerHTML = `please enter a year 1582 onward`;
  }
};

test.addEventListener("input", () => {
  let unde = undefined;
  const test2 = test.value;
  if (test2 === null || test2 === "") {
    results.innerHTML = "";
  }
  if (test2.length <= 3) {
    console.log(unde);
  }
  if (test2.length >= 4) {
    leapYeear(test2);
  }
});
