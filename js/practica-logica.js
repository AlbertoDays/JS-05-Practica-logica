/*
User profile
Write a program that prompts a user for their data: username, age, and a list of their favorite movies.
Store the information and then showcase it in the console. Take note that the output for the films should 
add a small message like: 'The film {film} is one of my favorites'.*/


var userName = prompt("Please enter your Username:");
var age = prompt("Please enter your age:");
var favoriteMovies = prompt("Please enter a list your favorites movies:");
var moviesArray = favoriteMovies.split(",");

console.log("Username: " + userName);
console.log("Age: " + age);
console.log("My favorite movies:");

for (var i = 0; i < moviesArray.length; i++) {
  console.log("The film'" + moviesArray[i].trim() + "' is one of my favorites.");
}




/*Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures
you've seen before, determine and output the highest of those numbers.*/

/*function userNums(index){
var num = parseFloat(prompt("Enter number #"+ index +":"));
return num;
}

function maxNumber(index,numMax, totalNums){
    if(index === totalNums){
        return numMax;
    } else {
        var numPresent = userNums(index+1);
        if (!isNaN( numPresent)){
            if (numPresent > numMax){
             numMax=numPresent;
        }
    }
        return maxNumber(index+1,numMax,totalNums);
    }
}

var totalNums=parseInt(prompt("How many numbers would you like to enter?"));

var result = maxNumber(0,-Infinity,totalNums);
console.log("The largest numebr is:", result);





/*Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside
a text to show once those seconds have passed in real time.*/
//Result example: "Time for bed after 10 seconds".

var seconds = parseInt(prompt("Enter the number of seconds for time bed"));
//function alarm(seconds){
//var time= Number(seconds);
if (!isNaN(seconds) && seconds > 0) {
   setTimeout(function() {
    console.log("Time for bed after " + seconds + " seconds!");
  }, seconds * 1000);
} else {
  console.log("Number no valid");
}


/*Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure
out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.*/

function stringClean(string) {    
    return string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  }
    
  function isPalindrom(string) {
    string = stringClean(string);
    var length = string.length;
    for (var i = 0; i < length / 2; i++) {
      if (string[i] !== string[length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  
  var input = prompt("Enter a word to check it's a palindrome:");  
  if (isPalindrom(input)) {
    console.log("It's a palindrome.");
  } else {
    console.log("It's not a palindrome.");
  }
  

/*Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.*/

function numberUser() {
    var n = parseInt(prompt("Enter number"));
    if (isNaN(n) || n<1) {
      console.log("Number is not valid");
      return numberUser();
    } else {
        return n;
    }
  }
  
  var number = numberUser();
  console.log("The Integer number is:"+ number);
  
  


/*Flat array
Write a program that takes the following nested matrix and flattens it (makes it a 1D array).
Use any type of algorithm you want like callbacks, recursion, etc...*/
//let multiDimension = [1, [2, 3, [4, 5, [6]]]];