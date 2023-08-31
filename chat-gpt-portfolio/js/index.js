// Smooth scrolling for navigation links
$(document).ready(function() {
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
    
    // Add animation to elements on scroll
    $(window).scroll(function() {
      $('.fadeIn').each(function(){
        const position = $(this).offset().top;
        const scroll = $(window).scrollTop();
        if (position < scroll + 600) {
          $(this).addClass('animated fadeInUp');
        }
      });
    });
  });
  