
// Autoscroll for homepage
$(function() {
  setTimeout(function() {
    var jumpPos = $('#about').offset().top;
    if($(document).scrollTop() <= jumpPos)
      $('html, body').animate({
        scrollTop: jumpPos
      }, 2000);
  }, 7000);
});

// Autoscroll for service page (video)
$(function() {
  setTimeout(function() {
    var movePos = $('#soil').offset().top;
    if($(document).scrollTop() <= movePos)
      $('html, body').animate({
        scrollTop: movePos
      }, 2000);
  }, 25000);
});

// autoscroll for portfolio
$(function() {
  setTimeout(function() {
    var portfolioPos = $('#portfolio').offset().top;
    if($(document).scrollTop() <= portfolioPos)
      $('html, body').animate({
        scrollTop: portfolioPos
      }, 2000);
  }, 20000);
});
