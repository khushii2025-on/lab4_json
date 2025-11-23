fetch("./data/flavours.json")
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector(".flavours");
    data.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");
      let health;
      if (item.calories < 150) {
        health = "Low calorie";
      } else if (item.calories < 250) {
        health = "Medium calorie";
      } else {
        health = "High calorie";
      }
      card.innerHTML = `
        <h2>${item.name}</h2>
        <img src="images/${item.image}" alt="${item.name}">
        <p>Type: ${item.type}</p>
        <p>Calories: ${item.calories}</p>
        <p><strong>${health}</strong></p>
      `;
      container.appendChild(card);
    });
    })
  .catch(error => {
    console.error("Error loading JSON:", error);
  });