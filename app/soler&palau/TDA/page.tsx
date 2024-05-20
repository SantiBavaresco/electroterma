"use client";
import { title } from "@/components/primitives";
// import VideoScrollPlayer from "@/components/videoplayer/videoplayer";
// import VideoScrubber from "@/components/videoScrubber/videoScrubber";
import FrameScrubber from "@/components/frameScrubber/frameScrubber";

import { lazy, Suspense, useState, useEffect } from "react";

import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import NextLink from "next/link";


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
import { DiferencialMaterialGalvanizado } from "@/components/diferenciales/diferencialMaterialGalvanizado";
import { DiferencialMultiposicion } from "@/components/diferenciales/diferencialMultiposicion";
import { DiferencialVolumenBajo } from "@/components/diferenciales/diferencialVolumenBajo";
import { DiferencialStockPermanente } from "@/components/diferenciales/diferencialStockPermanente";
import CardDisplay from "@/components/navbar/cardDisplay";
import { VinietaRojaSVG } from "@/public/svg/vinietaRoja";


interface ItemsNavbar {
    key: string;
    label: string[];
    labelShort: string;
    img: string;
    href: string;
}

export default function TDAPage() {

    const itemsNav: ItemsNavbar[] = [
        {
            key: "first",
            label: ["Ventilador Centrifigo", "Autolimitantes - RSL"],
            labelShort: "RSL",
            img: "../img/navbar/NavBarRLS1SolerPalau.png",
            href: "/soler&palau/RSL",
        },
        {
            key: "copy",
            label: ["Ventilador Centrifigo", "Multipala - TSA"],
            labelShort: "TSA",
            img: "../img/navbar/NavBarTSA1SolerPalau.png",
            href: "/soler&palau/TSA",
        },
        {
            key: "edit",
            label: ["Ventilador Centrifigo - TDA",],
            labelShort: "TDA",
            img: "../img/navbar/NavBarTDA1SolerPalau.png",
            href: "/soler&palau/TDA",
        },
        {
            key: "last",
            label: ["Habitat"],
            labelShort: "Habitat",
            img: "../img/navbar/NavBarHabitat1SolerPalau.png",
            href: "/soler&palau/habitat",
        },
    ];

    const [BigScreen, setBigScreen] = useState(false);

    useEffect(() => {
        const handler = (e:any) => setBigScreen(e.matches);
        const mediaQuery = window.matchMedia('(min-width: 768px)');

        mediaQuery.addEventListener('change', handler);
        setBigScreen(mediaQuery.matches);

        return () => {
        mediaQuery.removeEventListener('change', handler);
        };
    }, []);

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

            <section className="relative top-0 w-full max-h-[50%] md:max-h-[93vh] lg:max-h-[93vh] py-0 font-size overflow-hidden">
                <div className="h-[50%] md:h-[92%]">
                    <SimpleSlider
                        url={urlImageBanner}
                        imgInfo={bannerImageInfo}
                    />
                </div>
                <div className="bg-[#E61E25]  md:w-98% py-3  flex justify-between items-center rounded-tr-[24px] rounded-bl-[24px]">
                    <div className="ml-4 md:ml-12">
                        <h2 className="text-white text-lg md:text-2xl 2xl:text-3xl font-nunito">
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
              {/* <section className="flex flex-col items-start w-3/4 md:ml-10 mt-10 mb-8 justify-start">
                <div className=" ">
                        <Image
                            alt="Otam Logo"
                            className=""
                            src="../img/otamlogo.png"
                            width={200}
                        />
                        <span className="ml-0 relative -top-4 text-xs">Distribuidor en Argentina</span>
                </div>
                
            </section> */}
            
            <section className="mr-auto ml-6  md:mr-0 md:w-[90%] md:ml-10 md:mt-10 overflow-hidden">
                
                <div className="left-0 w-[120px] md:w-[200px] xl:top-2 xl:left-16 2xl:top-2 2xl:mb-10 2xl:-left-10">
                                <Image
                                    alt="Otam Logo"
                                    src="../img/otamlogo.png"
                                    width="100%"
                                />
                                <span className="ml-0 relative -top-4 text-[8px] md:text-xs">Distribuidor en Argentina</span>
                        </div>
                </section>

            {BigScreen ? 
            // ----------------------- DESKTOP -----------------------
            <> 
             <section className="flex flex-col items-start min-h-[110vh] overflow-hidden
                md:min-h-full md:flex md:flex-row-reverse 
                lg:w-[50%] 
                xl:justify-start xl:w-[100%] xl:ml-auto 
                2xl:justify-start 2xl:w-[90vw] h-[90vh] 2xl:-mt-32   ">
                <div className="md:m-0 z-20 xl:mr-12 2xl:ml-20 2xl:mt-28 lg:w-[50%] 2xl:w-[60%]">
                    <div className="flex flex-col items-center mt-6 lg:mt-10 2xl:mt-0 lg:justify-items-end  lg:items-start font-lexend-bold tracking-widest ">

                        <span className="relative text-lg lg:text-5xl 2xl:text-[55px] text-[#9D9D9C] font-nunito ">
                            <div className="absolute top-0 -left-8 mt-1 md:mt-2 ">
                                <VinietaRojaSVG css=" h-[20px] w-[20px] md:h-[50px] md:h-[30px] lg:h-[40px] lg:w-[30px]" />
                                
                            </div>
                            VENTILADOR
                            

                        </span>

                        <h1 className="mt-2 text-4xl lg:mt-6 lg:text-[78px] 2xl:text-[90px] 2xl:mt-8 leading-none font-nunito-bold text-livered-title">
                            CENTRÍFUGO
                        </h1>

                        <h1 className="mt-2 text-4xl lg:mt-3 lg:text-[78px] 2xl:text-[90px] 2xl:mt-4  leading-none  font-nunito-bold text-livered-title">
                            MULTIPALA - TDA
                        </h1>

                        <h1 className="mt-2 text-lg lg:mt-6  lg:text-[43px] 2xl:text-[55px]  2xl:mt-6  text-[#9D9D9C] font-nunito ">
                            DE DOBLE ASPIRACIÓN
                        </h1>

                        <div className="mt-2 text-lg lg:text-4xl 2xl:text-4xl 2xl:mt-6 tracking-normal text-[#4C4B4B] font-lexend-bold">
                            <p className="lg:mt-3 2xl:mt-4">
                                Inyección de{" "}
                                <span className="text-livered">
                                    aire limpio
                                </span>{" "}
                            </p>
                            <p className="lg:mt-2 2xlmt-4">
                                <span className="text-livered "></span>dentro de
                                equipos HVAC
                            </p>
                        </div>
                        {/* z-20  absolute translate-x-[70%] translate-y-[160px]
                        lg:translate-y-[60px] lg:translate-x-[190px] 
                        2xl:translate-y-[90px] 2xl:translate-x-[220px]  */}
                        <div className="mt-10 2xl:mt-10  w-full flex justify-center md:justify-end
                        
                        overflow-hidden">
                        <Button
                            className="z-10 bg-livered font-nunito text-white 2xl:text-2xl 2xl:mr-3"
                            radius="full"
                            size="lg"
                        >
                            Asesoramiento
                        </Button>
                    </div>
                    </div>
                </div>
                <div className="relative max-w-screen -top-16 -mt-10 z-10 overflow-y-hidde
                    md:-left-[20%] md:top-16
                    lg:-left-[6%] lg:-top-16
                    2xl:left-[0%] 2xl:top-0 ">
                <Image
                        // className="-top-16 left-1/2"
                        alt="Ventilador"
                        className="inline-block w-[310px] lg:w-[520px] 2xl:w-[650px] 
                            top-36 left-4 
                            md:left-12
                            lg:left-2
                            lg:top-[65px]
                            2xl:top-[70px]   "
                        src="../img/solerpalau/tda/SolerPalauTda0.png"
                        width={"100%"}
                    />
                {/* <div className="absolute xl:top-2 2xl:top-2 xl:left-16 2xl:-left-10">
                        <Image
                            alt="Otam Logo"
                            src="../img/otamlogo.png"
                            width={200}
                        />
                        <span className="ml-0 relative -top-4 text-xs">Distribuidor en Argentina</span>
                </div> */}
                    {/* --- ONDA 1 --------------- */}
                    {/* <Ondas01SVG css="absolute top-[270px] left-[195px] z-10 " /> */}
                    {/* <div className="w-[1500px] absolute rotate-12 -top-[460px] left-[245px] z-20 ">
                        <LottieWave md:bottom-[165px] md:left-[120px]  />
                    </div> */}
                    
                </div>
            </section>
            </> 
            :// ----------------------- MOBILE -----------------------
            <>
                <section className="w-[80vw] mx-6">
                    <span className=" text-[20px] text-[#9D9D9C] font-nunito ">
                        
                        VENTILADOR
                    </span>

                    <h1 className="relative mt-2 text-[35px] leading-none font-nunito-bolder text-livered-title">
                        <div className="absolute top-0 -left-8 mt-1 md:mt-2 ">
                            <VinietaRojaSVG css=" h-[35px] w-[35px] " />
                        </div>
                        CENTRÍFUGO
                    </h1>

                    <h1 className="mt-2 text-[35px] leading-none  font-nunito-bolder text-livered-title">
                        MULTIPALA - TDA
                    </h1>

                    <h1 className=" text-[18px]  text-[#9D9D9C] font-nunito ">
                        DE DOBLE ASPIRACIÓN
                    </h1>
                </section>

                <section className="w-[80vw] mx-6 flex items-start min-h-[100%] overflow-hidden h-[100%] ">
                    <div className="z-20 ">
                        <div className="min-w-1/2 flex flex-col items-center xm:mt-6 font-lexend-bold tracking-widest ">
                            <div className="mt-10 text-[12px] xm:text-[15px] tracking-normal text-[#4C4B4B] font-lexend-bold">
                                <p className="">
                                Inyección de
                                </p>
                                <p className="">
                                    <span className="text-livered ">aire limpio</span>

                                </p>
                                <p className="">
                                    dentro de equipos HVAC{" "}
                                    {/* <span className="text-livered ">aire limpio.</span> */}

                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="relative max-w-screen z-10 overflow-y-hidde">
                        <Image
                            // className="-top-16 left-1/2"
                            alt="Ventilador"
                            className="inline-block w-[310px] top-0  left-4 "
                            src="../img/solerpalau/tda/SolerPalauTda0.png"
                            width={"100%"}
                        />
                        <div className="mt-2 ml-auto w-full flex justify-end overflow-hidden">
                            <Button
                                className="z-10 bg-livered font-nunito text-white ml-auto  "
                                radius="full"
                                size="sm"
                            >
                                Asesoramiento
                            </Button>
                        </div>
                        
                    </div>
                </section>

              
            </>}
    {/* --------------------------- FIN MOBILE --------------------------- */}

           

            {/* <VideoScrubber/> */}
            {/* <FrameScrubber /> */}

            <Suspense fallback={<div>Loading</div>}>
                <FrameFan />
            </Suspense>

            {/* <section className="mt-32 mb-10 mx-auto lg:w-[80%] flex justify-end lg:items-end items-center">
                <div className="flex flex-col gap-4">
                    <DiferencialMaterialGalvanizado/>
                    <DiferencialMultiposicion/>
                    <DiferencialVolumenBajo/>
                    <DiferencialStockPermanente/>
                </div>
            </section> */}

            <div className="w-9/12  flex flex-row justify-end items-end overflow-hidden">
                <Button
                    className="z-10 bg-livered text-white 2xl:text-2xl md:mr-3"
                    radius="full"
                    size="lg"
                >
                    Manual <Download />
                </Button>
            </div>

           

            {/* -------------------------Tabla de especificadiones------------------------- */}
{/* <section className="overflow-hidden"> */}
            <section className="max-w-[100%] 2xl:w-full min-h-[110vh] h-[100%] mt-0 md:-mt-10  2xl:mt-0 md:h-[100%] bg-[url('/svg/ondas02.svg')] 
            bg-[center_top_1rem] bg-fit md:bg-top md:bg-fit 2xl:bg-[center_1rem] 2xl:bg-cover bg-no-repeat overflow-hidden">
                {/* <div className=" text-xl max-w-[100%]  bg-cover bg-no-repeat overflow-hidden">
            <div className="relative -z-10 right-[50%] translate-x-[48.5%] -top-10 translate-y-[-5%] ">
                <Ondas02SVG/>
                </div>
                </div> */}
                 <div className="relative w-screen ms-auto">
                    <div
                            className="my-10 md:mt-20 lg:absolute px-4 z-10
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
                    className=" w-[104%] flex flex-col justify-center items-center  lg:w-3/4 md:mt-20 2xl:mt-[20vh] mx-auto overflow-hidden
                    "
                >
                    <h1 className="text-2xl ml-2 lg:text-4xl 2xl:text-5xl  leading-none  font-nunito-bolder me-auto mb-6 my-2 text-livered-title">
                        CARACTERÍSTICAS TÉCNICAS
                    </h1>

                   
                
                    <Accordion
                        className="h-[70vh] md:h-[55vh] lg:min-h-[75vh] 2xl:min-h-[10vh] "
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


                    <div className="">
                        <SimpleSliderDemoImages
                            url={urltdaImageDemo}
                            fileName={demoImageNames}
                        />
                    </div>
                    <div className="flex justify-bettween items-center mt-10 md:mt-2 w-full">
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
            <section className="max-w-[80%] w-full h-[100%] z-10 my-10">

            <h1 className="text-2xl ml-2 lg:text-4xl 2xl:text-5xl text-center leading-none  font-nunito-bolder me-auto mb-6 my-2 text-livered-title">
                        Otros productos de Soler & Palau
                    </h1>
                <div className="flex justify-center gap-2 ">
                    
                    
                {itemsNav?.map((item) => (
                    // <p key={item.key}>{item.label}</p>
                    <NextLink
                                                        className=""
                                                        color="foreground"
                                                        href={item.href}
                                                        key={item.key}
                                                    >
                        <CardDisplay data={item}/>
                    </NextLink>
                    ))}           
                </div>

            </section>
        </div>
    );
}
