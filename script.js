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
      container.appendChild(card);
    });
    })
  .catch(error => {
    console.error("Error loading JSON:", error);
  });