export default class Menu {
  constructor(menu, menuButton) {
    this.menu = document.querySelector(menu);
    this.openButton = document.querySelector(menuButton);
    this.overlayer = document.querySelector(".overlayer");

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu() {
    this.menu.classList.add("active");
    this.overlayer.classList.add("active");

    setTimeout(()=> document.addEventListener("click", this.closeMenu));
  }

  closeMenu({ target }) {
    if (target == this.overlayer || target !== this.menu) {
      this.menu.classList.remove("active");
      this.overlayer.classList.remove("active");

      document.removeEventListener("click", this.closeMenu);
    };
  }

  init() {
    this.openButton.addEventListener("click", this.openMenu);
  }
}