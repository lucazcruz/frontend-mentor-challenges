import Menu from './scripts/menu.js';
import Amount from './scripts/amount.js';
import Cart from './scripts/cart.js';
import Slide from './scripts/slide.js';
import Modal from './scripts/galeria.js';

const menu = new Menu(".header-menu", ".menu-btn");
const amount = new Amount(".amount-btn");
const cart = new Cart(".cart-wrapper", ".add-button");
const slide = new Slide(".navButtons");
const galeria = new Modal(".product");

menu.init();
amount.init();
cart.init();
slide.init();
galeria.init();
