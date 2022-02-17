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


  if (capConfirm && lowConfirm && numConfirm && specialConfirm) {
    for (var i = 0; i < lengthPrompt; i++) {
      result += (capChars + lowChars + numbers + special).charAt(Math.floor(Math.random() * (capChars + lowChars + numbers + special).length));
    }
  }
  else if (capConfirm && lowConfirm && numConfirm && specialConfirm === false) {
    for (var i = 0; i < lengthPrompt; i++) {
      result += (capChars + lowChars + numbers).charAt(Math.floor(Math.random() * (capChars + lowChars + numbers).length));
    }
  }
  else if (capConfirm && lowConfirm && numConfirm === false && specialConfirm === false) {
    for (var i = 0; i < lengthPrompt; i++) {
      result += (capChars + lowChars).charAt(Math.floor(Math.random() * (capChars + lowChars).length));
    }
  }
  else if (capConfirm && lowConfirm === false && numConfirm === false && specialConfirm === false) {
    for (var i = 0; i < lengthPrompt; i++) {
      result += (capChars).charAt(Math.floor(Math.random() * (capChars).length));
    }
  }
  else if (capConfirm === false && lowConfirm && numConfirm && specialConfirm) {
    for (var i = 0; i < lengthPrompt; i++) {
      result += (lowChars + numbers + special).charAt(Math.floor(Math.random() * lengthPrompt));
    }
  }
  else if (capConfirm === false && lowConfirm === false && numConfirm && specialConfirm) {
    for (var i = 0; i < lengthPrompt; i++) {
      result += (numbers + special).charAt(Math.floor(Math.random() * lengthPrompt));
    }
  }
  else if (capConfirm === false && lowConfirm && numConfirm && specialConfirm === false) {
    for (var i = 0; i < lengthPrompt; i++) {
      result += (lowChars + numbers).charAt(Math.floor(Math.random() * lengthPrompt));
    }
  }
  else if (capConfirm === false && lowConfirm && numConfirm === false && specialConfirm) {
    for (var i = 0; i < lengthPrompt; i++) {
      result += (lowChars + special).charAt(Math.floor(Math.random() * lengthPrompt));
    }
  }
  else if (capConfirm === false && lowConfirm && numConfirm === false && specialConfirm === false) {
    for (var i = 0; i < lengthPrompt; i++) {
      result += (lowChars).charAt(Math.floor(Math.random() * lengthPrompt));
    }
  }
  else if (capConfirm && lowConfirm && numConfirm === false && specialConfirm) {
    for (var i = 0; i < lengthPrompt; i++) {
      result += (capChars + lowChars + special).charAt(Math.floor(Math.random() * lengthPrompt));
    }
  }
  else if (capConfirm && lowConfirm === false && numConfirm && specialConfirm) {
    for (var i = 0; i < lengthPrompt; i++) {
      result += (capChars + numbers + special).charAt(Math.floor(Math.random() * lengthPrompt));
    }
  }
  else if (capConfirm && lowConfirm === false && numConfirm && specialConfirm === false) {
    for (var i = 0; i < lengthPrompt; i++) {
      result += (capChars + numbers).charAt(Math.floor(Math.random() * lengthPrompt));
    }
  }
  else if (capConfirm === false && lowConfirm && numConfirm === false && specialConfirm) {
    for (var i = 0; i < lengthPrompt; i++) {
      result += (capChars + numbers + special).charAt(Math.floor(Math.random() * lengthPrompt));
    }
  }
  else if (capConfirm === false && lowConfirm === false && numConfirm && specialConfirm === false) {
    for (var i = 0; i < lengthPrompt; i++) {
      result += (numbers).charAt(Math.floor(Math.random() * lengthPrompt));
    }
  }
  else if (capConfirm === false && lowConfirm === false && numConfirm === false && specialConfirm) {
    for (var i = 0; i < lengthPrompt; i++) {
      result += (special).charAt(Math.floor(Math.random() * lengthPrompt));
    }
  }
  else {
    window.alert("Please select at least one type of character.")
    generatePassword();
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
