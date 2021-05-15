import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class StickyHeader {
  constructor() {
    this.pageSections = document.querySelectorAll(".page-section");
    this.browserHeight = window.innerHeight;
    this.prevoiusScrollY = window.scrollY;
    this.events();
  }

  events() {
    window.addEventListener('scroll', throttle(() => this.runOnScroll(), 200));
    window.addEventListener('resize', debounce(() => {
      this.browserHeight = window.innerHeight;
    }, 333));
  }
  
  runOnScroll() {
    this.determineScrollDirection();
    this.pageSections.forEach(section => {
      this.calcSection(section);
    })
  }
  
  determineScrollDirection() {
    if(window.scrollY > this.prevoiusScrollY) {
      this.scrollDirection = 'down'
    }else {
      this.scrollDirection = 'up'
    }
    this.prevoiusScrollY = window.scrollY;
  }

  calcSection(el) {
    if(window.scrollY+this.browserHeight>el.offsetTop && window.scrollY<el.offsetTop+el.offsetHeight) {
      let scrollPercent = el.getBoundingClientRect().y / this.browserHeight * 100;
      if(scrollPercent < 40 && scrollPercent > -0.1 && this.scrollDirection=='down' || scrollPercent < 90 && this.scrollDirection == 'up') {
        let matchingLink = el.getAttribute("data-matching-link");
        document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(el => {
          el.classList.remove("is-current-link");
        })
        document.querySelector(matchingLink).classList.add("is-current-link");
      }
    }
  }
  
}

export default StickyHeader;