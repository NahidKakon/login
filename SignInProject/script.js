document.getElementById('toggleForm').addEventListener('click', function() {
    var signInForm = document.getElementById('signInForm');
    var signUpForm = document.getElementById('signUpForm');
    var forgotPasswordForm = document.getElementById('forgotPasswordForm');
    var toggleButton = document.getElementById('toggleForm');

    if (signInForm.style.display === 'none' && forgotPasswordForm.style.display === 'none') {
        signInForm.style.display = 'block';
        signUpForm.style.display = 'none';
        toggleButton.textContent = "Don't have an account? Sign Up";
    } else if (signUpForm.style.display === 'none') {
        signInForm.style.display = 'none';
        signUpForm.style.display = 'block';
        toggleButton.textContent = "Already have an account? Sign In";
    } else {
        signInForm.style.display = 'none';
        signUpForm.style.display = 'none';
        forgotPasswordForm.style.display = 'block';
        toggleButton.textContent = "Back to Sign In";
    }
});

document.getElementById('signInForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('signInEmail').value;
    var password = document.getElementById('signInPassword').value;
    var message = document.getElementById('signInMessage');

    // Dummy validation for sign-in
    if (email === "user@example.com" && password === "password123") {
        message.style.color = "green";
        message.textContent = "Sign in successful!";
        // Redirect or proceed to the secure area
    } else {
        message.textContent = "Invalid email or password!";
    }
});

document.getElementById('signUpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var password = document.getElementById('signUpPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var message = document.getElementById('signUpMessage');

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
    } else if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters long!";
    } else {
        message.style.color = "green";
        message.textContent = "Sign up successful!";
        // Normally, you would send data to the server here.
    }
});

document.getElementById('forgotPasswordLink').addEventListener('click', function(e) {
    e.preventDefault();
    var signInForm = document.getElementById('signInForm');
    var forgotPasswordForm = document.getElementById('forgotPasswordForm');
    var toggleButton = document.getElementById('toggleForm');

    signInForm.style.display = 'none';
    forgotPasswordForm.style.display = 'block';
    toggleButton.textContent = "Back to Sign In";
});

document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('forgotEmail').value;
    var message = document.getElementById('forgotMessage');

    // Dummy check for email existence
    if (email === "user@example.com") {
        message.style.color = "green";
        message.textContent = "Password reset instructions have been sent to your email!";
        // Normally, you would trigger an email to reset the password.
    } else {
        message.textContent = "Email not found!";
    }
});
