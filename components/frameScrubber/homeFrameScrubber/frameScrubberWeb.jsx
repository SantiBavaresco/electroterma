"use client";
import { useEffect, useState, UIEvent, useRef } from "react";
// import Image from "next/image";
import { Image } from "@nextui-org/image";
// import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
// import "./styles.css";
import "./styles1.css";

// import "./scrubbing.js"
import { Chip } from "@nextui-org/chip";
// import { Reveal } from "@/components/revealFramemotion";

// import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.cjs.jsx";

// import Lottie from "lottie-react";
// import animationData from "../../public/lottie/ventilador.json";
// import { useLottie, useLottieInteractivity } from "lottie-react";
// import { useScroll } from "framer-motion";

// import { ConstruccionDuradera } from "@/public/svg/construccionDuradera";
// import { EficienciaEnergetica } from "@/public/svg/eficienciaEnergetica";
// import { FacilInstalacion } from "@/public/svg/facilInstalacion";
// import { VersatilidadAplicacion } from "@/public/svg/versatilidadAplicacion";
// import { DiferencialMaterialGalvanizado } from "../diferenciales/diferencialMaterialGalvanizado";
// import { DiferencialMultiposicion } from "../diferenciales/diferencialMultiposicion";
// import { DiferencialVolumenBajo } from "../diferenciales/diferencialVolumenBajo";
// import { DiferencialStockPermanente } from "../diferenciales/diferencialStockPermanente";

export default function FrameScrubber() {

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

    const html = document.documentElement;
    const canvas = document.getElementById("hero-lightpass");
    // const context = canvas.getContext("2d");
    const ventElement = document.getElementById("vent");
    let keyAttribute = ventElement.accessKey;

    useEffect(() => {
        require("./scrubbingWeb");
        return () => {};
    }, []);

    return (
        <div className="" id="frame" ref={frameRef}>
            <section class="frames flex flex-col ">
                <div class="holder">
                    <canvas id="hero-lightpass" className="mb-0" />
                </div>
                
                <div class="story text-3xl mr-0 lg:text-5xl ">
                  
                    
                   

                </div>
            </section>
        </div>
    );
}
