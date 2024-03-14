function validateForm() {
    var id = document.getElementById("ID").value;
    var name = document.getElementById("Name").value;
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    var email = document.getElementById("Email").value;
    var pincode = document.getElementById("Pincode").value;

    if (
        id === "" ||
        name === "" ||
        username === "" ||
        password === "" ||
        email === "" ||
        pincode === ""
    ) {
        alert("Please fill in all required fields");
        return false;
    }

    if (!id || !/^[a-zA-Z0-9]+$/.test(id)) {
        alert("Please enter a valid ID with only letters and numbers");
        return false;
    }
    if (!name || !/^[a-zA-Z\s]+$/.test(name)) {
        alert("Please enter a valid name with only letters");
        return false;
    }
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Please enter a valid email address");
        return false;
    }

    if (!pincode || /\D/.test(pincode) || pincode.length !== 6) {
        alert("Please enter a valid 6-digit pincode");
        return false;
    }
    if (
        !password ||
        password.length < 8 ||
        !/\d/.test(password) ||
        !/[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
        alert(
            "Please enter a valid password with at least 8 characters, one digit, and one special character"
        );
        return false;
    }

    return true;
}


// script.js

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        event.preventDefault();

        if (validateForm()) {

            var id = document.getElementById("ID").value;
            var name = document.getElementById("Name").value;
            var username = document.getElementById("Username").value;
            var password = document.getElementById("Password").value;
            var email = document.getElementById("Email").value;
            var dob = document.getElementById("DOB").value;
            var gender = document.querySelector('input[name="Gender"]:checked') ? document.querySelector('input[name="Gender"]:checked').value : "";
            var address = document.getElementById("Address").value;
            var city = document.getElementById("City").value;
            var pincode = document.getElementById("Pincode").value;
            var state = document.getElementById("State").value;
            var hobbies = {
                dancing: document.getElementById("Dancing").checked,
                singing: document.getElementById("Singing").checked
            };


            var user = {
                id: id,
                name: name,
                username: username,
                password: password,
                email: email,
                dob: dob,
                gender: gender,
                address: address,
                city: city,
                pincode: pincode,
                state: state,
                hobbies: hobbies
            };


            var xhr = new XMLHttpRequest();
            xhr.open("POST", "http://127.0.0.1:5500", true);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {

                    console.log(xhr.responseText);
                }
            };


            var userJSON = JSON.stringify(user);

            // Send the POST request with user data
            xhr.send(userJSON);


            var users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));


            window.location.href = "data-list.html";
        }
    });
});
