let num1 = 3;
let num2 = 2;



const Welcome = () => {
  console.log("Normal function");
}

let add = (num1,num2) => {
  sum = num1 + num2;
  return sum;
}


console.log(add(num1,num2));


function isLandscape(width, height) {
  return (width > height) ? true : false;
}



function fizzBuzz(input){
  if(input %3 === 0 && input %5 === 0){
    console.log(fizzBuzz);
  }
  else if (input %3 === 0){
    console.log(fizz);
  }
  else if(input %5 === 0){
    console.log(buzz);
  }
  else if(input %3 !== 0 || input %5 !== 0){
    console.log(input);
  }
  else{
    console.log('Not a number');
  }
}