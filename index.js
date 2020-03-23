// Function to calculate deposit rate
function calcBankDeposits(startAmount, monthlyPayment, annualRate, term) {
  startAmount = +document.querySelector("#startSum").value;
  monthlyPayment = +document.querySelector("#monincrease").value;
  annualRate = +document.querySelector("#rate").value;
  term = +document.querySelector("#term").value;

  let month = (term - (term % 30)) / 30;

  //to check if the input data is not appropriate
  while (true) {
    if (
      startAmount <= 0 ||
      isNaN(startAmount) ||
      monthlyPayment < 0 ||
      isNaN(monthlyPayment) ||
      annualRate <= 0 ||
      isNaN(annualRate) ||
      annualRate > 100 ||
      isNaN(term)
    ) {
      let popup = document.getElementById("popup");
      console.log("you have entered inappropriate data");
      popup.className = "block";
      return NaN;
    } else {
      // if input data is correct we start calculation
      popup.className = "hidden"
      annualRate = annualRate / 12 / 100;
      for (let i = 0; i < month; i++) {
        startAmount += monthlyPayment;
        startAmount += startAmount * annualRate;
      }
      
      console.log(Math.trunc(startAmount));
      alert("You will have " + Math.trunc(startAmount) + " AZN in your balance");
      
    }
    return Math.trunc(startAmount);
  }
}

let button = document.getElementById("calculate");
button.addEventListener("click", calcBankDeposits);

//we get element 'Button' by its ID and if its clicked we call the function above
// document.getElementById("calculate").onclick = function() {
//   startAmount = +document.querySelector("#startSum").value;
//   monthlyPayment = +document.querySelector("#monincrease").value;
//   annualRate = +document.querySelector("#rate").value;
//   term = +document.querySelector("#term").value;

//   calcBankDeposits(startAmount, monthlyPayment, annualRate, term);
// }
