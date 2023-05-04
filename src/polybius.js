// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  const alphabet = [
    [''], 
    ['', 'a', 'f', 'l', 'q', 'v'], 
    ['', 'b', 'g', 'm', 'r', 'w'], 
    ['', 'c', 'h', 'n', 's', 'x'], 
    ['', 'd', 'i/j', 'o', 't', 'y'], 
    ['', 'e', 'k', 'p', 'u', 'z']];

    //if encode is set to false this decoder function will take in the word provided by the for 
    //loop in the decoder portion of the polybius function and return the decoded word as a string 
  function decoder(word) {
    let xCoord = [];
    let yCoord = [];
    let result = [];
    for (let i =0; i<word.length; i++) {
      //this loop takes the word array and separates the numbers into xCoord and yCoord for every other index
      //this results in two arrays that have the same length with each pair of numbers at the same index representing a letter
      xCoord.length === yCoord.length ? xCoord.push(word[i]) : yCoord.push(word[i]);
    } 
    for (let i = 0; i<xCoord.length; i++) {
      //this loop uses each xCoord value with the corresponding index yCoord value to pinpoint the letter 
      //from the polybius square that the pair represents and then pushes that letter into the result array
      let x = alphabet[xCoord[i]];
      let letter = x[yCoord[i]];
      result.push(letter);
    };
    return result.join('')
  };

  //this encoder finction will run when encode is set true and take in 'array' from the polybius function.
  //the function will return an encoded result joined as a string
  function encoder(array) {
    let arr1 = array.split('');
    let result =[];
    for (let i = 0; i<arr1.length; i++){
      if (arr1[i] === 'i' || arr1[i] === 'j') {
        result.push(42); //this if statement will ensure both 'i' and 'j' translate to 42
      } else {
        let index1 = alphabet.findIndex(group => group.includes(arr1[i]));
        //the findIndex method allows me to extract the index number associated with the array that contains 
        //the letter being referenced in the for loop
        if (index1 === -1) {
          //I included this if statement below since a space will result in a -1 from the findIndex method
          result.push(arr1[i]); 
        } else {
          // using findIndex on alphabet[index1] allows me to further search into the alphabet array to 
          //pinpoint the exact letter and return the index for that letter
          let index2 = alphabet[index1].findIndex(letter => letter === arr1[i]);
          // now that I have both digits of the code I will join them and push them into the result array
          result.push(`${index1}${index2}`);
        };
      };
    };
    return result.join('');
  };


  function polybius(input, encode = true) {
    let array = input.toLowerCase();
    if (encode === true){
      return encoder(array);
    } else {
      //Decoder portion will run when encode is set to false:

      //these first 3 lines of code are for error handling
      const replaced = input.replace(" ", '00');
      if (replaced.length % 2!==0) return false;
      if (input.includes(0)) return false;
      //the below code separates the original code into words if there are any spaces and then each word 
      //will be an item in the resulting array
      const array = input.split(' ');
      const result = [];
      //this for loop will loop through the words and pass them through the decoder() helper function
      //that I have defined above. afterwards the resulting word will then be pushed into the result array
      for (let i = 0; i<array.length; i++) {
        let word = array[i].split('');
        result.push(decoder(word))
      };
      //after all words have been decoded the result array will be joined with spaces in order to 
      //maintain the spaces from the original input
      return result.join(' ');  
    };  
    // your solution code here
  };

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
