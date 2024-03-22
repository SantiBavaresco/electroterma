"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
// import "./styles.css";
import "./styles.css";

// import "./scrubbing.js"
import { Chip } from "@nextui-org/chip";
import { Reveal } from "@/components/revealFramemotion";

import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.cjs.jsx";

import Lottie from "lottie-react";
import animationData from "../../public/lottie/ventilador.json";
import { useLottie, useLottieInteractivity } from "lottie-react";
import { useScroll } from "framer-motion";

import { ConstruccionDuradera } from "@/public/svg/construccionDuradera";
import { EficienciaEnergetica } from "@/public/svg/eficienciaEnergetica";
import { FacilInstalacion } from "@/public/svg/facilInstalacion";
import { VersatilidadAplicacion } from "@/public/svg/versatilidadAplicacion";

// const style = {

//     top: "5%",
//     height: 500,
//     border: 3,
//     borderStyle: "solid",
//     borderRadius: 7,
//   };

//   const options = {
//     animationData: animationData,
//   };

// const LottieAnimated = () => {
//     const lottieObj = useLottie(options, style);
//     const Animation = useLottieInteractivity({
//       lottieObj,
//       mode: "scroll",
//       actions: [
//         {
//           visibility: [0.4, 0.9],
//           type: "seek",
//           frames: [0, 300],
//         },
//       ],
//     });

//     return Animation;
//   };

export default function VideoScrubber() {

    const lenis = useLenis(({ scroll }) => {
        console.log(scroll);

        const section = document.getElementById("video-ventilador");
        const vid = section?.querySelector("video");

        vid?.pause();

        const scroll1 = () => {
            const distance = window.scrollY - section.offsetTop;
            console.log(distance);
            const total = section.clientHeight - window.innerHeight;
            console.log(total);

            let percentage = distance / total;
            percentage = Math.max(0, percentage);
            percentage = Math.min(percentage, 1);
            console.log(percentage);
            window.requestAnimationFrame(() => {
                if (vid?.duration > 0) {
                    vid.currentTime = vid.duration * percentage;
                }
            });
        };
        scroll1();
    });
    // useEffect(() => {require("./scrubbing"); return () => {};
    // }, []);

    return (
        <div>
            <ReactLenis root>
                <section class="vid" id="video-ventilador" className="">
                    <div class="holder">
                        <video
                            playsinline
                            muted
                            loop
                            autoplay="autoplay"
                            autobuffer
                            preload="auto"
                            id="video"
                        >
                            <source
                                type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'
                                src="../img/solerpalau/tda/SolerPalauVideo1.mkv"
                            />
                        </video>
                    </div>

                    <div class="story text-5xl">
                        <div>
                            <div className="">
                                <Reveal width="100%">
                                    <span className="text-end mr-16">
                                        Envolvente <br />
                                        Galvanizada{" "}
                                    </span>
                                </Reveal>
                            </div>
                        </div>
                        <div className="m-auto">
                            <Reveal>
                                <span className="text-end mr-16">
                                    {" "}
                                    Motor trifásico <br /> y de acople directo
                                </span>
                            </Reveal>
                        </div>
                        <div>
                            <Reveal>
                                <span className="text-end mr-16">
                                    {" "}
                                    Rotor palas inclinadas <br /> hacia adelante
                                </span>
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
                                <span className="flex gap-1 flex-col items-center align-center justify-center mr-16">
                                    <div className="flex gap-2 mt-6 max-h-10">
                                        <Chip
                                            className="p-4 px-2 text-xs max-h-10"
                                            startContent={
                                                <ConstruccionDuradera
                                                    size={28}
                                                />
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
                                                <VersatilidadAplicacion
                                                    size={28}
                                                />
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
                                                <EficienciaEnergetica
                                                    size={28}
                                                />
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
            </ReactLenis>
        </div>
    );
}
