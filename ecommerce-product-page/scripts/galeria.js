class Galeria {
  constructor(galeria) {
    this.galeria = document.querySelector(galeria);
    this.imageMain = this.galeria.querySelector(".image-main");
    this.images = this.galeria.querySelectorAll(".galeria img");

    this.toggle = this.toggle.bind(this);
  }

  toggle({ target }) {
    this.images.forEach(image => image.classList.remove("active"));

    target.classList.add("active")
    const src = target.getAttribute("src")
    this.imageMain.src = src;
  }

  addClickEvent() {
    this.imageMain.addEventListener("click", this.modalUp)
    this.images.forEach(image => {
      image.addEventListener("click", this.toggle)
    })
  }

  init() {
    this.addClickEvent();
  }
}

class Modal extends Galeria {
  constructor (galeria) {
    super(galeria)

    this.modalUp = this.modalUp.bind(this);
    this.removeModal = this.removeModal.bind(this);
    this.modalToggle = this.modalToggle.bind(this);
  }

  modalToggle({ target }) {
    const imageMain = this.modal.querySelector(".image-main")
    this.modalImages.forEach(image => image.classList.remove("active"));
  
    const src = target.getAttribute("src")
    imageMain.setAttribute("src", src)
  }

  addModalEvents() {
    this.modalImages = this.modal.querySelectorAll(".galeria img")
    this.modalImages.forEach(image => {
      image.addEventListener("click", this.modalToggle)
      image.addEventListener("click", this.toggle)
    })
  }

  createModal() {
    let div = document.createElement("div");
    div.classList.add("product-modal")
    div.innerHTML = this.galeria.innerHTML;
    return div
  }

  removeModal({ target }) {
    if (target === this.modal) {
      document.body.removeChild(this.modal);
      return
    }
  }

  modalUp() {
    if (window.innerWidth < 700) return;
    
    this.modal = this.createModal();
    document.body.appendChild(this.modal)
    document.body.addEventListener("click", this.removeModal)
    this.addModalEvents();
  }
}

export default Modal;