const settings = {
  autoplay: false,
  centerMode: true,
  // className: 'center',
  // centerPadding: "60px",
  interval: 300,
  slidesToShow: 5,
  InitialSlide: 0,
  arrows: false,
  // nextArrow: <nextArrow />,
  // prevArrow: <prevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        swipeToSlide: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        swipeToSlide: true,
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        swipeToSlide: true,
      }
    },
  ]
};

export default settings;