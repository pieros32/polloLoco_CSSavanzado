document.addEventListener("DOMContentLoaded", () => {
  const cartToggleBtn = document.getElementById("cart-toggle");
  const closeCartBtn = document.getElementById("close-cart");
  const cartSidebar = document.getElementById("cart-sidebar");
  const cartOverlay = document.getElementById("cart-overlay");

  // Abrir carrito
  const openCart = () => {
    cartSidebar.classList.add("open");
    cartOverlay.classList.add("active");
    // document.body.classList.add("cart-open");
  };

  // Cerrar carrito
  const closeCart = () => {
    cartSidebar.classList.remove("open");
    cartOverlay.classList.remove("active");
    // document.body.classList.remove("cart-open");
  };

  // Eventos
  if (cartToggleBtn) cartToggleBtn.addEventListener("click", openCart);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

  // Cerrar con la tecla ESC (pa mas profesionalismo p)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && cartSidebar.classList.contains("open")) {
      closeCart();
    }
  });
});
