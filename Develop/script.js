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
  // If user does not select any character types, alert user and return to beginning of function
  if (!passwordLowercase && !passwordUppercase && !passwordNumeric && !passwordSpecial) {
    alert("You must select at least one character type.");
    return generatePassword();
  }
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
  if (passwordLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseLetters);
  }
  // If user selected uppercase letters, add uppercase letters to possible characters
  if (passwordUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseLetters);
  }
  // If user selected numbers, add numbers to possible characters
  if (passwordNumeric) {
    possibleCharacters = possibleCharacters.concat(numbers);
  }
  // If user selected special characters, add special characters to possible characters
  if (passwordSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }
  // Loop through password length
  for (var i = 0; i < passwordLength; i++) {
    // Generate random index based on length of possible characters
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    // Add character at random index to password characters
    passwordCharacters.push(possibleCharacters[randomIndex]);
  }
  // Join password characters into string
  var password = passwordCharacters.join("");
  // Return password
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

