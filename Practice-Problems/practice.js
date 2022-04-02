// let num1 = 3;
// let num2 = 2;

// const Welcome = () => {
//   console.log("Normal function");
// }

// let max = (num1, num2) => {
//   return (num1 > num2) ? num1 : num2;
// }

// let number = max(7, 2);
// console.log(number);

// let add = (num1, num2) => {
//   return num1 + num2;
// }

// console.log(add(num1, num2));

// let width = 48;
// let height = 1024

// function isLandscape(width, height) {
//   return (width > height) //? true + " this is a landscape photo" : false + " this is not a landscape photo, its a portrait photo";
// }

// console.log(isLandscape(width, height));

// let input = 7;

// console.log(fizzBuzz(input));

// function fizzBuzz(input) {
//   if (typeof input !== 'number') {
//     return NaN;
//   }

//   if ((input % 3 === 0) && (input % 5 === 0)) {
//     return 'fizzbuzz';
//   }


//   if (input % 5 === 0) {
//     return 'buzz';
//   }

//   if (input % 5 === 0) {
//     return 'fizz';
//   }

//   if ((input % 3 !== 0) || (input % 5 !== 0)) {
//     return input;
//   }

// }

// checkSpeed(129);

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if (speed < speedLimit + kmPerPoint) {
//     return console.log("Ok");
//   }
//   const points = Math.floor((speed - speedLimit) / kmPerPoint);
//   if (points >= 12) {
//     console.log('License suspended')
//   }
//   else {
//     console.log('Points: ', points);
//   }
// }

// showNumbers(23);
// showNumbers2(10);

// function showNumbers(limit) {
//   for (i = 0; i <= limit; i++) {
//     if (i % 2 === 0) {
//       console.log(i, " EVEN");
//     }
//     else {
//       console.log(i, " ODD");
//     }
//   }
// }
// //another way of righting above cleaner
// function showNumbers2(limit) {
//   for (i = 0; i <= limit; i++) {
//     const message = (i % 2 === 0) ? " Even" : " Odd";
//     console.log(i, message);
//   }
// }

// const array = [0,1,2,3, null, 47]

// console.log(countTruthy(array));

// function countTruthy(array){
//   let counter = 0;
//   for(i = 0; i <= array.length; i++){
//     if(array[i]){//converts to truthy if true then adds to counter
//       counter++;
//     }
//   }
//   return counter;
// }

// function countTruthy(array) {
//   let counter = 0;
//   for (let value of array) {
//     if (value) {
//       counter++;
//     }
//   }
//   return counter;
// }

// const movie = {
//   title: 'a',
//   releaseYear: 2018,
//   rating: 4.5,
//   director: 'b'
// }

// showProperties(movie);

// //console log "key" to figure out what it is
// //console log "obj[key]" to figure out what it is
// function showProperties(obj) {
//   for (let key in obj) {
//     if(typeof obj[key] === "string"){
//       console.log(key, obj[key]);
//     }
//   }
// }

// console.log(sum(7));

// function sum(limit){
//   let sum = 0;

//   for(i = 0; i <= limit; i++){
//     if((i % 3 === 0) || (i % 5 === 0)){
//       sum += i;
//     }
//   }
//   return sum;
// }

const marks = [100, 100, 95];

//  0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks))
//my solution
function calculateGrade(marks){
  let sum = 0;
  let avg = 0;

  for(let i = 0; i < marks.length; i++){
    sum = sum + marks[i];
  }

  avg = sum/marks.length;

  if(avg <= 59){
    console.log("You got an F")
  }
  else if( avg <= 69 && avg >= 60){
    console.log("You got a D")
  }
  else if( avg <= 79 && avg >= 70){
    console.log("You got a C")
  }
  else if( avg <= 89 && avg >= 80){
    console.log("You got a B")
  }
  else if( avg <= 100 && avg >= 90){
    console.log("You got a A")
  }
  return avg;
}

// my cleaned up solution
function calculateGrade(marks){
  let average = caluclateAverage(marks)
  if(average < 60) return "You got an F";
  if(average < 70) return "You got an D";
  if(average < 80) return "You got an C";
  if(average < 90) return "You got an B";
  return "You got an A";
}

function caluclateAverage(array){
  let sum = 0;
  for(let value of array){
    sum += value;
  }
  return sum/array.length
}