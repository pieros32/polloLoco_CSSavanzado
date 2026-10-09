document.addEventListener("DOMContentLoaded", () => {
  // ======================================================
  // CARRITO LATERAL
  // ======================================================
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

  // ======================================================
  // MENÚ LATERAL (botón hamburguesa, solo en pantallas < 992px)
  // ======================================================
  const navToggleBtn = document.getElementById("nav-toggle");
  const sidebar = document.getElementById("sidebar");
  const navOverlay = document.getElementById("nav-overlay");

  const setNavOpen = (isOpen) => {
    sidebar.classList.toggle("open", isOpen);
    navOverlay.classList.toggle("active", isOpen);
    navToggleBtn.setAttribute("aria-expanded", String(isOpen));
    navToggleBtn.setAttribute(
      "aria-label",
      isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación",
    );
  };

  if (navToggleBtn && sidebar && navOverlay) {
    navToggleBtn.addEventListener("click", () =>
      setNavOpen(!sidebar.classList.contains("open")),
    );
    navOverlay.addEventListener("click", () => setNavOpen(false));

    // Si el usuario agranda la ventana, el menú queda fijo: limpiamos el estado
    window.matchMedia("(min-width: 992px)").addEventListener("change", (e) => {
      if (e.matches) setNavOpen(false);
    });
  }

  // ======================================================
  // TECLA ESC: cierra el carrito o el menú lateral
  // ======================================================
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;

    if (cartSidebar.classList.contains("open")) closeCart();
    if (sidebar && sidebar.classList.contains("open")) setNavOpen(false);
  });
});
