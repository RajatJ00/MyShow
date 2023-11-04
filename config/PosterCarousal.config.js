const settings = {
  infinite: true,
  autoplay: false,
  interval: 300,
  slidesToShow: 6,
  slidesToScroll: 2,
  InitialSlide: 0,
  arrows: true,
  // nextArrow: <nextArrow />,
  // prevArrow: <prevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
};

export default settings;