function check() {
  let storedEmail = localStorage.getItem("email");
  let storedPw = localStorage.getItem("password");

  let email = document.getElementById("email");
  let pass = document.getElementById("pass");

  if (email.value == storedEmail && pass.value == storedPw) {
    alert("You are logged in.");
  } else {
    alert("Error on login");
  }
}
