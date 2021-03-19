// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
  
    function caesar(input, shift, encode = true) {
     
      if (shift === 0 || shift < -25 || shift > 25 || !shift) {
        return false;
      }
      if (encode === false) {
        shift = -shift;
      }
  
      let encryptedMessage = "";
      let lowerInput = input.toLowerCase();
  
      for (let i = 0; i < lowerInput.length; i++) {
        const charCode = lowerInput.charCodeAt(i);
      
        if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97)) {
          encryptedMessage += lowerInput[i];
        } else {
          let newCharCode = charCode + shift;
  
          if (charCode >= 97 && newCharCode > 122) {
            newCharCode = newCharCode - 122 + 96;
          }
      
          if (charCode >= 97 && newCharCode <= 96) {
            newCharCode = newCharCode + 122 - 96;
          }
        
          encryptedMessage += String.fromCharCode(newCharCode);
        }
      }
      return encryptedMessage;
    }
    

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
