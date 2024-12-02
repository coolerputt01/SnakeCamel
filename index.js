//This code was written by Coolerputt on 2nd December,2024;


//I first called the function.

/***************************************
* Well my logic is any where you see "_"i*remove it and cut the word from below*so that i can render it individually *and apply upperCase
***************************************/

function convertToCamelCase(string) {
  //Split the word.
  var stringConverted = string.split('_');
  //Map the split word.
  var mappedStringConverted = stringConverted.map((word,wordIndex) => {
    //Keep the first word lowercase.
    if(wordIndex === 0){
      return word;
    }
    var capitalizedWord = word.charAt(0).toUpperCase();
    var slicedWord = word.slice(1);
    //Concatenate words to form one word.
    var convertedWord = capitalizedWord + slicedWord;
     return convertedWord;
  }).join(''); //Join the words back together.
  return mappedStringConverted;
}

/****************************************Now I am going to make a reference to *all tge HTML elements needed.
****************************************/

//UserInput HTML element.
const userInput = document.querySelector('.input');
//Convert button HTML element.
const convertButton = document.querySelector('.convert');
//The output text HTML div element.
const outputText = document.querySelector('.output-value');
//User guide HTML element.
const userGuide = document.querySelector('.warning');
//Adding an Event Listener to the convert button.
convertButton.addEventListener('click', function(){
  let userInputValue = userInput.value.trim();
  if(userInputValue.length > 0){
  var convertedWordOutput = convertToCamelCase(userInputValue);
  
  outputText.textContent = convertedWordOutput;
  userGuide.style.display = 'none';
  }else{
    userGuide.style.display = 'block';
  }
});