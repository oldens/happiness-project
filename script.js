let happinessData = [];

fetch('happiness-data.json')
    .then(response => response.json())
    .then(data => {
        happinessData = data;
        displayIcons();
    })
    .catch(error => console.error('Error fetching happiness data:', error));

function displayIcons() {
    const emojiContainer = document.getElementById('emoji-container');
    const icons = [happyIcon, healthIcon, smileIcon, homeIcon, loveIcon, etcIcon1, etcIcon2, etcIcon3, etcIcon4, etcIcon5];

    icons.forEach((icon, index) => {
        const iconElement = document.createElement('div');
        iconElement.classList.add('icon');
        iconElement.innerHTML = icon;
        iconElement.addEventListener('click', () => handleIconClick(index));
        emojiContainer.appendChild(iconElement);
    });
}

function handleIconClick(index) {
    const message = happinessData[index].message;
    displayMessage(message);
}

function displayMessage(message) {
    const recipeContainer = document.getElementById('recipe-container');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = message;
    recipeContainer.appendChild(messageElement);
    animateMessage(messageElement);
}

function animateMessage(element) {
    element.style.animation = 'floatUp 2s ease-in-out';
}

document.addEventListener('DOMContentLoaded', () => {
    if (happinessData.length > 0) {
        displayIcons();
    }
});
