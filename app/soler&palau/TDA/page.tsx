"use client";
import { title } from "@/components/primitives";
// import VideoScrollPlayer from "@/components/videoplayer/videoplayer";
// import VideoScrubber from "@/components/videoScrubber/videoScrubber";
import FrameScrubber from "@/components/frameScrubber/frameScrubber";
import Caracteristics from "./tabs";
import { lazy, Suspense } from "react";

import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

import { Accordion, AccordionItem } from "@nextui-org/react";

import { Chip } from "@nextui-org/chip";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Ondas01SVG } from "@/public/svg/ondas01svg";
import { Ondas02SVG } from "@/public/svg/ondas02svg";

import { ConstruccionDuradera } from "@/public/svg/construccionDuradera";
import { EficienciaEnergetica } from "@/public/svg/eficienciaEnergetica";
import { FacilInstalacion } from "@/public/svg/facilInstalacion";
import { VersatilidadAplicacion } from "@/public/svg/versatilidadAplicacion";

import { Download } from "@/public/svg/download";
import SimpleSlider from "@/components/imgslider/slickSlider";
import SimpleSliderDemoImages from "@/components/imgslider/simpleSliderDemoImages";
import { Reveal } from "@/components/revealFramemotion";



export default function TDAPage() {


    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const urlImageBanner = "../img/solerpalau/imgbanner/";
    const bannerImageNames = ["1", "2", "3", "1", "2", "3"];

    const bannerImageInfo = [
        {
            imgName:"1",
            imgLable:[
                {   
                    textLable:"Componente de",
                    textColor:""
                },
                {   
                    textLable:"equipo tempomatic",
                    textColor:""
                },
            ],
        },
        {
            imgName:"2",
            imgLable:[
                {   
                    textLable:"Es ideal para",
                    textColor:"stone-300"
                },
                {   
                    textLable:"Extracción localizada",
                    textColor:""
                },
                {   
                    textLable:"en procesos de",
                    textColor:""
                },
                {   
                    textLable:"industria",
                    textColor:""
                },
            ],
        },
        {
            imgName:"3",
            imgLable:[
                {   
                    textLable:"Es ideal para",
                    textColor:"stone-100"
                },
                {   
                    textLable:"Áreas de proceso",
                    textColor:""
                },
                {   
                    textLable:"donde se requiera",
                    textColor:""
                },
                {   
                    textLable:"renovaión de aire",
                    textColor:""
                },
            ],
        }
        
    ];
    // const bannerImageNames = ["11a", "22a", "33a", "11a", "22a", "33a"];


    const urltdaImageDemo = "../img/solerpalau/tda/imgDemo/";
    const demoImageNames = ["1", "2", "3", "1", "2", "3"];

    const FrameFan = lazy(
        () => import("@/components/frameScrubber/frameScrubber")
    );

    const itemClasses = {
        base: " py-2 md:py-4 md:px-4 bg-red-500 w-[95%] lg:w-[66%] opacity-95",
        title: "font-normal text-2xl",
        trigger:
            "pl-2 py-2  data-[hover=true]:bg-default-100 pr-4 rounded-lg h-14 flex items-center",
        indicator: "text-medium",
        content: "text-xl px-2",
    };

    return (
        <div className="h-full flex flex-col items-center justify-center ">

            <section className="relative top-0 w-full max-h-[50%] md:max-h-[93vh] lg:max-h-[93vh] py-3 font-size overflow-hidden">
                <div className="h-[50%] md:h-[92%]">
                    <SimpleSlider
                        url={urlImageBanner}
                        imgInfo={bannerImageInfo}
                    />
                </div>
                <div className="bg-[#E61E25]  md:w-98% py-3  flex justify-between items-center rounded-tr-[24px] rounded-bl-[24px]">
                    <div className="ml-4 md:ml-12">
                        <h2 className="text-white text-md md:text-2xl 2xl:text-3xl font-nunito">
                            {" "}
                            ¿Cuál es tu necesidad?{" "}
                        </h2>
                    </div>
                    <div className="mr-4 md:mr-12  ">
                        <Button size="lg" radius="full" className="2xl:text-2xl px-8">
                            Consúltanos
                        </Button>
                    </div>
                </div>
            </section>

            {/* <section className="">
                
            </section> */}

            <section className="flex flex-col min-h-[130vh] md:min-h-full md:flex md:flex-row-reverse w-full h-[110vh] overflow-hidden ">
                <div className="md:mr-16 z-20">
                    <div className="flex flex-col items-center mt-6 lg:mt-16 lg:justify-items-end lg:items-end font-lexend-bold tracking-widest ">
                        <span className="text-lg lg:text-5xl text-midgray font-nunito ">
                            VENTILADOR
                        </span>

                        <h1 className="mt-4 text-4xl  lg:text-[78px] 2xl:text-[100px] leading-none font-nunito-bold text-livered-title">
                            CENTRÍFUGO
                        </h1>

                        <h1 className="text-4xl  lg:text-[78px] 2xl:text-[100px] leading-none  font-nunito-bold text-livered-title">
                            MULTIPALA - TDA
                        </h1>

                        <h1 className="mt-2 text-lg lg:text-[43px] 2xl:text-[60px] lg:mt-2 text-midgray font-nunito ">
                            DE DOBLE ASPIRACIÓN
                        </h1>

                        <div className="mt-2 text-lg lg:text-4xl 2xl:text-5xl lg:mt-4 tracking-normal text-highgray font-lexend-bold">
                            <p className="">
                                Inyección de{" "}
                                <span className="text-livered">
                                    aire limpio
                                </span>{" "}
                            </p>
                            <p>
                                <span className="text-livered"></span>dentro de
                                equipos HVAC
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative max-w-screen  2xl:-left-[16%] lg:-left-[9%] md:-left-[20%] -top-16 md:top-16 -mt-10 z-10 overflow-y-hidde">
                <Image
                        // className="-top-16 left-1/2"
                        alt="Ventilador"
                        className="inline-block w-[310px] lg:w-[420px] 2xl:w-[600px] top-36 left-12"
                        src="../img/solerpalau/tda/SolerPalauTda1.png"
                        width={"100%"}
                    />
                    {/* --- ONDA 1 --------------- */}
                    {/* <Ondas01SVG css="absolute top-[270px] left-[195px] z-10 " /> */}
                    {/* <div className="w-[1500px] absolute rotate-12 -top-[460px] left-[245px] z-20 ">
                        <LottieWave md:bottom-[165px] md:left-[120px]  />
                    </div> */}
                    <div className=" z-20  absolute translate-x-[138px] translate-y-[170px] 2xl:translate-x-[220px] overflow-hidden">
                        <Button
                            className="z-10 bg-livered text-white 2xl:text-2xl"
                            radius="full"
                            size="lg"
                        >
                            Asesoramiento
                        </Button>
                    </div>
                </div>
            </section>

            {/* <VideoScrubber/> */}
            {/* <FrameScrubber /> */}

            <Suspense fallback={<div>Loading</div>}>
                <FrameFan />
            </Suspense>

            <div className="w-9/12  flex flex-row justify-end items-end overflow-hidden">
                <Button
                    className="z-10 bg-livered text-white 2xl:text-2xl"
                    radius="full"
                    size="lg"
                >
                    Manual <Download />
                </Button>
            </div>

            {/* -------------------------Tabla de especificadiones INICIAL------------------------- */}
            {/* <section className="relative text-xl max-w-full ">
                <div className="flex justify-center items-center w-3/4 mx-auto">
                    <Caracteristics />
                </div>
                <Ondas02SVG css="absolute  -z-10 -left-1/3 -top-56 overflow-y-scroll no-scrollbar" />
                // <div className="w-[1500px] absolute -top-[700px]  transform -scale-x-100 -rotate-[25deg] -z-20 ">
                
                // </div> 
                <div className="flex justify-end opacity-30">
                    <Image
                        alt="Otam Logo"
                                        className=""
                                        src="../img/otamlogo.png"
                                        widdiv={250}
                                    />
                </div>
            </section> */}
            {/* 
            <section className="flex flex-col  md:flex md:flex-row-reverse h-[100vh]  ">
                
                <div className="relative max-w-screen ">
                    
                    <Ondas02SVG css="absolute " />


                </div>
            </section> */}

            {/* -------------------------Tabla de especificadiones------------------------- */}
{/* <section className="overflow-hidden"> */}
            <section className="max-w-[100%] 2xl:w-full min-h-[130vh] h-[100%] -mt-10 2xl:mt-20 md:h-[100%] bg-[url('/svg/ondas02.svg')] bg-[center_top_1rem] bg-fit md:bg-top md:bg-fit 2xl:bg-cover bg-no-repeat overflow-hidden">
                {/* <div className=" text-xl max-w-[100%]  bg-cover bg-no-repeat overflow-hidden">
            <div className="relative -z-10 right-[50%] translate-x-[48.5%] -top-10 translate-y-[-5%] ">
                <Ondas02SVG/>
                </div>
                </div> */}
                 <div className="relative w-screen ms-auto">
                    <div
                            className=" mt-20 lg:absolute px-4 z-10
                            top-72 2xl:top-[40vh] 
                            right-16
                            rounded-[42px]
                            lg:w-[400px] 2xl:w-[550px]
                            flex flex-col justify-start items-center bg-white p-1 "
                        >
                            <div className=" flex flex-col justify-center items-center lg:text-3xl text-livered-title py-4 lg:py-16 text-xl 2xl:text-3xl">
                                <h1 className="font-lexend-bold  ">Caudales de inyeccion desde</h1>
                                <h1 className="font-lexend-bold  ">xxxxxx a xxxxxx m3/h</h1>
                                <h1 className="font-lexend-bold  ">y contrapresiones desde</h1>
                                <h1 className="font-lexend-bold  ">xxxx a xxxxx mmCA </h1>

                            </div>
                        </div>
                    </div>

                <div
                    className=" w-[104%] flex flex-col justify-center items-center  lg:w-3/4 mt-20 2xl:mt-[20vh] mx-auto overflow-hidden
                    "
                >
                    <h1 className="text-2xl ml-2 lg:text-4xl 2xl:text-5xl  leading-none  font-nunito-bolder me-auto mb-6 my-2 text-livered-title">
                        CARACTERÍSTICAS TÉCNICAS
                    </h1>

                   
                
                    <Accordion
                        className="h-[70vh] md:h-[55vh] lg:min-h-[75vh] "
                        variant="splitted"
                        itemClasses={itemClasses}
                        selectionMode="multiple"
                    >
                        <AccordionItem
                            key="facil"
                            aria-label=""
                            startContent={
                                <div className="w-[80vw]  -ml-2 md:-ml-2 md:w-[88vw] lg:w-[43vw]  grid grid-cols-4  p-3 lg:p-4 lg:pr-2  bg-orange-500 rounded-xl text-xs md:text-base 2xl:text-xl">
                                    <div className="bg-orange-500 text-white ">
                                        MODELO TSA
                                    </div>
                                    <div className="bg-orange-500 text-white  ">
                                        QMIN[m3/h]
                                    </div>
                                    <div className="bg-orange-500 text-white ">
                                        Ap[mmca]
                                    </div>
                                    <div className="bg-orange-500 text-white ">
                                        Q[m3/h]
                                    </div>
                                </div>
                            }
                            title=""
                        >
                            <div className="w-[96%]  md:w-[96%] xl:w-[94.5%] 2xl:w-[92.5%] -ml-2 mb-1 mx-auto grid grid-cols-4 items-center justify-center gap-y-1 py-4 text-gray-600  rounded-xl text-xs md:text-base 2xl:text-xl bg-gray-300">
                                <div className=" flex md:items-center justify-center  "> TSA 9/4 - 4P </div>
                                <div className=" flex items-center justify-center"> 700 </div>
                                <div className=" flex items-center justify-center"> 38 </div>
                                <div className=" flex items-center justify-center pr-8 md:pr-6 lg:pr-6 "> 1150 </div>
                            </div>

                            <div className="w-[96%] md:w-[96%] xl:w-[94.5%] 2xl:w-[92.5%] -ml-2 my-1 mx-auto grid grid-cols-4 items-center justify-center gap-y-1 py-4 text-gray-200  rounded-xl text-xs md:text-base 2xl:text-xl bg-gray-400">
                                <div className=" flex md:items-center justify-center "> TSA 10/5 - 4P </div>
                                <div className="flex items-center justify-center"> 800 </div>
                                <div className=" flex items-center justify-center"> 48 </div>
                                <div className="flex items-center justify-center pr-8 md:pr-6 lg:pr-6"> 1500 </div>
                            </div>

                            <div className="w-[96%] md:w-[96%] xl:w-[94.5%] 2xl:w-[92.5%] -ml-2 my-1 mx-auto grid grid-cols-4 items-center justify-center gap-y-1 py-4 text-gray-600  rounded-xl text-xs md:text-base 2xl:text-xl bg-gray-300">
                                <div className=" flex items-center justify-center "> TSA 12/6 - 4P </div>
                                <div className="flex items-center justify-center"> 1350 </div>
                                <div className="flex items-center justify-center"> 68 </div>
                                <div className="flex items-center justify-center pr-8 md:pr-6 lg:pr-6"> 2600 </div>
                            </div>
                            <div className="w-[96%] md:w-[96%] xl:w-[94.5%] 2xl:w-[92.5%] -ml-2 my-1 mx-auto grid grid-cols-4 items-center justify-center gap-y-1 py-4 text-gray-200  rounded-xl text-xs md:text-base 2xl:text-xl bg-gray-400">
                                <div className="flex items-center justify-center "> TSA 15/7 - 6P </div>
                                <div className="flex items-center justify-center"> 1400 </div>
                                <div className=" flex items-center justify-center"> 40 </div>
                                <div className=" flex items-center justify-center pr-8 md:pr-6 lg:pr-6"> 3000 </div>
                            </div>
                            <div className="w-[96%] md:w-[96%] xl:w-[94.5%] 2xl:w-[92.5%] -ml-2 my-1 mx-auto grid grid-cols-4 items-center justify-center gap-y-1 py-4 text-gray-600  rounded-xl text-xs md:text-base 2xl:text-xl bg-gray-300">
                                <div className=" flex items-center justify-center "> TSA 15/7 - 4P </div>
                                <div className=" flex items-center justify-center"> 2200 </div>
                                <div className=" flex items-center justify-center"> 95 </div>
                                <div className="flex items-center justify-center pr-8 md:pr-6 lg:pr-6"> 5000 </div>
                            </div>
                            <div className="w-[96%] md:w-[96%] xl:w-[94.5%] 2xl:w-[92.5%] -ml-2 mt-1 mx-auto grid grid-cols-4 items-center justify-center gap-y-1 py-4 text-gray-200  rounded-xl text-xs md:text-base 2xl:text-xl bg-gray-400">
                                <div className=" flex items-center justify-center "> TSA 18/9 - 6P </div>
                                <div className="flex items-center justify-center"> 2300 </div>
                                <div className="flex items-center justify-center"> 58 </div>
                                <div className=" flex items-center justify-center pr-8 md:pr-6 lg:pr-6"> 5500 </div>
                            </div>

                            {/* </div> */}

                            {/* <div className="w-[96%] grid grid-cols-4 items-center gap-y-1">
                                    <div className="bg-gray-300 p-4 flex items-center justify-center">Fila 1</div>
                                    <div className="bg-gray-300 p-4 flex items-center justify-center">Fila 2</div>
                                    <div className="bg-gray-300 p-4 flex items-center justify-center">Fila 3</div>
                                    <div className="bg-gray-300 p-4 flex items-center justify-center">Fila 4</div>

                                    <div className="bg-gray-400 p-4 flex items-center justify-center">Fila 1</div>
                                    <div className="bg-gray-400 p-4 flex items-center justify-center">Fila 2</div>
                                    <div className="bg-gray-400 p-4 flex items-center justify-center">Fila 3</div>
                                    <div className="bg-gray-400 p-4 flex items-center justify-center">Fila 4</div>

                                    <div className="bg-gray-400 p-4 flex items-center justify-center">Fila 1</div>
                                    <div className="bg-gray-400 p-4 flex items-center justify-center">Fila 2</div>
                                    <div className="bg-gray-400 p-4 flex items-center justify-center">Fila 3</div>
                                    <div className="bg-gray-400 p-4 flex items-center justify-center">Fila 4</div>

                                    <div className="bg-gray-400 p-4 flex items-center justify-center">Fila 1</div>
                                    <div className="bg-gray-400 p-4 flex items-center justify-center">Fila 2</div>
                                    <div className="bg-gray-400 p-4 flex items-center justify-center">Fila 3</div>
                                    <div className="bg-gray-400 p-4 flex items-center justify-center">Fila 4</div>

                                    <div className="bg-gray-400 p-4 flex items-center justify-center">Fila 1</div>
                                    <div className="bg-gray-400 p-4 flex items-center justify-center">Fila 2</div>
                                    <div className="bg-gray-400 p-4 flex items-center justify-center">Fila 3</div>
                                    <div className="bg-gray-400 p-4 flex items-center justify-center">Fila 4</div>

                                    <div className="bg-gray-400 p-4 flex items-center justify-center">Fila 1</div>
                                    <div className="bg-gray-400 p-4 flex items-center justify-center">Fila 2</div>
                                    <div className="bg-gray-400 p-4 flex items-center justify-center">Fila 3</div>
                                    <div className="bg-gray-400 p-4 flex items-center justify-center">Fila 4</div>
                                </div> */}

                            {/* {defaultContent} */}
                        </AccordionItem>
                    </Accordion>

                    

                    <div className="ms-auto mt-0">
                        <div className="ms-auto mt-2 -mr-24 opacity-30">
                            <Image
                                alt="Otam Logo"
                                className=""
                                src="../img/otamlogo.png"
                                width={350}
                            />
                        </div>
                        <div className="ms-auto lg:-mr-8">
                            <Image
                                alt="Electroterma Logo"
                                className=""
                                src="../img/electrotermalogoletras.png"
                                width={390}
                            />
                        </div>
                    </div>
                </div>
            </section>
{/* </section> */}
            <section className="h-[60%] lg:h-[70%] 2xl:h-[90%] 2xl:w-[74%] mb-6 bg-inherit z-10 bg-none overflow-hidden">
                <div className="flex flex-col justify-center items-center t w-full md:w-[1200px] 2xl:w-full m-auto ">
                    {/* <div className="ms-auto flex items-center">
                        <Image
                            alt="Electroterma Logo"
                            className=""
                            src="../img/electrotermalogoletras.png"
                            widdiv={250}
                        />
                    </div> */}

                    <div className="">
                        <SimpleSliderDemoImages
                            url={urltdaImageDemo}
                            fileName={demoImageNames}
                        />
                    </div>
                    <div className="flex justify-bettween items-center mt-2 w-full">
                        <div className="me-auto flex justify-start items-start ">
                            <Image
                                alt="Otam Logo"
                                className="scale-1"
                                src="../img/otamlogo.png"
                                width={200}
                            />
                        </div>
                        <div className="w-1/2 float-right flex justify-end items-end pr-10 md:pr-0">
                            <Button
                                className="  z-10 bg-livered text-white 2xl:text-2xl"
                                radius="full"
                                size="lg"
                            >
                                Asesoramiento
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
