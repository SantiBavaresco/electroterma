"use client";
import { title } from "@/components/primitives";
import VideoScrollPlayer from "@/components/videoplayer/videoplayer";
import VideoScrubber from "@/components/videoScrubber/videoScrubber";

import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Ondas01SVG } from "@/public/svg/ondas01svg";
import { Ondas02SVG } from "@/public/svg/ondas02svg";
import { Download } from "@/public/svg/download";
import SimpleSlider from "@/components/imgslider/slickSlider";
import SimpleSliderDemoImages from "@/components/imgslider/simpleSliderDemoImages";



export default function NosotrosPage() {
	const urlImageBanner = "../img/solerpalau/imgbanner/";
    const bannerImageNames = ["1","2","3","1","2","3"];
    
    const urlTdaImageDemo = "../img/solerpalau/tda/imgDemo/";
    const demoImageNames = ["1","2","3","1","2","3"];

    return (
        <div className="h-full flex flex-col items-center justify-center">
			<section className="relative top-0 w-full py-3 font-size">
                <div className="w-[450px] md:w-full lg:w-full">
                    <SimpleSlider url={urlImageBanner} fileName={bannerImageNames}/>
                </div>
                <div className="bg-[#E61E25]  md:w-98% py-2  flex justify-between items-center rounded-tr-2xl rounded-bl-2xl">
                    <div className="ml-12">
                        <h2 className="text-white text-2xl"> ¿Cuál es tu necesidad? </h2>
                    </div>
                    <div className="mr-12 ">
                        <Button size="lg" radius="full">Consúltanos</Button>
                    </div>
                </div>
            </section>
            {/* <section className="">
                
            </section> */}
            <section className="flex flex-col  md:flex md:flex-row-reverse w-full h-[110vh] overflow-y-hidden ">
                <div className="md:mr-16 z-20">
                    <div className="flex flex-col mt-16 justify-items-end items-end font-lexend-bold tracking-widest ">
                        <span className="text-lg lg:text-5xl text-midgray font-nunito ">
                            VENTILADOR
                        </span>
                        <h1 className="mt-4 text-3xl lg:text-[78px] leading-none font-nunito-bolder text-livered-title">CENTRÍFUGO</h1>
                        <h1 className="text-3xl lg:text-[78px] leading-none  font-nunito-bolder text-livered-title">
                            MULTIPALA - TDA
                        </h1>
                        <span className="text-lg lg:text-[43px] lg:mt-6 text-midgray font-nunito ">
                            DE DOBLE ASPIRACIÓN
                        </span>
                        <div className="mt-2 text-lg lg:text-4xl lg:mt-4 tracking-normal text-highgray">
                            <p className="">
                                Inyección de{" "}
                                <span className="text-livered">aire limpio</span>{" "}
							</p>
							<p>
                            
                                <span className="text-livered"></span>dentro de equipos HVAC
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative max-w-screen -left-[10%] top-16 -mt-10 z-10">
                    <Image
                        // className="-top-16 left-1/2"
                        alt="Ventilador"
                        className="inline-block top-36 left-12"
                        src="../img/solerpalau/tda/SolerPalauTda1.png"
                        width={370}
                    />
                    {/* --- ONDA 1 --------------- */}
                    <Ondas01SVG css="absolute top-[270px] left-[195px] z-10 "/>
                    {/* <div className="w-[1500px] absolute rotate-12 -top-[460px] left-[245px] z-20 ">
                        <LottieWave />
                    </div> */}
                </div>
				
            </section>
			<section className="w-1/2  flex justify-items-start">
                <Button
                    className="relative -top-[130px] -10 lg:-left-[150px] z-10 bg-livered text-white"
                    radius="full"
                    size="lg"
                >
                    Asesoramiento
                </Button>
            </section>
           <VideoScrubber/>
		   
		   <section className="h-[100vh]">
                <div className="flex flex-col justify-center items-center  w-full m-auto ">
                    <div className="flex justify-center items-center w-3/4">
                        <div className="w-3/4 float-left">
                            <h1 className="text-sm lg:text-2xl font-bold text-livered ">
                                INSTALACIONES EN OBRA
                            </h1>
                        </div>
                        <div className="w-1/2 float-right flex justify-end items-end ">
                            <Image
                                alt="Electroterma Logo"
                                className=""
                                src="../img/electrotermalogoletras.png"
                                width={250}
                            />
                        </div>
                    </div>

                    <div>
                        <SimpleSliderDemoImages url={urlTdaImageDemo} fileName={demoImageNames}/>
                    </div>
                    <div className="flex justify-center items-center w-3/4">
                        <div className="w-1/2 float-left">
                            <Image
                                alt="Otam Logo"
                                className=" w-1/2 float-right "
                                src="../img/otamlogo.png"
                                width={250}
                            />
                        </div>
                        <div className="w-1/2 float-right flex justify-end items-end pr-10">
                            <Button
                                className="  z-10 bg-livered text-white"
                                radius="full"
                                size="lg"
                            >
                                Asesoramiento
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
