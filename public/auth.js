// Hardcoded admin credentials (for demo purposes)
const adminUsername = "dm";
const adminPassword = "musty123";

// Function to authenticate the user
function authenticateUser(event) {
    event.preventDefault();  // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === adminUsername && password === adminPassword) {
        // Store authentication status in localStorage (for demo purposes)
        localStorage.setItem('isAuthenticated', 'true');
        window.location.href = 'admin.html';  // Redirect to the admin page
    } else {
        alert('Invalid credentials! Dmamman said you try again.');
    }
}