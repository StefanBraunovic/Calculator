let firstOperand = '';
let secondOperand = '';
let operator = '';
let estate = 0;
let result = 0;


function add(a, b){
 
 return parseFloat(a+b).toFixed(2);
}

function subtract(a, b){
 
  return parseFloat(a-b).toFixed(2);
}

function multiply(a, b){
 
  return parseFloat(a*b).toFixed(2);
}

function divide(a, b){
  
  return parseFloat(a/b).toFixed(2);
}

function operate(operator, a, b){
  switch(operator){
    case '+':
      result = add(+a, +b);
    break;

    case '-':
      result = subtract(a, b);
    break;

    case '*':
      result = multiply(a, b);
    break;

    case '/':
      result = divide(a, b);
    break;
  }
  return parseFloat(result).toFixed(2);
}



let displayText = document.getElementById('displayText');

const operandsInput = document.querySelectorAll('.operands');
operandsInput.forEach(b =>  b.addEventListener('click', function(){
  let textToDisplay = document.createTextNode(b.value);
  displayText.appendChild(textToDisplay);

  if(estate == 0){
    firstOperand = firstOperand + b.value;
    console.log(firstOperand);
    }

  else if(estate == 1){
    secondOperand = secondOperand + b.value;
    console.log(secondOperand);
    }

  else if(estate == 2){
    displayText.textContent = '';
    displayText.appendChild(textToDisplay);
    secondOperand = secondOperand + b.value;
    estate = 1;
    console.log(secondOperand);
    }

}));

const operatorInput = document.querySelectorAll('.operators');
operatorInput.forEach(c =>  c.addEventListener('click', function(){
displayText.textContent = '';


  if(estate == 0){
    operator = c.value;
    estate = 1;
    return;
  }

  else if(estate == 1 && secondOperand != ''){
    displayText.textContent = '';
    operate(operator, firstOperand, secondOperand);
    let textToDisplay1 = document.createTextNode(result);
    displayText.appendChild(textToDisplay1);
    operator = c.value;
    
    firstOperand = result;
    secondOperand = '';
    estate = 2;
    return;
  }
}));

const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', function(){
  displayText.textContent = '';
  operate(operator, firstOperand, secondOperand);
  let textToDisplay = document.createTextNode(result);
  displayText.appendChild(textToDisplay);
  
  firstOperand = result;
  secondOperand = '';
  estate = 0;
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function(){
 displayText.textContent = '';
 

 firstOperand = '';
 secondOperand = '';
 estate = 0;
 });





