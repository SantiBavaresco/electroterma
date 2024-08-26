"use client";
import { Link } from "@nextui-org/link";
import Lottie from "lottie-react";

import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import CardDisplay from "@/components/navbar/cardDisplay";
import SimpleSliderDemoImages from "@/components/imgslider/simpleSliderDemoImages";
import { BsWhatsapp } from "react-icons/bs";
import { itemsNavSolerPalauHome } from "@/public/data/navbarData";
import { SolerPalauSVG } from "@/public/svg/solerPalauSVG";
import CardDisplaySypHome from "@/components/navbar/cardDisplaySypHome";
import { AsesoramietoButton } from "@/components/custonButtons/asesoramiento";
import { TiendaButton } from "@/components/custonButtons/tienda";
import { useEffect, useState } from "react";
import { EscribinosButton } from "@/components/custonButtons/escribinos";



// import ScrollVideoPlayer from "@/components/videoplayer/scrollVideo";
// import VideoScrollPlayer from "@/components/videoplayer/videoplayer";
interface ItemsNavbar {
    key: string;
    label: string[];
    labelShort: string;
    img: string;
    href: string;
}

export default function SolerPalauPage() {

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
        <main className="flex flex-col h-full items-center justify-center gap-4 pb-4 md:pb-10 bg-[url('/svg/ondasSolerPalau.svg')] bg-fill
        bg-[center_top_36vw] bg-no-repeat overflow-hidden">

            {/* ------------- 3 columnas diferenciales superiores ------------- */}
            <section className="w-full px-[3%] mt-4">
                <Image
                    alt="Home banner 1"
                    className="rounded-[44-px]"
                    radius="none"
                    src="../img/solerpalau/imgbanner/SolerPalauHome4.png"
                    width="100%"
                />
            </section>
            <section className="relative w-full px-[3%] mt-10 mb-10 text-center font-lexend text-[3.0vw] lg:text-[1.6vw] overflow-hidden text-[#787878]     ">
                <p>
                    {/* <span className="relative  align-bottom text-livered-title ">&quot;</span> */}
                    <div className="absolute 
                        -top-[0%] xm:-top-[0%] sm:top-[6%] md:-top-[0%] lg:-top-[10%] xl:-top-[9%]  2xl:-top-[9%] 
                        left-[6%] lg:left-[26%] xl:left-[26%] 2xl:left-[25.5%]
                        w-[4vw] lg:w-[3vw] ">
                        <Image  
                            className=" mt-0"
                            alt="Background Tempomatic"
                            radius="none"
                            src="../../img/solerpalau/imgbanner/comillas.png"
                            width="100%"
                        />
                        {/* <svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7625 29.2C8.82917 29.2 7.09583 28.7 5.5625 27.7C4.02917 26.7 2.79583 25.3333 1.8625 23.6C0.995834 21.8 0.5625 19.7667 0.5625 17.5C0.5625 15.6333 0.929167 13.8 1.6625 12C2.4625 10.2 3.52917 8.5 4.8625 6.89999C6.2625 5.3 7.8625 3.9 9.6625 2.7C11.5292 1.49999 13.5292 0.599994 15.6625 -5.96046e-06L19.6625 5C16.9958 6.13333 14.8292 7.53333 13.1625 9.19999C11.4958 10.8 10.6625 12.2 10.6625 13.4C10.6625 14.2 10.9625 14.9333 11.5625 15.6C12.2292 16.2667 12.9292 16.9 13.6625 17.5C15.1958 18.6333 16.2292 19.6667 16.7625 20.6C17.2958 21.4667 17.5625 22.4 17.5625 23.4C17.5625 25.1333 16.9292 26.5333 15.6625 27.6C14.3958 28.6667 12.7625 29.2 10.7625 29.2ZM32.2625 29.2C30.3292 29.2 28.5958 28.7 27.0625 27.7C25.5292 26.7 24.2958 25.3333 23.3625 23.6C22.4958 21.8 22.0625 19.7667 22.0625 17.5C22.0625 15.6333 22.4292 13.8 23.1625 12C23.9625 10.2 25.0292 8.5 26.3625 6.89999C27.7625 5.3 29.3625 3.9 31.1625 2.7C33.0292 1.49999 35.0292 0.599994 37.1625 -5.96046e-06L41.1625 5C38.4958 6.13333 36.3292 7.53333 34.6625 9.19999C32.9958 10.8 32.1625 12.2 32.1625 13.4C32.1625 14.2 32.4625 14.9333 33.0625 15.6C33.7292 16.2667 34.4292 16.9 35.1625 17.5C36.6958 18.6333 37.7292 19.6667 38.2625 20.6C38.7958 21.4667 39.0625 22.4 39.0625 23.4C39.0625 25.1333 38.4292 26.5333 37.1625 27.6C35.8958 28.6667 34.2625 29.2 32.2625 29.2Z" fill="#E80303"/>
                        </svg> */}
                    </div>
                    

                    <span className="">Gracias a <span className=" text-livered-title">nuestra alianza</span>, garantizamos soluciones de </span><br/>
                    <span className="">ventilación innovadoras y eficientes para asegurar una</span><br/>
                    <span className=""> óptima calidad del aire en todos tus espacios&quot;</span><br/>

{/* 
                    <div className="absolute bottom-0 right-[26.5%] lg:right-[27.5%] xl:right-[28.5%] 2xl:right-[29.5%]">
                        <svg width="42" height="31" viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.00898 30.1L0.908985 25.2C3.57565 24 5.74232 22.6 7.40898 21C9.07565 19.3333 9.90898 17.9333 9.90898 16.8C9.90898 16 9.57565 15.2667 8.90898 14.6C8.30898 13.8667 7.64232 13.2333 6.90898 12.7C5.37565 11.5 4.34232 10.4667 3.80898 9.6C3.27565 8.73333 3.00898 7.76666 3.00898 6.7C3.00898 4.96666 3.64232 3.56666 4.90898 2.5C6.24232 1.43333 7.90898 0.899995 9.90898 0.899995C11.7757 0.899995 13.4757 1.39999 15.009 2.39999C16.609 3.4 17.8423 4.76666 18.709 6.49999C19.5757 8.23333 20.009 10.3 20.009 12.7C20.009 14.5667 19.6423 16.4 18.909 18.2C18.1757 20 17.109 21.7 15.709 23.3C14.3757 24.8333 12.7757 26.2 10.909 27.4C9.10899 28.6 7.14232 29.5 5.00898 30.1ZM26.309 30.1L22.209 25.2C24.8757 24 27.0423 22.6 28.709 21C30.3757 19.3333 31.209 17.9333 31.209 16.8C31.209 16 30.8757 15.2667 30.209 14.6C29.609 13.8667 28.9423 13.2333 28.209 12.7C26.6757 11.5 25.6423 10.4667 25.109 9.6C24.5757 8.73333 24.309 7.76666 24.309 6.7C24.309 4.96666 24.9423 3.56666 26.209 2.5C27.5423 1.43333 29.209 0.899995 31.209 0.899995C33.0757 0.899995 34.7757 1.39999 36.309 2.39999C37.909 3.4 39.1423 4.76666 40.009 6.49999C40.8757 8.23333 41.309 10.3 41.309 12.7C41.309 14.5667 40.9423 16.4 40.209 18.2C39.4757 20 38.409 21.7 37.009 23.3C35.6757 24.8333 34.0757 26.2 32.209 27.4C30.409 28.6 28.4423 29.5 26.309 30.1Z" fill="#E80303"/>
                        </svg>
                    </div> */}
                    


                   
                </p>
                <div className="">
                        <div>

                        </div>
                        
                        
                    </div>
            </section>
            {/* <section className="w-full h-[100%] px-[3%] mt-6 flex flex-col lg:grid grid-cols-[37.5%_25%_37.5%] gap-4
            ">

                
                <div className="w-full flex flex-col justify-center items-center self-start
                    bg-gradient-to-t from-[#ef771c] from-5% via-[#e80303] via-30% to-[#e80303]  rounded-[44px]">
                    <span className="rounded-[24px]">
                        <Image
                            alt="Home banner 1"
                            className="rounded-[44px]"
                            src="../img/solerpalau/imgbanner/SolerPalauHome1.jpg"
                            width="100%"
                        />
                    </span>
                    <article className="flex items-center gap-4 py-2 text-white text-start align-middle font-lexend">
                        <h1 className="text-[6.0vw] leading-none ">+60</h1>
                        <p className="m-auto">años en el <br/>mercado</p>
                    </article>
                </div>

                
                <div className="w-full p-2 flex justify-center items-center 
                    bg-gradient-to-t from-[#ef771c] to-[#E80303] rounded-[44px]">
                    <SolerPalauSVG width={240}/>
                </div>

                
                <div className="w-full  flex flex-col justify-top items-center  self-start
                    bg-gradient-to-t from-[#ef771c] from-5% via-[#e80303] via-30% to-[#e80303]  rounded-[44px]">
                    <span className="rounded-[24px]">
                        <Image
                            alt="Home banner 2"
                            className="rounded-[44px]"
                            src="../img/solerpalau/imgbanner/SolerPalauHome2.jpg"
                            width="100%"
                        />
                    </span>
                    <article className="flex items-center gap-4 py-2 text-white text-start align-middle font-lexend">
                        <h1 className="text-[6.0vw] leading-none">+90</h1>
                        <p className="m-auto">paises en el mundo cuentan
                            <br/>
                            con los servicios, productos y
                            <br/>
                            la atención de OTAM | S&P.
                        </p>
                    </article>
                </div>
            </section> */}

            {/* ------------- Barra de navegacion S&P ------------- */}
            <section className="z-0  h-full w-[100%]  md:mt-2 overflow-hidden ">
                
                <div className="flex justify-center contain  w-max mx-auto mt-14 gap-2  rounded-[38px] border-1 border-gray-100 bg-[#FFFFFF]  p-4">
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4   "> 
                    {itemsNavSolerPalauHome?.map((item) => (
                            <a
                                className=""
                                color="foreground"
                                href={item.href}
                                key={item.key}
                            >
                                {/* <CardDisplay data={item}  actual={""} /> */}
                                <CardDisplaySypHome data={item}  actual={""}/>

                            </a>
                        ))}  
                        </div>
                    </div>
                    
                
            </section>

            {/* ------------- Asesoramiento ------------- */}

            <section className="md:w-3/4 mx-[3%] mb-10 mt-4 lg:mt-16  flex flex-col items-center lg:flex-row justify-center md:justify-around
                overflow-hidden">
                    
                    <section className=" w-full lg:w-2/3 ">
                        <div className="mx-[0%] md:mx-[3%] w-full flex flex-col md:flex-row items-center justify-center mt-10 md:mt-2 gap-[14%] ">
                            
                            <TiendaButton size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"}/>
                            <EscribinosButton size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"} />

                        </div>    
                    </section>
                    {/* <div className="w-[200px] md:w-[340] lg:w-[250px] ">
                        <a href="/">
                        <Image
                            alt="Electroterma Logo"
                            className=""
                            src="../../img/electrotermalogoletras.png"
                            width="100%"
                        />
                        </a>
                    </div>
                            <a href="https://wa.me/5492236356756?text=Hola,%20visite%20tu%20pagina%20web%20y%20me%20gustaria%20mas%20informacion." 
                                target="_blank" rel="noopener noreferrer">
                            <Button
                                className="z-10 mt-4 bg-[#EDEDED] font-nunito text-[#4C4B4B] w-full 2xl:text-2xl"
                                radius="full"
                                size="lg"
                                href="https://wa.me/5492236356756?text=Hola,%20visite%20tu%20pagina%20web%20y%20me%20gustaria%20mas%20informacion." target="_blank"
                            >
                                <div className="absolute rounded-full left-0 z-20 p-3   shadow-r-xl shadow-[rgba(29,29,27,0.24)] border- border-gray-200 
                                    bg-gradient-to-r from-[#78E933] to-[#5C9104]
                                    group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-[#fe694f]
                                    group-active:bg-gradient-to-r group-active:from-[#f37a7ae5] group-active:to-[#FFFFFF]
                                "> 
                                    <BsWhatsapp className=" text-white  group-active:text-livered mx-1 lg:mx-2 lg:text-2xl" /> </div>
                                <span className="ml-[35px] lg:ml-12">Asesoramiento</span>
                            </Button>
                            </a>
                             */}
                        </section>

            {/* ------------- Imagenes presentacion ------------- */}
            {BigScreen ? <section className="w-full flex items-center justify-center mx-auto p-4 bg-transparent space-x-2">
                    <Image
                        alt="Otam Logo"
                        src="../img/home/imgHome/1.png"
                        width={450}
                    />
                    <Image
                        alt="Otam Logo"
                        src="../img/home/imgHome/2.png"
                        width={450}
                    />
                    <Image
                        alt="Otam Logo"
                        src="../img/home/imgHome/3.png"
                        width={450}
                    />
                    <Image
                        alt="Otam Logo"
                        src="../img/home/imgHome/4.png"
                        width={450}
                    />
                </section>
            :
            <section className="w-full flex items-center justify-center mx-auto p-4 bg-transparent space-x-2">
                    <Image
                        alt="Otam Logo"
                        src="../img/home/imgHome/3.png"
                        width={450}
                    />
                    <Image
                        alt="Otam Logo"
                        src="../img/home/imgHome/4.png"
                        width={450}
                    />
                </section>
            }
        </main>
        // 	<div className={'h-[5000px]'}>
        // 		<VideoScrollPlayer/>
        // </div>
    );
}
