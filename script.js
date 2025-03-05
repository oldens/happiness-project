// Функція для завантаження JSON-файлу
async function loadJSON(file) {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`Помилка: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Не вдалося завантажити JSON:", error);
    return [];
  }
}

// Функція для створення картинки (іконки) з обробником кліку
function createIcon(image, text, index) {
  const icon = document.createElement("div");
  icon.classList.add("icon");

  const img = document.createElement("img");
  img.src = `icons/${image}`;
  img.alt = text || "Інгредієнт";

  icon.appendChild(img);
  icon.addEventListener("click", () => showMessage(index));

  return icon;
}

// Функція для відображення іконок інгредієнтів
function showIcons(ingredients) {
  const container = document.getElementById("icons-container");

  if (!ingredients.length) {
    console.error("JSON з інгредієнтами не завантажився");
    return;
  }

  container.innerHTML = ""; // Очищення перед додаванням нових іконок

  ingredients.forEach((ingredient, index) => {
    const icon = createIcon(ingredient.icon, ingredient.message, index);
    container.appendChild(icon);
  });
}

// Функція, яка показує повідомлення при кліку на іконку
function showMessage(index) {
  console.log("Клікнули на іконку:", index);
  const text = window.ingredients[index]?.component || "Немає інформації";
  displayMessage(text);
}

// Функція для виводу повідомлення на екран
function displayMessage(text) {
  const container = document.getElementById("recipe-container");
  
  const messageBox = document.createElement("div");
  messageBox.classList.add("message");
  messageBox.textContent = text;

  container.appendChild(messageBox);
  animateMessage(messageBox);
}

// Функція для анімації повідомлення
function animateMessage(element) {
  element.style.animation = "floatUp 2s ease-in-out";
}

// Завантаження інгредієнтів і відображення іконок
(async function start() {
  const data = await loadJSON("ingredients.json");
  window.ingredients = data; // Збереження в глобальній змінній
  showIcons(data);
})();