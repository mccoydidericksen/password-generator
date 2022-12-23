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
    var includeLowercase = confirm("Would you like to include lowercase letters?");
    var includeUppercase = confirm("Would you like to include uppercase letters?");
    var includeNumbers = confirm("Would you like to include numbers?");
    var includeSpecial = confirm("Would you like to include special characters?");

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
    if (includeLowercase) {
      possibleCharacters = possibleCharacters.concat(lowercaseLetters);
    }
    // If user selected uppercase letters, add uppercase letters to possible characters
    if (includeUppercase) {
      possibleCharacters = possibleCharacters.concat(uppercaseLetters);
    }
    // If user selected numbers, add numbers to possible characters
    if (includeNumbers) {
      possibleCharacters = possibleCharacters.concat(numbers);
    }
    // If user selected special characters, add special characters to possible characters
    if (includeSpecial) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
    }

    // Declare variables for tracking character indexes
    var specialIndexList= [];
    var numberIndexList = [];
    var upperIndexList = [];
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
        lowerIndexList.push(i);
      }
      else if (uppercaseLetters.includes(possibleCharacters[randomIndex])) {
        upperIndexList.push(i);
      }
      else if (numbers.includes(possibleCharacters[randomIndex])) {
        numberIndexList.push(i);
      }
      else if (specialCharacters.includes(possibleCharacters[randomIndex])) {
        specialIndexList.push(i);
      }

    } 

    // create object to store character list information
    var charLists = {
      lower: {
        indexList: lowerIndexList,
        indexCount: lowerIndexList.length
      },
      upper: {
        indexList: upperIndexList,
        indexCount: upperIndexList.length
      },
      number: {
        indexList: numberIndexList,
        indexCount: numberIndexList.length
      }, 
      special: {
        indexList: specialIndexList,
        indexCount: specialIndexList.length
      },
    }

    // check if user selected special characters and if password contains special characters - add if not
    if (includeSpecial && passwordCharacters.every(r=> !specialCharacters.includes(r))) {
      console.log("adding special")
      var randomSpecialIndex = Math.floor(Math.random() * specialCharacters.length);
      var addSpecial = specialCharacters[randomSpecialIndex];
      // choose an indexList that has more than two list items
      for (i=0; i<Object.keys(charLists).length; i++) {
        if (charLists[Object.keys(charLists)[i]].indexCount > 1) {
          var selectedList = Object.keys(charLists)[i];
          // stops the for loop if a list is found
          break;
        }
      }
      // replace the chosen additional character to add with a valid character selection from the password
      var chosenIndex = charLists[selectedList].indexList[charLists[selectedList].indexList.length - 1];
      console.log(selectedList)
      console.log(chosenIndex)
      console.log(charLists[selectedList])
      passwordCharacters.splice(chosenIndex, 1, addSpecial);
      // update the selectedList values since we modified the password characters
      charLists[selectedList].indexCount -= 1;
      charLists[selectedList].indexList.pop();
    }

    // check if user selected numbers characters and if password contains numbers characters - add if not
    if (includeNumbers && passwordCharacters.every(r=> !numbers.includes(r))) {
      console.log("adding number")
      var randomNumberIndex = Math.floor(Math.random() * numbers.length);
      var addNumber = numbers[randomNumberIndex];
      // choose an indexList that has more than two list items
      for (i=0; i<Object.keys(charLists).length; i++) {
        if (charLists[Object.keys(charLists)[i]].indexCount > 1) {
          var selectedList = Object.keys(charLists)[i];
          // stops the for loop if a list is found
          break;
        }
      }
      // replace the chosen additional character to add with a valid character selection from the password
      var chosenIndex = charLists[selectedList].indexList[charLists[selectedList].indexList.length - 1];
      console.log(selectedList)
      console.log(chosenIndex)
      console.log(charLists[selectedList])
      passwordCharacters.splice(chosenIndex, 1, addNumber);
      // update the selectedList values since we modified the password characters
      charLists[selectedList].indexCount -= 1;
      charLists[selectedList].indexList.pop();
    }

    // check if user selected uppercase characters and if password contains uppercase characters - add if not
    if (includeUppercase && passwordCharacters.every(r=> !uppercaseLetters.includes(r))) {
      console.log("adding upper")
      var randomUpperIndex = Math.floor(Math.random() * uppercaseLetters.length);
      var addUpper = uppercaseLetters[randomUpperIndex];
      // choose an indexList that has more than two list items
      for (i=0; i<Object.keys(charLists).length; i++) {
        if (charLists[Object.keys(charLists)[i]].indexCount > 1) {
          var selectedList = Object.keys(charLists)[i];
          // stops the for loop if a list is found
          break;
        }
      }
      // replace the chosen additional character to add with a valid character selection from the password
      var chosenIndex = charLists[selectedList].indexList[charLists[selectedList].indexList.length - 1];
      console.log(selectedList)
      console.log(chosenIndex)
      console.log(charLists[selectedList])
      passwordCharacters.splice(chosenIndex, 1, addUpper);
      // update the selectedList values since we modified the password characters
      charLists[selectedList].indexCount -= 1;
      charLists[selectedList].indexList.pop();
    }

    // check if user selected lower characters and if password contains lower characters - add if not
    if (includeLowercase && passwordCharacters.every(r=> !lowercaseLetters.includes(r))) {
      console.log("adding lower")
      var randomLowerIndex = Math.floor(Math.random() * lowercaseLetters.length);
      var addLower = lowercaseLetters[randomLowerIndex];
      // choose an indexList that has more than two list items
      for (i=0; i<Object.keys(charLists).length; i++) {
        if (charLists[Object.keys(charLists)[i]].indexCount > 1) {
          var selectedList = Object.keys(charLists)[i];
          // stops the for loop if a list is found
          break;
        }
      }
      // replace the chosen additional character to add with a valid character selection from the password
      var chosenIndex = charLists[selectedList].indexList[charLists[selectedList].indexList.length - 1];
      console.log(selectedList)
      console.log(chosenIndex)
      console.log(charLists[selectedList])
      passwordCharacters.splice(chosenIndex, 1, addLower);
      // update the selectedList values since we modified the password characters
      charLists[selectedList].indexCount -= 1;
      charLists[selectedList].indexList.pop();
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

