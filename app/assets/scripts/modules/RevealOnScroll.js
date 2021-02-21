class RevealOnScroll {
  constructor(elems, offset) {
    this.itemsToReveal = document.querySelectorAll(elems);
    this.offsetPercentage = offset;
    this.hideInitially();
  }

  hideInitially() {
    console.log(this.itemsToReveal)
  }

}

export default RevealOnScroll;