document.addEventListener("DOMContentLoaded", () => {
  // 1. Function to calculate and update total price
  function updateTotal() {
    let total = 0;
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const unitPriceText = card.querySelector(".unit-price").textContent;
      // Ne7i '$' w espaces w raddou float
      const unitPrice = parseFloat(unitPriceText.replace("$", "").trim());
      const quantity = parseInt(card.querySelector(".quantity").textContent);

      total += unitPrice * quantity;
    });

    document.querySelector(".total-price").textContent = `$ ${total}`;
  }

  // 2. Select all product cards and add event listeners
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const plusBtn = card.querySelector(".fa-plus-circle");
    const minusBtn = card.querySelector(".fa-minus-circle");
    const quantitySpan = card.querySelector(".quantity");
    const deleteBtn = card.querySelector(".fa-trash-alt");
    const heartBtn = card.querySelector(".fa-heart");

    // Plus Button (+)
    plusBtn.addEventListener("click", () => {
      let currentQty = parseInt(quantitySpan.textContent);
      quantitySpan.textContent = currentQty + 1;
      updateTotal();
    });

    // Minus Button (-)
    minusBtn.addEventListener("click", () => {
      let currentQty = parseInt(quantitySpan.textContent);
      if (currentQty > 0) {
        quantitySpan.textContent = currentQty - 1;
        updateTotal();
      }
    });

    // Delete Button (Trash)
    deleteBtn.addEventListener("click", () => {
      card.remove(); // Removes the product card from DOM
      updateTotal(); // Recalculates total price
    });

    // Like Button (Heart)
    heartBtn.addEventListener("click", () => {
      // Toggle color between red and grey
      if (heartBtn.style.color === "red") {
        heartBtn.style.color = "#6c757d"; // secondary grey
      } else {
        heartBtn.style.color = "red";
      }
    });
  });

  // Initial calculation on page load
  updateTotal();
});
