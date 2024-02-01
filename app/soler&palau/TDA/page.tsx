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

import { ConstruccionDuradera } from "@/public/svg/ConstruccionDuradera";
import { EficienciaEnergetica } from "@/public/svg/EficienciaEnergetica";
import { FacilInstalacion } from "@/public/svg/FacilInstalacion";
import { VersatilidadAplicacion } from "@/public/svg/VersatilidadAplicacion";

import VideoPlayer from "@/components/videoplayer/videoplayer";
import VideoAutoPlayer from "@/components/videoplayer/videoautoplayer";
import Caracteristics from "./tabs";

export default function TDAPage() {
    return (
        <main className="flex flex-col items-center justify-center max-w-7xl text-center gap-4 py-8 md:py-10 overflow-hidden">
            <div className="relative -top-12 lg:w-screen md:w-1/2 py-3 ">
                <SimpleSlider />

            </div>
            <div className=" flex flex-row-reverse w-2/3 ">
                <div className="  ">
                    <div className="flex flex-col justify-items-end items-end font-bold ">
                        <span className="text-2xl text-midgray">
                            VENTILADOR
                        </span>
                        <h1 className="text-5xl text-livered">CENTRIFUGO</h1>
                        <h1 className="text-5xl text-livered">
                            MULTIPALA - TDA
                        </h1>
                        <p className="text-lg">
                            Equipos para{" "}
                            <span className="text-livered">mejorar</span> la{" "}
                        </p>
                        <p className="text-lg">
                            <span className="text-livered">cirulación</span> del
                            aire
                        </p>
                    </div>
                </div>
                <div className=" absolute left-[12%] z-10">
                    <Image
                        // className="-top-16 left-1/2"
                        className="inline-block -top-16 left-10"
                        src="../img/solerpalau/tda/SolerPalauTda1.png"
                        width={400}
                    />
{/* --- ONDA 1 --------------- */}
                    <Ondas01SVG css=" absolute -top-12 left-[260px] z-10 " />
                    <div className="w-[1500px]">
                        <LottieWave />
                    </div>
                </div>
            </div>
            <div className="w-1/2 mt-48 flex justify-items-start">
                <Button
                    className="relative  top- z-10 bg-livered text-white"
                    radius="full"
                    size="lg"
                >
                    Asesoramiento
                </Button>
            </div>
            <section className="flex flex-row-reverse pt-4">
                <div className="relative ">
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
                        <Button
                            className="relative top-12 -left-36 z-10 bg-livered text-white"
                            radius="full"
                            size="lg"
                        >
                            Manual <Download />
                        </Button>
                    </div>
                </div>

                <div key="video" className="relative  overflow-hidden">
                    {/* <VideoPlayer /> */}
                    <VideoAutoPlayer />
                </div>
            </section>
{/* --- ONDA 1 --------------- */}

            <div className="bg-local w-[1500px] absolute transform -scale-x-100 -z-10 -left-32 top-[500px] overflow-y-scroll no-scrollbar">
                <LottieWave1 />{" "}
            </div>

            <section className="relative   ">
                <Caracteristics />
                <Ondas02SVG css="absolute  -z-10 -left-1/3 -top-44 overflow-y-scroll no-scrollbar" />
            </section>

            <section className="">
                <div className="flex flex-col justify-center items-center  w-screen m-auto ">
                    <div className="flex justify-center items-center w-3/4">
                        <div className="w-1/2 float-left">
                            <h1 className=" text-2xl font-bold text-livered">
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
