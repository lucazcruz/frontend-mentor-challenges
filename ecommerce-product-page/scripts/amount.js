export default class Amount {
  constructor(amountButton) {
    this.amountButton = document.querySelector(amountButton);
    this.minus = this.amountButton.querySelector(".minus");
    this.plus = this.amountButton.querySelector(".plus");
    this.amountElement = this.amountButton.querySelector(".amount");

    this.amount = this.amount.bind(this);
  }

  amount({ target }) {
    let amount = +this.amountElement.textContent;
    amount = target === this.minus ? amount -1 : amount;
    amount = target === this.plus ? amount +1 : amount;

    this.amountElement.textContent = amount > 0 ? amount : 0;
  }

  init() {
    this.amountButton.addEventListener("click", this.amount);
  }
}