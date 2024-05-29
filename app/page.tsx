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


// import ScrollVideoPlayer from "@/components/videoplayer/scrollVideo";
// import VideoScrollPlayer from "@/components/videoplayer/videoplayer";


export default function Home() {
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
        <main className="flex flex-col items-center justify-center gap-4 pb-4 md:pb-10 overflow-hidden">
           <section className="${h-screen w-full flex items-center justify-center overflow-hidden bg-lowgray">
                        <p className=" h-full w-max  py-[45vh] text-xl text-center align-middle">Video para la web</p>
                    </section>
            <section >
                <Image  
                    className="mt-10"
                    alt="Otam Logo"
                    src="../img/homeBanner.png"
                    width="100%"
                />
                <div className="z-10 absolute -translate-y-[31vh] flex justify-center items-center w-full my-4 gap-x-6">
                    
                    <Button className="w-[19vw] h-[26vh] bg-transparent  invisible text-gray-700 font-bold py-2 px-4 rounded" ></Button>
                    <Button className="w-[13vw] h-[26vh] bg-transparent   text-gray-700 font-bold py-2 px-4 rounded" as={Link} href="/soler&palau"></Button>
                    <Button className="w-[13vw] h-[26vh] bg-transparent invisible text-gray-700 font-bold py-2 px-4 rounded">c</Button>
                    <Button className="w-[19vw] h-[26vh] bg-transparent invisible text-gray-700 font-bold py-2 px-4 rounded">d</Button>
                    

                </div>
                
            </section>
            <section className="w-full max-h-[50%] py-0 font-size overflow-hidden">
                
                <div className="bg-[#EF771C]  md:w-98% py-3  flex justify-between items-center rounded-tr-[24px] rounded-bl-[24px]">
                    <div className="ml-[35px] md:ml-12">
                        <h2 className="text-white text-xs xm:text-base md:text-2xl 2xl:text-4xl font-nunito-bold">
                            {" "}
                            Conocé nuestras soluciones{" "}
                        </h2>
                    </div>
                    <div className="mr-4 md:mr-12  ">
                        <Button size="lg" radius="full" className="2xl:text-2xl lg:px-8 mr-[23px] lg:mr-0" onClick={handleEmailClick}>
                            Soluciones
                        </Button>
                    </div>
                </div>
            </section>
            <section className="mx-auto ">
                <Image  
                    className="mt-10"
                    alt="Diapositiva img-logo"
                    src="../img/home1.png"
                    width={"90%"}
                />
            </section>
            <section className="w-full ml-[10vw] flex flex-col ">
                <h1 className="font-nunito-bolder text-[50px] text-[#EF771C]">Estamos presentes</h1>
                <Image  
                    className="ml-[30vw] mt-10"
                    alt="Mapa Sur America"
                    src="../img/home2.png"
                    width="80%"
                />
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
                                    <BsWhatsapp className=" text-white  group-active:text-livered p- lg:text-2xl" /> </div>
                                <span className="ml-6 lg:ml-10">Asesoramiento</span>
                            </Button>
                            </a>
                            

                        </div>
            </section>
            
        </main>
        // 	<div className={'h-[5000px]'}>
        // 		<VideoScrollPlayer/>
        // </div>
    );
}
