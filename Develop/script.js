// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    // Prompt user for password length;
    var passwordLength = prompt("How many characters would you like your password to be?");
    // If password length is less than 8 or greater than 128, alert user and return to beginning of function
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password length must be between 8 and 128 characters.");
      return generatePassword();
    }
    // Prompt user for character types
    var passwordLowercase = confirm("Would you like to include lowercase letters?");
    var passwordUppercase = confirm("Would you like to include uppercase letters?");
    var passwordNumeric = confirm("Would you like to include numbers?");
    var passwordSpecial = confirm("Would you like to include special characters?");

    // Create array of lowercase letters
    var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
    // Create array of uppercase letters
    var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    // Create array of numbers
    var numbers = "0123456789".split("");
    // Create array of special characters
    var specialCharacters = "!@#$%^&*".split("");
    // Create array to hold all possible characters
    var possibleCharacters = [];
    // Create array to hold password characters
    var passwordCharacters = [];
    // If user selected lowercase letters, add lowercase letters to possible characters
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

