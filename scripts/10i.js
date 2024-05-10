function UpdateCalculation(value) {
    calculation += value;
    console.log(calculation);
    displayCalculation();
  }
  function displayCalculation() {
    document.querySelector('.calculation').innerHTML = calculation;
  }
    
    let calculation = '';