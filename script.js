// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = true;
var lowerCase = true; 
var numbers = true; 
var symbols = true;
var PassLength = 0;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // generateNewPassword();
  generateNewPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){


//after clicking button, this is the prompt that will pop up to the user 
PassLength = prompt("How many characters would you like your password to be?");

//while loop (repeating ifstatement if requirements not met) with condition and executed code 
while ( PassLength < 8 || PassLength > 128 || PassLength === isNaN ) {
PassLength = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");
}

//user confirms or cancels these charachters 
symbols = confirm("Would you like to use symbol characters?");
numbers = confirm("Would you like to use numbers?");
lowerCase = confirm("Would you like to use lowercase letters?");
upperCase = confirm("Would you like to use uppercase letters?");

//this pops up if the user doesnt choose any charachters at all, must choose at least one 
//! means not equal to, meaning IF user choosing cancel on all of them, the following alert will occur 
while (!upperCase && !lowerCase && !numbers && !symbols) {
  alert("You must select at least one character type!");
  symbols = confirm("Would you like to use s characters?");
  numbers = confirm("Would you like to use numbers?");
  lowerCase = confirm("Would you like to use lowercase letters?");
  upperCase = confirm("Would you like to use uppercase letters?");
  
}

}

////////////////////////////////////////////////////////////////// 2nd function below to generate new password 

// #1: When I click the butotn, I get a prompt asking generatePassword()
//  #2 Then I STORE the values from that prompt, and based on that, make a password generateNewPassword()

//function to generate new password with different chosen charachters from user 
// This function is only DEFINED and not running
// YOu will need to call it somewhere. 
function generateNewPassword() {
  var upperCaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM"; 
  var lowerCaseLetters = "qwertyuiopasdfghjklzxcvbnm";
  var numberChar = "1234567890";
  var symbolChar = "!@#$%^&*(){}[]=<>/,.";
  var password = "";
  
  
  for (var i = 0; i < PassLength; i++) {
    var upperCasePosition = Math.floor(Math.random()* upperCaseLetters.length) + 1;
    console.log(upperCasePosition);

    if(upperCase) {
      splitUpperChar = upperCaseLetters.split('');
      console.log(splitUpperChar)
      password += splitUpperChar[upperCasePosition]
    }
  }
  
  for (var i = 0; i < PassLength; i++) {
    var lowerCasePosition = Math.floor(Math.random()* lowerCaseLetters.length) + 1;
    console.log(lowerCasePosition);
  if(lowerCase) {
    splitLowerChar = lowerCaseLetters.split('');
    console.log(splitLowerChar)
    password += splitLowerChar[lowerCasePosition]
  }
}

  for (var i = 0; i < PassLength; i++) {
    var numberCharPosition = Math.floor(Math.random()* numberChar.length) + 1;
    console.log(numberCharPosition);
  if(numbers) {
    splitNumberChar = numberChar.split('');
    console.log(splitNumberChar)
    password += splitNumberChar[numberCharPosition];
  }
}

  for (var i = 0; i < PassLength; i++) {
    var symbolCharPosition = Math.floor(Math.random()* symbolChar.length) + 1;
    console.log(symbolCharPosition);
  if(symbols) {
    splitSymbolChar = upperCaseLetters.split('');
    console.log(splitSymbolChar)
    password += splitSymbolChar[symbolCharPosition];
  }
}



  var passwordText = document.getElementById("password") 
  passwordText.textContent(password);
  
return password;

}


