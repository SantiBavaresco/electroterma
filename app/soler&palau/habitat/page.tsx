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


export default function HabitatPage() {
    const images = [
        {
          original: "../img/solerpalau/habitat/imgDemo/1.jpg",
        //   thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "../img/solerpalau/habitat/imgDemo/2.jpg",
        //   thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "../img/solerpalau/habitat/imgDemo/3.jpg",
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
        const body = 'Hola! Me gustaria hacer una consulta sobre equipamiento de Electroterma';
    
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    
        // window.location.href = mailtoLink;
        window.open(mailtoLink, '_blank');
    };

    return (
        <main className="flex flex-col items-center justify-center gap-4 pb-4 md:pb-10 overflow-hidden ">
            {/* ------------- VIDEO INTRO ------------- */}

            <section className="h-[100%] w-full xl:px-[3%] flex items-center justify-center overflow-hidden bg-lowgrasy">
                <VideoAutoPlayer url="../img/solerpalau/habitat/video/habitatPresentacion.mp4"/>
                
            </section>

            {/* ------------- Consultanos ------------- */}
            <section className="w-full xl:px-[3%] max-h-[50%] py-0 font-size overflow-hidden">
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
                                    {/* <MailSvg css=" group-active:text-livered text-white lg:text-3xl" size={40}/> */}
                                    <IoMailOutline className=" group-active:text-livered text-white lg:text-3xl"/>
                                    </div>
                                <span className="ml-[30px] lg:ml-10">Escribinos</span>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="flex flex-col px-[3%] w-full">

                {/* ------------- Logos Electo-S&P ------------- */}
                <section className="flex flex-row justify-between  items-center  h-full">
                    <div className="w-[240px] md:w-[340] lg:w-[450px] ">
                        <Image
                            alt="Electroterma Logo"
                            className=""
                            src="../img/electrotermalogoletras.png"
                            width="100%"
                        />
                    </div>
                    <div className="left-0 w-[120px] md:w-[200px] lg:w-[250px] mr-10 xl:top-2 xl:left-16 2xl:top-2 2xl:-left-10">
                        <a href="/soler&palau">
                            <Image
                                alt="Otam Logo"
                                src="../img/otamlogo.png"
                                width="100%"
                            />
                        </a>
                        <span className="ml-0 font-nunito relative -top-4 text-[8px] md:text-sm xl:text-lg">Distribuidor en Argentina</span>
                    </div>
                </section>

                {/* ------------- Parrafo Habitat ------------- */}
                <article className=" flex  items-center justify-center font-nunito-thin text-[#9D9D9C] ">
                    <div className="w-3/4  max-w-[700px]">
                        <h1 className=" text-[4vw]">{habitatData.pageData.title1}</h1>
                        <div className="text-[2.5vw] md:text-[2vw] xl:text-[1.1vw]">
                            <p>
                                {habitatData.pageData.p1}
                                <br/><br/>
                                {habitatData.pageData.p2}
                                <br/><br/>
                                {habitatData.pageData.p3}
                            </p>
                        </div>
                    </div>
                </article>
                
                {/* ------------- Titulo post parrafo ------------- */}
                <section className="flex items-center justify-center my-4 md:my-10">
                    <div>
                        <h1 className="font-nunito-thin text-[3.5vw] text-[#9D9D9C] py-4">
                            {habitatData.pageData.subTitle}
                        </h1>
                    </div>
                </section>

                
                {/* ------------- 2 Vent Habitat ------------- */}
                {BigScreen ? 
                    <>
                    {/* ------------- WEB ------------- */}
                    <section className="flex flex-row justify-between  items-center gap-x-16 xl:gap-x-32 h-full my-10 mx-16 xl:mx-32">
                        
                        {/* ------------- Vent INLINE ------------- */}
                        <div className=" w-1/2 flex ">
                            <div className="w-2/3 pr-6">
                                <Image
                                    alt="Electroterma Logo"
                                    className=""
                                    src="../img/solerpalau/habitat/SolerPalauHabitat1.png"
                                    width="100%"
                                />
                            </div>
                            <div className="flex flex-col justify-end  w-[30%]">
                                
                                <Image
                                    alt="Electroterma Logo"
                                    className="w"
                                    src="../img/solerpalau/habitat/SolerPalauHabitatInline1.png"
                                    width="100%"
                                />
                                <span className="h-[4px] my-4 w-full  bg-livered-title">{" "}</span>
                                <Button className="font-nunito text-xl md:text-2xl xl:text-4xl py-4  text-white bg-gradient-to-b from-[#E80303] to-[#E74024]"
                                    radius="none"
                                    size="lg"
                                    
                                >
                                    más Info </Button>
                            </div>
                        </div>

                        {/* ------------- Vent EXTRACTOR ------------- */}
                        <div className=" w-1/2 flex ">
                            <div className="w-2/3 pr-6">
                                <Image
                                    alt="Electroterma Logo"
                                    className=""
                                    src="../img/solerpalau/habitat/SolerPalauHabitat2.png"
                                    width="100%"
                                />
                            </div>
                            <div className="flex flex-col justify-end  w-[30%]">
                                
                                <Image
                                    alt="Electroterma Logo"
                                    className="w"
                                    src="../img/solerpalau/habitat/SolerPalauHabitatExtractor1.png"
                                    width="100%"
                                />
                                <span className="h-[4px] my-4 w-full  bg-livered-title">{" "}</span>
                                <Button className="font-nunito text-xl md:text-2xl xl:text-4xl py-4  text-white bg-gradient-to-b from-[#E80303] to-[#E74024]"
                                    radius="none"
                                    size="lg"
                                    
                                >
                                    más Info </Button>
                            </div>
                        </div>
                    </section>
                    </>
                    : <>
                    {/* ------------- MOBILE ------------- */}
                    <section className="flex flex-col justify-between  items-center gap-y-10 h-full  ">
                        
                        {/* ------------- Vent INLINE ------------- */}
                        <div className=" w-full flex ">
                            <div className="w-[60%] pr-2">
                                <a href="/soler&palau/habitat/extractor">
                                <Image
                                    alt="Electroterma Logo"
                                    className=""
                                    radius="none"
                                    src="../img/solerpalau/habitat/SolerPalauHabitatMobile1.png"
                                    width={"100%"}
                                />
                                 </a>
                            </div>
                            <div className="flex flex-col justify-end  w-[40%]">
                                {habitatData.pageData.mobileSpecsExtractor.map((item) =>(
                                    <>
                                        
                                        <span className="flex items-center font-nunito align-middle text-[2vw] md:text-xs py-0.5"> <MdKeyboardDoubleArrowRight className=" text-livered-title"/> {item}</span>
                                    </>
                                ))

                                }
                                
                            </div>
                        </div>

                        {/* ------------- Vent EXTRACTOR ------------- */}
                        <div className=" w-full flex ">
                            <div className="w-[60%] pr-2">
                                <a href="/soler&palau/habitat/inline"> 
                                <Image
                                    alt="Electroterma Logo"
                                    className=""
                                    radius="none"
                                    src="../img/solerpalau/habitat/SolerPalauHabitatMobile2.png"
                                    width={"100%"}
                                />
                                </a>
                            </div>
                            <div className="flex flex-col justify-end  w-[40%]">
                                {habitatData.pageData.mobileSpecsInline.map((item) =>(
                                    <div className="flex items-start" key={item}>
                                        
                                        <MdKeyboardDoubleArrowRight className="min-w-max mt-1 sm:mt-1.5 text-[2vw] text-livered-title"/> <span className=" font-nunito  text-[2vw]  md:text-xs py-0.5">  {item}</span>
                                    </div>
                                ))

                                }
                                
                            </div>
                        </div>
                    </section>
                    </>
                }
                

                {/* ------------- Diferenciales ------------- */}

                {BigScreen ? 
                    <>
                    {/* ------------- WEB ------------- */}
                    <section className="flex-grow  my-16  bg-red-00 ">
                        <div className="flex flex-col justify-center mx-auto gap-4 xl:gap-0 xl:flex-row xl:justify-around w-max xl:w-full py-1">
                            <div className="">
                                <DiferencialCompuertaAntiretorno/>
                            </div>
                            <div>
                                <DiferencialVolumenBajo text="Bajo nivel sonoro"/>
                            </div>
                            <div>
                                <DiferencialGranConfort />
                            </div>
                        </div>
                    </section>
                    </> : 
                    <>
                    {/* ------------- MOBILE ------------- */}
                    <section className="flex flex-col mt-10 py-4 gap-6">
                        <div className="flex flex-row mx-auto">
                            <div className="w-max  text-center"> 
                                <DiferencialGranConfort size={40} textSize={10}/> 
                            </div>
                            <div className="w-max  text-center">
                                <DiferencialVolumenBajo size={40} textSize={10} text="Bajo nivel sonoro"/> 
                            </div>
                        </div>
                        <div className="w-max mx-auto text-center">
                            <DiferencialCompuertaAntiretorno  size={40} textSize={10}/>
                        </div>
                    </section>
                    </>

                }
               

                {/* ------------- Youtube ------------- */}
                <section className="flex flex-col xl:flex-row  items-start my-10 mx-[5%] gap-4 ">
                    <div className="w-full  ">
                        <YouTubePlayer
                            // url={item.presentationVideoId}
                            url={habitatData.videoYoutubeId1}
                            height={"400px"}
                            width={"100%"}
                            autoplay={1}
                        />
                    </div>
                    <div className="w-full h-full  ">
                        <YouTubePlayer
                            // url={item.presentationVideoId}
                            url={habitatData.videoYoutubeId2}
                            height={"400px"}
                            width={"100%"}
                            autoplay={1}
                        />
                    </div>


                </section>


                {/* ------------- ASESORAMIENTO Y TIENDA ------------- */}
                <section className="flex  h-full ">
                    <div className="flex flex-col md:flex-row mx-auto justify-center  items-center gap-x-6 xl:my-16">
                        <a href={`${habitatData.whatsappLink}${habitatData.whatsappNumber}${habitatData.whatsappMessage}`} 
                                target="_blank" rel="noopener noreferrer">
                            <Button
                                className="z-10 mt-4 bg-livered-title font-nunito text-white 3xl:ml-32 2xl:text-2xl"
                                radius="full"
                                size={BigScreen ? "lg" : "md"} 
                                // href={`${habitatData.whatsappLink}${habitatData.whatsappNumber}${habitatData.whatsappMessage}`} target="_blank"
                            >
                                <div className="absolute rounded-full left-0 z-20 p-3   shadow-r-xl shadow-[rgba(29,29,27,0.24)] border- border-gray-200 
                                    bg-gradient-to-r from-[#EF771CE5] to-[#E80303]
                                    group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-[#fe694f]
                                    group-active:bg-gradient-to-r group-active:from-[#f37a7ae5] group-active:to-[#FFFFFF]
                                "> 
                                    <BsWhatsapp className=" text-white  group-active:text-livered p- lg:text-3xl" /> 
                                    </div>
                                <span className="ml-6 lg:ml-10 lg:text-3xl">Asesoramiento</span>
                            </Button>
                        </a>
                        <a href={`${habitatData.tiendaOnline}`}
                                target="_blank" rel="noopener noreferrer">
                            <MyButton
                                className="z-10 mt-4 bg-[#EB581E] font-nunito text-white 3xl:ml-32 2xl:text-2xl"
                                radius="full"
                                size={BigScreen ? "xl" : "lg"}
                                // href={`${habitatData.tiendaOnline}`} target="_blank"
                            >
                                <div className="absolute rounded-full left-0 z-20 p-3 px-4   shadow-r-xl shadow-[rgba(29,29,27,0.24)] border- border-gray-200 
                                    bg-gradient-to-r from-[#E80303] to-[#EF771C]
                                    group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-[#fe694f]
                                    group-active:bg-gradient-to-r group-active:from-[#f37a7ae5] group-active:to-[#FFFFFF]
                                "> 
                                    {/* <BsWhatsapp className=" text-white  group-active:text-livered p- lg:text-2xl" />  */}
                                    <ShoppingCart size={BigScreen ? 40 : 25}/>
                                </div>
                                <span className="ml-10 lg:ml-10 lg:text-3xl">Tienda Online</span>
                            </MyButton>
                        </a>
                    </div>
                </section>

                {/* ------------- DISFRUTA ------------- */}
                <section className="flex items-center justify-center text-livered-title  my-10 pt-4">
                    <div className="text-center">
                        <h1 className="font-nunito-thin text-[5vw] md:text-[4vw] xl:text-[3.0vw]   ">Disfruta del confort en tu hogar</h1>
                        <h1 className="font-nunito-bold text-[5vw] md:text-[4vw] xl:text-[3.0vw] ">¡tus ventiladores y extractores ideales estan aquí!</h1>
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
                                        src="../img/solerpalau/habitat/SolerPalauHabitatPay.png"
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
                

              
                {/* ------------- LOGOS Electroterma-Soler ------------- */}

                <section className="flex flex-row justify-between  items-center  h-full">
                    <div className="w-[240px] md:w-[340] lg:w-[250px] ">
                        <Image
                            alt="Electroterma Logo"
                            className=""
                            src="../img/electrotermalogoletras.png"
                            width="100%"
                        />
                    </div>
                   
                    <div className="left-0 w-[120px] md:w-[200px] lg:w-[200px] xl:top-2 xl:left-16 2xl:top-2 2xl:-left-10">
                        <a href="/soler&palau">
                            <Image
                                alt="Otam Logo"
                                src="../img/otamlogo.png"
                                width="100%"
                            />
                        </a>
                        <span className="ml-0 font-nunito relative -top-4 text-[8px] md:text-sm">Distribuidor en Argentina</span>
                    </div>
                </section>

                
            </section>

        </main>
    );
}
