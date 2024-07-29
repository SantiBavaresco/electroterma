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
import {extendVariants, Button} from "@nextui-org/react";
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
        <main id="vent" accessKey="home" className="flex flex-col items-center justify-center gap-4 pb-4 md:pb-10 ">
           <section className="h-screen w-full flex items-center justify-center overflow-hidden bg-lowgray">
            <Image
                className=" mt-0"
                alt="Background Tempomatic"
                radius="none"
                src="../../img/home/video.png"
                width="100%"
            />
                        {/* <p className=" h-full w-max  py-[45vh] text-xl text-center align-middle">Video para la web</p> */}
                    </section>
            <Navbar/>

            <section className="relative w-full px-[3%] my-10 text-center font-lexend text-[#4C4B4B] text-[1.75vw] overflow-hidden">
                <p>
                    {/* <span className="relative  align-bottom text-livered-title ">&quot;</span> */}
                    <div className="absolute top-0 left-[23%] lg:left-[24%] xl:left-[25%] 2xl:left-[26%]">
                        <svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7625 29.2C8.82917 29.2 7.09583 28.7 5.5625 27.7C4.02917 26.7 2.79583 25.3333 1.8625 23.6C0.995834 21.8 0.5625 19.7667 0.5625 17.5C0.5625 15.6333 0.929167 13.8 1.6625 12C2.4625 10.2 3.52917 8.5 4.8625 6.89999C6.2625 5.3 7.8625 3.9 9.6625 2.7C11.5292 1.49999 13.5292 0.599994 15.6625 -5.96046e-06L19.6625 5C16.9958 6.13333 14.8292 7.53333 13.1625 9.19999C11.4958 10.8 10.6625 12.2 10.6625 13.4C10.6625 14.2 10.9625 14.9333 11.5625 15.6C12.2292 16.2667 12.9292 16.9 13.6625 17.5C15.1958 18.6333 16.2292 19.6667 16.7625 20.6C17.2958 21.4667 17.5625 22.4 17.5625 23.4C17.5625 25.1333 16.9292 26.5333 15.6625 27.6C14.3958 28.6667 12.7625 29.2 10.7625 29.2ZM32.2625 29.2C30.3292 29.2 28.5958 28.7 27.0625 27.7C25.5292 26.7 24.2958 25.3333 23.3625 23.6C22.4958 21.8 22.0625 19.7667 22.0625 17.5C22.0625 15.6333 22.4292 13.8 23.1625 12C23.9625 10.2 25.0292 8.5 26.3625 6.89999C27.7625 5.3 29.3625 3.9 31.1625 2.7C33.0292 1.49999 35.0292 0.599994 37.1625 -5.96046e-06L41.1625 5C38.4958 6.13333 36.3292 7.53333 34.6625 9.19999C32.9958 10.8 32.1625 12.2 32.1625 13.4C32.1625 14.2 32.4625 14.9333 33.0625 15.6C33.7292 16.2667 34.4292 16.9 35.1625 17.5C36.6958 18.6333 37.7292 19.6667 38.2625 20.6C38.7958 21.4667 39.0625 22.4 39.0625 23.4C39.0625 25.1333 38.4292 26.5333 37.1625 27.6C35.8958 28.6667 34.2625 29.2 32.2625 29.2Z" fill="#EF771C"/>
                        </svg>
                    </div>

                    <span className="">Desarrollamos productos con calidad e innovación</span><br/>
                    <span className="">para soluciones en  <span className="  font-lexend-bold">termomecánica</span></span><br/>
                   


                    <div className="absolute bottom-3 right-[26.5%] lg:right-[27.5%] xl:right-[28.5%] 2xl:right-[32.5%]">
                        <svg width="42" height="31" viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.00898 30.1L0.908985 25.2C3.57565 24 5.74232 22.6 7.40898 21C9.07565 19.3333 9.90898 17.9333 9.90898 16.8C9.90898 16 9.57565 15.2667 8.90898 14.6C8.30898 13.8667 7.64232 13.2333 6.90898 12.7C5.37565 11.5 4.34232 10.4667 3.80898 9.6C3.27565 8.73333 3.00898 7.76666 3.00898 6.7C3.00898 4.96666 3.64232 3.56666 4.90898 2.5C6.24232 1.43333 7.90898 0.899995 9.90898 0.899995C11.7757 0.899995 13.4757 1.39999 15.009 2.39999C16.609 3.4 17.8423 4.76666 18.709 6.49999C19.5757 8.23333 20.009 10.3 20.009 12.7C20.009 14.5667 19.6423 16.4 18.909 18.2C18.1757 20 17.109 21.7 15.709 23.3C14.3757 24.8333 12.7757 26.2 10.909 27.4C9.10899 28.6 7.14232 29.5 5.00898 30.1ZM26.309 30.1L22.209 25.2C24.8757 24 27.0423 22.6 28.709 21C30.3757 19.3333 31.209 17.9333 31.209 16.8C31.209 16 30.8757 15.2667 30.209 14.6C29.609 13.8667 28.9423 13.2333 28.209 12.7C26.6757 11.5 25.6423 10.4667 25.109 9.6C24.5757 8.73333 24.309 7.76666 24.309 6.7C24.309 4.96666 24.9423 3.56666 26.209 2.5C27.5423 1.43333 29.209 0.899995 31.209 0.899995C33.0757 0.899995 34.7757 1.39999 36.309 2.39999C37.909 3.4 39.1423 4.76666 40.009 6.49999C40.8757 8.23333 41.309 10.3 41.309 12.7C41.309 14.5667 40.9423 16.4 40.209 18.2C39.4757 20 38.409 21.7 37.009 23.3C35.6757 24.8333 34.0757 26.2 32.209 27.4C30.409 28.6 28.4423 29.5 26.309 30.1Z" fill="#EF771C"/>
                        </svg>
                    </div>
                    


                   
                </p>
                <div className="">
                        <div>

                        </div>
                        
                        
                    </div>
            </section>

            {/* <section>
                <h1>Texto con comillas</h1>
            </section> */}

            {/* ------------- Banners de prodcutos ------------- */}
            <section className="relative w-full h-[51vw] bg-gray-00 overflow-hidden">
                <div className="mx-[3%] flex flex-row gap-[2%]">
                    {/* ------------- TEMPOMATIC ------------- */}
                    <a
						className="w-[30%] hover:opacity-80 hover:translate-y-1" 
                        href="/tempomatic"
                        target="_top"
					>
                    <div className="">
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
                    </div>
                    </a>

                    {/* ------------- SOLER Y PALAU ------------- */}
                    <a
						className="w-[30%] hover:opacity-80 hover:translate-y-1" 
                        href="/soler&palau"
                        target="_top"
					>
                    <div className="">
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
                    </div>
                    </a>

                {/* ------------- DTI ------------- */}
                    <a
						className="w-[30%] hover:opacity-80 hover:translate-y-1" 
                        href="/dti"
                        target="_top"
					>
                    <div className="">
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
                    </div>
                    </a>

                    {/* ------------- ZILA ------------- */}
                    <a
						className="w-[30%] hover:opacity-80 hover:translate-y-1" 
                        href="/zila"
                        target="_top"
					>
                    <div className="">
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
                    </div>
                    </a>
                </div>

                {/* ------------- Lineas curvas ------------- */}
                <div className="absolute w-[20%] top-[40.5vw] left-[2.8%]">
					<Image  
						className="mt-0"
						alt="Linea Izquierda"
						radius="none"
						src="../../img/home/homeBanner/l1.png"
						width="100%"
					/>
				</div>
				<div className="absolute w-[20%] top-[40.5vw]  right-[2.8%]">
					<Image  
						className="mt-0"
						alt="Linea Derecha"
						radius="none"
						src="../../img/home/homeBanner/l2.png"
						width="100%"
					/>
				</div>


                {/* ------------- Consultanos ------------- */}
                <div className="relative top-[4.5%]  md:w-98% py-2  flex justify-center items-center rounded-tr-[24px] rounded-bl-[24px]">
                    <div className="ml-[35px] md:ml-12">
                        <h2 className="text-[#4C4B4B] text-center text-xs xm:text-base md:text-2xl 2xl:text-4xl font-nunito-bold">
                            {" "}
                            Conocé nuestras {" "}
                            <Button size="lg" radius="full" className="border-[4px] border-white bg-[#EF771C]  2xl:text-3xl lg:px-8 mr-[23px] lg:mr-0 text-[#FFFFFF]" 
                                onClick={handleEmailClick}>
                            Soluciones
                        </Button>
                        </h2>
                    </div>
                    <div className="mr-4 md:mr-12  ">
                        
                    </div>
                </div>

            </section>







            {/* ------------- Foto grupal ------------- */}
            <section className="mx-0 w-full ">
                <Image  
                    classNames={{ wrapper: "<-10 min-w-full h-full"}}
                    alt="Imagen grupal"
                    src="../../img/home/homeBanner/hh1.png"
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
                
                : <div className="-mt-32"> {/* ----- Mobile ----- */}

                    <Suspense fallback={<div>Loading</div>}>
                        <FrameFan />
                    </Suspense>
                </div>
            }

            {/* ------------- Direccionamiento a los productos ------------- */}
            <section className="my-10">
                <div className="mx-auto w-1/2 flex flex-row gap-[2%]">
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

            {/* ------------- PAGOS ------------- */}
            <section className="mt-10">
                <div className="mx-auto w-1/2 flex flex-row gap-[2%]">
                    {/* ------------- TEMPOMATIC ------------- */}
                    
                    <div className=" mx-auto -mt-10">
                        <Image  
                            className=" "
                            alt="tempomatic"
                            radius="none"
                            src="../../img/home/homeBanner/pagos.png"
                            width="100%"
                        />
                    </div>
                </div>    

                   

                    
            </section>.

            {/* ------------- Botones ------------- */}
            <section className="-mt-10 mb-10 w-2/3 ">
                <div className="mx-[3%] flex flex-row items-center justify-center gap-[2%] ">
                    {/* ------------- TEMPOMATIC ------------- */}
                    
                                {/* size={BigScreen ? "xl" : "lg"}  */}
                            <AsesoramietoButton screen={BigScreen ? "xl" : "lg"}/>

                            <TiendaButton size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"}/>


                            <EscribinosButton size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"} />


                    
                    
                    {/* <div className=" mx-auto -mt-10">
                        <Image  
                            className=" "
                            alt="tempomatic"
                            radius="none"
                            src="../../img/home/homeBanner/pagos.png"
                            width="100%"
                        />
                    </div> */}
                </div>    

                   

                    
            </section>



          
        </main>
        // 	<div className={'h-[5000px]'}>
        // 		<VideoScrollPlayer/>
        // </div>
    );
}
