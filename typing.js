const words = ["car", "broom", "apple", "key", "mouse", "idea"];
        let currentWordIndex = 0;

        function randomizeWords(words) {
            for (let i = words.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [words[i], words[j]] = [words[j], words[i]];
            }
        }

        randomizeWords(words);

        const wordDisplay = document.getElementById('wordDisplay');
        const inputField = document.getElementById('inputField');
        const statusText = document.getElementById('status');

        function displayNextWord() {
            wordDisplay.textContent = words[currentWordIndex];
            inputField.value = "";  
            statusText.textContent = "";  
            inputField.focus();  
        }

        function checkInput() {
            const typedWord = inputField.value.trim();

            if (typedWord === words[currentWordIndex]) {
                statusText.textContent = "Correct";
                statusText.className = "correct";
                currentWordIndex++;
                if (currentWordIndex < words.length) {
                    setTimeout(displayNextWord, 500); 
                } else {
                    statusText.textContent = "You won!";
                    statusText.className = "correct";
                }
            } else {
                statusText.textContent = "Incorrect";
                statusText.className = "incorrect";
            }
        }

        inputField.addEventListener('input', checkInput);

        displayNextWord();
        
// // Logout the user
// function logout() {
//     googleAuth2.signOut().then(function () {
//         console.log('User signed out.');
//         window.location.href = '/index.html'; // Redirect to the homepage
//     });
// }

// document.getElementById('logoutBtn').addEventListener('click', function () {
//     logout();
// });