
function check(){
    let storedEmail = localStorage.getItem('email');
    let storedPw = localStorage.getItem('password');

    let email = document.getElementById('email');
    let pass = document.getElementById('pass');

    if(email.value == storedEmail && pass.value == storedPw){
        window.location.replace("main.html");
    }else{
        alert('Incorrect email or Password.');
    }
}