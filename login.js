document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const validUsername = "zaam123";
    const validPassword = "zhzh";

    if (username === validUsername && password === validPassword) {
        window.location.href = "../html/dashboard.html";
    } else {
        document.getElementById("error-msg").textContent = "Invalid Username or Password";
    }
});