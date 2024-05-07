let pwd = document.querySelector("#pwd");
let pwdConfirm  = document.querySelector("#pwd2");

pwdConfirm.onkeyup = () => {
  if (pwd.value === pwdConfirm.value){
    pwdConfirm.setAttribute("class", "password-match");
  } else {
    pwdConfirm.setAttribute("class", "password-unmatch");
  }}