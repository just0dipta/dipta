document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Show the loader
    const loader = document.getElementById('loader');
    loader.style.display = 'block';

    // Simulate a login request
    setTimeout(() => {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            // Store the username in local storage for the dashboard
            localStorage.setItem('currentUser ', username);

            document.getElementById('message').textContent = 'Login successful!';
            document.querySelector('.container').style.transform = 'scale(1.1)';

            // Redirect to the dashboard after a short delay
            setTimeout(() => {
                window.location.href = 'dashboard.html'; // Change to your new page
            }, 300); // Delay to allow the animation to complete
        } else {
            // Hide the loader
            loader.style.display = 'none';
            document.getElementById('message').textContent = 'Invalid username or password.';
            document.getElementById('username').value = ''; // Clear username field
            document.getElementById('password').value = ''; // Clear password field
        }
    }, 1000); // Simulate a delay for the login process
});