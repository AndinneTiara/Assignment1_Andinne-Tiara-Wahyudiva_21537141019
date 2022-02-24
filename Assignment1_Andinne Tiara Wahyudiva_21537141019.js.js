/*****************************
* Task 1: Student info 
*****************************/

var name = "Andinne Tiara Wahyudiva";
var program = "Teknologi Informasi";
var course = 11;
var pekerjaanku = false;
const job = function(parttime){
    return(parttime)?"have":"don't have";
}
console.log("My name is " + name + " and I'm in " + program + " program. I'm taking " + course + " course in this semester and I " + job(pekerjaanku) + " a part-time job now.");

/*****************************
* Task 2: Birth and Graduate Year 
*****************************/

var ngepromp = require('readline-sync');
var currentDate = new Date();
var currentYear = currentDate.getFullYear();

var age = ngepromp.question("Please enter your age: ");

var birthYear = currentYear - age;
console.log("I was born in the year of " + birthYear + ".");

var YearofStudy = ngepromp.question("Enter the number of year you expect to study in the college: ");
var graduateYear = parseInt(YearofStudy) + currentYear;
console.log("You will graduate from Seneca college in the year of " + graduateYear + ".");

/*****************************
* Task 3 : Celsius and Fahrenheit temperatures 
*****************************/

var Celcius = ngepromp.question("Insert Celcius : ");
var konversiF = Celcius * 1.8 + 32;
console.log(Celcius + "°C is " + konversiF + "°F");

var Fahrenheit = ngepromp.question("Insert Fahrenheit : ");
var konversiC = (Fahrenheit - 32)*parseFloat(5/9);
console.log(Fahrenheit + "°F is " + konversiC + "°C");

/*****************************
* Task 4 : Even and odd numbers
*****************************/

for(var num = 0; num <=10 ; num++) {
    if(num%2 == 0) {
        console.log(num + " is even")
    }
    else {
        console.log(num + " is odd")
    }
}

/*****************************
* Task 5 : Larger or largest number
*****************************/

//function largerNum
function largerNum(num1, num2) {
    if(num1 >= num2) {
        return num1;
    } else {
        return num2;
    }
}
var a = ngepromp.question("Insert a value : ");
var b = ngepromp.question("Insert b value : ");
console.log(largerNum(a,b) + " is Larger.");

//function greaterNum
var greaterNum = function(num1, num2) {
    if(num1 >= num2) {
        return num1;
    } else { 
        return num2;
    }
}
var x = ngepromp.question("Insert x value : ");
var y = ngepromp.question("Insert y value : ");
console.log(greaterNum(x,y) + " is Greater.");

//function largestNum 
var val = ngepromp.question("How many number do you want to insert : ");
var arr = [];
for(var i = 0; i < val; i++) {
    arr.push(ngepromp.question("Enter grade "));
}
var largerNum = function(array){
    var largest = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}
console.log(largerNum(arr)+ " is largest."); 

/*****************************
* Task 6 : Evaluator
*****************************/

function evaluator () {
    var sum = 0, avg = 0;
    for(var i = 0; i < arguments.length; i++)
{ 
    sum += arguments[i];
   }
   var avg = sum / arguments.length; 
   if (avg >= 50) {
       console.log("Average greater than or equal to 50 : " + true);
   } else {
       console.log("Average greater than or equal to 50 : " + false);
   }
}
evaluator(83, 86, 79);
evaluator(46, 61, 95);
evaluator(31, 71, 51);


/*****************************
* Task 7 : Grader
*****************************/

var score = ngepromp.question("Please enter the score : ");
if(score >= 90 && score <= 100) 
    console.log ("A");
    else if (score >= 80 && score <= 89) 
    console.log ("B"); 
    else if (score >= 70 && score <= 79) 
    console.log ("C"); 
    else if (score >= 60 && score <= 69) 
    console.log ("D"); 
    else if (score >= 0 && score <= 59) 
    console.log ("F"); 
   

/*****************************
* Task 8 : Grader
*****************************/

function showMultiples(num, numMultiples) {
    for(var i = 1; i <= numMultiples; i++) {
        console.log(num + "x" + i + " = " + num*i);
    }
}
for(var i = 0; i < 3; i++) {
    var inputNum = ngepromp.question("Insert a number : ");
    var inputMul = ngepromp.question("Insert a multiplier : ");
    showMultiples(inputNum, inputMul);
}
