import React, { useState, useEffect, useRef } from "react";
import ListCarousal from "./ListCarousal";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Banner() {

  const BANNER_COUNT = [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
  ];
  return (
    <div className="banner_section layout_padding">
      <div id="main_slider" className="carousel slide" data-ride="carousel">
	  	<OwlCarousel loop={true} margin={10} items={1} nav={true} lazyLoad={true} autoplay ={true}>  
          {BANNER_COUNT.map((data, index) => (
			console.log(index),
            <ListCarousal key={index} />
          ))}
        </OwlCarousel>  
      </div>
    </div>
  );
}

export default Banner;