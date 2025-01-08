"use client";
import { title } from "@/components/primitives";
import VideoScrollPlayer from "@/components/videoplayer/videoplayer";
import VideoScrubber from "@/components/videoScrubber/videoScrubber";
import FrameScrubber from "@/components/frameScrubber/frameScrubber";
// import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.cjs.jsx';

import { rlsData } from "@/public/data/soler&palau/rlsData";
import { itemsNavSolerPalau } from "@/public/data/navbarData";

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
import { DiferencialEstaticoDinamico } from "@/components/diferenciales/diferencialEstraticoDinamico";
import {TableSolerPalau} from "@/components/table/tableSoler&palau";
import { VinietaRojaSVG } from "@/public/svg/vinietaRoja";
import { IoMailOutline } from "react-icons/io5";
import { MailSvg } from "@/public/svg/mailSvg";

import { ManualButton } from "@/components/custonButtons/manual";
import { AsesoramietoButton } from "@/components/custonButtons/asesoramiento";
import { EscribinosButton } from "@/components/custonButtons/escribinos";
import { TiendaButton } from "@/components/custonButtons/tienda";


export default function RLSPage() {

    const handleEmailClick = () => {
        const email = 'info@electroterma.com.ar';
        const subject = 'Consulta sobre equipamiento';
        const body = 'Hola! Me gustaría hacer una consulta sobre equipamiento de Electroterma';
    
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

 
    const FrameFan = lazy(
        () => import("@/components/frameScrubber/frameScrubber")
    );

    const FrameFanWeb = lazy(
        () => import("@/components/frameScrubber/frameScrubberWeb")
    );


    return (
        <div id="vent" accessKey="rls" className="h-full flex flex-col items-center justify-center  ">

            <section className="relative top-0 w-full max-h-[50%] md:max-h-[93%] lg:max-h-[93%] py-0 font-size overflow-hidden">
                <div className="h-[50%] md:h-[92%]">
                    <SimpleSlider
                        url={rlsData.urlImageBanner}
                        imgInfo={rlsData.bannerImageInfo}
                    />
                </div>
                {/* <div className="bg-[#E61E25]  md:w-98% py-3  flex justify-between items-center rounded-tr-[24px] rounded-bl-[24px]">
                    <div className="ml-[35px] md:ml-12">
                        <h2 className="text-white text-xs xm:text-base md:text-2xl 2xl:text-3xl font-nunito-bold">
                            {" "}
                            ¿Cuál es tu necesidad?{" "}
                        </h2>
                    </div>
                    <div className="mr-4 md:mr-12  -mt-2 ">
                    
                    <EscribinosButton size={BigScreen ? 30 : 25} screen={BigScreen ? "lg" : "lg"} />
                    </div>
                </div> */}
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
                    <a href="/soler&palau">
                        <Image
                            alt="Otam Logo"
                            src="../img/otamlogo.png"
                            width="100%"
                        />
                        </a>
                    <span className="ml-0 relative -top-4 text-[8px] md:text-xs">Distribuidor en Argentina</span>
                </div>
            </section>

            {BigScreen ? 
            // ----------------------- DESKTOP -----------------------
            <>
                <section className="z-10 flex flex-row justify-start items-start min-h-[100%]  overflow-hidden
                    
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
                                    {/* VENTILADOR */}
                                    {rlsData.pageData.preTitle} 
                                </h1>
                            </span>

                            <span><h1 
                                className="mt-2 lg:mt-3 2xl:mt-4  leading-none  font-nunito-bolder text-livered-title text-[4.5vw] xl:text-[4.5vw]"

                            // className="mt-2 lg:mt-6 text-3xl lg:text-5xl  xl:text-[63px] 2xl:text-[75px] 3xl:text-[95px] 2xl:mt-8 leading-none font-nunito-bolder text-livered-title"
                            >
                                {/* CENTRÍFUGO */}
                                {rlsData.pageData.title1} 
                            </h1>

                            <h1 
                                className="mt-2  leading-none  font-nunito-bolder text-livered-title text-[4.5vw] xl:text-[4.5vw]"
                            // className="mt-2 w-full lg:mt-3 text-3xl lg:text-[44px] xl:text-[63px] 2xl:text-[75px] 3xl:text-[95px] 2xl:mt-4  leading-none  font-nunito-bolder text-livered-title"
                            >
                                {/* AUTOLIMITANTE - RLS */}
                                {rlsData.pageData.title2} 
                            </h1>
                            </span>

                            <h1 className="text-[#9D9D9C] font-nunito
                                    text-[3.2vw] ">
                                {/* DE SIMPLE ASPIRACIÓN */}
                                {rlsData.pageData.subTitle} 
                            </h1>

                            {/* text-xl lg:text-4xl 2xl:text-[43px] */}
                            <div className="mt-2   tracking-normal text-[#4C4B4B] font-lexend-bold
                                text-[2.5vw]
                            ">
                                <p className="">
                                    Extracción de aire con
                                </p>
                                <p className="">
                                    <span className="text-livered ">niveles de suciedad.</span>
                                </p>
                            </div>
                            {/* z-20  absolute translate-x-[70%] translate-y-[160px]
                            lg:translate-y-[60px] lg:translate-x-[190px] 
                            2xl:translate-y-[90px] 2xl:translate-x-[220px]  */}
                            
                        </div>
                    </div>
                    <div className="relative mr-[0vw] max-w-screen w-[70%] -mt-14 pb-4 z-10 overflow-y-hidde
                          
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
                            src="../img/solerpalau/rls/SolerPalauRls1.webp"
                            width={"100%"}
                        />
                        
                        
                    </div>
                    </section>

                    <section className="w-full px-[5%] flex mb-[10px] justify-between 
                    ">
                        {/* text-[13px] xl:text-2xl  2xl:text-3xl */}

                        <div className="w-[100%] flex flex-col px-4 justify-start items-start 
                        text-[2vw]">
                            <p> <span className="text-livered-title">Es autolimitante</span> ya que presenta un <span className="text-livered-title">consumo de energía</span></p>
                            <p> <span className="text-livered-title">prácticamente constante</span> para una misma velocidad de</p>
                            <p> funcionamiento</p>
                        </div>
                        <div className="w-[40%] 3xl:w-[50%] ml-auto flex justify-end md:justify-center
                            
                            overflow-hidden">
                                
                                <TiendaButton size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"}/>
                            {/* <AsesoramietoButton screen={BigScreen ? "xl" : "lg"}
                                link={"https://wa.me/5492236356756?text=Hola.%20Quiero%20más%20información%20sobre%20este%20Ventilador%20Centrífugo%20Multipala%20RLS"}/> */}
                            

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
                        {/* VENTILADOR */}
                        {rlsData.pageData.preTitle} 

                        
                    </span>

                    <h1 className="relative mt-2 text-[29px] xm:text-[35px] leading-none font-nunito-bolder text-livered-title">
                        
                        {/* CENTRÍFUGO */}
                        {rlsData.pageData.title1} 

                    </h1>

                    <h1 className="mt-2 text-[29px] xm:text-[35px] leading-none  font-nunito-bolder text-livered-title">
                        {/* MULTIPALA - RLS */}
                        {rlsData.pageData.title2} 

                    </h1>

                    <h1 className=" text-[18px]  text-[#9D9D9C] font-nunito ">
                        {/* DE SIMPLE ASPIRACIÓN */}
                        {rlsData.pageData.subTitle} 
                    </h1>
                </section>

                <section className="w-[80vw] mx-6 flex items-start min-h-[100%] overflow-hidden h-[100%] ">
                    <div className="z-20 ">
                        <div className="min-w-1/2 flex flex-col items-center xm:mt-6 font-lexend-bold tracking-widest ">
                            <div className="mt-10 text-[12px] xm:text-[15px] tracking-normal text-[#4C4B4B] font-lexend-bold">
                                <p className="">
                                    Extracción 
                                </p>
                                <p>de aire con</p>
                                
                                <p className="">
                                    <span className="text-livered ">niveles de suciedad.</span>

                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="relative max-w-screen w-full z-10 overflow-y-hidde">
                        <Image
                            // className="-top-16 left-1/2"
                            alt="Ventilador"
                            className="inline-block w-[320px] top-0  left- "
                            src="../img/solerpalau/rls/SolerPalauRls1.webp"
                            width={"100%"}
                        />
                        <div className="mt-2 ml-auto w-full flex justify-end overflow-hidden">
                        <TiendaButton size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"}/>
                        {/* <AsesoramietoButton screen={BigScreen ? "xl" : "lg"} 
                            link={"https://wa.me/5492236356756?text=Hola.%20Quiero%20más%20información%20sobre%20este%20Ventilador%20Centrífugo%20Multipala%20RLS"}/> */}
                        </div>
                        
                    </div>
                </section>

                <section className=" z-10 h-1/4 mt-20 mb-10">
                    <div className="flex flex-col px-4 -mt-16 md:mt-0 justify-center items-center mx-auto text-center text-[13px] xl:w-[50vw] xl:text-2xl 2xl:w-[50vw] 2xl:text-3xl">
                        <p> <span className="text-livered-title">Es autolimitante</span> ya que presenta un <span className="text-livered-title">consumo de energía {" "}</span>
                         <span className="text-livered-title">prácticamente constante</span> para una misma velocidad de funcionamiento</p>

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
                    <section className="hidden pb-[20vh] my-4 md:flex">
                        <div className="flex flex-col gap-4 w-full justify-center items-start align-center xl:mr-[10vw] ">
                            <DiferencialVolumenBajo size={70} customWith={150} />
                            <DiferencialEstaticoDinamico size={70} customWith={150}/>
                            <DiferencialStockPermanente size={70} customWith={250} />
                        </div>
                    </section>
                    {/* <section className=" pb-[10vh]">
                        <Button
                            className="  z-10 bg-livered font-nunito text-white 2xl:text-2xl md:mr-3 xl:mr-[12vw]"
                            radius="full"
                            size={BigScreen ? "lg" : "sm"}
                        >
                            Manual <Download />
                        </Button>
                    </section> */}
                   
                    <section className="pb-[5vh] pt-[5vh] lg:pb-[10vh] lg:pt-[0vh] w-[40%] 3xl:w-[50%] ml-auto flex justify-end md:justify-center
                            
                            overflow-hidden">
                            
                            <ManualButton size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"} link={"../../manuales/rls.pdf"} dwName={"RLS Manual.pdf"}/>
                    </section>
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
                        <div className="ml-[3%] h-full w-full flex flex-col justify-center items-center lg:flex-row lg:grow">

                            <div className="min-h-[55vh] w-full lg:min-h-[45vh] ">
                                <h1 className="flex items-center justify-start py-4  md:text-3xl lg:text-4xl 2xl:text-5xl leading-none font-nunito-bolder me-auto  text-livered-title  
                                ">
                                   <VinietaRojaSVG size={40} /> CARACTERÍSTICAS TÉCNICAS
                                </h1>
                                <TableSolerPalau tableData={rlsData.tableData}/>
                               
                            </div>
                            <div className=" w-full my-auto flex justify-center items-center">
                            {/* ----------------- Specs Web ----------------- */}
                                <div className=" w-full  ms-auto overflow ">
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
                                                    <h1 className="font-lexend-bold  ">15 a 160 mmCA </h1>

                                                </div>
                                        </div>
                                    </div>
                            {/* ----------------- FIN Specs Web ----------------- */}
                            </div>
                            
                        </div>
                        <div className="-z-10 mx-[3%]">
                                <div className=" w-full mx-auto mt-0">
                                    <div className="mt-2 mr-8 flex items-end justify-end opacity-30">
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
                                        <a href="/" target="_top">
                                        <Image
                                            alt="Electroterma Logo"
                                            className=""
                                            src="../img/electrotermalogoletras.png"
                                            width={340}
                                        />
                                        </a>
                                    </div>
                                </div>
                            </div>
                      </section>

                    {/* ----------------- Caractecristicas Web MOBILE ----------------- */}
                </> 
                : <>
                    <section className="md:hidden my-4 flex">
                        <div className="flex flex-col gap-4 w-full justify-center items-start align-center ">
                        
                            
                            <DiferencialVolumenBajo size={60} customWith={150} />
                            <DiferencialEstaticoDinamico size={60} customWith={150}/>
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
                                                    <h1 className="font-lexend-bold  ">15 a 160 mmCA </h1>

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
                                        <a href="/" target="_top">
                                        <Image
                                            alt="Electroterma Logo"
                                            className=""
                                            src="../img/electrotermalogoletras.png"
                                            width={140}
                                        />
                                        </a>
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
                            url={rlsData.urltdaImageDemo}
                            fileName={rlsData.demoImageNames}
                        />
                    </div>
                    <section className="mt-10 mb-10 w-screen lg:w-3/4">
                        <div className="mx-[0%]  flex flex-row items-center justify-center mt-10 md:mt-2 gap-[2%] ">
                            <AsesoramietoButton screen={BigScreen ? "xl" : "md"} size={BigScreen ? 40 : 16}
                                link={"https://wa.me/5492236356756?text=Hola.%20Quiero%20más%20información%20sobre%20este%20Ventilador%20Centrífugo%20Multipala%20RLS"}/>
                            <TiendaButton size={BigScreen ? 40 : 20} screen={BigScreen ? "xl" : "md"}/>
                        </div>    
                    </section>
                    {/* <div className="flex justify-bettween items-center mt-10 md:mt-2  w-full">
                       
                        <div className="2xl:ml-[6%] me-auto flex justify-start items-start ">
                        <a href="/soler&palau">
                            <Image
                                alt="Otam Logo"
                                className="scale-1"
                                src="../img/otamlogo.png"
                                width={150}
                            />
                        </a>

                        </div>
                        <div className="w-full float-right flex justify-end items-end lg:pr-0 2xl:mr-[5%] md:pr-0">
                            <TiendaButton size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"}/>
                            <AsesoramietoButton screen={BigScreen ? "xl" : "lg"} 
                                link={"https://wa.me/5492236356756?text=Hola.%20Quiero%20más%20información%20sobre%20este%20Ventilador%20Centrífugo%20Multipala%20RLS"}/>
                        </div>
                    </div> */}
                </div>
            </section>
            {/* ----------------- FIN Imagenes DEMO + logos ----------------- */}

            {/* ----------------- Otros Porductos ----------------- */}
            <section className="max-w-[80%] w-full h-[100%] z-10 my-10">

            <h1 className="text-2xl ml-2 lg:text-4xl 2xl:text-5xl text-center leading-none  font-nunito-bolder me-auto mb-6 my-2 text-livered-title">
                        Otros productos de Soler & Palau
                    </h1>
                <div className="flex justify-center gap-2 ">
                    
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4   "> 
                {itemsNavSolerPalau?.map((item) => (
                    // <p key={item.key}>{item.label}</p>
                    
                        <a
                            className=""
                            color="foreground"
                            href={ item.labelShort === "RLS" ? "javascript:void(0)" :  item.href}
                            target={(item.labelShort === "RLS" ) ? "" : "_top"}
                            key={item.key}
                        >
                            <CardDisplay data={item}  actual={"RLS"} />
                        </a>
                    ))}  
                    </div>
                         
                </div>

            </section>
            {/* ----------------- FIN Otros Porductos ----------------- */}
            
        </div>
    );
}
