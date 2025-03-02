async function fetchJSONFile(path) {
    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Помилка завантаження JSON:", error);
      return [];
    }
  }
  
  function createElementAndAddListener(src, message, index) {
    const iconElement = document.createElement("div");
    iconElement.classList.add("icon");
  
    const img = document.createElement("img");
    img.src = `icons/${src}`;
    img.alt = message || "Ingredient";
  
    iconElement.appendChild(img);
    iconElement.addEventListener("click", () => handleIconClick(index));
    return iconElement;
  }
  
  function displayIcons(ingredients) {
    const iconsContainer = document.getElementById("icons-container");
  
    if (!ingredients.length) {
      console.error("Не вдалося отримати ingredients.json");
      return;
    }
  
    iconsContainer.innerHTML = ""; // Clear previous icons before adding new ones
    ingredients.forEach((ingredient, index) => {
      const iconElement = createElementAndAddListener(
        ingredient.icon,
        ingredient.message,
        index
      );
      iconsContainer.appendChild(iconElement);
    });
  }
  
  function handleIconClick(index) {
    console.log("Icon clicked:", index);
    const message = ingredients[index]?.component || "No message available";
    displayMessage(message);
  }
  
  function displayMessage(message) {
    const recipeContainer = document.getElementById("recipe-container");
  
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = message;
  
    recipeContainer.appendChild(messageElement);
    animateMessage(messageElement);
  }
  
  function animateMessage(element) {
    element.style.animation = "floatUp 2s ease-in-out";
  }
  
  (async function initialize() {
    const ingredientsData = await fetchJSONFile("ingredients.json");
    window.ingredients = ingredientsData; // Store globally for handleIconClick
    displayIcons(ingredientsData);
  })();