// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max - min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}


function generatePassword() {
  var userInput = window.prompt("How many characters long would you like your password to be?")
 
  var passwordLength = parseInt(userInput)
  
  if (isNaN(passwordLength)) {
    window.alert ("That is not a number!")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length requirements: Between 8 and 128 characters")
    return
  }

  var userWantsNumbers = window.confirm("Would you like to include numbers in your password")
  var userWantsSymbols = window.confirm("Would you like to include symbols in your password")
  var userWantsLowercase = window.confirm("Would you like to include Lowercase letters in your password")
  var userWantsUppercase = window.confirm("Would you like to include Uppercase letters in your password")

  var numberList = ["0", "1", "2", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!","@", "#", "$", "%", "^", "&", "*", "+", "?"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []
  
  var optionsCart = []

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  if (userWantsNumbers === true) {
    optionsCart.push(numberList)
  }

  if (userWantsSymbols === true) {
    optionsCart.push(symbolList)
  }

  if (userWantsLowercase === true) {
    optionsCart.push(lowercaseList)
  }

  if (userWantsUppercase === true) {
    optionsCart.push(uppercaseList)
  }
  
  if (optionsCart.length === 0) {
    optionsCart.push(lowercaseList) 
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  }
  
  return generatedPassword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
