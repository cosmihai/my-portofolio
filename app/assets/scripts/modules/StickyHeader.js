import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {

  constructor() {
    this.pageSection = $(".section");
    this.headerLinks = $(".primary-nav a");
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createPageSectionWaypoints() {

    let self = this;

    this.pageSection.each(function() {

      let currentPageSection = this;
      
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if(direction === 'down') {
            let matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            self.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "40%"
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if(direction === 'up') {
            let matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            self.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-5%"
      });
    });
  }
}

export default StickyHeader;