// script.js
fetch('liste.txt')
    .then(response => response.text())
    .then(data => {
        const facts = data.split('\n').filter(line => line.trim() !== '');
        const factDisplay = document.getElementById('factDisplay');
        const generateButton = document.getElementById('generateButton');

        function getRandomFact() {
            const randomIndex = Math.floor(Math.random() * facts.length);
            factDisplay.classList.remove('visible');

            setTimeout(() => {
                factDisplay.textContent = facts[randomIndex];
                factDisplay.classList.add('visible');
            }, 300);
        }

        generateButton.addEventListener('click', getRandomFact);
    })
    .catch(error => console.error('Erreur de chargement de la liste de faits :', error));
