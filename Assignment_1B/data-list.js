// data-list.js

document.addEventListener("DOMContentLoaded", function () {
    var userDataBody = document.getElementById("userDataBody");
    var users = JSON.parse(localStorage.getItem("users")) || [];

    displayUsers(users);

    window.clearAllUsers = function () {
        // Clear local storage
        localStorage.removeItem("users");


        userDataBody.innerHTML = "";
    };

    function displayUsers(users) {
        users.forEach(function (user) {
            var row = document.createElement("tr");

            var idCell = document.createElement("td");
            idCell.textContent = user.id;
            row.appendChild(idCell);

            var nameCell = document.createElement("td");
            nameCell.textContent = user.name;
            row.appendChild(nameCell);

            var usernameCell = document.createElement("td");
            usernameCell.textContent = user.username;
            row.appendChild(usernameCell);

            var emailCell = document.createElement("td");
            emailCell.textContent = user.email;
            row.appendChild(emailCell);

            var cityCell = document.createElement("td");
            cityCell.textContent = user.city;
            row.appendChild(cityCell);

            userDataBody.appendChild(row);
        });
    }
});
