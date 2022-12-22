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
    // Using split method to convert string to array
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

    // Declare variables for tracking character counts
    var specialCount = 0;
    var specialIndexList= [];
    var numberCount = 0;
    var numberIndexList = [];
    var upperCount = 0;
    var upperIndexList = [];
    var lowerCount = 0;
    var lowerIndexList = [];
    // Declare variable for random index
    var randomIndex = 0
    // Loop through password length
    for (var i = 0; i < passwordLength; i++) {
      // Generate random index based on length of possible characters
      // Use math.floor to round down to nearest whole number
      randomIndex = Math.floor(Math.random() * possibleCharacters.length);
      // Add character at random index to password characters
      passwordCharacters.push(possibleCharacters[randomIndex]);
      // Check if character is lowercase, uppercase, number, or special character
      // add to count variable and add index to index list
      if (lowercaseLetters.includes(possibleCharacters[randomIndex])) {
        lowerCount++;
        lowerIndexList.push(i);
      }
      else if (uppercaseLetters.includes(possibleCharacters[randomIndex])) {
        upperCount++;
        upperIndexList.push(i);
      }
      else if (numbers.includes(possibleCharacters[randomIndex])) {
        numberCount++;
        numberIndexList.push(i);
      }
      else if (specialCharacters.includes(possibleCharacters[randomIndex])) {
        specialCount++;
        specialIndexList.push(i);
      }
    }

    // set manual passowrd for testing below logic
    passwordCharacters = "sqEmq0zh".split("")
    // check if user selected special characters and if password contains special characters - add if not
    if (passwordSpecial && !passwordCharacters.includes(specialCharacters)) {
      var randomSpecialIndex = Math.floor(Math.random() * specialCharacters.length);
      var addSpecial = specialCharacters[randomSpecialIndex];
      var randomPassowrdIndex = Math.floor(Math.random() * passwordCharacters.length);
      passwordCharacters.splice(randomPassowrdIndex, 1, addSpecial);
    }

    // convert passwordCharacters to string and return final password
    var password = passwordCharacters.join("");
    return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

