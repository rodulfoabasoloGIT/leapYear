// if its divisible by 4 and divisible by 400 it is a leap year
// if its divisible by 100 its not a leap year
// but if its divisible by 100 and its divisible by 400 and divisible by 1000 it is a leap year

const test = document.getElementById("input");

const leapYeear = (year) => {
  if (year % 4 == 0 && year % 400 == 0 && year % 100 == 0) {
    console.log(
      `year ${year} is divisible by 4, divisible by 400 and divisible by 100 it is a leap year`
    );
  }
  if (year % 4 == 0 && year % 100 != 0) {
    console.log(
      `year ${year} is divisible by four but not divisible by 100 this is a leap year`
    );
  }

  if (year % 4 == 0 && year % 100 == 0 && year % 400 != 0) {
    console.log(
      `year ${year} is divisible by 4, divisible by 100 but not divisible by 400. this is not a leap year `
    );
  }
  if (year % 4 != 0) {
    console.log("not a leap year");
  }
};

// test.addEventListener("input", () => {
//   const test2 = test.value;
//   console.log(test2);
// });
