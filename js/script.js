AOS.init({
  disable: 'mobile',
  initClassName: false,
  useClassNames: false,
  duration: 1200,
  easing: 'ease-in-out',
  once: true
});

$(document).ready(function() {
  // smooth scrolling
  $('.nav-link').click(function() {
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top
      },
      800
    );

    return false;
  });

  // adjust the nav style base on scroll
  var lastScrollTop = 0;
  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      // downscroll code
      $('.navigation').addClass('header-sticky');
    }

    if ($(window).scrollTop() === 0) {
      $('.navigation').removeClass('header-sticky');
    }
    lastScrollTop = st;
  });
  window;

  // toggle nav burger icon
  $('.navigation__icon').click(() => {
    $('.navigation__icon').toggleClass('open');
    if ($('.navigation__icon').hasClass('open')) {
      $('.navigation__list').addClass('active');
    } else {
      $('.navigation__list').removeClass('active');
    }
  });

  $('.nav-link').click(() => {
    $('.navigation__list').removeClass('active');
    $('.navigation__icon').removeClass('open');
  });

  $(document).click(e => {
    if (e.target.id !== 'nav' && e.target.id !== 'icon') {
      $('.navigation__list').removeClass('active');
      $('.navigation__icon').removeClass('open');
    }
  });

  // open modal to view images
  $('#album-modal').iziModal({ width: 1000 });
  if ($(window).width() > 1200) {
    $('.album-trigger').on('click', function(event) {
      event.preventDefault();
      $('#album-modal').html(
        `<img src="./img/album-${event.target.id}.jpg" width="840">`
      );
      $('#album-modal').iziModal('setZindex', 99999);
      $('#album-modal').iziModal('open', { zindex: 99999 });
      $('#album-modal').iziModal('open');
    });
  }

  // maps
  let map;

  if ($(window).width() > 1000) {
    map = new GMaps({
      div: '.map',
      lat: 23.6880699,
      lng: 120.62,
      zoom: 13
    });
  } else {
    map = new GMaps({
      div: '.map',
      lat: 23.6880699,
      lng: 120.5454033,
      zoom: 13
    });
  }

  map.addMarker({
    lat: 23.6880699,
    lng: 120.5454033,
    title: '斗六嘉東文旦茂谷園',
    infoWindow: {
      content: '<p>斗六嘉東文旦茂谷園</p>'
    }
  });
});
