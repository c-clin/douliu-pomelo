$(document).ready(function() {
  var lastScrollTop = 0;
  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      // downscroll code
      console.log('scroll down');
      $('.navigation').addClass('header-sticky');
    } else if ($(window).scrollTop() === 0) {
      $('.navigation').removeClass('header-sticky');
    }
    lastScrollTop = st;
  });
});
