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

let add = (num1,num2) => {
  return num1 + num2;
}

console.log(add(num1,num2));

let width = 48;
let height = 1024

function isLandscape(width, height) {
  return (width > height) ? true + " this is a landscape photo" : false + " this is not a landscape photo, its a portrait photo";
}

console.log(isLandscape(width, height));
