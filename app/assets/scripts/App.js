import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

const mobileMenu =  new MobileMenu();
new RevealOnScroll($(".card"), "70%");
const stickyHeader = new StickyHeader();