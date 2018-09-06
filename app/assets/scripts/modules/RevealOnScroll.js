import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(elems, offset) {
    this.itemsToReveal = elems;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    let self = this;
    this.itemsToReveal.each(function() {
      let currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: () => {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: self.offsetPercentage
      });
    })
  }
}

export default RevealOnScroll;