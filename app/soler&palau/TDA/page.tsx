import { title } from "@/components/primitives";
import SimpleSlider from "../../../components/imgslider/slickSlider";
import SimpleSliderDisplay from "../../../components/imgslider/slickSliderDisplay";
import { LottieWave, LottieWave1 } from "../../../components/lottieWave";

import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Ondas01SVG } from "@/public/svg/ondas01svg";
import { Ondas02SVG } from "@/public/svg/ondas02svg";
import { Download } from "@/public/svg/download";
// import { ElectrotermaLogo } from "@/public/svg/electrotermalogo";
// import { OtamLogo } from "@/public/svg/otamlogo";

import { ConstruccionDuradera } from "@/public/svg/construccionDuradera";
import { EficienciaEnergetica } from "@/public/svg/eficienciaEnergetica";
import { FacilInstalacion } from "@/public/svg/facilInstalacion";
import { VersatilidadAplicacion } from "@/public/svg/versatilidadAplicacion";

// import VideoPlayer from "@/components/videoplayer/videoplayer";
import VideoAutoPlayer from "@/components/videoplayer/videoautoplayer";
import VideoScrollPlayer from "@/components/videoplayer/videoplayer";

import Caracteristics from "./tabs";

export default function TDAPage() {
    return (
        <main  className=" flex flex-col items-center justify-center max-w-7xl text-center gap-4 py-8 md:py-10 overflow-hidden">
            <section className="relative -top-12 lg:w-screen md:w-1/2 py-3 ">
                <SimpleSlider />

            </section>
            <section className=" flex flex-row-reverse w-2/3 ">
                <div className="  ">
                    <div className="flex flex-col justify-items-end items-end font-lexend-bold tracking-widest ">
                        <span className="text-2xl text-midgray font-nunito  ">
                            VENTILADOR
                        </span>
                        <h1 className="text-5xl font-nunito-bold text-livered">CENTRIFUGO</h1>
                        <h1 className="text-5xl font-nunito-bold text-livered">
                            MULTIPALA - TDA
                        </h1>
                        <span className="text-3xl mt-4 text-midgray font-nunito">
                            DE DOBLE ASPIRACIóN
                        </span>
                        <div className="mt-2">
                            <p className="text-2xl">
                                Inyección de{" "}
                                <span className="text-livered">aire limpio</span>{" "}
                            </p>
                            <p className="text-2xl">
                                <span className="text-livered"></span>dentro de equipos HVAC
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative max-w-screen -left-[10%] z-10">
                    <Image
                        // className="-top-16 left-1/2"
                        className="inline-block top-20 left-10"
                        src="../img/solerpalau/tda/SolerPalauTda1.png"
                        width={300}
                    />
{/* --- ONDA 1 --------------- */}
                    <Ondas01SVG css="absolute top-32 left-[188px] z-10 "/>
                    {/* <div className="w-[1500px] absolute rotate-12 -top-[460px] left-[245px] z-20 ">
                        <LottieWave />
                    </div> */}
                </div>
            </section>

            <section className="w-1/2  flex justify-items-start">
                <Button
                    className="relative top-16 -left-8 z-10 bg-livered text-white"
                    radius="full"
                    size="lg"
                >
                    Asesoramiento
                </Button>
            </section>

            <section className="flex flex-row-reverse mt-24 pt-2 border-2 border-green-500 border-dashed">
                <div className=" ">
                    <h4 className="text-start text-xs font-bold">
                        <p>
                            El ventilador{" "}
                            <span className="text-livered">
                                Sirocco Multipala TDA{" "}
                            </span>
                            está diseñado para <br />
                            proporcionar un flujo de aire potente y constante.
                            <br />
                            <br />
                            Su función principal{" "}
                            <span className="text-livered">
                                es mejorar la circulación del aire,
                            </span>{" "}
                            reduciendo la <br /> sensación de calor y
                            promoviendo un ambiente más confortable.
                        </p>
                    </h4>
                    <div className="flex gap-2 mt-6">
                        <Chip
                            className="p-4 px-2 text-xs"
                            startContent={<ConstruccionDuradera size={28} />}
                            variant="faded"
                            radius="full"
                            size="lg"
                        >
                            {" "}
                            Construción Duradera
                        </Chip>
                        <Chip
                            className="p-4 px-2 text-xs"
                            startContent={<FacilInstalacion size={28} />}
                            variant="faded"
                            radius="full"
                            size="lg"
                        >
                            {" "}
                            Facil Instalacion
                        </Chip>
                    </div>

                    <div className="flex gap-2 mt-2">
                        <Chip
                            className="p-4 px-2 text-xs"
                            startContent={<VersatilidadAplicacion size={28} />}
                            variant="faded"
                            radius="full"
                            size="lg"
                        >
                            {" "}
                            Versatilidad de Aplicación
                        </Chip>
                        <Chip
                            className="p-4 px-2 text-xs"
                            startContent={<EficienciaEnergetica size={28} />}
                            variant="faded"
                            radius="full"
                            size="lg"
                        >
                            {" "}
                            Eficiencia Energética
                        </Chip>
                        
                    </div>
                </div>

                
                <div key="video" className="  overflow-hidden">
                    {/* <VideoPlayer /> */}
                    <VideoAutoPlayer />
                </div>
            </section>
            <section className="w-9/12 flex flex-row justify-end items-end">
                <Button
                            className="z-10 bg-livered text-white"
                            radius="full"
                            size="lg"
                        >
                            Manual <Download />
                        </Button>
            </section>
{/* --- ONDA 1 --------------- */}

{/* <div className="relative max-w-screen -left-[10%] z-10">
                    <Image
                        // className="-top-16 left-1/2"
                        className="inline-block -top-16 left-10"
                        src="../img/solerpalau/tda/SolerPalauTda1.png"
                        width={400}
                    />
{/* --- ONDA 1 --------------- 
                    <Ondas01SVG css=" absolute -top-12 left-[260px] z-10 " />
                    <div className="w-[1500px] absolute rotate-12 -top-[460px] left-[245px] z-20 ">
                        <LottieWave />
                    </div>
                </div> */}
            {/* <section className={' '}>
                <VideoScrollPlayer/>
            </section> */}
            <section className="relative text-xl max-w-full">
                <Caracteristics />
                <Ondas02SVG css="absolute  -z-10 -left-1/3 -top-44 overflow-y-scroll no-scrollbar" />
                <div className="w-[1500px] absolute -top-[700px]  transform -scale-x-100 -rotate-[25deg] -z-20 ">
                {/* <LottieWave1 /> */}
            </div>
            </section>

            <section className="">
                <div className="flex flex-col justify-center items-center  w-screen m-auto ">
                    <div className="flex justify-center items-center w-3/4">
                        <div className="w-1/2 float-left">
                            <h1 className=" text-2xl font-bold text-livered ">
                                INSTALACIONES EN OBRA
                            </h1>
                        </div>
                        <div className="w-1/2 float-right flex justify-end items-end ">
                            <Image
                                className=""
                                src="../img/electrotermalogoletras.png"
                                width={250}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <SimpleSliderDisplay />
                        </div>
                    </div>
                    {/* <ElectrotermaLogo css="absolute  -z-10 -left-1/2 -top-44 overflow-y-scroll no-scrollbar" /> */}
                    {/* <OtamLogo css="absolute  -z-10 -left-1/2 -top-44 overflow-y-scroll no-scrollbar" /> */}
                    <div className="flex justify-center items-center w-3/4">
                        <div className="w-1/2 float-left">
                            <Image
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

        </main>
    );
}
