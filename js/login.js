let login = document.getElementById('login');
let signup = document.getElementById('signup');
let toggleToSignup=()=>{
    signup.style.display = 'flex';
    login.style.display = 'none';
}
let toggleToLogin=()=>{
    login.style.display = 'flex';
    signup.style.display = 'none';
}