function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password are correct
    if (username === "user" && password === "password") {
        alert("Login successful!");
        // Redirect to dashboard or desired page
    } else {
        document.getElementById("error-msg").innerText = "Invalid username or password";
    }
}
