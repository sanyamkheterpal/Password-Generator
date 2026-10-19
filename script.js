
const passwordbox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = ",./<>?;':[]{}|*-+!@#$%^&*";

const allchars = upperCase + LowerCase + number + symbol;

function createPassword() {
    let password = "";

    // Ensure at least one character of each type
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Fill the remaining length
    while (password.length < length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }

    // Shuffle the password characters
    password = password.split("").sort(() => Math.random() - 0.5).join("");

    passwordbox.value = password;
}

async function copyPassword() {
    if (passwordbox.value === "") {
        alert("Please generate a password first!");
        return;
    }

    try {
        await navigator.clipboard.writeText(passwordbox.value);
        alert("Password copied successfully!");
    } catch (error) {
        // Fallback for browsers where Clipboard API is unavailable
        passwordbox.select();
        document.execCommand("copy");
        alert("Password copied!");
    }
}
