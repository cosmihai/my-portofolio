import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import '../styles/style.css';

if (module.hot) module.hot.accept()

new MobileMenu();
new RevealOnScroll(".card", 80);
new StickyHeader();
new Modal();