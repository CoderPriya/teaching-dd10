
jQuery(document).ready(function(){/* activate scrollspy menu */
jQuery('body').scrollspy({
  target: '#navbar-collapsible',
  offset: 50
});

/* smooth scrolling sections */
jQuery('a[href*=#]:not([href=#],[data-toggle="tab"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = jQuery(this.hash);
      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        jQuery('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
});

});