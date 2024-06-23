"use client";
import { Link } from "@nextui-org/link";
import Lottie from "lottie-react";
import animationData from "../public/lottie/bulding-page.json";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { BsWhatsapp } from "react-icons/bs";
import { lazy, Suspense, useState, useEffect } from "react";

import VideoAutoPlayer from "@/components/videoplayer/videoautoplayer";
import { Navbar } from "@/components/navbar/navbar";


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
        () => import("@/components/frameScrubber/frameScrubber")
    );

    const FrameFanWeb = lazy(
        () => import("@/components/frameScrubber/frameScrubberWeb")
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

    return (
        <main id="vent" accessKey="home" className="flex flex-col items-center justify-center gap-4 pb-4 md:pb-10 ">
           <section className="${h-screen w-full flex items-center justify-center overflow-hidden bg-lowgray">
                        <p className=" h-full w-max  py-[45vh] text-xl text-center align-middle">Video para la web</p>
                    </section>
            <Navbar/>
            <section >
                <Image  
                    className="mt-10"
                    alt="Otam Logo"
                    src="../img/homeBanner.png"
                    width="100%"
                />
                <div className="z-10 absolute -translate-y-[31vh] flex justify-center items-center w-full my-4 gap-x-6">
                    
                    <Button className="w-[19vw] h-[26vh] bg-transparent  text-gray-700 font-bold py-2 px-4 rounded" as={Link} href="/tempomatic"></Button>
                    <Button className="w-[13vw] h-[26vh] bg-transparent  text-gray-700 font-bold py-2 px-4 rounded" as={Link} href="/soler&palau"></Button>
                    <Button className="w-[13vw] h-[26vh] bg-transparent  text-gray-700 font-bold py-2 px-4 rounded" as={Link} href="/DTI"></Button>
                    <Button className="w-[19vw] h-[26vh] bg-transparent  text-gray-700 font-bold py-2 px-4 rounded" as={Link} href="zila"></Button>
                    

                </div>
                
            </section>
            <section className="w-full max-h-[50%] py-0 font-size overflow-hidden">
                
                <div className="bg-[#EF771C]  md:w-98% py-3  flex justify-center items-center rounded-tr-[24px] rounded-bl-[24px]">
                    <div className="ml-[35px] md:ml-12">
                        <h2 className="text-white text-center text-xs xm:text-base md:text-2xl 2xl:text-4xl font-nunito-bold">
                            {" "}
                            Conocé nuestras {" "}
                            <Button size="lg" radius="full" className="2xl:text-2xl lg:px-8 mr-[23px] lg:mr-0 text-midgray" onClick={handleEmailClick}>
                            Soluciones
                        </Button>
                        </h2>
                    </div>
                    <div className="mr-4 md:mr-12  ">
                        
                    </div>
                </div>
            </section>
            <section className="mx-0 w-full ">
                <Image  
                    classNames={{ wrapper: "min-w-full h-full"}}
                    alt="Diapositiva img-logo"
                    src="../img/home1.png"
                    width={"100%"}
                />
            </section>
            {/* <section className="w-full h-full container mx-auto">
            
                <div className="flex flex-row">
                    <div className="w-full md:w-3/4 bg-white p-4 flex flex-col justify-center items-center">
                        <div>
                  
                            <h1 className="font-nunito-bolder text-[60px] text-[#EF771C]">Proyectos y</h1>
                            <h1 className="font-nunito-bolder text-[60px] text-[#EF771C]">Alianzas estratégicas</h1>
                        </div>
                        
                        <div>
                            <Image  
                                className="object-cover w-[70%] ms-auto "
                                alt="Mapa Sur America"
                                src="../img/home3.png"
                                width="80%"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <Image  
                        className="w-full h-full"
                        alt="Mapa Sur America"
                        src="../img/home2.png"
                        width="100%"
                        />

                    </div>
                </div>
               
              
            </section> */}

            {/* <section className="h-[100%] w-full xl:px-[3%] flex items-center justify-center overflow-hidden bg-lowgrasy">
                <VideoAutoPlayer url="../img/imgHome/mapa.mkv   "/>
                
            </section> */}

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
                
                : <div className="-mt-32"> {/* ----- Mobile ----- */}

                    <Suspense fallback={<div>Loading</div>}>
                        <FrameFan />
                    </Suspense>
                </div>
            }

            <div className="w-[40%] 3xl:w-[50%] ml-auto flex justify-end md:justify-center
                            
                            overflow-hidden">
                             <a href="https://wa.me/5492236356756?text=Hola,%20visite%20tu%20pagina%20web%20y%20me%20gustaria%20mas%20informacion." 
                                target="_blank" rel="noopener noreferrer">
                            <Button
                                className="z-10 mt-4 bg-[#EF771C] font-nunito text-white 3xl:ml-32 2xl:text-2xl"
                                radius="full"
                                size="lg" 
                                href="https://wa.me/5492236356756?text=Hola,%20visite%20tu%20pagina%20web%20y%20me%20gustaria%20mas%20informacion." target="_blank"
                            >
                                <div className="absolute rounded-full left-0 z-20 p-3   shadow-r-xl shadow-[rgba(29,29,27,0.24)] border- border-gray-200 
                                    bg-gradient-to-r from-[#EF771CE5] to-[#E80303]
                                    group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-[#fe694f]
                                    group-active:bg-gradient-to-r group-active:from-[#f37a7ae5] group-active:to-[#FFFFFF]
                                "> 
                                    <BsWhatsapp className=" text-white  group-active:text-livered p- mx-1 lg:mx-2 lg:text-2xl" /> </div>
                                <span className="ml-[35px] lg:ml-10">Asesoramiento</span>
                            </Button>
                            </a>
                            

                        </div>
        </main>
        // 	<div className={'h-[5000px]'}>
        // 		<VideoScrollPlayer/>
        // </div>
    );
}
