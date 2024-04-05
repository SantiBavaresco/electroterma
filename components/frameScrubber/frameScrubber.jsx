"use client";
import { useEffect, useState, UIEvent } from "react";
import Image from "next/image";
// import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
// import "./styles.css";
import "./styles1.css";

// import "./scrubbing.js"
import { Chip } from "@nextui-org/chip";
// import { Reveal } from "@/components/revealFramemotion";

// import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.cjs.jsx";

import Lottie from "lottie-react";
import animationData from "../../public/lottie/ventilador.json";
import { useLottie, useLottieInteractivity } from "lottie-react";
import { useScroll } from "framer-motion";

import { ConstruccionDuradera } from "@/public/svg/construccionDuradera";
import { EficienciaEnergetica } from "@/public/svg/eficienciaEnergetica";
import { FacilInstalacion } from "@/public/svg/facilInstalacion";
import { VersatilidadAplicacion } from "@/public/svg/versatilidadAplicacion";

export default function FrameScrubber() {
    useEffect(() => {
        require("./scrubbing1");
        return () => {};
    }, []);

    return (
        <div className="">
            <section class="frames flex flex-col ">
                <div class="holder">
                    <canvas id="hero-lightpass" className="mb-16" />
                </div>

                <div class="story text-3xl mr-0 lg:text-5xl ">
                    <div>
                        <div className="">
                            {/* <Reveal width="100%"> */}
                                <span className="text-end  ">
                                    Envolvente <br />
                                    Galvanizada{" "}
                                </span>
                            {/* </Reveal> */}
                        </div>
                    </div>
                    <div className="m-auto">
                        {/* <Reveal> */}
                            <span className="text-end  ">
                                {" "}
                                Motor trifásico <br /> y de acople directo
                            </span>
                        {/* </Reveal> */}
                    </div>
                    <div>
                        {/* <Reveal> */}
                            <span className="text-end  ">
                                {" "}
                                Rotor palas inclinadas <br /> hacia adelante
                            </span>
                        {/* </Reveal> */}
                    </div>
                    {/* <div>

                            <h3 className=" ">Aca va la 4</h3>

                    </div>
                    <div>

                            <h3 className=" ">La ultima que va.</h3>

                    </div> */}
                    <div>
                        {/* <Reveal> */}
                            <span className="flex gap-1 flex-col items-center align-center justify-center  ">
                                <div className="flex flex-col space-y-4 items-center mt-6 max-h-10 ">
                                    <Chip
                                        className="p-10 px-2 text-md max-h-14"
                                        startContent={
                                            <ConstruccionDuradera size={38} />
                                        }
                                        variant="faded"
                                        radius="full"
                                        size="lg"
                                    >
                                        {" "}
                                        Construción Duradera
                                    </Chip>
                                    <Chip
                                        className="p-4 px-2 max-h-10"
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

                                    <Chip
                                        className="p-4 px-2  max-h-10"
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
                                        className="p-4 px-2  max-h-10"
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
                        {/* </Reveal> */}
                    </div>
                </div>
            </section>
        </div>
    );
}
