import { title } from "@/components/primitives";

// import ImageCarousel from "../../../components/imgslider/imagecarousel"
// import ImageSlider from "../../../components/imgslider/imageslider"
import SimpleSlider from "../../../components/imgslider/slickSlider";

// import EmblaCaousel from "../../../components/imgslider/EmblaCaousel"

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
        <section className="flex flex-col items-center justify-center max-w-7xl text-center gap-4 py-8 md:py-10">
			{/* <div className="inline-block max-w-lg text-center justify-center"> */}
            <div className="relative -top-10 -left-3/4 w-1/2 py-3 ">
                {/* <SimpleSlider /> */}
                <h1>hola</h1>
                <Image alt="Imagen 1" src="../img/solerpalau/tda/imgbanner/11.jpg" height={200} width={500} isZoomed radius="none" loading="lazy"/>

            </div>
            <div className=" relative ">
                <Image
                    className="absolute -top-16 left-0"
                    src="../img/solerpalau/tda/SolerPalauTda1.png"
                    width={400}
                />
                <Image
                    className="absolute -top-16 left-0"
                    src="../img/solerpalau/tda/SolerPalauTda1.png"
                    width={400}
                />
                <div className="  overflow-hidden">
                <Ondas01SVG css=" w-screen relative z-10 -top-14 left-1/2 overflow-hidden" />
                </div>
                <div className="flex flex-col justify-end items-end font-bold ">
                    <span className="text-2xl text-midgray">VENTILADOR</span>
                    <h1 className="text-5xl text-livered">CENTRIFUGO</h1>
                    <h1 className="text-5xl text-livered">MULTIPALA - TDA</h1>
                    <p className="text-lg">
                        Equipos para{" "}
                        <span className="text-livered">mejorar</span> la{" "}
                    </p>
                    <p className="text-lg">
                        <span className="text-livered">cirulación</span> del
                        aire
                    </p>
                </div>
                <Button
                    className="relative top-60 z-10 bg-livered text-white"
                    radius="full"
                    size="lg"
                >
                    Asesoramiento
                </Button>
            </div>
            <section className="mt-80">
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

                <div
                    key="video"
                    className="relative z-10 -top-60 -left-64 overflow-hidden"
                >
                    {/* <VideoPlayer /> */}
                    <VideoAutoPlayer />
                </div>
            </section>
            <section className="relative -top-52 -left-32 ">
                <Caracteristics />
                <Ondas02SVG css="absolute  -z-10 -left-1/2 -top-44 overflow-y-scroll no-scrollbar" />
            </section>

            
            <section className="relative -top-44 -left-28 flex justify-start items-start">
                
                <div>
                <Image
                    className="absolute ml-80 -top-6 left-60 "
                    src="../img/electrotermalogoletras.png"
                    width={250}
                />
                    <h1 className="text-2xl font-bold text-livered">INSTALACIONES EN OBRA</h1>
                    <Image
                    className="relative top-48 -left-10 "
                    src="../img/otamlogo.png"
                    width={250}
                    
                />
                
                
                </div>
                {/* <ElectrotermaLogo css="absolute  -z-10 -left-1/2 -top-44 overflow-y-scroll no-scrollbar" /> */}
                {/* <OtamLogo css="absolute  -z-10 -left-1/2 -top-44 overflow-y-scroll no-scrollbar" /> */}
                <Button
                    className="relative top-72 left-80 z-10 bg-livered text-white"
                    radius="full"
                    size="lg"
                >
                    Asesoramiento
                </Button>
            </section>
        </section>
    );
}
