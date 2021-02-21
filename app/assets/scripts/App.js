import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import '../styles/style.css';

if (module.hot) module.hot.accept()

const mobileMenu =  new MobileMenu();
new RevealOnScroll($(".card"), "70%");
const stickyHeader = new StickyHeader();
const modal = new Modal();