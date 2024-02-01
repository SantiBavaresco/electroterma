"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Image} from "@nextui-org/image";


import image1 from "../../public/img/solerpalau/tda/imgbanner/1.jpg";
import image2 from "../../public/img/solerpalau/tda/imgbanner/2.jpg";
import image3 from "../../public/img/solerpalau/tda/imgbanner/3.jpg";
// import image4 from "../../public/img/solerpalau/tda/imgbanner/4.jpg";

export default class SimpleSliderDisplay extends Component {
    render() {
        const wii = "300px";
        const settings = {
            dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
            width: 800,
            centerMode: true,



      autoplay: true,
      autoplaySpeed: 2000,
    //   pauseOnHover: true,
         
            // dots: true,
            className: "center variable-width",

            // centerMode: true,
            // display: "flex",
            // flexDirection: "row",
            
            // // height:200,

            // infinite: true,
            // centerPadding: "60px",

            // variableWidth: true,
            // width: 800,
         
            // // adaptiveHeight: true,
            // // lazyLoad: true,

            // slidesToShow: 1,
            // // slidesToScroll: 1,
            // autoplay: true,
            // speed: 10000,
            // autoplaySpeed: 0,
            // cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

        return (
            <div className="">
                
                <Slider {...settings} >
                    <div style={{ width: wii }}>
                        {/* <img src="../../public/img/solerpalau/tda/imgbanner/1.jpg" alt="Imagen" > */}
                        {/* <h1 style={{width:"1280px", height: "200px", objectFit: "cover", objectPosition: "center"}}>1</h1> */}

                        <Image alt="Imagen 1" src="../img/solerpalau/tda/imgbanner/1.jpg"  radius="none" loading="lazy"/>
                    </div>
                    <div style={{ width: wii }}>
                        <Image alt="Imagen 2" src="../img/solerpalau/tda/imgbanner/2.jpg"  radius="none" loading="lazy"/>
                    </div>
                    <div style={{ width: wii }}>
                        <Image alt="Imagen 3" src="../img/solerpalau/tda/imgbanner/3.jpg"  radius="none" loading="lazy"/>
                    </div>

                    <div style={{ width: wii }}>
                        <Image alt="Imagen 1" src="../img/solerpalau/tda/imgbanner/1.jpg"  radius="none" loading="lazy"/>
                    </div>
                    <div style={{ width: wii }}>
                        <Image alt="Imagen 2" src="../img/solerpalau/tda/imgbanner/2.jpg"  radius="none" loading="lazy"/>
                    </div>
                    <div style={{ width: wii }}>
                        <Image alt="Imagen 3" src="../img/solerpalau/tda/imgbanner/3.jpg"  radius="none" loading="lazy"/>
                    </div>
                </Slider>
            </div>
        );
    }
}
