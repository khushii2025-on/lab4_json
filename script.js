fetch("./data/flavours.json")
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector(".flavours");
    })
  .catch(error => {
    console.error("Error loading JSON:", error);
  });