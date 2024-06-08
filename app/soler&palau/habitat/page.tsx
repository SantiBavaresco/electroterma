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
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { BsWhatsapp } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { DiferencialGranConfort } from "@/components/diferenciales/diferencialGranConfort";
import { DiferencialCompuertaAntiretorno } from "@/components/diferenciales/diferencialCompuertaAntiretorno";
import { DiferencialVolumenBajo } from "@/components/diferenciales/diferencialVolumenBajo";
import { ShoppingCart } from "@/public/svg/shoppingCart";
import YouTubePlayer from "@/components/youtubePlayer";

import { habitatData } from "@/public/data/soler&palau/habitatData";
import VideoAutoPlayer from "@/components/videoplayer/videoautoplayer";


export default function HabitatPage() {

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

            <section className="h-full w-full flex items-center justify-center overflow-hidden bg-lowgray">
                <VideoAutoPlayer url="../img/solerpalau/habitat/video/habitatPresentacion.mp4"/>
                
            </section>

            {/* ------------- Consultanos ------------- */}
            <section className="w-full px-[3%] max-h-[50%] py-0 font-size overflow-hidden">
                <div className="bg-[#E61E25]  md:w-98% py-3  flex justify-between items-center rounded-tr-[24px] rounded-bl-[24px]">
                    <div className="ml-[35px] md:ml-12">
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
                                <span className="ml-6 lg:ml-10">Escribinos</span>
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
                    <div className="left-0 w-[120px] md:w-[200px] lg:w-[250px] xl:top-2 xl:left-16 2xl:top-2 2xl:-left-10">
                        <a href="/soler&palau">
                            <Image
                                alt="Otam Logo"
                                src="../img/otamlogo.png"
                                width="100%"
                            />
                        </a>
                        <span className="ml-0 font-nunito relative -top-4 text-[8px] md:text-lg">Distribuidor en Argentina</span>
                    </div>
                </section>

                {/* ------------- Parrafo Habitat ------------- */}
                <article className=" flex  items-center justify-center font-nunito-thin text-[#9D9D9C] ">
                    <div className="w-1/2  max-w-[700px]">
                        <h1 className=" text-[6vw]">{habitatData.pageData.title1}</h1>
                        <div className="text-[1.5vw]">
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
                <section className="flex items-center justify-center my-10">
                    <div>
                        <h1 className="font-nunito-thin text-[3.5vw] text-[#9D9D9C] py-4">
                            {habitatData.pageData.subTitle}
                        </h1>
                    </div>
                </section>

                
                {/* ------------- 2 Vent Habitat ------------- */}
                <section className="flex flex-row justify-between  items-center gap-x-32 h-full my-10">
                
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
                            <Button className="font-nunito text-4xl py-4  text-white bg-gradient-to-b from-[#E80303] to-[#E74024]"
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
                            <Button className="font-nunito text-4xl py-4  text-white bg-gradient-to-b from-[#E80303] to-[#E74024]"
                                radius="none"
                                size="lg"
                                
                            >
                                más Info </Button>
                        </div>
                    </div>
                
                </section>

                {/* ------------- Diferenciales ------------- */}
                <section className="flex-grow  my-10  bg-red-00 ">
                    <div className="flex justify-around w-full py-1">
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

                {/* ------------- Img Youtube ------------- */}
                <section className="flex   items-start  space-x-4">
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

                {/* ------------- Img Youtube ------------- */}
                {/* <section className="flex-grow   bg-green-00 ">
                    <div className="flex gap-x-10">
                        <div className=" h-full pr-0">
                            <Image
                                alt="Electroterma Logo"
                                className=""
                                src="../img/solerpalau/habitat/SolerPalauHabitatV1.png"
                                width="100%"
                            />
                        </div>
                        <div className=" h-full pr-0">
                            <Image
                                alt="Electroterma Logo"
                                className=""
                                src="../img/solerpalau/habitat/SolerPalauHabitatV2.png"
                                width="100%"
                            />
                        </div>
                    </div>
                    
                </section> */}

                {/* ------------- ASESORAMIENTO Y TIENDA ------------- */}
                <section className="flex flex-row justify-center  items-center  h-full my-6">
                    <div className="space-x-6">
                        <a href="https://wa.me/5492236356756?text=Hola,%20visite%20tu%20pagina%20web%20y%20me%20gustaria%20mas%20informacion." 
                                target="_blank" rel="noopener noreferrer">
                            <Button
                                className="z-10 mt-4 bg-livered-title font-nunito text-white 3xl:ml-32 2xl:text-2xl"
                                radius="full"
                                size="lg" 
                                href="https://wa.me/5492236356756?text=Hola,%20visite%20tu%20pagina%20web%20y%20me%20gustaria%20mas%20informacion." target="_blank"
                            >
                                <div className="absolute rounded-full left-0 z-20 p-3   shadow-r-xl shadow-[rgba(29,29,27,0.24)] border- border-gray-200 
                                    bg-gradient-to-r from-[#EF771CE5] to-[#E80303]
                                    group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-[#fe694f]
                                    group-active:bg-gradient-to-r group-active:from-[#f37a7ae5] group-active:to-[#FFFFFF]
                                "> 
                                    <BsWhatsapp className=" text-white  group-active:text-livered p- lg:text-2xl" /> 
                                    </div>
                                <span className="ml-6 lg:ml-10">Asesoramiento</span>
                            </Button>
                        </a>
                        <a href="https://wa.me/5492236356756?text=Hola,%20visite%20tu%20pagina%20web%20y%20me%20gustaria%20mas%20informacion." 
                                target="_blank" rel="noopener noreferrer">
                            <Button
                                className="z-10 mt-4 bg-[#EF771CE5] font-nunito text-white 3xl:ml-32 2xl:text-2xl"
                                radius="full"
                                size="lg" 
                                href="https://wa.me/5492236356756?text=Hola,%20visite%20tu%20pagina%20web%20y%20me%20gustaria%20mas%20informacion." target="_blank"
                            >
                                <div className="absolute rounded-full left-0 z-20 p-3   shadow-r-xl shadow-[rgba(29,29,27,0.24)] border- border-gray-200 
                                    bg-gradient-to-r from-[#E80303] to-[#EF771CE5]
                                    group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-[#fe694f]
                                    group-active:bg-gradient-to-r group-active:from-[#f37a7ae5] group-active:to-[#FFFFFF]
                                "> 
                                    {/* <BsWhatsapp className=" text-white  group-active:text-livered p- lg:text-2xl" />  */}
                                    <ShoppingCart size={30}/>
                                    </div>
                                <span className="ml-6 lg:ml-10">Tienda Online</span>
                            </Button>
                        </a>
                    </div>
                </section>

                {/* ------------- DISFRUTA ------------- */}
                <section className="flex items-center justify-center text-livered-title  mb-10 pt-4">
                    <div className="text-center">
                        <h1 className="font-nunito-thin text-[3.5vw]  ">Disfruta del confort en tu hogar</h1>
                        <h1 className="font-nunito-bold text-[3.5vw] ">¡tus ventiladores y extractores ideales estan aquí!</h1>
                    </div>
                </section>

                {/* ------------- PAYMENT ------------- */}
                <section className="flex-grow   bg-red-00 h-w-full">
                            <Image
                                alt="Electroterma Logo"
                                className=""
                                src="../img/solerpalau/habitat/SolerPalauHabitatPay.png"
                                width="100%"
                            />
                </section>

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

{/*             
            <div className="w-[40%] 3xl:w-[50%] ml-auto flex justify-end md:justify-center
                            
                            overflow-hidden">
                             
                            

                        </div> */}
        </main>
        // 	<div className={'h-[5000px]'}>
        // 		<VideoScrollPlayer/>
        // </div>
    );
}
