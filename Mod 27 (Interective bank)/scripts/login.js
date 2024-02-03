// getting the button
const gettingLoginButton = document.getElementById('login-btn');
gettingLoginButton.addEventListener('click', function(){
    // get the email address
    const gettingEmail = document.getElementById('user-email');
    const emailValue = gettingEmail.value;
    // get the password
    const gettingPassword = document.getElementById('user-password');
    const passwordValue = gettingPassword.value;
    if (emailValue === 'sharifaiub15@gmail.com' && passwordValue === 'sharif') {
        window.location.href = '27.4.html';
    }
    else{
        alert('Please enter your valid accodation');
    }
});

const forgotPass = document.getElementById('forget-button');
forgotPass.addEventListener('click', function(){
    const forgot = document.getElementById('forgot-pass');
    forgot.style.display = 'block';
});