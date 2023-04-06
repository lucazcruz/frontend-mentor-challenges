export default class Slide {
  constructor(navButtons) {
    this.navButtons = document.querySelector(navButtons);
    this.prev = this.navButtons.querySelector(".previous-button");
    this.next = this.navButtons.querySelector(".next-button");
    this.imageMain = document.querySelector(".image-main");

    this.count = 1
  }
  
  prevImage() {
    this.count = this.count <= 1 ? 4 : this.count -1;
    this.imageMain.src = `./assets/image-product-${this.count}.jpg`;
  }

  nextImage() {
    this.count = this.count >= 4 ? 1 : this.count +1;
    this.imageMain.src = `./assets/image-product-${this.count}.jpg`;
  }

  addClickEvent() {
    this.prev.addEventListener("click", this.prevImage)
    this.next.addEventListener("click", this.nextImage)
  }

  bindEvent() {
    this.prevImage = this.prevImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
  }

  init() {
    this.bindEvent();
    this.addClickEvent();
  }
}
