fetch("./data/flavours.json")
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector(".flavours");
    data.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");
      container.appendChild(card);
    });
    })
  .catch(error => {
    console.error("Error loading JSON:", error);
  });