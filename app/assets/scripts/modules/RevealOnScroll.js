import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class RevealOnScroll {
  constructor(elems, offset) {
    this.itemsToReveal = document.querySelectorAll(elems);
    this.offsetPercentage = offset;
    this.browserHeight = window.innerHeight;
    this.hideInitially();
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
    this.events()
  }

  events() {
    window.addEventListener('scroll', this.scrollThrottle);
    window.addEventListener('resize', debounce(() => {
      this.browserHeight = window.innerHeight;
    }, 333))
  }

  calcCaller() {
    this.itemsToReveal.forEach(elem => {
      if(!elem.isReveald) {
        this.calculateIfScrolledTo(elem);
      }
    })
  }

  calculateIfScrolledTo(el) {
    if(window.scrollY + this.browserHeight > el.offsetTop) {
      let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100;
      if(scrollPercent < this.offsetPercentage) {
        el.classList.add("reveal-item--is-visible");
        el.isReveald = true;
        if(el.isLast) {
          window.removeEventListener('scroll', this.scrollThrottle);
        }
      }
    }
  }

  hideInitially() {
    this.itemsToReveal.forEach(elem => {
      elem.classList.add("reveal-item");
      elem.isReveald = false;
    })
    this.itemsToReveal[this.itemsToReveal.length-1].isLast = true;
  }
}

export default RevealOnScroll;