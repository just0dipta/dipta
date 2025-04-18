document.getElementById('startRegisterButton').addEventListener('click', function() {
    // Hide the Start Registration button
    this.style.display = 'none';

    // Show the loader
    const loader = document.getElementById('loader');
    loader.style.display = 'block';

    // Simulate a loading delay
    setTimeout(() => {
        loader.style.display = 'none'; // Hide the loader
        document.getElementById('registerForm').style.display = 'block'; // Show the registration form
    }, 1000); // 1 second delay
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Store the new user in local storage (for simplicity)
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);

    // Show success message and redirect to login
    document.getElementById('registerMessage').textContent = 'Registration successful! Redirecting to login...';
    
    setTimeout(() => {
        window.location.href = 'index.html'; // Redirect to login page
    }, 2000); // 2 seconds delay
});