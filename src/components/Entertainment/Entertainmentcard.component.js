import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) => {
  return (
    <>
    <div className="m-12">
    <img
      className=" rounded-xl mobile:w-40 md:w-40 lg:w-full lg:h-full"
      src={props.src}
      alt="Entertainment_Image"
     />
    </div>
    </>
  );
};
const EntertainmentCardSlider = () => {
  const EntertainmentImage = ["https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/cooking-collection-202007222211.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/interactive-games-collection-202012041129.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/art-and-crafts-collection-202007220710.png"
  ];

  const settingsLg = {
    arrows: true,
    slidesToShow: 4
  }
  const settingsMd = {
    infinite: true,
    slidesToShow: 3
  }
  const settings = {
    infinite: true,
    slidesToShow: 2
  }

  return (
    <><div className="hidden lg:block">
    <Slider {...settingsLg} >
    {EntertainmentImage.map((image) => (
      <EntertainmentCard src={image} />
    ))}
    </Slider></div>
    <div className="md:block hidden lg:hidden">
    <Slider {...settingsMd}>
    {EntertainmentImage.map((image) => (
      <EntertainmentCard src={image} />
    ))}
    </Slider></div>
    <div className="lg:hidden md:hidden">
    <Slider {...settings}>
    {EntertainmentImage.map((image) => (
      <EntertainmentCard src={image} />
    ))}
    </Slider></div>
    </>
  )
}

export default EntertainmentCardSlider;