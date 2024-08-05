"use client";
import { useEffect, useState, UIEvent, useRef } from "react";
import Image from "next/image";
// import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
// import "./styles.css";
import "./stylesWebUta2.css";

// import "./scrubbing.js"
import { Chip } from "@nextui-org/chip";
// import { Reveal } from "@/components/revealFramemotion";

// import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.cjs.jsx";

import Lottie from "lottie-react";
import animationData from "../../../public/lottie/ventilador.json";
import { useLottie, useLottieInteractivity } from "lottie-react";
import { useScroll } from "framer-motion";

import { ConstruccionDuradera } from "@/public/svg/construccionDuradera";
import { EficienciaEnergetica } from "@/public/svg/eficienciaEnergetica";
import { FacilInstalacion } from "@/public/svg/facilInstalacion";
import { VersatilidadAplicacion } from "@/public/svg/versatilidadAplicacion";
import { DiferencialMaterialGalvanizado } from "../../diferenciales/diferencialMaterialGalvanizado";
import { DiferencialMultiposicion } from "../../diferenciales/diferencialMultiposicion";
import { DiferencialVolumenBajo } from "../../diferenciales/diferencialVolumenBajo";
import { DiferencialStockPermanente } from "../../diferenciales/diferencialStockPermanente";

export default function FrameScrubberWebUta() {
    const frameRef = useRef(null);

    // const [BigScreen, setBigScreen] = useState(false);

    // useEffect(() => {
    //     const handler = (e) => setBigScreen(e.matches);
    //     const mediaQuery = window.matchMedia('(min-width: 768px)');

    //     mediaQuery.addEventListener('change', handler);
    //     setBigScreen(mediaQuery.matches);

    //     {BigScreen ? require("./scrubbing1") : require("./scrubbingWeb")}

    //     return () => {
    //     mediaQuery.removeEventListener('change', handler);

    //     };
    // }, []);

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
        require("./scrubbingWebUta2");
        return () => {};
    }, []);

    return (
        <div className="" id="frame2" ref={frameRef}>
            <section class="frames2 flex flex-col ">
                <div className="z-10 w-2/3 flex flex-col justify-around mx-auto  text-center font-lexend-bold text-[2.0vw] text-[#FF7800]
                    -translate-x-0 translate-y-0 bottom-20  bg-blue-00">
                    <h1>Equipo diseñado para dar soluciones de HVAC</h1>
                    <h1>en aplicaciones con altos estándares de calidad de aire </h1>
                    {/* <h1>para diversas necesidades.</h1> */}
                </div>

                <div class="holder">
                    <canvas id="hero-lightpass2" className="mb-16" />
                </div>

                <div class="story text-3xl mr-0 lg:text-5xl ">
               
                    {/* <div>
                    
                    <span className="text-end  ">
                                <h1> HOLA UTA 1</h1>
                                </span>
                    </div>
                    <div>
                    <span className="text-end  ">
                                <h1> HOLA UTA 2</h1>
                                </span>
                    </div>
                    <div>
                    <span className="text-end  ">
                                <h1> HOLA UTA 3</h1>
                                </span>
                    </div> */}


                    <div>
                        <div className=" mx-[3%] w-screen flex flex-col justify-end items-end overflow-hidden">
                            <section className="hidden my-4 md:flex">
                                <div className="flex flex-col gap-4 w-full justify-center items-start align-center ">
                                    {/* <h1> HOLA UTA 4</h1> */}
                                    {/* <DiferencialMaterialGalvanizado size={70} customWith={10} />
                                    <DiferencialMultiposicion size={70} customWith={250} />
                                    <DiferencialVolumenBajo size={70} customWith={150} />
                                    <DiferencialStockPermanente size={70} customWith={250} /> */}
                                </div>
                            </section>
                        </div>
                        {/* <span className="hidden lg:visible md:flex gap-1 flex-col items- align- justify-center  ">
                                <div className="flex flex-col space-y-4 items-center mt-6 max-h-10 ">

                                    <DiferencialMaterialGalvanizado/>
                                    <DiferencialMultiposicion/>
                                    <DiferencialVolumenBajo/>
                                    <DiferencialStockPermanente/>
                                </div>
                            </span> */}
                    </div>
                </div>
            </section>
        </div>
    );
}
