//*****Business Logic*****

//finds the max of three numbers
function getMax(total1, total2, total3) {
  let max = Math.max(total1, total2, total3);
  return max;
} 

//This function counts the answers of class radioName
function countCheckedValues(radioName){

  //gets the number of checked values for each question
  let question1 = document.querySelectorAll(`input[name="question1"].${radioName}:checked`).length;

  let question2 = document.querySelectorAll(`input[name="question2"].${radioName}:checked`).length;
  
  let question3 = document.querySelectorAll(`input[name="question3"].${radioName}:checked`).length;
  
  let question4 = document.querySelectorAll(`input[name="question4"].${radioName}:checked`).length;
 
  let question5 = document.querySelectorAll(`input[name="question5"].${radioName}:checked`).length;

  let question6 = document.querySelectorAll(`input[name="question6"].${radioName}:checked`).length;

  let question7 = document.querySelectorAll(`input[name="question7"].${radioName}:checked`).length;

  //calculate the total the number of checked values for radioName (js, cs, ruby)
  const total = question1 + question2 + question3 + question4 + question5 + question6 + question7;

  return total;

}

//*****UI Logic******


//resets the form to empty values, clears the results, and hides the result div
function resetForm() {
  document.getElementById('survey').reset();
  document.getElementById('explanation').innerText = "";
  document.getElementById('results-name').innerText = "";
  document.getElementById('results').classList.add('hidden');
  document.getElementById('reset').classList.add('hidden');
  document.querySelector('form').classList.remove('hidden');

}

/*
Event handler for submission, calls the countCheckedValues function and displays the results
uses branching and the getMax utility function to determine the results
*/
function suggestProgrammingLanguage(event) {

  event.preventDefault();
 
  //get the total number of checked values for each language
  const javaScriptTotal = countCheckedValues('js');
  const cSharpTotal = countCheckedValues('cs');
  const rubyTotal = countCheckedValues('ruby');
  
  //determine the language with the most
  // responses
  const max = getMax(javaScriptTotal, cSharpTotal, rubyTotal);
  

  //if the max is equal to the total for a language, display the results
  if(max === javaScriptTotal) {
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('results-name').innerHTML = "JavaScript!";
    document.getElementById('explanation').innerText = `You answered ${javaScriptTotal} of 6 questions like a JavaScript savant. You are a front-end developer!`;

  }
  else if(max === cSharpTotal) {
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('results-name').innerHTML = "C#!";
    document.getElementById('explanation').innerText = `You answered ${cSharpTotal} of 6 questions like a C# wizard. You are a back-end developer!`;
  }
  else if(max === rubyTotal) {
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('results-name').innerHTML = "Ruby!";
    document.getElementById('explanation').innerText = `You answered ${rubyTotal} of 6 questions like a Ruby sage. You are a full-stack developer!`;
  }

  //hides the form
  document.querySelector('form').classList.add('hidden');

  //displays reset button
  document.getElementById('reset').classList.remove('hidden');

}



//This code will run after the DOM is fully loaded
window.addEventListener('load', function() {
  const form = document.getElementById('survey');
  const retakeBtn = document.getElementById('reset');
  
  //listen for the form to be submitted and run suggestProgrammingLanguage function
  form.addEventListener('submit', suggestProgrammingLanguage);
  
  retakeBtn.addEventListener('click', resetForm);

});
