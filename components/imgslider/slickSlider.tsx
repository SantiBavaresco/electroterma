"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Image } from "@nextui-org/image";

interface ImgLable {
    textLable?: string;
    textColor?: string;
}

interface ImgData {
    imgName?: string;
    imgLable?: ImgLable[];
}

interface Props {
    url?: string;
    imgInfo?: ImgData[];
    width?: string;
    line1?: string;
    line2?: string;
}

const SimpleSlider: React.FC<Props> = ({ url, width, imgInfo }) => {

    const settings1 = {
        className: "center variable-width aspect[16/9] object-cover w-[100%] h-[40%] md:h-[100%]",
        dots: true,
        infinite: true,
        // speed: 500,
        autoplay: true,
        // autoplaySpeed: 2000,
        speed: 10000,
        autoplaySpeed: 0,
        // pauseOnHover: true,

        slidesToShow: 2,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        // variableWidth: true,
        // height: 800,
        // width: 900,

        // centerMode: true,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             infinite: true,
        //             dots: true,
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
        //         },
        //     },
        // ],
    };
    // const wii = "500px";
    const settingsss = {
        // dots: true,
        className:
            "center variable-width  aspect[16/9] object-cover w-[100%] h-[90%] flex flex-nowrap overflow-hidden ",
        // centerMode: true,
        // display: "flex",
        // flexDirection: "row",
        // flexGrow: 1,
        // height: "80%",
        infinite: true,
        // centerPadding: "60px",
        // variableWidth: true,
        // width: 1200,
        // adaptiveHeight: true,
        // lazyLoad: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        adaptiveHeight: true,
        variableWidth: true,
        cssEase: "linear",
    };

    const settings = {
        // dots: true,
        className:
            "center variable-width   flex flex-nowrap overflow-hidden ",
        // centerMode: true,
        // display: "flex",
        // flexDirection: "row",
        // flexGrow: 1,
        // height: "80%",
        infinite: true,
        // centerPadding: "60px",
        // variableWidth: true,
        // width: 1200,
        // adaptiveHeight: true,
        // lazyLoad: true,
        slidesToShow: 1,
        // slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
    }

    return (
        <div className="overflow-hidden flex flex-grow min-h-full">
            <Slider {...settings}>
                {imgInfo?.map((item, index) => (
                    <div
                        key={`${index} - ${item.imgName}`}
                        className="relative
                         
                        max-h-[80%]
                        "
                    >
                        <div className="z-0">
                            <img
                                className=" w-[100%] h-auto max-h-[42vh] md:max-h-[82vh] block m-auto object-fill "
                                alt={`Imagen ${index}`}
                                src={`${url}${item.imgName}.webp`}
                                key={`Imagen ${index} - ${item.imgName}`}
                            ></img>

                            <div
                                className="absolute px-6 z-10
                            
                            bottom-[0%]
                            // right-0
                            rounded-tl-[42px]
                            flex flex-col justify-start items-center bg-white p-1 "
                            >
                                <div className="flex flex-col justify-start items-start text-sm lg:text-3xl  py-4 lg:py-6 2xl:py-10">
                                    {item.imgLable?.map((item, index) => (
                                        <h1
                                            className={`text-${
                                                item.textColor ||
                                                "livered-title"
                                            } font-bold font-lexend`}
                                            key={`${index}-${item}`}
                                        >
                                            {item.textLable}
                                        </h1>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SimpleSlider;
