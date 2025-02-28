const happinessMessages = [
    "Spend time with loved ones",
    "Exercise regularly",
    "Get enough sleep",
    "Eat healthy",
    "Practice mindfulness",
    "Help others",
    "Learn something new",
    "Spend time in nature",
    "Express gratitude",
    "Set goals and work towards them"
];

function displayIcons() {
    const emojiContainer = document.getElementById('emoji-container');
    const icons = ['😊', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😇', '🙂'];

    icons.forEach((icon, index) => {
        const iconElement = document.createElement('div');
        iconElement.classList.add('icon');
        iconElement.innerHTML = icon;
        iconElement.addEventListener('click', () => handleIconClick(index));
        emojiContainer.appendChild(iconElement);
    });
}

function handleIconClick(index) {
    const message = happinessMessages[index];
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

document.addEventListener('DOMContentLoaded', displayIcons);
