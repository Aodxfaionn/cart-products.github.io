window.addEventListener("DOMContentLoaded", function () {
  let products = document.querySelectorAll(".product");
  let buttons = document.querySelectorAll("button");
  let openBtn = document.querySelector(".open");

  function createCart() {
    let cart = document.createElement("div");
    let field = document.createElement("div");
    let heading = document.createElement("h2");
    let closeBtn = document.createElement("button");

    cart.classList.add("cart");
    field.classList.add("cart-field");
    closeBtn.classList.add("close");

    heading.textContent = "В корзине:";
    closeBtn.textContent = "Закрыть";

    document.body.appendChild(cart);
    cart.appendChild(heading);
    cart.appendChild(field);
    cart.appendChild(closeBtn);
  }
  createCart();

  let field = this.document.querySelector(".cart-field");
  let cart = this.document.querySelector(".cart");
  let closeBtn = this.document.querySelector(".close");

  function openCart() {
    cart.style.display = "block";
  }

  function closeCart() {
    cart.style.display = "none";
  }

  openBtn.addEventListener("click", openCart);
  closeBtn.addEventListener("click", closeCart);

  buttons.forEach((item, index) => {
    item.addEventListener("click", function () {
      let item = products[index].cloneNode(true);
      let btn = item.querySelector("button");
      btn.remove();
      field.appendChild(item);
      products[index].remove();
    });
  });
});
