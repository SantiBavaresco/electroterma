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
import { itemsNavSolerPalau } from "@/public/data/navbarData";
import { SolerPalauSVG } from "@/public/svg/solerPalauSVG";



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
        bg-[center_top_19vw] bg-no-repeat">

            {/* ------------- 3 columnas diferenciales superiores ------------- */}
            <section className="w-full h-[100%] px-[3%] mt-6 flex flex-col lg:grid grid-cols-[37.5%_25%_37.5%] gap-4
            ">

                {/* ------------- COL 1 ------------- */}
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

                {/* ------------- COL 2 ------------- */}
                <div className="w-full p-2 flex justify-center items-center 
                    bg-gradient-to-t from-[#ef771c] to-[#E80303] rounded-[44px]">
                    <SolerPalauSVG width={240}/>
                </div>

                {/* ------------- COL 3 ------------- */}
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
            </section>

            {/* ------------- Barra de navegacion S&P ------------- */}
            <section className="z-0  h-full w-[100%]  md:mt-20 overflow-hidden ">
                
                <div className="flex justify-center contain  w-max mx-auto mt-14 gap-2  rounded-[38px] border-1 border-gray-100 bg-[#FFFFFF]  p-4">
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4   "> 
                    {itemsNavSolerPalau?.map((item) => (
                            <a
                                className=""
                                color="foreground"
                                href={item.href}
                                key={item.key}
                            >
                                <CardDisplay data={item}  actual={""} />

                            </a>
                        ))}  
                        </div>
                    </div>
                    
                
            </section>

            {/* ------------- Asesoramiento ------------- */}
            <section className="w-auto lg:w-[54%] mx-[3%] my-10 lg:mr-auto flex flex-col lg:flex-row justify-center md:justify-between
                            overflow-hidden">
                                
                                <div className="w-[200px] md:w-[340] lg:w-[250px] lg:ml-[6%]">
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
                                className="z-10 mt-4 bg-livered font-nunito text-white w-full 3xl:ml-32 2xl:text-2xl"
                                radius="full"
                                size="lg"
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
                            
                        </section>

            {/* ------------- Imagenes presentacion ------------- */}
            <section className="w-full flex items-center justify-center mx-auto p-4 bg-transparent space-x-2">
                    <Image
                        alt="Otam Logo"
                        src="../img/imgHome/1.png"
                        width={300}
                    />
                    <Image
                        alt="Otam Logo"
                        src="../img/imgHome/2.png"
                        width={300}
                    />
                    <Image
                        alt="Otam Logo"
                        src="../img/imgHome/3.png"
                        width={300}
                    />
                    <Image
                        alt="Otam Logo"
                        src="../img/imgHome/4.png"
                        width={300}
                    />
                </section>
        </main>
        // 	<div className={'h-[5000px]'}>
        // 		<VideoScrollPlayer/>
        // </div>
    );
}
