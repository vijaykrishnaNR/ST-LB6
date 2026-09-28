document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Clear previous messages
    document.querySelectorAll("small").forEach(function(element) {
        element.textContent = "";
    });

    document.getElementById("successMessage").textContent = "";

    let valid = true;

    // Get values
    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let dob = document.getElementById("dob").value;
    let course = document.getElementById("course").value;
    let password = document.getElementById("password").value;
    let confirmPassword =
        document.getElementById("confirmPassword").value;

    let gender =
        document.querySelector('input[name="gender"]:checked');


    // ==========================
    // NAME VALIDATION
    // ==========================

    if (name === "") {

        document.getElementById("nameError").textContent =
            "Error: Student name is required.";

        valid = false;

    } else if (!/^[A-Za-z ]+$/.test(name)) {

        document.getElementById("nameError").textContent =
            "Error: Student name must contain letters and spaces only.";

        valid = false;
    }


    // ==========================
    // ROLL NUMBER VALIDATION
    // ==========================

    if (roll === "") {

        document.getElementById("rollError").textContent =
            "Error: Roll number is required.";

        valid = false;

    } else if (!/^[0-9]+$/.test(roll)) {

        document.getElementById("rollError").textContent =
            "Error: Roll number must contain numbers only.";

        valid = false;
    }


    // ==========================
    // EMAIL VALIDATION
    // ==========================

    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        document.getElementById("emailError").textContent =
            "Error: Email address is required.";

        valid = false;

    } else if (!emailPattern.test(email)) {

        document.getElementById("emailError").textContent =
            "Error: Please enter a valid email address.";

        valid = false;
    }


    // ==========================
    // PHONE VALIDATION
    // ==========================

    if (phone === "") {

        document.getElementById("phoneError").textContent =
            "Error: Phone number is required.";

        valid = false;

    } else if (!/^[6-9][0-9]{9}$/.test(phone)) {

        document.getElementById("phoneError").textContent =
            "Error: Phone number must contain exactly 10 digits and start with 6-9.";

        valid = false;
    }


    // ==========================
    // DATE OF BIRTH
    // ==========================

    if (dob === "") {

        document.getElementById("dobError").textContent =
            "Error: Date of birth is required.";

        valid = false;
    }


    // ==========================
    // GENDER
    // ==========================

    if (!gender) {

        document.getElementById("genderError").textContent =
            "Error: Please select your gender.";

        valid = false;
    }


    // ==========================
    // COURSE
    // ==========================

    if (course === "") {

        document.getElementById("courseError").textContent =
            "Error: Please select a course.";

        valid = false;
    }


    // ==========================
    // PASSWORD
    // ==========================

    if (password === "") {

        document.getElementById("passwordError").textContent =
            "Error: Password is required.";

        valid = false;

    } else if (password.length < 8) {

        document.getElementById("passwordError").textContent =
            "Error: Password must contain at least 8 characters.";

        valid = false;

    } else if (!/[A-Z]/.test(password)) {

        document.getElementById("passwordError").textContent =
            "Error: Password must contain at least one uppercase letter.";

        valid = false;

    } else if (!/[a-z]/.test(password)) {

        document.getElementById("passwordError").textContent =
            "Error: Password must contain at least one lowercase letter.";

        valid = false;

    } else if (!/[0-9]/.test(password)) {

        document.getElementById("passwordError").textContent =
            "Error: Password must contain at least one number.";

        valid = false;
    }


    // ==========================
    // CONFIRM PASSWORD
    // ==========================

    if (confirmPassword === "") {

        document.getElementById("confirmPasswordError").textContent =
            "Error: Please confirm your password.";

        valid = false;

    } else if (password !== confirmPassword) {

        document.getElementById("confirmPasswordError").textContent =
            "Error: Passwords do not match.";

        valid = false;
    }


    // ==========================
    // FINAL RESULT
    // ==========================

    if (valid) {

        document.getElementById("successMessage").textContent =
            "Registration Successful!";

        document.getElementById("registrationForm").reset();
    }

});