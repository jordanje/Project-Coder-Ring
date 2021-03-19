// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
 
  const checkForDuplicate = function (str) {
    for (var i = 0; i <= str.length; i++) {
      for (var j = i + 1; j <= str.length; j++) {
        if (str[j] == str[i]) {
         return true;
       }
      }
    }
    return false;
  };

  const abcd = "abcdefghijklmnopqrstuvwxyz";

function substitution(input, alphabet, encode = true) {
  if(!alphabet||alphabet.length != 26 ||checkForDuplicate(alphabet)){
  return false
  }
  
  let encryptedMessage = '';

  if(encode === true){
    for (let i = 0; i < input.length; i++) {
    const char = input[i].toLowerCase();
    const isALetter = abcd.includes(char);
  
     if (isALetter === false) {
       encryptedMessage += char;
     }else {
       const charIndex = abcd.indexOf(char);
       const newLetter = alphabet[charIndex];
       encryptedMessage += newLetter
     }
   }
  }
 
  if(encode === false){
    for (let i = 0; i < input.length; i++) {
      const char = input[i].toLowerCase();
      const isALetter = alphabet.includes(char);
  
      if (isALetter === false) {
       encryptedMessage += char;
      }else {
       const charIndex = alphabet.indexOf(char);
       const newLetter = abcd[charIndex];
       encryptedMessage += newLetter
      }
    }
  }

  return encryptedMessage.toLowerCase();
}
  

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
