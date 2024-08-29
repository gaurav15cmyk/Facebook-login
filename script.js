document.addEventListener('DOMContentLoaded', function () {
    const loginBox = document.querySelector('.login-box');
    const signupBox = document.querySelector('.signup-box');

    const goToSignup = document.getElementById('go-to-signup');
    const goToLogin = document.getElementById('go-to-login');

    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    const loginError = document.getElementById('login-error');

    // Predefined user ID and password
    const validUserId = 'user@example.com';
    const validPassword = 'password123';

    // Switch to signup form
    goToSignup.addEventListener('click', () => {
        loginBox.classList.remove('active');
        signupBox.classList.add('active');
    });

    // Switch to login form
    goToLogin.addEventListener('click', () => {
        signupBox.classList.remove('active');
        loginBox.classList.add('active');
    });

    // Handle login form submission
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting normally

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (email == validUserId && password == validPassword) {
            loginError.textContent = ''; // Clear any previous error message
                 // Or redirect to another page
          window.location.href='homePage.html';  

        } else {
            loginError.textContent = 'Invalid user ID or password';
            alert('Invalid user ID or password');
        }
    });

    // Handle signup form submission
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting normally

        // You can add signup logic here
        alert('Sign up functionality not implemented');
    });

    // Initial view: Show login form
    loginBox.classList.add('active');
});