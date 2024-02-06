// Task 1
function checkVotingEligibility(age) {
  if (age >= 18) {
    return 'You are eligible for voting';
  } else {
    return 'You are not eligible for voting';
  }
}

// Task 2
function printNumbersWithWhile() {
  let i = 1;
  while (i <= 5) {
    console.log(i);
    i++;
  }
}

// Task 3
function printEvenNumbersWithFor() {
  for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }
}

// Task 4
function getDayOfWeek(num) {
  switch (num) {
    case 1:
      return 'Sunday';
    case 2:
      return 'Monday';
    case 3:
      return 'Tuesday';
    case 4:
      return 'Wednesday';
    case 5:
      return 'Thursday';
    case 6:
      return 'Friday';
    case 7:
      return 'Saturday';
    default:
      return 'Invalid day';
  }
}

// Task 5
function sum(num1, num2) {
  return num1 + num2;
}

// Task 6
const fruits = ['apple', 'banana', 'orange', 'grape'];

module.exports = {
  checkVotingEligibility,
  printNumbersWithWhile,
  printEvenNumbersWithFor,
  getDayOfWeek,
  sum,
  fruits,
};