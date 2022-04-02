let num1 = 3;
let num2 = 2;

const Welcome = () => {
  console.log("Normal function");
}

let max = (num1, num2) => {
  return (num1 > num2) ? num1 : num2;
}

let number = max(7, 2);
console.log(number);

let add = (num1, num2) => {
  return num1 + num2;
}

console.log(add(num1, num2));

let width = 48;
let height = 1024

function isLandscape(width, height) {
  return (width > height) //? true + " this is a landscape photo" : false + " this is not a landscape photo, its a portrait photo";
}

console.log(isLandscape(width, height));

let input = 7;

console.log(fizzBuzz(input));

function fizzBuzz(input) {
  if (typeof input !== 'number') {
    return NaN;
  }

  if ((input % 3 === 0) && (input % 5 === 0)) {
    return 'fizzbuzz';
  }


  if (input % 5 === 0) {
    return 'buzz';
  }

  if (input % 5 === 0) {
    return 'fizz';
  }

  if ((input % 3 !== 0) || (input % 5 !== 0)) {
    return input;
  }

}

checkSpeed(129);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    return console.log("Ok");
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) {
    console.log('License suspended')
  }
  else {
    console.log('Points: ', points);
  }
}
