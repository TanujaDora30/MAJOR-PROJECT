document.getElementById('headerLoginBtn').addEventListener('click', function() {
    document.getElementById('loginContainer').style.display = 'block';
});

document.getElementById('closeLogin').addEventListener('click', function() {
    document.getElementById('loginContainer').style.display = 'none';
});

document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Login successful');
    } else {
        alert('Invalid credentials');
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const loginContainer = document.getElementById("loginContainer");
    const signupContainer = document.getElementById("signupContainer");
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");

    // Show login form
    document.getElementById("headerLoginBtn").addEventListener("click", function () {
        loginContainer.style.display = "block";
        signupContainer.style.display = "none"; // Hide signup if open
    });

    // Close login form
    document.getElementById("closeLogin").addEventListener("click", function () {
        loginContainer.style.display = "none";
    });

    // Show signup form
    document.getElementById("headerSignupBtn").addEventListener("click", function () {
        signupContainer.style.display = "block";
        loginContainer.style.display = "none"; // Hide login if open
    });

    // Close signup form
    document.getElementById("closeSignup").addEventListener("click", function () {
        signupContainer.style.display = "none";
    });

    // Handle login
    loginBtn.addEventListener("click", function () {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username && password) {
            alert("Login successful!");
            loginContainer.style.display = "none";
        } else {
            alert("Invalid credentials. Please enter both username and password.");
        }
    });

    // Handle signup
    signupBtn.addEventListener("click", function () {
        const username = document.getElementById("signupUsername").value;
        const email = document.getElementById("signupEmail").value;
        const mobile = document.getElementById("signupMobile").value;
        const otp = document.getElementById("otp").value;
        const password = document.getElementById("signupPassword").value;

        if (!validatePassword(password)) {
            alert("Password must contain at least 8 characters, an uppercase letter, a lowercase letter, a number, and a special character.");
            return;
        }

        if (username && email && mobile && otp && password) {
            alert("Signup successful!");
            signupContainer.style.display = "none";
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Password validation function
    function validatePassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }
});
