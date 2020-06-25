// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generateNewPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var lengthOfPass = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(lengthOfPass) || lengthOfPass < 8 || lengthOfPass > 128) lengthOfPass = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

var symbols = confirm("Would you like to use special characters?");
var numbers = confirm("Would you like to use numbers?");
var lowercase = confirm("Would you like to use lowercase letters?");
var uppercase = confirm("Would you like to use uppercase letters?");


while (!uppercase && !lowercase && !numbers && !symbols) {
  alert("You must select at least one character type!");
  symbols = confirm("Would you like to use special characters?");
  numbers = confirm("Would you like to use numbers?");
  lowercase = confirm("Would you like to use lowercase letters?");
  uppercase = confirm("Would you like to use uppercase letters?");
  
}

window.addEventListener('load', function() {
  generateNewPassword();
});

function generateNewPassword() {
  var password = "";

  var allowed = {};
  if (uppercase) password += random(allowed.uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM");
  if (lowercase) password += random(allowed.lowercase = "qwertyuiopasdfghjklzxcvbnm");
  if (numbers) password += random(allowed.numbers = "1234567890");
  if (symbols) password += random(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

  for (var i = password.length; i < lengthOfPass; i++) password += random(random(allowed).value);

  document.getElementById("password").value = randomSequence(password).join("");

}

