export default class Cart {
  constructor(cartWrapper, addButton) {
    this.cartWrapper = document.querySelector(cartWrapper);
    this.cartModal = this.cartWrapper.querySelector(".cart-modal");
    this.cartContent = this.cartWrapper.querySelector(".cart-content")
    this.checkoutButton = this.cartWrapper.querySelector(".checkout-btn");

    this.addbutton = document.querySelector(addButton);
    this.amount = document.querySelector(".amount-items");
  }

  amountItems() {
    this.amount.innerText = this.cartContent.children.length
  }

  isEmpty(empty) {
    if (!this.cartContent.children.length) {
      this.cartContent.innerHTML = `<span class="empty">Your cart is empty.</span>`;
      this.checkoutButton.style.display= "none";
    }

    if (empty == 2) {
      const empty = document.querySelector(".empty")
      this.checkoutButton.style.display = "block";
      if (empty) empty.remove();
    }
  }

  openCart() {
    this.cartModal.classList.add("active")
    this.isEmpty();
    
    setTimeout(() => {
      document.addEventListener("click", this.closeCart)
      if (!this.cartModal.classList.contains("active")) {
        document.removeEventListener("click", this.closeCart)
      }
    });
  }

  closeCart({ target }) {
    if (!this.cartModal.contains(target)) {
      this.isEmpty(2)
      this.cartModal.classList.remove("active")
      document.removeEventListener("click", this.closeCart)
    }
  }

  productConstruct(amount) {
    const div = document.createElement("div");
    div.classList.add("cart-product");
    div.innerHTML = `
      <img class="product-img" src="./assets/image-product-1-thumbnail.jpg" alt="product thumbnail" width="60" height="60">
      <div class="cart-product-info">
        <p>Fall Limited Edition Sneakers</p>
        <p>$125.00 x ${amount} <b>$${125*amount}.00</b></p>
      </div>
      <img class="remove" src="./assets/icon-delete.svg" alt="icon delete">
    `;
    return div;
  }

  addProduct() {
    this.isEmpty(2)
    const amount = document.querySelector(".amount-btn .amount").textContent;
    if (amount == 0) return;

    const product = this.productConstruct(amount);
    this.cartContent.appendChild(product);

    [...this.cartContent.children].forEach(item => {
      item.querySelector(".remove").addEventListener("click", this.removeProduct)
    })

    this.amountItems();
  }

  removeProduct({ target }) {
    if (target) {
      target.parentElement.remove()
      this.amountItems();
      setTimeout(()=> this.openCart())
    }
  }

  addCartEvent() {
    this.cartWrapper.addEventListener("click", this.openCart);
    this.addbutton.addEventListener("click", this.addProduct);
  }

  bindEvents() {
    this.openCart = this.openCart.bind(this);
    this.closeCart = this.closeCart.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  init() {
    this.bindEvents();
    this.addCartEvent();
  }
}
