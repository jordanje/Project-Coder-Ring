// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  let alphabet=[
    ['A','B','C','D','E'],
    ['F','G','H','(I/J)','K'],
    ['L','M','N','O','P'],
    ['Q','R','S','T','U'],
    ['V','W','X','Y','Z']]
  
  
  //encode
  function letterToNumber(letter){
    let char = letter.toUpperCase()
    let output = "";
    
    if (char ==='I' || char === 'J'){
        output = 42;
    }
    if(char === ' '){
      output+= char
    }
  
    for (let i = 0; i < alphabet.length; i++){
      for (let j= 0; j < alphabet[i].length; j++){
        if (alphabet[i][j] === char){
          output = `${j+1}${i+1}`  
        }
      }
    }
    return output
  }
   //decode
  function numberToLetter(input){
    

    let decryptedMessage = ""
  
     for(let i = 0; i< input.length; i+=2){
       if(input[i] === ' '){
         decryptedMessage+= " "
         i-=1
       }
       else{
        let numInput = Number(input[i]) -1
        let numInput2 = Number(input[i+1]) -1
        let letterCoordinates = alphabet[numInput2][numInput]
        decryptedMessage += letterCoordinates.toLowerCase()
     }
     }
  
    return decryptedMessage
  }
  

  function polybius(input, encode = true) {
    if (!input) return false;

    let newMessage = ""
    
    if(encode === true){
      for(letter of input){
      newMessage += letterToNumber(letter)
      }
    }
    
    if(encode === false){
      const isEven = input.split(" ").join("");
      if (isEven.length % 2 != 0){
        return false;
      }
      else{
       newMessage = numberToLetter(input)
     }
    } 
      
    return newMessage
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
