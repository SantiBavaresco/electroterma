"use client";
import { useEffect, useState } from "react";
import { Link } from "@nextui-org/link";
import Lottie from "lottie-react";
// import animationData from "../public/lottie/bulding-page.json";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {extendVariants, Button} from "@nextui-org/react";
import { Image } from "@nextui-org/image";

import { BsWhatsapp } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { DiferencialGranConfort } from "@/components/diferenciales/diferencialGranConfort";
import { DiferencialCompuertaAntiretorno } from "@/components/diferenciales/diferencialCompuertaAntiretorno";
import { DiferencialVolumenBajo } from "@/components/diferenciales/diferencialVolumenBajo";
import { ShoppingCart } from "@/public/svg/shoppingCart";
import YouTubePlayer from "@/components/youtubePlayer";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


import { habitatData } from "@/public/data/soler&palau/habitatData";
import VideoAutoPlayer from "@/components/videoplayer/videoautoplayer";
import SimpleSliderDemoImages from "@/components/imgslider/simpleSliderDemoImages";


import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import SimpleSlider from "@/components/imgslider/slickSlider";
import { Download } from "@/public/svg/download";
import { TableSolerPalau } from "@/components/table/tableSoler&palau";
import { AsesoramietoButton } from "@/components/custonButtons/asesoramiento";
import { TiendaButton } from "@/components/custonButtons/tienda";
import { ManualButton } from "@/components/custonButtons/manual";


export default function HabitatInlinePage() {
    const images = [
        {
          original: "../../img/solerpalau/habitat/imgDemo/1.jpg",
        //   thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "../../img/solerpalau/habitat/imgDemo/2.jpg",
        //   thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "../../img/solerpalau/habitat/imgDemo/3.jpg",
        //   thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ];


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
    
    const DobleFlechaRoja = <span className="text-livered">»</span>

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

    const mobileImagesCol = [];
    for (let i = 0; i < 5; i++) {
        mobileImagesCol.push(
            <Image
            key={i}
            alt="Electroterma Logo"
            className=""
            src={`../../img/solerpalau/habitat/inline/SolerPalauHabitatInline${i+1}.png`}
            width="100%"
            />
        );
    }

    return (
        <main className="flex flex-col items-center justify-center gap-1 md:gap-4 pb-4 md:pb-10 overflow-hidden ">
            {/* ------------- VIDEO INTRO ------------- */}

            <section className="w-full flex flex-row">
                <div className="w-1/2 h-full">
                        <Image
                            alt="Banner 1"
                            className=""
                            radius="none"
                            src="../../img/solerpalau/habitat/imgBanner/SolerPalauHabitatInlineBanner1.webp"
                            width="100%"
                        />
                    </div>
                <div className="w-1/2 ">
                        <Image
                            alt="Banner 2"
                            className=""
                            radius="none"
                            src="../../img/solerpalau/habitat/imgBanner/SolerPalauHabitatInlineBanner2.webp"
                            width="100%"
                        />
                    </div>    
            </section>

            <section className="relative top-0 w-full max-h-[50%] md:max-h-[93%] lg:max-h-[93%] py-0 font-size overflow-hidden">
                <div className="h-[50%] md:h-[92%]">
                    
                    {/* <SimpleSlider
                        url={habitatData.urlImageBanner}
                        imgInfo={habitatData.bannerImageInfo}
                    /> */}
                </div>
            </section>
            {/* <section className="h-[100%] w-full xl:px-[3%] flex items-center justify-center overflow-hidden bg-lowgrasy">
                <VideoAutoPlayer url="../img/solerpalau/habitat/video/habitatPresentacion.mp4"/>
                
            </section> */}

            {/* ------------- Consultanos ------------- */}
            {/* <section className="w-full xl:px-[3%] max-h-[50%] py-0 font-size overflow-hidden">
                <div className="bg-[#E61E25]  md:w-98% py-3  flex justify-between items-center rounded-tr-[24px] rounded-bl-[24px]">
                    <div className="ml-[35px] md:ml-24">
                        <h2 className="text-white text-xs xm:text-base md:text-2xl 2xl:text-3xl font-nunito-bold">
                            {" "}
                            ¿Cuál es tu necesidad?{" "}
                        </h2>
                    </div>
                    <div className="mr-4 md:mr-12  ">
                        <Button size={BigScreen ? "lg" : "sm"} radius="full" className="2xl:text-2xl lg:px-8 mr-[23px] lg:mr-0" onClick={handleEmailClick}>
                            <div className="absolute rounded-full left-0 z-20 p-3   shadow-r-xl shadow-[rgba(29,29,27,0.24)] border- border-gray-200 
                                    bg-gradient-to-r from-[#EF771CE5] to-[#E80303]
                                    group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-[#fe694f]
                                    group-active:bg-gradient-to-r group-active:from-[#f37a7ae5] group-active:to-[#FFFFFF]
                                "> 
                                    
                                    <IoMailOutline className=" group-active:text-livered text-white lg:text-3xl"/>
                                    </div>
                                <span className="ml-[30px] lg:ml-10">Escribinos</span>
                        </Button>
                    </div>
                </div>
            </section> */}

            <section className="flex flex-col px-[3%] w-full">

                {/* ------------- Logos Electo-S&P ------------- */}
                <section className="flex flex-row justify-between  items-center  h-full">
                    <div className="w-[240px] md:w-[340] lg:w-[450px] ">
                        <a href="/">
                        <Image
                            alt="Electroterma Logo"
                            className=""
                            src="../../img/electrotermalogoletras.png"
                            width="100%"
                        />
                        </a>
                    </div>
                    <div className="left-0 w-[120px] md:w-[200px] lg:w-[250px] mr-10 xl:top-2 xl:left-16 2xl:top-2 2xl:-left-10">
                        <a href="/soler&palau">
                            <Image
                                alt="Otam Logo"
                                src="../../img/otamlogo.png"
                                width="100%"
                            />
                        </a>
                        <span className="ml-0 font-nunito relative -top-4 text-[8px] md:text-sm xl:text-lg">Distribuidor en Argentina</span>
                    </div>
                </section>

                {/* ------------- Parrafo Habitat ------------- */}
                <article className=" mx-[8%] flex mb-10 flex-col items-start justify-center font-nunito  ">
                    <h1 className="text-livered-title text-[6.5vw] md:text-[2vw] xl:text-[5.0vw]"> 
                        {habitatData.inlineData.title} 
                    </h1>
                    <h2 className="text-livered-title text-[4.5vw] md:text-[2vw] xl:text-[3.5vw]"> 
                        {habitatData.inlineData.subTitle1}
                        <span className=" underline decoration-[3px] underline-offset-8">{habitatData.inlineData.subTitle2}</span>
                    </h2>
                    <p className="text-[#575756] text-[3.8vw] md:text-[2vw] xl:text-[1.5vw]">
                        <br/>
                        <span>{habitatData.inlineData.p1}</span>
                        <br/>
                        <span>{habitatData.inlineData.p2}</span>
                    </p>
                </article>
                
                {/* ------------- Titulo post parrafo ------------- */}
                {/* <section className="flex items-center justify-center my-4 md:my-10">
                    <div>
                        <h1 className="font-nunito-thin text-[3.5vw] text-[#9D9D9C] py-4">
                            {habitatData.pageData.subTitle}
                        </h1>
                    </div>
                </section> */}

                
                {/* ------------- 2 Vent Habitat ------------- */}
                {BigScreen ? 
                    <>
                    {/* ------------- WEB ------------- */}
                    <section className="p-3 mx-[7%] mt-[3%]">
                        {/* ------------- LINEA 1 ------------- */}
                        <section className="flex grid-cols-2 gap-[6vw] font-nunito text-[#575756] text-[3.8vw] md:text-[1.3vw] xl:text-[1.3vw] 2xl:text-[1.3vw]">
                            <div className="relative w-[50%]">
                                <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mb-2"
                                    radius="none"
                                    src="../../img/solerpalau/habitat/inline/SolerPalauHabitatInline1.png"
                                    width="100%"
                                />
                                
                                <article className="absolute bottom-[2.2vw] -right-10 align-middle ">
                                    <h2> {DobleFlechaRoja} Bajo perfil.</h2>
                                    <h2> {DobleFlechaRoja} Muy fácil instalación.</h2>
                                    <h2> {DobleFlechaRoja} Fabricación de material plástico ( 250 al 800).</h2>
                                    <h2> {DobleFlechaRoja} Fabricación en acero (1000, 1300 y 2000).</h2>

                            
                                </article>
                                
                            </div>

                            <div className="relative w-[50%]">
                                <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mb-2 w-[64%]"
                                    radius="none"
                                    src="../../img/solerpalau/habitat/inline/SolerPalauHabitatInline2.png"
                                    width="100%"
                                />
                                
                                <article className="absolute bottom-[2.2vw] right-[8.5vw] align-middle ">

                                    <h2> {DobleFlechaRoja} Fácil mantenimiento.</h2>
                                    <h2> {DobleFlechaRoja} Se evita la  generación de un gran</h2>
                                    <h2> volumen de residuos.</h2>
                                    {/* <h2> {DobleFlechaRoja} Fabricación en acero ( 1300 y 2000)</h2> */}

                            
                                </article>
                                
                            </div>
                        </section>
                        {/* ------------- LINEA 2 ------------- */}
                        <section className="flex grid-cols-2 gap-[6vw] font-nunito text-[#575756]  text-[3.8vw] md:text-[1.3vw] xl:text-[1.3vw] 2xl:text-[1.3vw]">
                            <div className="relative w-[50%]">
                            <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mb-2 w-[64%]"
                                    radius="none"
                                    src="../../img/solerpalau/habitat/inline/SolerPalauHabitatInline3.png"
                                    width="100%"
                                />
                                
                                <article className="absolute bottom-[0.2vw] right-[6.0vw] align-middle ">
                                    <h2> {DobleFlechaRoja} Electrónica totalmente </h2>
                                    <h2> integrada con el producto.</h2>


                            
                                </article>
                                
                            </div>

                            <div className="relative w-[50%]">
                                <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mb-2 w-[64%]"
                                    radius="none"
                                    src="../../img/solerpalau/habitat/inline/SolerPalauHabitatInline4.png"
                                    width="100%"
                                />
                                
                                <article className="absolute bottom-[0.2vw] right-[4.2vw] align-middle ">

                                    <h2> {DobleFlechaRoja} Motor brushless de corriente continua, de </h2>
                                    <h2> alto rendimiento y bajo consumo, regulable </h2>
                                    <h2> de forma lineal.</h2>
                                    {/* <h2> {DobleFlechaRoja} Fabricación en acero ( 1300 y 2000)</h2> */}

                            
                                </article> 
                                
                            </div>
                        </section>

                        {/* <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mb-2"
                                    src="../../img/solerpalau/habitat/inline/SolerPalauHabitatInline0.png"
                                    width="100%"
                                /> */}
                    </section>

                    <section className="mx-[4%] ml-auto">
                        <ManualButton size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"} link={"../../manuales/habitatInline.pdf"} dwName={"Habitat Inline Manual.pdf"}/>
                    </section>
                    {/* <section className="grid grid-cols-[37%_37%_26%] gap-4 p-3 mx-[3%]">
                        {/* ------------- COL 1 ------------- *
                        <div className="  w-full h-max overflow-hidden">
                            <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mb-2"
                                    src="../../img/solerpalau/habitat/inline/SolerPalauHabitatInline0.png"
                                    width="100%"
                                />
                            {/* <Image
                                    alt="SolerPalauHabitatInline3.png"
                                    className=""
                                    src="../../img/solerpalau/habitat/inline/SolerPalauHabitatInline3.png"
                                    width="100%"
                                /> *
                        </div>
                        
                    </section> */}
                    </>
                    : <>
                    {/* ------------- MOBILE ------------- */}
                    <section className="flex flex-col justify-center  items-center gap-y-10 h-full mx-[3%] ">

                        <section className="p-3 mx-[3%] mt-[3%]">
                        {/* ------------- LINEA 1 ------------- */}
                        <section className="flex flex-col gap-[10vw] font-nunito text-[#575756] text-[3.8vw] md:text-[1.3vw] xl:text-[1.3vw] 2xl:text-[1.3vw]">
                            <div className="relative h-[70vw]">
                                <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mb-2  w-[85%]"
                                    radius="none"
                                    src="../../img/solerpalau/habitat/inline/SolerPalauHabitatInline1.png"
                                    width="100%"
                                />
                                
                                <article className="absolute w-[85%] -bottom-[1.2vw] -right-[8vw] align-middle ">
                                    <h2> {DobleFlechaRoja} Bajo perfil.</h2>
                                    <h2> {DobleFlechaRoja} Muy fácil instalación.</h2>
                                    <h2> {DobleFlechaRoja} Fabricación de material plástico </h2>
                                    <h2> ( 250 al 800).</h2>
                                    <h2> {DobleFlechaRoja} Fabricación en acero ( 1300 y 2000).</h2>

                            
                                </article>
                                
                            </div>

                            <div className="relative h-[65vw]">
                                <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mb-2  w-[65%]"
                                    radius="none"
                                    src="../../img/solerpalau/habitat/inline/SolerPalauHabitatInline2.png"
                                    width="100%"
                                />
                                
                                <article className="absolute w-[85%] -bottom-[3.2vw] -right-[4vw] align-middle ">
                                    <h2> {DobleFlechaRoja} Fácil mantenimiento.</h2>
                                    <h2> {DobleFlechaRoja} Se evita la  generación de un gran</h2>
                                    <h2> volumen de residuos.</h2>
                                </article>
                                
                            </div>
                        
                            <div className="relative h-[65vw]">
                                <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mb-2  w-[65%]"
                                    radius="none"
                                    src="../../img/solerpalau/habitat/inline/SolerPalauHabitatInline3.png"
                                    width="100%"
                                />
                                
                                <article className="absolute w-[85%] -bottom-[4.2vw] -right-[21vw] align-middle ">
                                    <h2> {DobleFlechaRoja} Electrónica totalmente </h2>
                                    <h2> integrada con el producto.</h2>
                                </article>
                                
                            </div>


                            
                               
                            <div className="relative h-[65vw]">
                                <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mb-2  w-[65%]"
                                    radius="none"
                                    src="../../img/solerpalau/habitat/inline/SolerPalauHabitatInline4.png"
                                    width="100%"
                                />
                                
                                <article className="absolute w-[85%] -bottom-[4.2vw] -right-[4vw] align-middle ">
                                    <h2> {DobleFlechaRoja} Motor brushless de corriente </h2>
                                    <h2> continua, de alto rendimiento y bajo  </h2>
                                    <h2> consumo, regulable de forma lineal.</h2>
                                </article>
                                
                            </div>
                                    
                                    {/* <h2> {DobleFlechaRoja} Fabricación en acero ( 1300 y 2000)</h2> */}

                            
                               
                        </section>

                        {/* <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mb-2"
                                    src="../../img/solerpalau/habitat/inline/SolerPalauHabitatInline0.png"
                                    width="100%"
                                /> */}
                    </section>
                        {/* {mobileImagesCol} */}
                        {/* <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mb-2"
                                    src="../../img/solerpalau/habitat/inline/SolerPalauHabitatInlineMobile0.png"
                                    width="100%"
                                /> */}
                        <ManualButton size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"} link={"../../manuales/habitatInline.pdf"} dwName={"Habitat Inline Manual.pdf"}/>
                    </section>
                    </>
                }
                

                

                {/* ------------- Tabla ------------- */}
                <section className={`hidden lg:flex flex-col  items-start my-10 mx-[3%] gap-4 `}>
                {/* <TableSolerPalau tableData={habitatData.tableData}/> */}
                    <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mb-2"
                                    src="../../img/solerpalau/habitat/inline/SolerPalauHabitatInlineTabla.jpg"
                                    width="100%"
                                />
                </section>

                {/* ------------- DISFRUTA ------------- */}
                <section className="flex items-center justify-center text-livered-title  my-10 pt-4">
                    <div className="text-center">
                        <h1 className="font-nunito-thin text-[5vw] md:text-[4vw] xl:text-[3.0vw]   ">Conoce toda la gama de ventiladores</h1>
                        <h1 className="font-nunito-thin text-[5vw] md:text-[4vw] xl:text-[3.0vw] ">helicocentrífugos en línea</h1>
                    </div>
                </section>

                {/* ------------- ASESORAMIENTO Y TIENDA ------------- */}
                <section className="flex  h-full ">
                    <div className="flex flex-col mx-auto justify-center  items-center lg:gap-y-6 my-10 xl:my-16">
                        <h1 className="font-nunito text-xl lg:text-3xl">COMPRÁ AHORA</h1>
                        <TiendaButton size={BigScreen ? 70 : 40} screen={BigScreen ? "xxl" : "xl"} link={`${habitatData.tiendaOnline}`} css={"lg:text-5xl"}/>
                    </div>
                </section>

                

                



                {/* ------------- PAYMENT ------------- */}
                {BigScreen ? 
                    <>
                        {/* ------------- WEB ------------- */}
                        <section className="flex items-center justify-center mx-[7%] bg-red-00  h-full">
                                    <Image
                                        alt="Electroterma Logo"
                                        className=""
                                        src="../../img/solerpalau/habitat/SolerPalauHabitatPay.png"
                                        width="100%"
                                    />
                        </section>
                    </> : 
                    <>
                        {/* ------------- MOBILE ------------- */}
                        <section className=" h-[55vw] py-auto">
                            <ImageGallery items={images} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} autoPlay/>
                        </section>
                    </>
                }
                
                {/* ------------- NAVEGACION ------------- */}
                <section className={`flex flex-row  items-start my-6 lg:my-10 lg:mx-[15%] lg:gap-16 `}>
                    <a href="/soler&palau/habitat" className="hover:opacity-70">
                        <Image
                            alt="SolerPalauHabitatInline1.png"
                            className="mb-2"
                            src="../../img/solerpalau/habitat/imgBanner/SolerPalauHabitaNav1.webp"
                            width="100%"
                        />
                    </a>
                    {/* <a href="/soler&palau/habitat/inline" className="hover:opacity-70">
                        <Image
                            alt="SolerPalauHabitatInline1.png"
                            className="mb-2"
                            src="../../img/solerpalau/habitat/imgBanner/SolerPalauHabitaNav2.png"
                            width="100%"
                        />
                    </a> */}
                    <a href="/soler&palau/habitat/extractor" className="hover:opacity-70">
                        <Image
                            alt="SolerPalauHabitatInline1.png"
                            className="mb-2"
                            src="../../img/solerpalau/habitat/imgBanner/SolerPalauHabitaNav3.webp"
                            width="100%"
                        />
                    </a>
                </section>
              
                {/* ------------- LOGOS Electroterma-Soler ------------- */}

                <section className=" mx-auto mt-6 mb-6"> 
                {BigScreen || <AsesoramietoButton  screen={BigScreen ? "xl" : "lg"} size={25} link={`${habitatData.whatsappLink}${habitatData.whatsappNumber}${habitatData.whatsappMessageInline}`}/> }
                </section>
                
                {!BigScreen ||<section className="flex flex-row justify-between  items-center  h-full">
                    <div className="w-[240px] md:w-[340] lg:w-[250px] ">
                        <a href="/">
                        <Image
                            alt="Electroterma Logo"
                            className=""
                            src="../../img/electrotermalogoletras.png"
                            width="100%"
                        />
                        </a>
                    </div>
                    <div>
                         <AsesoramietoButton screen={BigScreen ? "xl" : "lg"} link={`${habitatData.whatsappLink}${habitatData.whatsappNumber}${habitatData.whatsappMessageInline}`}/> 
                    </div>
                   
                    <div className="left-0 w-[120px] md:w-[200px] lg:w-[200px] xl:top-2 xl:left-16 2xl:top-2 2xl:-left-10">
                        <a href="/soler&palau">
                            <Image
                                alt="Otam Logo"
                                src="../../img/otamlogo.png"
                                width="100%"
                            />
                        </a>
                        <span className="ml-0 font-nunito relative -top-4 text-[8px] md:text-sm">Distribuidor en Argentina</span>
                    </div>
                </section>}

                {BigScreen || 
                 <section className="flex flex-col px-[3%] w-full">

                 {/* ------------- Logos Electo-S&P ------------- */}
                 <section className="flex flex-row justify-between  items-center  h-full">
                     <div className="w-[240px] md:w-[340] lg:w-[450px] ">
                         <a href="/">
                         <Image
                             alt="Electroterma Logo"
                             className=""
                             src="../../img/electrotermalogoletras.png"
                             width="100%"
                         />
                         </a>
                     </div>
                     <div className="left-0 w-[120px] md:w-[200px] lg:w-[250px] mr-10 xl:top-2 xl:left-16 2xl:top-2 2xl:-left-10">
                         <a href="/soler&palau">
                             <Image
                                 alt="Otam Logo"
                                 src="../../img/otamlogo.png"
                                 width="100%"
                             />
                         </a>
                         <span className="ml-0 font-nunito relative -top-4 text-[8px] md:text-sm xl:text-lg">Distribuidor en Argentina</span>
                     </div>
                 </section>
                 </section>
                }

                
            </section>

        </main>
    );
}
