// Assignment code here

let length = function () {
  let lengthPrompt = window.prompt("How many characters would you like your password to be? Please pick a number between 8 and 128.");
  lengthPrompt = parseInt(lengthPrompt);
  if (lengthPrompt >= 8 && lengthPrompt <= 128) {
    return lengthPrompt;
  }
  else {
    window.alert("That was not a valid answer. Please try again.")
    length();
  }
}


var generatePassword = function () {
  let result = "";
  let capChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowChars = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "1234567890"
  let special = " !#$%&()*+.-./:;<=>?@[]\\^_~`{}|";
  let capConfirm = window.confirm("Use capital letters?");
  let lowConfirm = window.confirm("Use lowercase letters?");
  let numConfirm = window.confirm("Use numbers?");
  let specialConfirm = window.confirm("Use special characters?")
  let lengthPrompt = length();
  let possibleChars = ""

  if (capConfirm) {
    possibleChars += capChars;
  };
  if (lowConfirm) {
    possibleChars += lowChars;
  };
  if (numConfirm) {
    possibleChars += numbers;
  };
  if (specialConfirm) {
    possibleChars += special;
  };
  if (capConfirm === false && lowConfirm === false && numConfirm === false && specialConfirm === false) {
    window.alert("Please select at least one type of character.")
    generatePassword();
  };

  for (var i = 0; i < lengthPrompt; i++) {
    result += (possibleChars).charAt(Math.floor(Math.random() * possibleChars.length))
  }

  console.log(result);
  return result;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
