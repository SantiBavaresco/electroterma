"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Image } from "@nextui-org/image";

interface Props {
    url?: string;
    fileName?: Array<string>;
    width?: string;
    line1?: string;
    line2?: string;
}

// const ModalPdf: React.FC<Props> = ({ url, title, layer, color, primaryColor, reflectionColor, borderColor}) => {
// import image1 from "../../public/img/solerpalau/tda/imgbanner/11.jpg";
// import image2 from "../../public/img/solerpalau/tda/imgbanner/22.jpg";
// import image3 from "../../public/img/solerpalau/tda/imgbanner/33.jpg";
// import image4 from "../../public/img/solerpalau/tda/imgbanner/4.jpg";

const SimpleSlider: React.FC<Props> = ({ url, width, fileName }) => {
    const wii = "500px";
    const settings = {
        // dots: true,
        className: "center variable-width",
        centerMode: true,
        display: "flex",
        flexDirection: "row",
        // height:200,
        infinite: true,
        // centerPadding: "60px",
        variableWidth: true,
        // width: 1200,
        // adaptiveHeight: true,
        // lazyLoad: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: "linear",
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             infinite: true,
        //             dots: true,
        //             row: 1,
        //         },
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             initialSlide: 1,
        //         },
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             row: 1,
        //         },
        //     },
        // ],
    };

    return (
        <div className="aspect-[11/5] lg:aspect-[21.5/9] overflow-hidden ">
            <div className="absolute top-32 lg:top-[58vh] z-10 px-4 right-4 lg:right-12  rounded-tl-2xl rounded-br-2xl flex flex-col justify-start items-center bg-white p-1 ">
                <div className="flex flex-col justify-start items-start text-sm lg:text-3xl text-livered-title py-4 lg:py-6">
                    <h1 className=" font-bold">Componente de</h1>
                    <h1 className="font-bold">equipo tempomatic</h1>
                </div>
            </div>
            <Slider {...settings}>
                {fileName?.map((item, index) => (
                    <div key={index} className="max-w-[330px]  md:max-w-[400px] lg:max-w-[115vh] px-[2px]">
                        <Image
                            alt={`Imagen ${index}`}
                            src={`${url}${item}.jpg`}
                            isZoomed
                            radius="none"
                            loading="eager"
                            key={index}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SimpleSlider;
