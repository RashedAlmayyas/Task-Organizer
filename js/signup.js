
let form = document.getElementById('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let passwordConfirm = document.getElementById('passwordConfirm').value;
    if(password !== passwordConfirm){
        alert('Passwords do not match');
    }else{
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('passwordConfirm', passwordConfirm);
        alert('Your account has been created');
        form.reset();
    }
} );
