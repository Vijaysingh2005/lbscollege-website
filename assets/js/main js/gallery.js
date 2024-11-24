$(document).ready(function() {
  // Uncomment this block if you want to use Isotope
  // $('.portfolio-item').isotope({
  //     itemSelector: '.item',
  //     layoutMode: 'fitRows'
  // });

  $('.portfolio-menu ul li').click(function() {
      $('.portfolio-menu ul li').removeClass('active');
      $(this).addClass('active');

      var selector = $(this).attr('data-filter');
      // Uncomment this line if you want to use Isotope for filtering
      // $('.portfolio-item').isotope({ filter: selector });

      return false;
  });

  var popup_btn = $('.popup-btn');
  popup_btn.magnificPopup({
      type: 'image',
      gallery: {
          enabled: true
      }
  });
});
