document.addEventListener("DOMContentLoaded", function () {
    let password = document.getElementById("password");
    let power = document.getElementById("power-point");
    let strengthText = document.getElementById("strength-text");
    let togglePassword = document.getElementById("toggle-password");

    let widthPower = ["1%", "25%", "50%", "75%", "100%"];
    let colorPower = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];
    let textStrength = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"];

    password.addEventListener("input", function () {
        let point = 0;
        let value = password.value;

        if (value.length >= 6) {
            let arrayTest = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
            arrayTest.forEach((item) => {
                if (item.test(value)) {
                    point += 1;
                }
            });
        }

        power.style.width = widthPower[point];
        power.style.backgroundColor = colorPower[point];
        strengthText.textContent = textStrength[point];
    });

    // Toggle password visibility
    togglePassword.addEventListener("click", function () {
        if (password.type === "password") {
            password.type = "text";
            togglePassword.textContent = "🙈";
        } else {
            password.type = "password";
            togglePassword.textContent = "👁️";
        }
    });
});
