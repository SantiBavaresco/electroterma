"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Image} from "@nextui-org/image";


import image1 from "../../public/img/solerpalau/tda/imgbanner/11.jpg";
import image2 from "../../public/img/solerpalau/tda/imgbanner/22.jpg";
import image3 from "../../public/img/solerpalau/tda/imgbanner/33.jpg";
// import image4 from "../../public/img/solerpalau/tda/imgbanner/4.jpg";

export default class SimpleSlider extends Component {
    render() {
        const wii = "500px";
        const settings = {
            // dots: true,

            className: "center variable-width",

            centerMode: true,
            display: "flex",
            flexDirection: "row",
            
            // height:200,

            infinite: true,
            centerPadding: "60px",

            variableWidth: true,
            width: 1200,
         
            // adaptiveHeight: true,
            // lazyLoad: true,

            slidesToShow: 1,
            // slidesToScroll: 1,
            autoplay: true,
            speed: 10000,
            autoplaySpeed: 0,
            cssEase: "linear",

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                        row:1,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        row:1,
                    },
                },
            ],
        };

        return (
            <div className="overflow-hidden ">
                <div className="absolute top-14 z-10 px-4 right-2 md:right-[13%] rounded-tl-2xl rounded-br-2xl flex flex-col justify-start items-center bg-white p-1 ">
                    <div className="flex flex-col justify-start items-start text-livered-title">
			        <h1 className=" font-bold">
                        Componente de 
                    </h1>
                    <h1 className="font-bold">
                        equipo tempomatic 
                    </h1>
                    </div>
                </div>
                <Slider {...settings} >
                    <div style={{ width: wii }}>
                        {/* <img src="../../public/img/solerpalau/tda/imgbanner/1.jpg" alt="Imagen" > */}
                        {/* <h1 style={{width:"1280px", height: "200px", objectFit: "cover", objectPosition: "center"}}>1</h1> */}

                        <Image alt="Imagen 1" src="../img/solerpalau/tda/imgbanner/11.jpg" isZoomed radius="none" loading="lazy"/>
                    </div>
                    <div style={{ width: wii }}>
                        <Image alt="Imagen 2" src="../img/solerpalau/tda/imgbanner/22.jpg" isZoomed radius="none" loading="lazy"/>
                    </div>
                    <div style={{ width: wii }}>
                        <Image alt="Imagen 3" src="../img/solerpalau/tda/imgbanner/33.jpg" isZoomed radius="none" loading="lazy"/>
                    </div>

                    <div style={{ width: wii }}>
                        <Image alt="Imagen 1" src="../img/solerpalau/tda/imgbanner/11.jpg" isZoomed radius="none" loading="lazy"/>
                    </div>
                    <div style={{ width: wii }}>
                        <Image alt="Imagen 2" src="../img/solerpalau/tda/imgbanner/22.jpg" isZoomed radius="none" loading="lazy"/>
                    </div>
                    <div style={{ width: wii }}>
                        <Image alt="Imagen 3" src="../img/solerpalau/tda/imgbanner/33.jpg" isZoomed radius="none" loading="lazy"/>
                    </div>
                </Slider>
            </div>
        );
    }
}
