
//Goal: isolate the checked inputs and count them according to class



function countCheckedValues(radioName){
  let question1 = document.querySelectorAll(`input[name="question1"].${radioName}:checked`).length;
  let question2 = document.querySelectorAll(`input[name="question2"].${radioName}:checked`).length;
  let question3 = document.querySelectorAll(`input[name="question3"].${radioName}:checked`).length;
  let total = question1 + question2 + question3;
  return total;
}

function suggestProgrammingLanguage() {
 
  //get the total number of checked values for each language
  const javaScriptTotal = countCheckedValues('js');
  const cSharpTotal = countCheckedValues('cs');
  const rubyTotal = countCheckedValues('ruby');
  
  

}



//This code will run after the DOM is fully loaded

window.addEventListener('load', function() {
  let form = document.getElementById('survey');
  
  //listen for the form to be submitted and run suggestProgrammingLanguage function
  form.addEventListener('submit', suggestProgrammingLanguage);
});