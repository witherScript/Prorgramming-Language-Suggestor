
//This function will count the answers of class radioName
function countCheckedValues(radioName){
  let question1 = document.querySelectorAll(`input[name="question1"].${radioName}:checked`).length;
  console.log(question1);
  let question2 = document.querySelectorAll(`input[name="question2"].${radioName}:checked`).length;
  console.log(question2);
  let question3 = document.querySelectorAll(`input[name="question3"].${radioName}:checked`).length;
  console.log(question3);
  let question4 = document.querySelectorAll(`input[name="question4"].${radioName}:checked`).length;
  console.log(question4);
  let question5 = document.querySelectorAll(`input[name="question5"].${radioName}:checked`).length;
  console.log(question5);
  let question6 = document.querySelectorAll(`input[name="question6"].${radioName}:checked`).length;
  console.log(question6);
  let question7 = document.querySelectorAll(`input[name="question7"].${radioName}:checked`).length;
  console.log(question7);

  const total = question1 + question2 + question3 + question4 + question5 + question6 + question7;
  console.log(total);
  
  return total;

}

function getMax(total1, total2, total3) {
  let max = Math.max(total1, total2, total3);
  return max;
} 

function resetForm() {
  document.getElementById('survey').reset();
  document.getElementById('explanation').innerText = "";
  document.getElementById('results-name').innerText = "";
  document.getElementById('results').classList.add('hidden');

}


function suggestProgrammingLanguage(event) {

  event.preventDefault();
 
  //get the total number of checked values for each language
  const javaScriptTotal = countCheckedValues('js');
  const cSharpTotal = countCheckedValues('cs');
  const rubyTotal = countCheckedValues('ruby');
  
  //get the max of the three totals
  const max = getMax(javaScriptTotal, cSharpTotal, rubyTotal);
  console.log(max);

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

  

}



//This code will run after the DOM is fully loaded

window.addEventListener('load', function() {
  let form = document.getElementById('survey');
  
  //listen for the form to be submitted and run suggestProgrammingLanguage function
  form.addEventListener('submit', suggestProgrammingLanguage);

});