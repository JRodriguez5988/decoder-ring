// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  const alphabet = ['a', 'b', 'c', 'd', 'e',
                    'f', 'g', 'h', 'i', 'j',
                    'k', 'l', 'm', 'n', 'o',
                    'p', 'q', 'r', 's', 't', 
                    'u', 'v', 'w', 'x', 'y', 
                    'z'];


  function caesar(input, shift, encode = true) {
    //this first line of code is for error handling
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    let message = input.toLowerCase(); 
    let array = message.split('');
    const result = [];
    //this loop below will take each letter and find the index of the letter that matches in 'alphabet'.
    //that index number will then be shifted by the amount specified in the function parameter,
    //creating a new index that will be used to push the letter located at the new index in 'alphabet'
    //array into 'result' 
    for (let i=0; i<array.length; i++){
      //this first if statement below will check if the character from 'array' is a letter in the alphabet
      //and if not then the character will be pushed into 'result'. this will help maintain spaces and 
      //special characters in the output of the function
      if (alphabet.includes(array[i])) {
        const index = alphabet.findIndex(letter => letter === array[i]);
        let newIndex;
        // this if statement will determine if the input will be encoded or decoded and will 
        // change the shift accordingly
        encode? newIndex = index + shift : newIndex = index - shift;
        //the if statements below will allow the shift to loop back to the front or the end of the alphabet 
        //when shifting causes the index to go past the limits of the array
        if (newIndex < 0){
          newIndex += 26
        };
        if (newIndex > 25){
          newIndex -= 26
        };          
        result.push(alphabet[newIndex]);
      } else {
        result.push(array[i])
      };
    };
    //the function will return the result array joined into a string of letters while maintaining the orignal 
    //spaces and special characters
      return result.join('');
          // your solution code here
  };

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
