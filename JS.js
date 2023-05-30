
//we will create the three var two let one const
let FirstName="Samar";
let SecondName="Arabi";
let LastName="Saleh";
const id=123456789;
const Email="Samar@hotmail.com";

console.log(typeof FirstName);
console.log(typeof id);

/*the Email will be const as uniqe value*/

//we will print the value
console.log("The First Name = "+FirstName+" The Second Name = "+ SecondName +"The Last Name = " + LastName + " \n The Email = " + Email +" the ID = " + id );

printFullName(FirstName,SecondName,LastName);

function printFullName(FirstName,SecondName,LastName){

    console.log("My Name is " + FirstName +" " +SecondName +" "+ LastName);
}


console.log("the even number");
for (let index = 1; index < 20; index++) {
    let number = index;
    if(number%2===0){
  console.log(number);
    }
}

console.log("the Odd number");
for (let index = 1; index < 20; index++) {
    let number = index;
    if(number%2===1){
  console.log(number);
    }
}

console.log();
console.log("the Sum two numbers");
let number1 = 4;
let number11 = 2;

sum(number1,number11);
console.log();

function sum(number1,number11){

    let result1 = number1 + number11;

    console.log(result1);
   
}
console.log();
console.log("the Sub two numbers");

sub(number1,number11);

function sub(number1,number11){

    let result2 = number1 - number11;

    console.log(result2);
   
}
console.log();
console.log("the Multi two numbers");

multi(number1,number11);

function multi(number1,number11){

  
let result3 = number1 * number11;

console.log(result3);

   
}
console.log();
console.log("the Div two numbers");

div(number1,number11);

function div(number1,number11){

    let result4 = number1 / number11;

    console.log(result4);
}

console.log();
console.log("the middle two numbers");

middle(number1,number11);


function middle(number1,number11){

let result5 = (number1 + number11)/2 ;

console.log(result5);
   
}

let number2=50;
let number22=51;
console.log();
console.log("the Sum two numbers and compare btween them");

bigsum(number2,number22);

console.log();
function bigsum(number2,number22){

let result5 = (number2+number22);

if(result5>100){

console.log("The Result is Bigger than 100");

}

else{
    console.log("The Result is less than 100 or ==100");
}
   
}

console.log();
let price=50;

console.log("The taxs value will be from price" + price);

taxs(price);
console.log();

function taxs(price){

let result5 = (price*0.05);

console.log("The taxs value is " + result5);

let res = price + result5;

console.log(" and the price will be " + res);
   
}
console.log();

console.log("Even or Odd or 0");

let num = 2;

switch (num % 2) {
    case 0:
        console.log("The number is even.");
        break;
    case 1:
        console.log("The number is odd.");
        break;
    default:
        console.log("The number is zero.");
        break;
}


console.log();
console.log("The Student Degree ");

let number = 100;

if (number<=49) {
    console.log("The Degree is F "+ number);
}

else if (number<=50) {
    console.log("The Degree is D "+ number);
}

else if (number<=55) {
    console.log("The Degree is D+ "+ number);
}

else if (number<=60) {
    console.log("The Degree is C "+ number);
}

else if (number<=75) {
    console.log("The Degree is C+ "+ number);
}

else if (number<=80) {
    console.log("The Degree is B "+ number);
}

else if (number<=85) {
    console.log("The Degree is B+ "+ number);
}


else if (number<=90) {
    console.log("The Degree is A "+ number);
}

else if (number<=100) {
    console.log("The Degree is A+ "+ number);
}

else{

    console.log("The Degree is notdefined");
}
console.log();

console.log("From 1 to 20 **2 are");
console.log();

for (let index = 1; index < 10; index++) {

    const element = index**2;
    console.log(element);
    
}
console.log();
console.log("The Shape will be down:");
console.log();

for (let i = 1; i <= 8; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += j + " ";
    }
    console.log(str);
  }

  console.log();

console.log(isLeapYear(2020)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true

console.log();
  console.log("Leap Year");
  console.log();
  function isLeapYear(year) {
    // A year is a leap year if it is divisible by 4 and not divisible by 100,
    // or if it is divisible by 4 and is divisible by 100 and is divisible by 400.
    return (year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 100 === 0 && year % 400 === 0);
  }

  console.log();
  console.log();

 


  console.log("Age from Years to Days"); 
  console.log(convertAgeToDays(26)); 

  function convertAgeToDays(age) {
    // There are 365 days in a non-leap year and 366 days in a leap year.
    var daysInYear = 365;
    if (isLeapYear(age)) {
      daysInYear = 366;
    }
  
    // The age in days is the age in years multiplied by the number of days in a year.
    return age * daysInYear;
  }

  console.log("باستعمال loops قم بطباعة الاعداد الزوجيه الموجودة في نطاق من 25- الى 0");

  for (let i = 0 ; i >= -25; i--) {
    if (i % 2 === 0) {
        console.log(i);
    }
}




















