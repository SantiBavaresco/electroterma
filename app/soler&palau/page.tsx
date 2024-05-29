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

const demoImageNames = ["1", "2", "3", "1", "2", "3"];


    return (



        <main className="flex flex-col items-center justify-center gap-4 pb-4 md:pb-10">
            
            
            <section className="z-0  h-[screen] w-[100%]  md:mt-10 overflow-hidden bg-[url('/svg/ondasSolerPalau.svg')] bg-fill
                        bg-[center_top_14rem] bg-no-repeat">
                <div className="w-full text-center text-[60px] font-lexend-bold text-[#4C4B4B]">
                    <h1>Descubrí el <span className="text-livered-title">mundo</span></h1>
                    <h1>de la <span className="text-livered-title">ventilación</span> con</h1>
                </div>
                <div className="mx-auto left-0 w-[120px] md:w-[250px] xl:top-2 xl:left-16 2xl:top-2 2xl:mb-10 2xl:-left-10">
                                <Image
                                    alt="Otam Logo"
                                    src="../img/otamlogo.png"
                                    width="100%"
                                />
                                <span className="ml-0 relative -top-4 text-[8px] md:text-xs">Distribuidor en Argentina</span>
                        </div>
                <div className="flex justify-center contain w-max mx-auto mt-14 gap-2  rounded-[38px] border-1 border-gray-100 bg-[#FFFFFF]  p-4">
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4   "> 
                    {itemsNav?.map((item) => (
                        // <p key={item.key}>{item.label}</p>
                        
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
                    <div className="w-[40%] 3xl:w-[40%] ml-auto flex justify-end md:justify-center
                            
                            overflow-hidden">
                             <a href="https://wa.me/5492236356756?text=Hola,%20visite%20tu%20pagina%20web%20y%20me%20gustaria%20mas%20informacion." 
                                target="_blank" rel="noopener noreferrer">
                            <Button
                                className="z-10 mt-4 bg-livered font-nunito text-white 3xl:ml-32 2xl:text-2xl"
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
                            

                        </div>
                <div className="w-full flex items-center justify-center mx-auto p-4 bg-transparent space-x-2">
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
                </div>
            </section>
            
            
        </main>
        // 	<div className={'h-[5000px]'}>
        // 		<VideoScrollPlayer/>
        // </div>
    );
}
