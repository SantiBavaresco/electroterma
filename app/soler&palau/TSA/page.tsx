"use client";
import { title } from "@/components/primitives";
import VideoScrollPlayer from "@/components/videoplayer/videoplayer";
import VideoScrubber from "@/components/videoScrubber/videoScrubber";
import FrameScrubber from "@/components/frameScrubber/frameScrubber";
// import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.cjs.jsx';


import { lazy, Suspense, useState, useEffect } from "react";

import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import NextLink from "next/link";


import { Accordion, AccordionItem } from "@nextui-org/react";

import { Chip } from "@nextui-org/chip";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Ondas01SVG } from "@/public/svg/ondas01svg";
import { Ondas02SVG } from "@/public/svg/ondas02svg";
import { Ondas03SVG } from "@/public/svg/ondas03svg";


import { ConstruccionDuradera } from "@/public/svg/construccionDuradera";
import { EficienciaEnergetica } from "@/public/svg/eficienciaEnergetica";
import { FacilInstalacion } from "@/public/svg/facilInstalacion";
import { VersatilidadAplicacion } from "@/public/svg/versatilidadAplicacion";

import { IoLogoInstagram } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";

import { Download } from "@/public/svg/download";
import SimpleSlider from "@/components/imgslider/slickSlider";
import SimpleSliderDemoImages from "@/components/imgslider/simpleSliderDemoImages";
import { Reveal } from "@/components/revealFramemotion";
import { DiferencialMaterialGalvanizado } from "@/components/diferenciales/diferencialMaterialGalvanizado";
import { DiferencialMultiposicion } from "@/components/diferenciales/diferencialMultiposicion";
import { DiferencialVolumenBajo } from "@/components/diferenciales/diferencialVolumenBajo";
import { DiferencialStockPermanente } from "@/components/diferenciales/diferencialStockPermanente";
import CardDisplay from "@/components/navbar/cardDisplay";
import { VinietaNaranjaSVG } from "@/public/svg/vinietaNaranja";
import ScrollVideoPlayer from "@/components/videoplayer/scrollVideo";

import { TsaAuraSVG } from "@/public/svg/tsaAuraSvg";
import { Ondas04SVG } from "@/public/svg/ondas04svg";


interface ItemsNavbar {
    key: string;
    label: string[];
    labelShort: string;
    img: string;
    href: string;
}

export default function RLSPage() {

    const itemsNav: ItemsNavbar[] = [
        {
            key: "first",
            label: ["Ventilador Centrífugo", "Autolimitante - RLS"],
            labelShort: "RLS",
            img: "../img/navbar/NavBarRLS1SolerPalau.png",
            href: "/soler&palau/RLS",
        },
        {
            key: "copy",
            label: ["Ventilador Centrífugo", "Multipala - TSA"],
            labelShort: "TSA",
            img: "../img/navbar/NavBarTSA1SolerPalau.png",
            
            href: "/soler&palau/TSA",
        },
        {
            key: "edit",
            label: ["Ventilador ","Centrífugo TDA"],
            labelShort: "TDA",
            img: "../img/navbar/NavBarTDA1SolerPalau.png",
            href: "/soler&palau/TDA",
        },
        {
            key: "last",
            label: ["Hábitat"],
            labelShort: "Hábitat",
            img: "../img/navbar/NavBarHabitat1SolerPalau.png",
            href: "/soler&palau/habitat",
        },
    ];

    const handleEmailClick = () => {
        const email = 'info@electroterma.com.ar';
        const subject = 'Consulta sobre equipamiento';
        const body = 'Hola! Me gustaria hacer una consulta sobre equipamiento de Electroterma';
    
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    
        // window.location.href = mailtoLink;
        window.open(mailtoLink, '_blank');
    };

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

    const FrameFanWeb = lazy(
        () => import("@/components/frameScrubber/frameScrubberWeb")
    );


    return (
        <div className="h-full flex flex-col items-center justify-center  ">

            <section className="relative top-0 w-full max-h-[50%] md:max-h-[93%] lg:max-h-[93%] py-0 font-size overflow-hidden">
                <div className="h-[50%] md:h-[92%]">
                    <SimpleSlider
                        url={urlImageBanner}
                        imgInfo={bannerImageInfo}
                    />
                </div>
                <div className="bg-[#E61E25]  md:w-98% py-3  flex justify-between items-center rounded-tr-[24px] rounded-bl-[24px]">
                    <div className="ml-[35px] md:ml-12">
                        <h2 className="text-white text-xs xm:text-base md:text-2xl 2xl:text-3xl font-nunito-bold">
                            {" "}
                            ¿Cuál es tu necesidad?{" "}
                        </h2>
                    </div>
                    <div className="mr-4 md:mr-12  ">
                        <Button size={BigScreen ? "lg" : "sm"} radius="full" className="2xl:text-2xl lg:px-8 mr-[23px] lg:mr-0" onClick={handleEmailClick}>
                            Consultanos
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
            
            <section className="z-0 mr-auto ml-[45px]  md:mr-0 md:w-[90%] md:ml-10 md:mt-10 overflow-hidden">
                
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
                <section className="z-10 flex flex-row justify-start items-start min-h-[100%] overflow-hidden
                    
                    pl-10
                    h-[95%]
                    w-[100%]
                    pb-10
                    
                    ml-auto
                    
                      ">
                    <div className="z-20 ml-[3%] w-[100%]  ">
                        <div className="flex flex-col justify-items-end w-full items-start mt-10
                             font-lexend-bold tracking-widest gap-[0.2vw] ">

                            <span className=" relative flex  justify-center items-center h-full
                                "
                                // text-xl lg:text-2xl xl:text-5xl 2xl:text-[51px] 3xl:text-[61px] text-[#9D9D9C] font-nunito 
                            >
                                <div className="relative -left-10 top-0  ">
                                    <VinietaNaranjaSVG css=" h-[10px] w-[10px] md:h-[50px] md:h-[30px] lg:h-[40px] lg:w-[30px]" />
                                </div>
                                <h1 className="absolute left-0 text-[#9D9D9C] font-nunito
                                    text-[3.2vw]
                                "> 
                                    VENTILADOR 
                                </h1>
                            </span>

                            <span><h1 
                                className="mt-2 lg:mt-3 2xl:mt-4  leading-none  font-nunito-bolder text-livered-title text-[5.0vw] xl:text-[5.35vw]"

                            // className="mt-2 lg:mt-6 text-3xl lg:text-5xl  xl:text-[63px] 2xl:text-[75px] 3xl:text-[95px] 2xl:mt-8 leading-none font-nunito-bolder text-livered-title"
                            >
                                CENTRÍFUGO
                            </h1>

                            <h1 
                                className="mt-2  leading-none  font-nunito-bolder text-livered-title text-[5.0vw] xl:text-[5.35vw]"
                            // className="mt-2 w-full lg:mt-3 text-3xl lg:text-[44px] xl:text-[63px] 2xl:text-[75px] 3xl:text-[95px] 2xl:mt-4  leading-none  font-nunito-bolder text-livered-title"
                            >
                                Multipala - TSA
                            </h1>
                            </span>

                            <h1 className="text-[#9D9D9C] font-nunito
                                    text-[3.2vw] ">
                            DE SIMPLE ASPIRACIÓN
                            </h1>

                            {/* text-xl lg:text-4xl 2xl:text-[43px] */}
                            <div className="mt-2   tracking-normal text-[#4C4B4B] font-lexend-bold
                                text-[2.5vw]
                            ">
                                <p className="">
                                    Sistema de
                                </p>
                                <p className="">
                                    <span className="text-livered ">inyección</span>
                                    {" "}y{" "}
                                    <span className="text-livered ">extracción</span>

                                </p>
                                <p className="">
                                    de{" "}
                                    <span className="text-livered ">aire limpio.</span>

                                </p>
                            </div>
                            {/* z-20  absolute translate-x-[70%] translate-y-[160px]
                            lg:translate-y-[60px] lg:translate-x-[190px] 
                            2xl:translate-y-[90px] 2xl:translate-x-[220px]  */}
                            
                        </div>
                    </div>
                    <div className="relative mr-[0vw] max-w-screen w-[50%] -mt-10 z-10 overflow-y-hidde
                          
                        -left-[10%] -top-2
                        md:top-6
                        lg:-left-[6%] lg:-top-2
                        2xl:-left-[6%] 2xl:top-0 "
                        
                        >
{/* -top-16 -left-6 */}
                    <Image
                            // className="-top-16 left-1/2"
                            alt="Ventilador"
                            className=" w-[520px] md:w-[100%]  top-[75px] lg:top-[65px] 2xl:top-[70px] left-4 md:left-12"
                            src="../img/solerpalau/tsa/SolerPalauTsa1.png"
                            width={"100%"}
                        />
                        
                        
                    </div>
                    </section>

                    <section className="w-full px-[5%] flex justify-between 
                    ">
                        {/* text-[13px] xl:text-2xl  2xl:text-3xl */}

                        
                        <div className="w-[40%] 3xl:w-[40%] ml-auto flex justify-end md:justify-center
                            
                            overflow-hidden">
                             <a href="https://wa.me/5492236356756?text=Hola,%20visite%20tu%20pagina%20web%20y%20me%20gustaria%20mas%20informacion." 
                                target="_blank" rel="noopener noreferrer">
                            <Button
                                className="z-10 mt-4 bg-livered font-nunito text-white 3xl:ml-32 2xl:text-2xl"
                                radius="full"
                                size={BigScreen ? "lg" : "sm"}
                                href="https://wa.me/5492236356756?text=Hola,%20visite%20tu%20pagina%20web%20y%20me%20gustaria%20mas%20informacion." target="_blank"
                            >
                                <div className="absolute rounded-full left-0 z-20 p-3   shadow-r-xl shadow-[rgba(29,29,27,0.24)] border- border-gray-200 
                                    bg-gradient-to-r from-[#EF771CE5] to-[#E80303]
                                    group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-[#fe694f]
                                    group-active:bg-gradient-to-r group-active:from-[#f37a7ae5] group-active:to-[#FFFFFF]
                                "> 
                                    <BsWhatsapp className=" text-white  group-active:text-livered p- lg:text-2xl" /> </div>
                                <span className="ml-6 lg:ml-10">Asesoramiento</span>
                            </Button>
                            </a>
                            

                        </div>

                    </section>
                    <section className="h-[90vh] w-[99vw] lg:min-h-[90vh] xl:h-[80vh] 2xl:h-[80vh] px-10 overflow-hidden ">
                    <div className="flex flex-col-1 ">
                        <div className="relative md:w-1/2 ">
                            <Image
                                // className="-top-16 left-1/2"
                                alt="Ventilador"
                                className="inline-block 
                                    w-[47vw]
                                    "
                                src="../img/solerpalau/tsa/SolerPalauTsa2.png"
                                width={"100%"}
                            />

                            <TsaAuraSVG css="absolute 
                                max-w-[300px] lg:max-h-[300px]
                                -top-[120px] left-[70px] 

                                lg:top-[100px] lg:left-[110px] 
                                lg:max-w-[440px] lg:max-h-[440px]
                                xl:top-[80px] xl:left-[100px] 
                                xl:max-w-[500px] xl:max-h-[500px]
                                2xl:top-[120px] 2xl:left-[150px] 
                                2xl:max-w-[650px] 2xl:max-h-[650px]
                                "/>
                            <Ondas04SVG css="absolute 
                                max-w-[700px] lg:max-h-[170px]
                                -top-[10px] left-[170px] 
                                lg:top-[175px] lg:left-[130px] 
                                lg:max-w-[1300px] lg:max-h-[300px]
                                xl:top-[185px] xl:left-[165px] 
                                xl:max-w-[1300px] xl:max-h-[300px
                                2xl:top-[250px] 2xl:left-[370px]
                                2xl:max-w-[1850px] 2xl:max-h-[650px]
                                "/>
                        </div>
                        <div className="w-full md:w-1/2">
                            <span className="flex gap-1 flex-col items-center align-center justify-center lg:-mt-10 2xl:mt-0">
                                <div className=" flex flex-col justify-center items-center lg:text-2xl text-livered-title py-4 lg:py-16 text-xl 2xl:text-3xl">
                                    <h1 className="font-lexend ">Caudales de inyeccion </h1>
                                    <h1 >desde <span className="font-lexend-bold  ">700 a 9000 m3/h</span></h1>
                                    <h1 className="font-lexend ">y contrapresiones </h1>
                                    <h1 className="font-lexend-bold  ">de 20 a 100 mmCA </h1>

                                </div>
                                <div className="flex flex-col space-y-4 items-center mt-0 max-h-10 ">
                                    <DiferencialMaterialGalvanizado size={70} customWith={10} />
                                    <DiferencialMultiposicion size={70} customWith={250} />
                                    <DiferencialVolumenBajo size={70} customWith={150} />
                                    <DiferencialStockPermanente size={70} customWith={250} />
                                </div>
                            </span>
                        </div>
                    
                
                    </div>
                </section>
                </>
            :
            // ----------------------- MOBILE -----------------------
            <>
                <section className="w-[80vw] mx-6">
                    
                    <span className="relative text-[20px] text-[#9D9D9C] font-nunito ">
                        <div className="absolute top-0 -left-6 mt-1 md:mt-2 ">
                            <VinietaNaranjaSVG css=" h-[20px] w-[20px] " />
                        </div>
                        VENTILADOR
                        
                    </span>

                    <h1 className="relative mt-2 text-[29px] xm:text-[35px] leading-none font-nunito-bolder text-livered-title">
                        
                        CENTRÍFUGO
                    </h1>

                    <h1 className="mt-2 text-[29px] xm:text-[35px] leading-none  font-nunito-bolder text-livered-title">
                        MULTIPALA - TSA
                    </h1>

                    <h1 className=" text-[18px]  text-[#9D9D9C] font-nunito ">
                        DE SIMPLE ASPIRACIÓN
                    </h1>
                </section>

                <section className="w-[80vw] mx-6 flex items-start min-h-[100%] overflow-hidden h-[100%] ">
                    <div className="z-20 ">
                        <div className="min-w-1/2 flex flex-col items-center xm:mt-6 font-lexend-bold tracking-widest ">
                            <div className="mt-10 text-[12px] xm:text-[15px] tracking-normal text-[#4C4B4B] font-lexend-bold">
                                <p className="">
                                    Sistema de
                                </p>
                                <p className="">
                                    <span className="text-livered ">inyección</span>
                                    {" "}y{" "}
                                    <span className="text-livered ">extracción</span>

                                </p>
                                <p className="">
                                    de{" "}
                                    <span className="text-livered ">aire limpio.</span>

                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="relative max-w-screen z-10 overflow-y-hidde">
                        <Image
                            // className="-top-16 left-1/2"
                            alt="Ventilador"
                            className="inline-block w-[310px] top-0  left-4 "
                            src="../img/solerpalau/tsa/SolerPalauTsa1.png"
                            width={"100%"}
                        />
                        <div className="mt-2 ml-auto w-full flex justify-end overflow-hidden">
                        <a href="https://wa.me/5492236356756?text=Hola,%20visite%20tu%20pagina%20web%20y%20me%20gustaria%20mas%20informacion." 
                                target="_blank" rel="noopener noreferrer">
                            <Button
                                className="z-10 bg-livered font-nunito text-white ml-auto  "
                                radius="full"
                                size="sm"
                                href="https://wa.me/5492236356756?text=Hola,%20visite%20tu%20pagina%20web%20y%20me%20gustaria%20mas%20informacion." target="_blank"
                            >
                                <div className="absolute rounded-full left-0 z-20 p-3   shadow-r-xl shadow-[rgba(29,29,27,0.24)] border- border-gray-200 
                                    bg-gradient-to-r from-[#EF771CE5] to-[#E80303]
                                    group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-[#fe694f]
                                    group-active:bg-gradient-to-r group-active:from-[#f37a7ae5] group-active:to-[#FFFFFF]
                                "> 
                                    <BsWhatsapp className=" text-white  group-active:text-livered p- lg:text-2xl" /> </div>
                                <span className="ml-6 lg:ml-10">Asesoramiento</span>
                            </Button>
                            </a>
                        </div>
                        
                    </div>
                </section>

                <section className="h-[90vh] w-[99vw] overflow-hidden ">
                    <div className="flex flex-col-1 ">
                        <div className="relative w-1/2 ">
                            <Image
                                // className="-top-16 left-1/2"
                                alt="Ventilador"
                                className="inline-block 
                                    w-[47vw]
                                    "
                                src="../img/solerpalau/tsa/SolerPalauTsa2.png"
                                width={"100%"}
                            />

                            <TsaAuraSVG css="absolute 
                                w-[47vw]
                                max-w-[300px] 
                                -top-[120px] left-[0px] 

                               
                                "/>
                            <Ondas04SVG css="absolute 
                                max-w-[700px] 
                                -top-[10px] left-[0px] 
                               
                                "/>
                        </div>

                        <div className="w-1/2">
                            <span className="flex gap-1 flex-col items-center align-center justify-center ">
                                <div className=" flex flex-col justify-center items-center text-sm text-livered-title py-4 ">
                                    <h1 className="font-lexend ">Caudales de inyeccion </h1>
                                    <h1 >desde <span className="font-lexend-bold  ">700 a 9000 m3/h</span></h1>
                                    <h1 className="font-lexend ">y contrapresiones </h1>
                                    <h1 className="font-lexend-bold  ">de 20 a 100 mmCA </h1>

                                </div>
                                <div className="flex flex-col space-y-4 items-center mt-0 max-h-10 ">
                                    <DiferencialMaterialGalvanizado size={70} customWith={10} />
                                    <DiferencialMultiposicion size={70} customWith={250} />
                                    <DiferencialVolumenBajo size={70} customWith={150} />
                                    <DiferencialStockPermanente size={50} customWith={250} />
                                </div>
                            </span>
                        </div>
                    
                
                    </div>
                </section>

               
            </>}
    {/* --------------------------- FIN MOBILE --------------------------- */}


            {/* <ScrollVideoPlayer/> */}

            {/* <VideoScrollPlayer/> */}
            {/* <FrameScrubber /> */}
            
    {/* --------------------------- VIDEO SCROLL --------------------------- */}
        <>
            {BigScreen ? 
                <>   {/* ----- Web ----- */}
                    {/* <VideoScrubber/> */}
                    
                    {/* <ScrollyVideo src="../img/solerpalau/rls/video/original.mkv" transitionSpeed={1} /> */}
                    {/* <ScrollVideoPlayer/> */}
                    {/* <VideoScrollPlayer/> */}
                    <Suspense fallback={<div>Loading</div>}>
                        <FrameFanWeb />
                    </Suspense>
                </> 
                
                : <> {/* ----- Mobile ----- */}

                    <Suspense fallback={<div>Loading</div>}>
                        <FrameFan />
                    </Suspense>
                </>
            }
            <section className=" -mt-[40vh] lg:-mt-[80vh] w-full"> 
                <div className=" mx-[3%] flex flex-col justify-end items-end overflow-hidden">
                    <section className="hidden pb-[30vh] my-4 md:flex">
                        <div className="flex flex-col gap-4 w-full justify-center items-start align-center xl:mr-[10vw] ">
                            <DiferencialMaterialGalvanizado size={70} customWith={10} />
                            <DiferencialMultiposicion size={70} customWith={250} />
                            <DiferencialVolumenBajo size={70} customWith={150} />
                            <DiferencialStockPermanente size={70} customWith={250} />
                        </div>
                    </section>
                    <Button
                        className="  z-10 bg-livered font-nunito text-white 2xl:text-2xl md:mr-3"
                        radius="full"
                        size={BigScreen ? "lg" : "sm"}
                    >
                        Manual <Download />
                    </Button>
                </div>
            </section>
            

        </>
    {/* --------------------------- FIN VIDEO SCROLL --------------------------- */}


            {BigScreen ?
                <>  {/* ----------------- Caractecristicas Web ----------------- */}
                    <section className="z-0  flex flex-col  overflow-hidden
                        h-[100%] w-[100%] min-h-[50vh] max-w-[100%]  ml-auto

                        
                        bg-[url('/svg/ondas02.svg')] bg-fill
                        bg-[center_1rem] bg-no-repeat
                    
                      ">
                        <div className="ml-[3%] h-full  flex flex-col justify-center items-center lg:flex-row lg:grow">

                            <div className="min-h-[55vh] lg:min-h-[45vh] ">
                                <h1 className="flex py-4 md:text-3xl lg:text-4xl 2xl:text-5xl leading-none font-nunito-bolder me-auto  text-livered-title  
                                ">
                                    CARACTERÍSTICAS TÉCNICAS
                                </h1>
                                <Accordion
                                className="z-10 h-[25vh] md:h-[35vh] lg:min-h-[45vh] xl:min-h-[50vh] 2xl:min-h-[55vh] "
                                variant="splitted"
                                itemClasses={
                                    {
                                        base: " py-2 md:py-4 md:px-4 bg-red-500 w-[98%] lg:w-[58.5vw] xl:w-[57vw] opacity-95",
                                        title: "font-normal text-2xl",
                                        trigger:
                                            "pl-2 py-2  data-[hover=true]:bg-default-100 pr-4 rounded-lg h-14 flex items-center",
                                        indicator: "text-medium",
                                        content: "text-xl px-2",
                                }}
                                selectionMode="multiple"
                                >
                                    <AccordionItem
                                        key="facil"
                                        aria-label=""
                                        startContent={
                                            <div className="w-[80vw]  -ml-2 md:-ml-2 md:w-[76.5vw] lg:w-[52.5vw] xl:w-[51.5vw] 2xl:w-[52.5vw] grid grid-cols-4  p-3 lg:p-4 lg:pr-2  bg-orange-500 rounded-xl 
                                                text-xs md:text-base 2xl:text-xl">
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
                                        <div className="w-[96%]  md:w-[97%] xl:w-[95.5%] 2xl:w-[95.5%] -ml-2 mb-1 mx-auto grid grid-cols-4 items-center justify-center gap-y-1 py-4 text-gray-600  rounded-xl text-xs md:text-base 2xl:text-xl bg-gray-300">
                                            <div className=" flex md:items-center justify-center  "> TSA 9/4 - 4P </div>
                                            <div className=" flex items-center justify-center"> 700 </div>
                                            <div className=" flex items-center justify-center"> 38 </div>
                                            <div className=" flex items-center justify-center pr-8 md:pr-6 lg:pr-6 "> 1150 </div>
                                        </div>

                                        <div className="w-[96%] md:w-[97%] xl:w-[95.5%] 2xl:w-[95.5%] -ml-2 my-1 mx-auto grid grid-cols-4 items-center justify-center gap-y-1 py-4 text-gray-200  rounded-xl text-xs md:text-base 2xl:text-xl bg-gray-400">
                                            <div className=" flex md:items-center justify-center "> TSA 10/5 - 4P </div>
                                            <div className="flex items-center justify-center"> 800 </div>
                                            <div className=" flex items-center justify-center"> 48 </div>
                                            <div className="flex items-center justify-center pr-8 md:pr-6 lg:pr-6"> 1500 </div>
                                        </div>

                                        <div className="w-[96%] md:w-[97%] xl:w-[95.5%] 2xl:w-[95.5%] -ml-2 my-1 mx-auto grid grid-cols-4 items-center justify-center gap-y-1 py-4 text-gray-600  rounded-xl text-xs md:text-base 2xl:text-xl bg-gray-300">
                                            <div className=" flex items-center justify-center "> TSA 12/6 - 4P </div>
                                            <div className="flex items-center justify-center"> 1350 </div>
                                            <div className="flex items-center justify-center"> 68 </div>
                                            <div className="flex items-center justify-center pr-8 md:pr-6 lg:pr-6"> 2600 </div>
                                        </div>
                                        <div className="w-[96%] md:w-[97%] xl:w-[95.5%] 2xl:w-[95.5%] -ml-2 my-1 mx-auto grid grid-cols-4 items-center justify-center gap-y-1 py-4 text-gray-200  rounded-xl text-xs md:text-base 2xl:text-xl bg-gray-400">
                                            <div className="flex items-center justify-center "> TSA 15/7 - 6P </div>
                                            <div className="flex items-center justify-center"> 1400 </div>
                                            <div className=" flex items-center justify-center"> 40 </div>
                                            <div className=" flex items-center justify-center pr-8 md:pr-6 lg:pr-6"> 3000 </div>
                                        </div>
                                        <div className="w-[96%] md:w-[97%] xl:w-[95.5%] 2xl:w-[95.5%] -ml-2 my-1 mx-auto grid grid-cols-4 items-center justify-center gap-y-1 py-4 text-gray-600  rounded-xl text-xs md:text-base 2xl:text-xl bg-gray-300">
                                            <div className=" flex items-center justify-center "> TSA 15/7 - 4P </div>
                                            <div className=" flex items-center justify-center"> 2200 </div>
                                            <div className=" flex items-center justify-center"> 95 </div>
                                            <div className="flex items-center justify-center pr-8 md:pr-6 lg:pr-6"> 5000 </div>
                                        </div>
                                        <div className="w-[96%] md:w-[97%] xl:w-[95.5%] 2xl:w-[95.5%] -ml-2 mt-1 mx-auto grid grid-cols-4 items-center justify-center gap-y-1 py-4 text-gray-200  rounded-xl text-xs md:text-base 2xl:text-xl bg-gray-400">
                                            <div className=" flex items-center justify-center "> TSA 18/9 - 6P </div>
                                            <div className="flex items-center justify-center"> 2300 </div>
                                            <div className="flex items-center justify-center"> 58 </div>
                                            <div className=" flex items-center justify-center pr-8 md:pr-6 lg:pr-6"> 5500 </div>
                                        </div>

                                    </AccordionItem>
                                </Accordion>
                            </div>
                            <div className=" w-full flex justify-center items-center">
                            {/* ----------------- Specs Web ----------------- */}
                                <div className=" w-full ms-auto overflow ">
                                        <div
                                                className=" my-10 mx-auto  px-4 z-10
                                            
                                                
                                                rounded-[42px]
                                                w-[370px] xl:w-[400px] 2xl:w-[500px]
                                                flex flex-col justify-start items-center bg-white p-1 "
                                            >
                                                <div className=" flex flex-col justify-center items-center  text-livered-title py-4 lg:pt-6 xl:py-16 
                                                text-2xl lg:text-2xl 2xl:text-3xl">
                                                    <h1 className="font-lexend ">Caudales de inyección </h1>
                                                    <h1 >desde <span className="font-lexend-bold  ">2000 a 14000 m3/h</span></h1>
                                                    <h1 className="font-lexend ">y contrapresiones desde</h1>
                                                    <h1 className="font-lexend-bold  ">15 a 180 mmCA </h1>

                                                </div>
                                        </div>
                                    </div>
                            {/* ----------------- FIN Specs Web ----------------- */}
                            </div>
                            
                        </div>
                        <div className="-z-10 mx-[3%]">
                                <div className=" w-full mx-auto mt-0">
                                    <div className="mt-2 flex items-center justify-center opacity-30">
                                        <Image
                                            alt="Otam Logo"
                                            className=""
                                            src="../img/otamlogo.png"
                                            width={300}
                                        />
                                    </div>
                                    
                                </div>
                                <div className=" w-full ml-auto lg:-mr-0">
                                    <div className="mt-0  flex items-end justify-end">
                                        <Image
                                            alt="Electroterma Logo"
                                            className=""
                                            src="../img/electrotermalogoletras.png"
                                            width={340}
                                        />
                                    </div>
                                </div>
                            </div>
                      </section>

                    {/* ----------------- Caractecristicas Web MOBILE ----------------- */}
                </> 
                : <>
                    <section className="md:hidden my-4 flex">
                        <div className="flex flex-col gap-4 w-full justify-center items-start align-center ">
                        
                            <DiferencialMaterialGalvanizado size={60} customWith={10} />
                            <DiferencialMultiposicion size={60} customWith={250} />
                            <DiferencialVolumenBajo size={60} customWith={150} />
                            <DiferencialStockPermanente size={60} customWith={250} />
                        </div>
                    </section>
                    <section className="z-10  flex flex-col  overflow-hidden
                        h-[100%] w-[100%] min-h-[100%] max-w-[100%]  ml-auto

                        
                        bg-[url('/svg/ondas022.svg')] bg-fill
                        bg-[center_1rem] bg-no-repeat
                    
                    ">
                        <div className="ml-[%] h-full  flex flex-col justify-center items-center ">
                            <h1 className="  mx-auto pt-10 py-4 xs:text-lg xm:text-2xl md:text-3xl  leading-none font-nunito-bolder me-auto  text-livered-title  
                                ">
                                    CARACTERÍSTICAS TÉCNICAS
                                </h1>

                            <div className="min-h-[vh] ">
                                
                            
                            {/* ----------------- Specs Web ----------------- */}
                                <div className=" w-full ms-auto overflow ">
                                        <div
                                                className=" my-10 mx-auto  px-4 z-10
                                            
                                                
                                                rounded-[42px]
                                                w-[370px] xl:w-[400px] 2xl:w-[500px]
                                                flex flex-col justify-start items-center bg-white p-1 "
                                            >
                                                <div className=" flex flex-col justify-center items-center  text-livered-title py-4 
                                                text-xl ">
                                                    <h1 className="font-lexend ">Caudales de inyección </h1>
                                                    <h1 >desde <span className="font-lexend-bold  ">2000 a 14000 m3/h</span></h1>
                                                    <h1 className="font-lexend ">y contrapresiones desde</h1>
                                                    <h1 className="font-lexend-bold  ">15 a 180 mmCA </h1>

                                                </div>
                                        </div>
                                    </div>
                            {/* ----------------- FIN Specs Web ----------------- */}
                            </div>
                            
                        </div>
                        <div className="mx-[3%]">
                                
                            
                                <div className="  w-full ml-auto ">
                                    <div className="mt-0  flex items-end justify-end  opacity-30">
                                    <Image
                                            alt="Otam Logo"
                                            className=""
                                            src="../img/otamlogo.png"
                                            width={150}
                                        />
                                    </div>
                                </div>
                                <div className="  w-full ml-auto ">
                                    <div className="mt-0  flex items-end justify-end">
                                        <Image
                                            alt="Electroterma Logo"
                                            className=""
                                            src="../img/electrotermalogoletras.png"
                                            width={140}
                                        />
                                    </div>
                                </div>
                            </div>
                      </section>
                </>
            }

            {/* <section className="mt-32 mb-10 mx-auto lg:w-[80%] flex justify-end lg:items-end items-center">
                <div className="flex flex-col gap-4">
                    <DiferencialMaterialGalvanizado/>
                    <DiferencialMultiposicion/>
                    <DiferencialVolumenBajo/>
                    <DiferencialStockPermanente/>
                </div>
            </section> */}

            
                                
           


            

             {/* -------------------------Tabla de especificadiones------------------------- */}

           

            {/* ----------------- Imagenes DEMO + logos ----------------- */}
            <section className="h-[60%] lg:h-[70%] 2xl:h-[90%] 2xl:w-[100%] mb-6  bg-inherit z-10 bg-none overflow-hidden">
                <div className="flex flex-col justify-center items-center t w-full md:w-[100%]  2xl:w-full  m-auto ">


                    <div className="">
                        <SimpleSliderDemoImages
                            url={urltdaImageDemo}
                            fileName={demoImageNames}
                        />
                    </div>
                    <div className="flex justify-bettween items-center mt-10 md:mt-2  w-full">
                        <div className="2xl:ml-[6%] me-auto flex justify-start items-start ">
                            <Image
                                alt="Otam Logo"
                                className="scale-1"
                                src="../img/otamlogo.png"
                                width={150}
                            />
                        </div>
                        <div className="w-full float-right flex justify-end items-end lg:pr-10 2xl:mr-[5%] md:pr-0">

                            <a href="https://wa.me/5492236356756?text=Hola,%20visite%20tu%20pagina%20web%20y%20me%20gustaria%20mas%20informacion." 
                                target="_blank" rel="noopener noreferrer">
                            <Button
                                className="  z-10 bg-livered text-white 2xl:text-2xl"
                                radius="full"
                                size={BigScreen ? "lg" : "sm"}
                                
                            >
                                <div className="absolute rounded-full left-0 z-20 p-3   shadow-r-xl shadow-[rgba(29,29,27,0.24)] border- border-gray-200 
                                    bg-gradient-to-r from-[#EF771CE5] to-[#E80303]
                                    group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-[#fe694f]
                                    group-active:bg-gradient-to-r group-active:from-[#f37a7ae5] group-active:to-[#FFFFFF]
                                "> 
                                    <BsWhatsapp className=" text-white  group-active:text-livered p- lg:text-2xl" /> </div>
                                <span className="ml-6 lg:ml-10">Asesoramiento</span>
                            </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* ----------------- FIN Imagenes DEMO + logos ----------------- */}

            {/* ----------------- Otros Porductos ----------------- */}
            <section className="max-w-[80%] w-full h-[100%] z-10 my-10">

            <h1 className="text-2xl ml-2 lg:text-4xl 2xl:text-5xl text-center leading-none  font-nunito-bolder me-auto mb-6 my-2 text-livered-title">
                        Otros productos de Soler&Palau
                    </h1>
                <div className="flex justify-center gap-2 ">
                    
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4   "> 
                {itemsNav?.map((item) => (
                    // <p key={item.key}>{item.label}</p>
                    
                        <NextLink
                                                            className=""
                                                            color="foreground"
                                                            href={ item.labelShort === "TSA" ? "javascript:void(0)" : item.href}
                                                            key={item.key}
                                                        >
                            <CardDisplay data={item}  actual={"TSA"} />
                        </NextLink>
                    ))}  
                    </div>
                         
                </div>

            </section>
            {/* ----------------- FIN Otros Porductos ----------------- */}
            
        </div>
    );
}