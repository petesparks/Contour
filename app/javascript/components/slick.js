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

$(".service-carousel").slick({
  dots: false,
  infinite: true,
  fade: true,
  speed: 2500,
  autoplay: true,
  arrows: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  // pauseOnFocus: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false
      }
    }
  ]
});

$(".project-carousel").slick({
  dots: false,
  // slide: '.project-image',
  infinite: true,
  fade: true,
  speed: 2500,
  autoplay: true,
  arrows: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  // pauseOnFocus: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false
      }
    }
  ]
});

$(".portfolio-carousel").slick({
  dots: false,
  // slide: '.project-image',
  infinite: true,
  fade: true,
  speed: 2500,
  autoplay: true,
  arrows: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  // pauseOnFocus: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false
      }
    }
  ]
});
