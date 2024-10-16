"use client";
import { Link } from "@nextui-org/link";
import Lottie from "lottie-react";
// import animationData from "../public/lottie/bulding-page.json";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";
// import { Button } from "@nextui-org/button";
import { BsWhatsapp } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import {extendVariants, Button, Divider} from "@nextui-org/react";
import { lazy, Suspense, useState, useEffect } from "react";

import VideoAutoPlayer from "@/components/videoplayer/videoautoplayer";
import { Navbar } from "@/components/navbar/navbar";
import { ShoppingCart } from "@/public/svg/shoppingCart";
import { AsesoramietoButton } from "@/components/custonButtons/asesoramiento";
import { TiendaButton } from "@/components/custonButtons/tienda";
import { EscribinosButton } from "@/components/custonButtons/escribinos";


// import ScrollVideoPlayer from "@/components/videoplayer/scrollVideo";
// import VideoScrollPlayer from "@/components/videoplayer/videoplayer";


export default function Home() {

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
        () => import("@/components/frameScrubber/homeFrameScrubber/frameScrubber")
    );

    const FrameFanWeb = lazy(
        () => import("@/components/frameScrubber/homeFrameScrubber/frameScrubberWeb")
    );

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


    const handleAnchor = (link:string) => {
        window.open(link, '_top', 'noopener noreferrer');
      };

    const MyButton = extendVariants(Button, {  
        variants: {    
          size: {      
            xs: "px-2 min-w-12 h-6 text-tiny gap-1 rounded-small",      
            md: "px-4 min-w-20 h-10 text-small gap-2 rounded-small",      
            xl: "px-10 min-w-32 h-16 text-xl gap-6 rounded-full", // <- new size variant
          },  
        },  
        defaultVariants: { 
          size: "xl",  // <- set new size variant as default
        },
      });

    return (
        <main id="vent" accessKey="home" className="flex flex-col items-center justify-center gap-4  pb-0 md:pb-0 ">
            <section className="max-h-[90vh] w-full xl:px-[0%] flex items-center justify-center overflow-hidden bg-lowgrasy">
                <VideoAutoPlayer url="../img/home/video/homePresentacion.mp4"/>
                
            </section>
            {/* <section className="h-screen w-full flex items-center justify-center overflow-hidden bg-lowgray">
                <Image
                    className=" mt-0"
                    alt="Background Tempomatic"
                    radius="none"
                    src="../../img/home/video.png"
                    width="100%"
                />
            </section> */}

            <Navbar css=" -mt-4"/>

            <section className="relative w-full px-[3%] my-3 lg:my-10 pt-4 text-center font-lexend text-[#4C4B4B] text-[3.5vw] lg:text-[1.75vw] overflow-hidden">
                {BigScreen ? 
                <p>
                {/* -------------PARRAFO CON COMILLAS WEB------------- */}
                    <div className="z-20 absolute 
                        top-[30%] xs:top-[20%] xm:top-[14%] sm:top-[15%] md:top-[10%] lg:top-[5%] xl:top-[1%]  2xl:-top-[10%] 
                        left-[0.5%] lg:left-[24%] xl:left-[25%] 2xl:left-[23.5%]
                        w-[7vw] lg:w-[4vw]
                        ">
                        <Image  
                            className=" mt-0"
                            alt="Background Tempomatic"
                            radius="none"
                            src="../../img/home/homeBanner/comillas.png"
                            width="100%"
                        />
                    </div>

                    <span className="">Desarrollamos productos innovadores y de calidad</span><br/>
                    <span className="">para soluciones en  <span className="  font-lexend-bold">termomecánica&quot;</span></span><br/>
                </p>
                :
                <p>
                {/* -------------PARRAFO CON COMILLAS MOBILE------------- */}
                    <div className="z-20 absolute 
                        top-[35%] xs:top-[20%] xm:top-[17%] sm:top-[15%] md:top-[10%] lg:top-[5%] xl:top-[1%]  2xl:-top-[10%] 
                        left-[11.5%] lg:left-[24%] xl:left-[25%] 2xl:left-[23.5%]
                        w-[5vw] lg:w-[4vw]
                        ">
                        <Image  
                            className=" mt-0"
                            alt="Background Tempomatic"
                            radius="none"
                            src="../../img/home/homeBanner/comillas.png"
                            width="100%"
                        />
                    </div>

                    <span className="">Desarrollamos productos innovadores y </span><br/>
                    <span className="">de calidad para soluciones</span><br/>
                    <span className=""> en  <span className="  font-lexend-bold">termomecánica&quot;</span></span><br/>

                </p>    
                }
            </section>

            {/* <section>
                <h1>Texto con comillas</h1>
            </section> */}

            {/* ------------- Banners de prodcutos ------------- */}
            {BigScreen ? <section className="relative w-full h-[58vw] lg:h-[51vw] bg-gray-00 overflow-hidden">
                <section className="z-10 mx-[3%] flex flex-row gap-[2%]">
                    {/* ------------- TEMPOMATIC ------------- */}
                    <div
						className="z-10 cursor-pointer w-[30%] hover:opacity-80 hover:translate-y-1 " 
                        onClick={()=>handleAnchor("/tempomatic")}
					>
                    <>
                        <Image  
                            className=" mt-0"
                            alt="Background Tempomatic"
                            radius="none"
                            src="../../img/home/homeBanner/h1.png"
                            width="100%"
                        />

                        <div className="w-[60%] mx-auto -mt-10 ">
                            <Image  
                                className=" "
                                alt="Tempomatic"
                                radius="none"
                                src="../../img/home/homeBanner/1.png"
                                width="100%"
                            />
                        </div>
                    </>
                    </div>

                    {/* ------------- SOLER Y PALAU ------------- */}
                    <div
						className="z-10 cursor-pointer w-[30%] hover:opacity-80 hover:translate-y-1 " 
                        onClick={()=>handleAnchor("/soler&palau")}
					>
                    <>
                        <Image  
                            className=" mt-0"
                            alt="Background SyP"
                            radius="none"
                            src="../../img/home/homeBanner/h2.png"
                            width="100%"
                        />
                        <div className="w-[60%] mx-auto -mt-10">
                            <Image  
                                className=" "
                                alt="Syp"
                                radius="none"
                                src="../../img/home/homeBanner/2.png"
                                width="100%"
                            />
                        </div>
                    </>
                    </div>

                {/* ------------- DTI ------------- */}
                    <div
						className="z-10 cursor-pointer w-[30%] hover:opacity-80 hover:translate-y-1 " 
                        onClick={()=>handleAnchor("/dti")}
					>
                    <>
                        <Image  
                            className=" mt-0"
                            alt="Background DTI"
                            radius="none"
                            src="../../img/home/homeBanner/h3.png"
                            width="100%"
                        />
                        <div className="w-[60%] mx-auto -mt-10">
                            <Image  
                                className=" "
                                alt="DTI"
                                radius="none"
                                src="../../img/home/homeBanner/3.png"
                                width="100%"
                            />
                        </div>
                    </>
                    </div>

                    {/* ------------- ZILA ------------- */}
                    <div
						className="z-10 cursor-pointer w-[30%] hover:opacity-80 hover:translate-y-1 " 
                        onClick={()=>handleAnchor("/zila")}
					>
                    <>
                        <Image  
                            className=" mt-0"
                            alt="Background Zila"
                            radius="none"
                            src="../../img/home/homeBanner/h4.png"
                            width="100%"
                        />
                        <div className="w-[60%] mx-auto -mt-10">
                            <Image  
                                className=" "
                                alt="Zila"
                                radius="none"
                                src="../../img/home/homeBanner/4.png"
                                width="100%"
                            />
                        </div>
                    </>
                    </div>
                </section>

                {/* ------------- Lineas curvas ------------- */}
                <section>
                    <div className=" absolute z-0 w-[20%] top-[40.5vw] left-[2.8%]">
                        <Image  
                            className="mt-0 "
                            alt="Linea Izquierda"
                            radius="none"
                            src="../../img/home/homeBanner/l1.png"
                            width="100%"
                        />
                    </div>
                    <div className="absolute z-0  w-[20%] top-[40.5vw]  right-[2.8%]">
                        <Image  
                            className="mt-0"
                            alt="Linea Derecha"
                            radius="none"
                            src="../../img/home/homeBanner/l2.png"
                            width="100%"
                        />
                    </div>
                </section>


                {/* ------------- Consultanos ------------- */}
                <section className="relative top-[9.5%] lg:top-[4.5%]  md:w-98% py-2  flex justify-center items-center rounded-tr-[24px] rounded-bl-[24px]">
                    <div className="ml-[35px] md:ml-12">
                        <h2 className="text-[#4C4B4B] text-center text-xs xm:text-base md:text-2xl 2xl:text-4xl font-nunito-bold">
                            {" "}
                            Conocé nuestras {" "}
                            <Link href="/solucionesHVAC">
                            <Button size={BigScreen ? "lg" : "sm"} radius="full" className="border-[2px] border-white bg-[#EF771C] xl:text-2xl  2xl:text-4xl lg:px-8 mr-[23px] lg:mr-0 text-[#FFFFFF]" 
                                // onClick={handleEmailClick}
                                >
                            Soluciones
                        </Button></Link>
                        </h2>
                    </div>
                    <div className="mr-4 md:mr-12  ">
                        
                    </div>
                </section>

            </section>
            : <>
            {/* ------------- Banners de prodcutos MOBILE ------------- */}

            <section className="w-full h-full  gbg-gray-00 overflow-hidden">

                <section className="z-10 w-[95%] mx-[5%]  flex gap-[5%] mb-4">
                    {/* ------------- TEMPOMATIC ------------- */}
                    <div
                        className="z-10 cursor-pointer w-[45%] hover:opacity-80 hover:translate-y-1 " 
                        onClick={()=>handleAnchor("/tempomatic")}
                    >
                    <>
                        <Image  
                            className=" mt-0"
                            alt="Background Tempomatic"
                            radius="none"
                            src="../../img/home/homeBanner/h1.png"
                            width="100%"
                        />

                        <div className="w-[60%] mx-auto -mt-10 ">
                            <Image  
                                className=" "
                                alt="Tempomatic"
                                radius="none"
                                src="../../img/home/homeBanner/1.png"
                                width="100%"
                            />
                        </div>
                    </>
                    </div>

                    {/* ------------- SOLER Y PALAU ------------- */}
                    <div
                        className="z-10 cursor-pointer w-[45%] hover:opacity-80 hover:translate-y-1 " 
                        onClick={()=>handleAnchor("/soler&palau")}
                    >
                    <>
                        <Image  
                            className=" mt-0"
                            alt="Background SyP"
                            radius="none"
                            src="../../img/home/homeBanner/h2.png"
                            width="100%"
                        />
                        <div className="w-[60%] mx-auto -mt-10">
                            <Image  
                                className=" "
                                alt="Syp"
                                radius="none"
                                src="../../img/home/homeBanner/2.png"
                                width="100%"
                            />
                        </div>
                    </>
                    </div>

               
                </section>

                <section className="z-10 w-[95%] mx-[5%]  flex gap-[5%]">
                     {/* ------------- DTI ------------- */}
                     <div
                        className="z-10 cursor-pointer w-[45%] hover:opacity-80 hover:translate-y-1 " 
                        onClick={()=>handleAnchor("/dti")}
                    >
                    <>
                        <Image  
                            className=" mt-0"
                            alt="Background DTI"
                            radius="none"
                            src="../../img/home/homeBanner/h3.png"
                            width="100%"
                        />
                        <div className="w-[60%] mx-auto -mt-10">
                            <Image  
                                className=" "
                                alt="DTI"
                                radius="none"
                                src="../../img/home/homeBanner/3.png"
                                width="100%"
                            />
                        </div>
                    </>
                    </div>

                    {/* ------------- ZILA ------------- */}
                    <div
                        className="z-10 cursor-pointer w-[45%] hover:opacity-80 hover:translate-y-1 " 
                        onClick={()=>handleAnchor("/zila")}
                    >
                    <>
                        <Image  
                            className=" mt-0"
                            alt="Background Zila"
                            radius="none"
                            src="../../img/home/homeBanner/h4.png"
                            width="100%"
                        />
                        <div className="w-[60%] mx-auto -mt-10">
                            <Image  
                                className=" "
                                alt="Zila"
                                radius="none"
                                src="../../img/home/homeBanner/4.png"
                                width="100%"
                            />
                        </div>
                    </>
                    </div>
                    
                </section>

              
                

            </section>
                {/* ------------- Lineas curvas ------------- */}
                <section className="z-10 mx-[3%] flex grid-col-2 gap-[2%]">
                <div className=" absolute z-0 w-[40%] -mt-[2%] xs:-mt-[5.5vw] xm:-mt-[8%] botto-[40.5vw] left-[4.2%]">
                    <Image  
                        className="mt-0 "
                        alt="Linea Izquierda"
                        radius="none"
                        src="../../img/home/homeBanner/l1.png"
                        width="100%"
                    />
                </div>
                <div className="absolute z-10  w-[40%] -mt-[2%] xs:-mt-[5.5vw] xm:-mt-[8%] toap-[2.5vw]  right-[3.9%]">
                    <Image  
                        className="mt-0"
                        alt="Linea Derecha"
                        radius="none"
                        src="../../img/home/homeBanner/l2.png"
                        width="100%"
                    />
                </div>
                </section>


                {/* ------------- Consultanos ------------- */}
                <section className="relative z-20 bg-white top-[9.5%]  md:w-98% py-2  flex justify-center items-center">
                <div className="ml-[10px] mr-[10px]">
                    <h2 className="text-[#4C4B4B] text-center text-xs xm:text-base md:text-2xl 2xl:text-4xl font-nunito-bold">
                        {" "}
                        Conocé nuestras {" "}
                        <Link href="/solucionesHVAC">
                        <Button size={BigScreen ? "lg" : "sm"} radius="full" className="border-[4px] border-white bg-[#EF771C]  2xl:text-3xl lg:px-8 -[23px] lg:mr-0 text-[#FFFFFF]" 
                            // onClick={handleEmailClick}
                            >
                        Soluciones
                    </Button></Link>
                    </h2>
                </div>

                </section>
            </>
            }







            {/* ------------- Foto Inicial ------------- */}
            <section className=" -mb-10 w-full h-full  mr-auto overflow-hidden">
                <Image  
                    classNames={{ wrapper: "pl-auto <-10 min-w-full h-full"}}
                    alt="Imagen Inicio"
                    src={`../../img/home/${BigScreen ? "home" : "home"}.png`}
                    width={"100%"}
                />
            </section>

            

            

            {/* <section className="h-[100%] w-full xl:px-[3%] flex items-center justify-center overflow-hidden bg-lowgrasy">
                <VideoAutoPlayer url="../img/imgHome/mapa.mkv   "/>
                
            </section> */}


            {/* ------------- Framescrubber ------------- */}
            {BigScreen ? 
                <>   {/* ----- Web ----- */}
                    {/* <VideoScrubber/> */}
                    
                    {/* <ScrollyVideo src="../img/solerpalau/rls/video/original.mkv" transitionSpeed={1} /> */}
                    {/* <ScrollVideoPlayer/> */}
                    {/* <VideoScrollPlayer/> */}
                    
                        {/* <h1 className=" fixed top-5 text-[200px] -z-100">HOLAAAAAAA</h1> */}
                        
                    <Suspense fallback={<div>Loading</div>}>
                        
                        <FrameFanWeb />
                        
                    </Suspense>
                    

                </> 
                
                : <div className="-mt-48 -mb-64 mt-"> {/* ----- Mobile ----- */}
                    {/* <div className=" mx-auto h-32">Mapa scroll mobile</div> */}
                    <Suspense fallback={<div>Loading</div>}>
                        <FrameFan />
                    </Suspense>
                     {/* ------------- Diferenciales mobile ------------- */}
                    
                </div>
            }

                <section className=" mx-2 w-full h-full  mr-auto  overflow-hidden">
                        <Image  
                            classNames={{ wrapper: "pl-auto <-10 min-w-full h-full"}}
                            alt="Imagen Inicio"
                            src={`../../img/home/${BigScreen ? "" : "diferencialesMobile"}.png`}
                            width={"95%"}
                        />
                    </section>

            {/* ------------- Foto Grupal ------------- */}
            <section className="-mt-4 lg:-mt-14 mx-0 w-full mr-auto  overflow-hidden">
                <Image  
                    classNames={{ wrapper: "pl-auto <-10 min-w-full h-full"}}
                    alt="Imagen grupal"
                    src={`../../img/home/${BigScreen ? "grupo" : "grupoMobile"}.png`}
                    width={"100%"}
                    radius="none"
                />
            </section>

            {/* ------------- Foto leyenda ------------- */}
            <section className="mx-0 w-3/4 lg:w-1/3 lg:mr-[27%] lg:mt-4  overflow-hidden">
                <Image  
                    classNames={{ wrapper: "<-10 min-w-full h-full"}}
                    alt="Imagen grupal"
                    src="../../img/home/leyenda.png"
                    radius="none"
                    width={"100%"}
                />
            </section>


            

            {/* ------------- Direccionamiento a los productos ------------- */}
            <section className="z-0 lg:my-0 pt-12 lg:pt-14 translate-y-[0px] lg:mt-0 lg:translate-y-[0px]  lg:min-h-[100px] overflow-hidden">
                <div className="mx-auto w-3/4 lg:w-3/5 flex flex-col-2 lg:flex-row gap-[2%]">
                    {/* ------------- TEMPOMATIC ------------- */}
                    <a
						className="w-[100%] hover:opacity-80 hover:translate-y-1" 
                        href="/tempomatic"
                        target="_top"
					>
                    <div className=" mx-auto -mt-10">
                        <Image  
                            className=" "
                            alt="tempomatic"
                            radius="none"
                            src="../../img/home/homeBanner/1.png"
                            width="100%"
                        />
                    </div>
                    </a>

                    {/* ------------- SOLER Y PALAU ------------- */}   
                    <a
						className="w-[100%] hover:opacity-80 hover:translate-y-1" 
                        href="/soler&palau"
                        target="_top"
					>
                    <div className=" mx-auto -mt-10">
                        <Image  
                            className=" "
                            alt="syp"
                            radius="none"
                            src="../../img/home/homeBanner/2.png"
                            width="100%"
                        />
                    </div>
                    </a>

                    {/* ------------- DTI ------------- */}
                    <a
						className="w-[100%] hover:opacity-80 hover:translate-y-1" 
                        href="/dti"
                        target="_top"
					>
                    <div className=" mx-auto -mt-10">
                        <Image  
                            className=" "
                            alt="dti"
                            radius="none"
                            src="../../img/home/homeBanner/3.png"
                            width="100%"
                        />
                    </div>
                    </a>

                    {/* ------------- ZILA ------------- */}
                    <a
						className="w-[100%] hover:opacity-80 hover:translate-y-1" 
                        href="/zila"
                        target="_top"
					>
                    <div className="mx-auto -mt-10">
                        <Image  
                            className=" "
                            alt="Zila"
                            radius="none"
                            src="../../img/home/homeBanner/4.png"
                            width="100%"
                        />
                    </div>
                    </a>
                    
                </div>
                    
            </section>


            {/* ------------- Botonera ------------- */}

            <section className="w-full 2xl:w-2/3 mx-auto 2xl:mx-[3%] 2xl:-translate-x-10 lg:mb-10 lg:mt-10 font-nunito flex flex-col items-center lg:flex-row justify-center md:justify-around
                overflow-hidden">
                    
                <section className=" 2xl:w-4/5 ">
					<div className=" px-auto  flex h-[150px] lg:h-[250px] items-center mt-4 md:mt-2 space-x-2 lg:space-x-10  text-[12px] lg:text-3xl text-center text-[#4C4B4B]">
						<div>
							<h1 className="w-mx px-1">Contactá</h1>
							<h1>a un vendedor</h1><br/>

							<AsesoramietoButton size={BigScreen ? 42 : 15} screen={BigScreen ? "xl" : "xs"}
                            link={"https://wa.me/5492236356756?text=Hola.%20visité%20tu%20página%20web%20y%20me%20gustaría%20más%20información."}
                            // Hola,%20visite%20tu%20pagina%20web%20y%20me%20gustaria%20mas%20informacion
                            />
						</div>

						<Divider orientation="vertical" className="bg-[#EDEDED]" />
						<div>
							<h1 className="w-mx px-1">Comprá en</h1>
							<h1>nuestra tienda</h1><br/>

                            <TiendaButton size={BigScreen ? 40 : 15} screen={BigScreen ? "xl" : "xs"}/>
                            {/* <EscribinosButton size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"} /> */}
						</div>
                        <Divider orientation="vertical" className="bg-[#EDEDED]" />
						<div>
							<h1 className="w-max px-0.5">Escribinos a través</h1>
							<h1>de nuestro mail</h1><br/>

                            <EscribinosButton size={BigScreen ? 42 : 15} screen={BigScreen ? "xl" : "xs"} />
						</div>

					</div>
                        
                </section>
            </section>


          


          
        </main>
        // 	<div className={'h-[5000px]'}>
        // 		<VideoScrollPlayer/>
        // </div>
    );
}
