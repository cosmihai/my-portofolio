import '../styles/style.css';
import 'lazysizes';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

if (module.hot) module.hot.accept()

new MobileMenu();
new RevealOnScroll(".card", 80);
new StickyHeader();
let modal;

document.querySelectorAll('.modal__btn-open').forEach(el => {
    el.addEventListener('click', () => {
        if(!modal){
            import(/*webpackChunkName: "modal"*/'./modules/Modal')
            .then(res => {
                modal = new res.default();
                setTimeout(() => {
                    modal.openModal();
                }, 20);
            })
            .catch(err => console.log('Modal loading error: ', err))
        } 
        modal.openModal();
    })
})