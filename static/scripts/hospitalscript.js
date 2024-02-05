function validateLogin() {
    var hospitalName = document.getElementById('hospitalName').value;
    var password = document.getElementById('password').value;

    if (hospitalName === 'hospital' && password === 'hospital@123') {
        alert('Login successful! Redirecting to dashboard...');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}
