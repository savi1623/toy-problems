// write a fucntion that takes in an object of names and numbers between 0 and 100 (can ewual either) and return a statement with the Names and letter grade of each key

//grades
// <60	F
// <70	D
// <80	C
// <90	B
// <=100	A

const grades = function (obj) {
  let string = '';

  for (let i in obj) {
    if (obj[i] < 60) {
      string += `${i} has an F. `;
    } else if (obj[i] >= 60 && obj[i] < 70) {
      string += `${i} has a D. `;
    } else if (obj[i] >= 70 && obj[i] < 80) {
      string += `${i} has a C. `;
    } else if (obj[i] >= 80 && obj[i] < 90) {
      string += `${i} has a B. `;
    }
    if (obj[i] >= 90) {
      string += `${i} has an A. `;
    }
  }

  return string;
};

const input = {
  David: 80,
  Vinoth: 77,
  Divya: 88,
  Ishitha: 95,
  Thomas: 65,
};

console.log(grades(input));
