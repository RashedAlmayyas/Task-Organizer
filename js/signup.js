
let form = document.getElementById('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    let fName = document.getElementById('fname').value;
    let lName = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let passwordConfirm = document.getElementById('passwordConfirm').value;
    if(password !== passwordConfirm){
        alert('Passwords do not match');
    }else{
        localStorage.setItem('fname', fName);
        localStorage.setItem('lname', lName);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('passwordConfirm', passwordConfirm);
        window.location.replace("main.html");
        form.reset();
    }
} );
