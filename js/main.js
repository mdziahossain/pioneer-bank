const loginArea = document.getElementById("login-area");
const transactionArea = document.getElementById("transaction-area");
const loginBtn = document.getElementById('login');

loginBtn.addEventListener('click', function(){
  loginArea.style.display = "none";
  // console.log("Clicked");
  transactionArea.style.display = "block";
});
