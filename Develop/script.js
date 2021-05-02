// Assignment code here
function generatePassword() {
  // Prompt user for password requirements and forces user to select between 8 and 128 characters
  var charSet = "";
  var length = window.prompt("How many characters do you want to use for the password? Please select between 8 and 128 characters.");
    if (length == "") {
      window.alert("You must enter a valid number!")
      }
    else if ( length > "128" && length < "8") {
      var length = window.prompt("Your password did not meet the character length requirements. Please enter length between 8 and 128 characters");
      var lowercase = window.confirm("Do you want include lowercase letters in your password? Click ok for yes and cancel for no.");
      var uppercase = window.confirm("Do you want to include uppercase letters in your password? Click ok for yes and cancel for no.");
      var numerals = window.confirm("Do you want to use numerical values in your password? Click ok for yes and cancel for no.");
      var specialcharacters = window.confirm("Do you want to include special characers in the password? Click ok for yes and cancel for no.");

        // Force user to select one character option and generate password based on user input
        // User does not select any character options
        if (lowercase == false && uppercase == false && numerals == false && specialcharacters == false) {
          window.alert("You must select yes on one of the character options.")
        }
        // User only selected to use lowercase letters
        else if (lowercase == true && uppercase == false && numerals == false && specialcharacters == false) {
          charSet = "abcdefghijklmnopqrstuvwxyz";
          window.alert("You selected the lowercase character option.");
          window.alert("A password matching your selections has been generated!");
        }
        // User only selected to use uppercase letters
        else if (lowercase == false && uppercase == true && numerals == false && specialcharacters == false) {
          charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          window.alert("You selected the uppercase character option.");
          window.alert("A password matching your selections has been generated!");
        }
        // User only selected to use numerical values
        else if (lowercase == false && uppercase == false && numerals == true && specialcharacters == false) {
          charSet = "0123456789";
          window.alert("You selected the numbers character option.");
          window.alert("A password matching your selections has been generated!");
        }
        // User only selected to use special characters
        else if (lowercase == false && uppercase == false && numerals == false && specialcharacters == true) {
          charSet = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          window.alert("You selected the special characters character option.");
          window.alert("A password matching your selections has been generated!");
        }
        // User selected to use lowercase AND uppercase letters
        else if (lowercase == true && uppercase == true && numerals == false && specialcharacters == false) {
          charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          window.alert("You selected the lowercase and uppercase character options.");
          window.alert("A password matching your selections has been generated!");
        }
        // User selected to use lowercase AND numerical values
        else if (lowercase == true && uppercase == false && numerals == true && specialcharacters == false) {
          charSet = "abcdefghijklmnopqrstuvwxyz0123456789";
          window.alert("You selected the lower case and number character options.");
          window.alert("A password matching your selections has been generated!");
        }
        // User selected to use lowercase AND special characters
        else if (lowercase == true && uppercase == false && numerals == false && specialcharacters == true) {
          charSet = "abcdefghijklmnopqrstuvwxyz!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          window.alert("You selected the lowercase and special characters character options.");
          window.alert("A password matching your selections has been generated!");
        }
        // User selected to use uppercase letters AND numerical characters
        else if (lowercase == false && uppercase == true && numerals == true && specialcharacters == false) {
          charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
          window.alert("You selected the uppercase and number character options.");
          window.alert("A password matching your selections has been generated!");
        }
        // User selected to use uppercase letters AND special characters
        else if (lowercase == false && uppercase == true && numerals == false && specialcharacters == true) {
          charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          window.alert("You selected the uppercase and special characters character options.");
          window.alert("A password matching your selections has been generated!");
        }
        // User selected to use numbers AND special characters
        else if (lowercase == false && uppercase == false && numerals == true && specialcharacters == true) {
          charSet = "0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          window.alert("You selected the number and special characters character options.");
          window.alert("A password matching your selections has been generated!");
        }
        // User selected to use lowercase AND uppercase AND numerical values
        else if (lowercase == true && uppercase == true && numerals == true && specialcharacters == false) {
          charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
          window.alert("You selected the lowercase, uppercase, and number character options.");
          window.alert("A password matching your selections has been generated!");
        }
        // User selected to use lowercase AND numerical values AND special characters
        else if (lowercase == true && uppercase == false && numerals == true && specialcharacters == true) {
          charSet = "abcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          window.alert("You selected the lowercase, number, and special characters character options.");
          window.alert("A password matching your selections has been generated!");
        }
          
        // User selected to use lowercase AND uppercase AND special chracters
        else if (lowercase == true && uppercase == true && numerals == false && specialcharacters == true) {
          charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          window.alert("You selected the lowercase, uppercase and special characters character options. ");
          window.alert("A password matching your selections has been generated!");
        }
        // User selected to use uppercase AND numbers AND special characters
        else if (lowercase == false && uppercase == true && numerals == true && specialcharacters == true) {
          charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          window.alert("You selected the uppercase, number, and special characters character options.");
          window.alert("A password matching your selections has been generated!");
        }

        // User selected to use all character types
        else if (lowercase == true && uppercase == true && numerals == true && specialcharacters == true) {
          charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          window.alert("You selected the lowercase, uppercase, number, and special characters character options.");
          window.alert("A password matching your selections has been generated!");
        }


        //return value
        var retVal = "";
        for (var i = 0; i < length; i++){
          retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }
        return retVal;
        
      }  

      // The lenght equal to or greater than 8 AND less than or equal to 128
    else {
      var lowercase = window.confirm("Do you want include lowercase letters in your password? Click ok for yes and cancel for no.");
      var uppercase = window.confirm("Do you want to include uppercase letters in your password? Click ok for yes and cancel for no.");
      var numerals = window.confirm("Do you want to use numerical values in your password? Click ok for yes and cancel for no.");
      var specialcharacters = window.confirm("Do you want to include special characers in the password? Click ok for yes and cancel for no.");
        // Force user to select one character option and generate password based on user input
        // User does not select any character options
        if (lowercase == false && uppercase == false && numerals == false && specialcharacters == false) {
          window.alert("You must select yes on one of the character options.")
        }
        // User only selected to use lowercase letters
        else if (lowercase == true && uppercase == false && numerals == false && specialcharacters == false) {
          charSet = "abcdefghijklmnopqrstuvwxyz";
          window.alert("You selected the lowercase character option.");
          window.alert("A password matching your selections has been generated!");
        }
        // User only selected to use uppercase letters
        else if (lowercase == false && uppercase == true && numerals == false && specialcharacters == false) {
          charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          window.alert("You selected the uppercase character option.");
          window.alert("A password matching your selections has been generated!");
        }
        // User only selected to use numerical values
        else if (lowercase == false && uppercase == false && numerals == true && specialcharacters == false) {
          charSet = "0123456789";
          window.alert("You selected the numbers character option.");
          window.alert("A password matching your selections has been generated!");
        }
        // User only selected to use special characters
        else if (lowercase == false && uppercase == false && numerals == false && specialcharacters == true) {
          charSet = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          window.alert("You selected the special characters character option.");
          window.alert("A password matching your selections has been generated!");
        }
        // User selected to use lowercase AND uppercase letters
        else if (lowercase == true && uppercase == true && numerals == false && specialcharacters == false) {
          charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          window.alert("You selected the lowercase and uppercase character options.");
          window.alert("A password matching your selections has been generated!");
        }
        // User selected to use lowercase AND numerical values
        else if (lowercase == true && uppercase == false && numerals == true && specialcharacters == false) {
          charSet = "abcdefghijklmnopqrstuvwxyz0123456789";
          window.alert("You selected the lower case and number character options.");
          window.alert("A password matching your selections has been generated!");
        }
        // User selected to use lowercase AND special characters
        else if (lowercase == true && uppercase == false && numerals == false && specialcharacters == true) {
          charSet = "abcdefghijklmnopqrstuvwxyz!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          window.alert("You selected the lowercase and special characters character options.");
          window.alert("A password matching your selections has been generated!");
        }
        // User selected to use uppercase letters AND numerical characters
        else if (lowercase == false && uppercase == true && numerals == true && specialcharacters == false) {
          charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
          window.alert("You selected the uppercase and number character options.");
          window.alert("A password matching your selections has been generated!");
        }
        // User selected to use uppercase letters AND special characters
        else if (lowercase == false && uppercase == true && numerals == false && specialcharacters == true) {
          charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          window.alert("You selected the uppercase and special characters character options.");
          window.alert("A password matching your selections has been generated!");
        }
        // User selected to use numbers AND special characters
        else if (lowercase == false && uppercase == false && numerals == true && specialcharacters == true) {
          charSet = "0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          window.alert("You selected the number and special characters character options.");
          window.alert("A password matching your selections has been generated!");
        }
        // User selected to use lowercase AND uppercase AND numerical values
        else if (lowercase == true && uppercase == true && numerals == true && specialcharacters == false) {
          charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
          window.alert("You selected the lowercase, uppercase, and number character options.");
          window.alert("A password matching your selections has been generated!");
        }
        // User selected to use lowercase AND numerical values AND special characters
        else if (lowercase == true && uppercase == false && numerals == true && specialcharacters == true) {
          charSet = "abcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          window.alert("You selected the lowercase, number, and special characters character options.");
          window.alert("A password matching your selections has been generated!");
        }
        // User selected to use lowercase AND uppercase AND special chracters
        else if (lowercase == true && uppercase == true && numerals == false && specialcharacters == true) {
          charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          window.alert("You selected the lowercase, uppercase and special characters character options. ");
          window.alert("A password matching your selections has been generated!");
        }
        // User selected to use uppercase AND numbers AND special characters
        else if (lowercase == false && uppercase == true && numerals == true && specialcharacters == true) {
          charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          window.alert("You selected the uppercase, number, and special characters character options.");
          window.alert("A password matching your selections has been generated!");
        }

        // User selected to use all character types
        else if (lowercase == true && uppercase == true && numerals == true && specialcharacters == true) {
          charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
          window.alert("You selected the lowercase, uppercase, number, and special characters character options.");
          window.alert("A password matching your selections has been generated!");
        }

        //return value
        var retVal = "";
        for (var i = 0; i < length; i++){
          retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }
        
        return retVal;
          
      }
}
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

