document.addEventListener("DOMContentLoaded", function () {
  function addQuantity(event) {
    const product = event.target.closest(".card-body");
    const quantityEl = product.querySelector(".quantity");
    let quantity = parseInt(quantityEl.textContent);
    quantity += 1; // Incrémente la quantité de 1
    quantityEl.textContent = quantity;

    // Calculer le nouveau total pour ce produit et mettre à jour le total général
    const unitPrice = parseInt(product.querySelector(".unit-price").textContent.replace(" $", ""));
    const currentTotalEl = document.querySelector(".total");
    let currentTotal = parseInt(currentTotalEl.textContent.replace(" $", ""));

    // Ajouter le prix unitaire au total global
    currentTotal += unitPrice;
    currentTotalEl.textContent = currentTotal + " $";
  }

  function removeQuantity(event) {
    const product = event.target.closest(".card-body");
    const quantityEl = product.querySelector(".quantity");
    let quantity = parseInt(quantityEl.textContent);

    if (quantity > 0) {
      quantity -= 1; // Décrémente la quantité de 1
      quantityEl.textContent = quantity;

      // Calculer le nouveau total pour ce produit et mettre à jour le total général
      const unitPrice = parseInt(product.querySelector(".unit-price").textContent.replace(" $", ""));
      const currentTotalEl = document.querySelector(".total");
      let currentTotal = parseInt(currentTotalEl.textContent.replace(" $", ""));

      // Soustraire le prix unitaire du total global
      currentTotal -= unitPrice;
      currentTotalEl.textContent = currentTotal + " $";
    }
  }

  function deleteProduct(event) {
    const product = event.target.closest(".card-body");
    const quantity = parseInt(product.querySelector(".quantity").textContent);
    const unitPrice = parseInt(product.querySelector(".unit-price").textContent.replace(" $", ""));
    const currentTotalEl = document.querySelector(".total");
    let currentTotal = parseInt(currentTotalEl.textContent.replace(" $", ""));

    // Réduire le total général en fonction de la quantité et du prix unitaire du produit supprimé
    currentTotal -= quantity * unitPrice;
    currentTotalEl.textContent = currentTotal + " $";

    // Supprime l'article du DOM
    product.remove();
  }

  function favorite(event) {
    event.target.classList.toggle("liked"); // Bascule l'état favori
  }

  // Attacher les événements pour chaque produit
  document.querySelectorAll(".card-body").forEach((product) => {
    product.querySelector(".fa-plus-circle").addEventListener("click", addQuantity);
    product.querySelector(".fa-minus-circle").addEventListener("click", removeQuantity);
    product.querySelector(".fa-trash-alt").addEventListener("click", deleteProduct);
    product.querySelector(".fa-heart").addEventListener("click", favorite);
  });
});