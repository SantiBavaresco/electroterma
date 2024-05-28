"use client";
import { useEffect, useState, UIEvent, useRef } from "react";
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
import { DiferencialMaterialGalvanizado } from "../diferenciales/diferencialMaterialGalvanizado";
import { DiferencialMultiposicion } from "../diferenciales/diferencialMultiposicion";
import { DiferencialVolumenBajo } from "../diferenciales/diferencialVolumenBajo";
import { DiferencialStockPermanente } from "../diferenciales/diferencialStockPermanente";

export default function FrameScrubber() {

    const frameRef = useRef(null);

    const [BigScreen, setBigScreen] = useState(false);

    useEffect(() => {
        const handler = (e) => setBigScreen(e.matches);
        const mediaQuery = window.matchMedia('(min-width: 768px)');

        mediaQuery.addEventListener('change', handler);
        setBigScreen(mediaQuery.matches);

        return () => {
        mediaQuery.removeEventListener('change', handler);
        };
    }, []);

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //       const entry = entries[0];
    //       if (entry.isIntersecting) {
    //         require('./scrubbing1');
    //       }
    //     }, { threshold: 0 }); // Observe when any part of the element intersects the viewport
    
    //     if (frameRef.current) {
    //       observer.observe(frameRef.current);
    //     }
    
    //     return () => {
    //       if (frameRef.current) {
    //         observer.unobserve(frameRef.current);
    //       }
    //     };
    //   }, []);

    useEffect(() => {
        {BigScreen ? require("./scrubbing1") : require("./scrubbingWeb")}
        return () => {};
    }, []);

    return (
        <div className="" id="frame" ref={frameRef}>
            <section class="frames flex flex-col ">
                <div class="holder">
                    <canvas id="hero-lightpass" className="mb-16" />
                </div>

                <div class="story text-3xl mr-0 lg:text-5xl ">
                    <div>
                        <div className="">

                                <span className="text-end  ">
                                    {/* Envolvente <br />
                                    Galvanizada */}
                                    {" "}
                                </span>

                        </div>
                    </div>
                    <div className="m-auto">

                            <span className="text-end  ">
                                {" "}
                                {/* Motor trifásico <br /> y de acople directo */}
                            </span>

                    </div>
                    <div>

                            <span className="text-end  ">
                                {" "}
                                {/* Rotor palas inclinadas <br /> hacia adelante */}
                            </span>
 
                    </div> 

                    <div className="visible md:hidden">

                            <span className="text-end  ">
                                {" "}
                                {/* Niveles bajos <br /> de volumen */}
                            </span>

                    </div> 
                   
                    <div>
                            <span className="hidden lg:visible md:flex gap-1 flex-col items-center align-center justify-center  ">
                                <div className="flex flex-col space-y-4 items-center mt-6 max-h-10 ">

                                    <DiferencialMaterialGalvanizado/>
                                    <DiferencialMultiposicion/>
                                    <DiferencialVolumenBajo/>
                                    <DiferencialStockPermanente/>
                                </div>
                            </span>
                    </div>
                </div>
            </section>
        </div>
    );
}
