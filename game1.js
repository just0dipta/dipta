let numberToGuess;
let attempts = 0;
const maxAttempts = 10;

function startGame() {
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('attempts').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('restartButton').style.display = 'none';
    displayHearts(maxAttempts);
}

function displayHearts(count) {
    const heartsContainer = document.getElementById('hearts');
    heartsContainer.innerHTML = ''; // Clear previous hearts
    for (let i = 0; i < count; i++) {
        heartsContainer.innerHTML += '❤️'; // Add heart icons
    }
}

document.getElementById('guessButton').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    
    // Check if the input is valid
    if (isNaN(userGuess)) {
        document.getElementById('result').textContent = 'Please enter a valid number.';
        return;
    }

    attempts++;

    if (userGuess < numberToGuess) {
        document.getElementById('result').textContent = 'Too low! Try again.';
    } else if (userGuess > numberToGuess) {
        document.getElementById('result').textContent = 'Too high! Try again.';
    } else {
        document.getElementById('result').textContent = `Congratulations! You've guessed the number ${numberToGuess} in ${attempts} attempts.`;
        document.getElementById('restartButton').style.display = 'block';
        return; // Exit the function if the guess is correct
    }

    // Update remaining attempts
    const remainingAttempts = maxAttempts - attempts;
    document.getElementById('attempts').textContent = `Attempts left: ${remainingAttempts}`;
    displayHearts(remainingAttempts);

    // Check if the user has run out of attempts
    if (remainingAttempts <= 0) {
        document.getElementById('result').textContent = `Game over! The number was ${numberToGuess}.`;
        document.getElementById('restartButton').style.display = 'block';
    }
});

document.getElementById('restartButton').addEventListener('click', startGame);

// The back button is now an anchor tag, so no JavaScript is needed for it.
startGame(); // Start the game when the page loads