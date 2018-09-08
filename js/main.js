
$(document).ready(function () {
  // page scrolling nagitaion
  window.onscroll = function() {
    if (window.pageYOffset > 20){
      $('.HomeNavBar').css({'background':'#2f69e5eb'});
    }
    else {
      $('.HomeNavBar').css({'background':''});
    }

  };

  /* ---------------------------------------------
       Typed text
 --------------------------------------------- */

  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 60,
    backSpeed: 30,
    startDelay: 1000,
    loop: true,
    loopCount: Infinity
  });

//   /* ---------------------------------------------
//   Portfolio
//   --------------------------------------------- */
//   $(".filter-btn").on('click', function (event) {
//
//     event.preventDefault();
//     var value = $(this).attr('data-filter');
//
//
//     if (value == "all") {
//
//       $('.filter').fadeIn('2000');
//     } else {
//
//       $(".filter").not('.' + value).fadeOut('3000');
//       $('.filter').filter('.' + value).fadeIn('3000');
//
//     }
//     $(".filter-btn").removeClass("active");
//     $(this).addClass("active");
//   });
//
//
});

