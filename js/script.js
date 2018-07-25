$(document).ready(function() {
  $('.nav-link').click(function() {
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top
      },
      800
    );

    return false;
  });

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

  $('#album-modal').iziModal({ width: 1000 });

  $('.album-trigger').on('click', function(event) {
    console.log(event.target.id);
    event.preventDefault();
    $('#album-modal').html(
      `<img src="./img/album-${event.target.id}.jpg" alt="">`
    );
    $('#album-modal').iziModal('setZindex', 99999);
    $('#album-modal').iziModal('open', { zindex: 99999 });
    $('#album-modal').iziModal('open');
  });
});
