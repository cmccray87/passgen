//Assignment code here

// listener and prompt
document.querySelector("#generate").addEventListener("click", writePassword);

// var arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var charLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// vars
var confirmLength = "";
var confirmNumber;
var confirmSymbol;
var confirmUppercase;
var confirmLowercase;

// Prompt to confirm how many characters the user would like in their password
function generate() {
  var confirmLength = (prompt("How many characters would you like for your password?"));

  // Loop if answer is outside the parameters 
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters for your password?"));
      } 

      // alert how many characters password will have 
      alert(`Your password will have ${confirmLength} characters`);

    // parameters of password 
    var confirmNumber = confirm("Click OK if you want numbers");    
    var confirmSymbol = confirm("Click OK if you want symbols");
    var confirmLowercase = confirm("Click OK if you want lower case characters");
    var confirmUppercase = confirm("Click OK if you want upper case characters");

      // Loop if outside parameters 
      while(confirmNumber === false && confirmSymbol === false && confirmLowercase === false && confirmUppercase === false) {
        alert("You must choose at least one parameter");
        var confirmSymbol = confirm("Click OK if you want numbers"); 
        var confirmNumber = confirm("Click OK if you want symbols");   
        var confirmLowercase = confirm("Click OK if you want lower case characters");
        var confirmUppercase = confirm("Click OK if you want upper case characters");
    } 

      var passwordCharacters = []
      
    if (confirmNumber) {
      passwordCharacters = passwordCharacters.concat(number)
    }

    if (confirmSymbol) {
      passwordCharacters = passwordCharacters.concat(symbol)
    }
      
    if (confirmLowercase) {
      passwordCharacters = passwordCharacters.concat(charLowercase)
    }

    if (confirmUppercase) {
      passwordCharacters = passwordCharacters.concat(charUppercase)
    }


      // empty string for random
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      }
      return randomPassword;
}

// Write password
function writePassword() {
  var password = generate();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}