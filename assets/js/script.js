// Assignment code here
function generatePassword() {

  //get required password length (between 8 and 128 charaters)
  do {
    var charRequirement = parseInt(prompt("Password character requirement? (Between 8 and 128)"))
  } while (charRequirement < 8 || charRequirement > 128);
  if (!charRequirement) {
    return;
  };

  //get character type requirements (with at least one selected)
  
  do {
  var lowercase = window.confirm("Include lowercase characters? (Select at least one character type)");
  var uppercase = window.confirm("Include capitalized characters? (Select at least one character type)");
  var numeric = window.confirm("Include numeric characters? (Select at least one character type)"); 
  var specialCharacters = window.confirm("Include special characters? (Select at least one character type)");
  } while (!lowercase && !uppercase && !numeric && !specialCharacters);

   //include all letters, numbers, and symbols in individual character type arrays
  numericArray = [0,1,2,3,4,5,6,7,8,9];
  alphaArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  alphaArrayUpper = String(alphaArray).toUpperCase().split(",");
  specCharArray = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
  
  //loop through each character type array. If character type is required, add one of that character type to the current password string. Increase counter and continue down the loop. 
  finalPassword = "";
  for (i = 0; i < charRequirement;) {
    if (lowercase == true) {
      finalPassword += alphaArray[Math.floor(Math.random()*alphaArray.length)];
      i++;
      if (i >= charRequirement) {
        break; //break the loop any time you've reached the character limit
      };
    };
    if (uppercase == true) {
      finalPassword += alphaArrayUpper[Math.floor(Math.random()*alphaArrayUpper.length)];
      i++; 
      if (i >= charRequirement) {
        break;
      };
    };
    if (numeric == true) {
      finalPassword += numericArray[Math.floor(Math.random()*numericArray.length)];
      i++;
      if (i >= charRequirement) {
        break;
      };
    };
    if (specialCharacters == true) {
      finalPassword += specCharArray[Math.floor(Math.random()*specCharArray.length)];
      i++;
      if (i >= charRequirement) {
        break;
      };
    };
   //once loop has gone through all four character type checks/selections, loop back to the top. Continute this until you've reached the required character limit. 
  };
  return finalPassword;
};

// Get references to the #generate element which is the button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input which is referencing password element
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*
//Allow copy/pasting of generated password when password field is clicked
password.addEventListender("click", copyFunction);

function copyFunction() {
  var copyText = document.querySelector("#password");
  navigator.clipboard.writeText(copyText.value);

  

  alert("Password copied to clipboard");
};
*/
