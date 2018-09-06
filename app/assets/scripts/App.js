import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

const mobileMenu =  new MobileMenu();
new RevealOnScroll($(".card"), "70%");