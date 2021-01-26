const loginArea = document.getElementById("login-area");
const transactionArea = document.getElementById("transaction-area");
const loginBtn = document.getElementById('login');

loginBtn.addEventListener('click', function(){
  loginArea.style.display = "none";
  // console.log("Clicked");
  transactionArea.style.display = "block";
});

// Deposit Btn Event Handler
const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener('click', function(){
  
  const depositNumber =  getInputNumber("depositAmount");

  
  updateSpanText("currentDeposit", depositNumber);
  updateSpanText("currentBalance", depositNumber);

  document.getElementById("depositAmount").value = "";

});


// Withdraw Btn Event Handler
const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener('click',function(){
  const withdrawNumber = getInputNumber("withdrawAmount");


  updateSpanText("currentWithdraw", withdrawNumber);
  updateSpanText("currentBalance", -1 * withdrawNumber);

  document.getElementById("withdrawAmount").value = "";

})

function getInputNumber(id){
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;

}


function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentBalanceNumber = parseFloat(current);
  const totalAmount = currentBalanceNumber + depositNumber;
  document.getElementById(id).innerText = totalAmount;

}
