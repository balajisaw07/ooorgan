function validateForm() {
    var id = document.getElementById('id').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
    var phone = document.getElementById('phone').value;
 
    // Validate ID (should be 10 characters)
    if (!/^[0-9]{12}$/.test(id)) {
        alert("Please enter the 12-digit Aadhar number");
        return false;
    }

    // Validate Age (should be between 0 and 90)
    if (age < 0 || age > 90) {
        alert("Age should be between 0 and 90");
        return false;
    }

    // Validate Phone Number (should be 10 digits)
    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number");
        return false;
    }

    // Validate Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }


    return true;
}


  