"use client";
import { useEffect } from "react";
import Image from "next/image";
import "./styles.css";
// import "./scrubbing.js"
import { Chip } from "@nextui-org/chip";
import { Reveal } from "@/components/revealFramemotion";

import { ConstruccionDuradera } from "@/public/svg/construccionDuradera";
import { EficienciaEnergetica } from "@/public/svg/eficienciaEnergetica";
import { FacilInstalacion } from "@/public/svg/facilInstalacion";
import { VersatilidadAplicacion } from "@/public/svg/versatilidadAplicacion";

export default function VideoScrubber() {
    useEffect(() => {
        // Cargar el archivo JS después del renderizado
        // myScript();
        require("./scrubbing");

        // Devolver una función de limpieza
        return () => {
            // Cualquier limpieza que se necesite al desmontar el componente
        };
    }, []);

    return (
        <div>
            {/* <header>
                <h1>
                    <img src="logo.svg" alt="Wildrise" />
                </h1>

                <nav>
                    <a href="#">Discover</a>
                    <a href="#">Our Story</a>
                </nav>

                <nav>
                    <a href="#">The Latest</a>
                    <a href="#">Campsites</a>
                </nav>
            </header> */}
            {/* <script src="./scrubbing.js" async ></script> */}
            
            {/* <section class="intro">
                <div>
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
                </div>
            </section> */}

            {/* <section class="hero">
                <h2>Lets face it, theres nothing quite like it.</h2>
            </section>

            <section class="intro">
                <div>
                    <p>
                        At Wildrise, were all about embracing the outdoor life.
                        Weve got this deep-rooted belief that the wild, untamed
                        places out there are where you discover your true self.
                        Thats why were on a mission to ignite a lifelong love
                        affair with the great outdoors for folks.
                    </p>

                    <p>
                        <a href="#" class="button">
                            Discover Campsites
                        </a>
                    </p>
                </div>
            </section> */}

            <section class="vid" id="video-ventilador">
                <div class="holder">
                    <video
                        // type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                        playsinline
                        autobuffer
                        autoplay
                        muted
                        loop
                        // controls
                        preload="auto"
                        id="video"
                    >
                    {/* <source src="../img/solerpalau/tda/SolerPalauVideo1.mkv" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'   /> */}
                    <source src="../img/solerpalau/tda/SolerPalauVideo2.webm" type='video/ogg; codecs="theora, vorbis"'/>
                    <source src="../img/solerpalau/tda/SolerPalauVideo2.webm" type='video/webm; codecs="vp8.0, vorbis"'    />
                    

                    </video>
                </div>

                <div class="story text-5xl">
                    <div >
                            <div className="max-h-4 mr-16">
                        <Reveal width="100%">

                        <h3 className="h-fit "> Caracteristica 1</h3>
                        </Reveal>

                        </div>
                    </div>
                    <div className="m-auto">
                    <Reveal>

                        <h3 className="mr-16"> la caracteristica 2</h3>
                        </Reveal>

                    </div>
                    <div>
                    <Reveal>

                        <h3 className="mr-16"> Caracteristica 3</h3>
                        </Reveal>

                    </div>
                    <div>
                    <Reveal>

                        <h3 className="mr-16">Aca va la 4</h3>
                        </Reveal>

                    </div>
                    <div>
                    <Reveal>

                        <h3 className="mr-16">La ultima que va.</h3>
                        </Reveal>

                    </div>
                    <div>
                    <Reveal>

                        {/* <h3>Whispering secrets of a world outside.</h3> */}
                        <span className="flex gap-1 flex-col items-center align-center justify-center mr-16">
                            <div className="flex gap-2 mt-6 max-h-10">
                                <Chip
                                    className="p-4 px-2 text-xs max-h-10"
                                    startContent={
                                        <ConstruccionDuradera size={28} />
                                    }
                                    variant="faded"
                                    radius="full"
                                    size="lg"
                                >
                                    {" "}
                                    Construción Duradera
                                </Chip>
                                <Chip
                                    className="p-4 px-2 text-xs max-h-10"
                                    startContent={
                                        <FacilInstalacion size={28} />
                                    }
                                    variant="faded"
                                    radius="full"
                                    size="lg"
                                >
                                    {" "}
                                    Facil Instalacion
                                </Chip>
                            </div>

                            <div className="flex gap-1 mt-2 max-h-10">
                                <Chip
                                    className="p-4 px-2 text-xs max-h-10"
                                    startContent={
                                        <VersatilidadAplicacion size={28} />
                                    }
                                    variant="faded"
                                    radius="full"
                                    size="lg"
                                >
                                    {" "}
                                    Versatilidad de Aplicación
                                </Chip>
                                <Chip
                                    className="p-4 px-2 text-xs max-h-10"
                                    startContent={
                                        <EficienciaEnergetica size={28} />
                                    }
                                    variant="faded"
                                    radius="full"
                                    size="lg"
                                >
                                    {" "}
                                    Eficiencia Energética
                                </Chip>
                            </div>
                        </span>
                        </Reveal>
                    </div>
                    
                </div>
            </section>

            {/* <section class="savvy">
                <h3>Think of us as your adventure-savvy older sibling.</h3>

                <div>
                    <p>
                        <Image
                            src="/ice.jpg"
                            alt="Photo of camping equipment on a snowy ground"
                            width={300}
                            height={300}
                        />
                    </p>

                    <p>
                        Weve got the coolest gear and the hottest tips to help
                        you dive headfirst into natures wonders. Whether youre
                        in it for the adrenaline rush, the peaceful escape, or
                        just a breath of fresh air with friends, weve got your
                        back. Youre saying yes to preserving the environment,
                        supporting sustainable business practices, and keeping
                        the spirit of adventure alive.
                    </p>

                    <p>
                        <a href="#" class="button">
                            Read the latest tips
                        </a>
                    </p>
                </div>
            </section>

            <footer>
                <Image
                    src="/footer.svg"
                    alt="Wildrise footer"
                    width={300}
                    height={300}
                />
            </footer> */}
            {/* <script src="scrubbing.js"></script> */}
        </div>
    );
}
