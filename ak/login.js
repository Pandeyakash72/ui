document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // This is a simple authentication example
    // In a real application, you would want to validate against a backend server
    if (email === 'user@example.com' && password === 'password123') {
        // Store authentication state
        localStorage.setItem('isAuthenticated', 'true');
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}); 