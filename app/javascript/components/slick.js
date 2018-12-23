$(".testimonial-carousel").slick({
  dots: true,
  infinite: false,
  speed: 600,
  autoplay: true,
  arrows: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false
      }
    }
  ]
});
