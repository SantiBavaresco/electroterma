"use client";
import { useEffect, useState, UIEvent, useRef } from "react";
import Image from "next/image";
// import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
// import "./styles.css";
import "./stylesWebUta7.css";

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

export default function FrameScrubberWebUta3() {
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
        require("./scrubbingWebUta7");
        return () => {};
    }, []);

    return (
        <div className="" id="frame7" ref={frameRef}>
            <section class="frames7 flex flex-col ">
            <div className="z-10 w-2/3 flex flex-col justify-center items-center mx-auto  text-center font-lexend-bold text-[2.0vw] text-[#FF7800]
                    -translate-x-0 translate-y-0 bottom-20  bg-blue-00">
                    <div>

                    <svg width="228" height="117" viewBox="0 0 228 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_4262_1118)">
                    <path d="M4 60C4 26.8629 30.8629 0 64 0H224V48.4932C224 81.6302 197.137 108.493 164 108.493H4V60Z" fill="#335CA7"/>
                    <path d="M4.5 60C4.5 27.1391 31.1391 0.5 64 0.5H223.5V48.4932C223.5 81.3541 196.861 107.993 164 107.993H4.5V60Z" stroke="#335CA7"/>
                    </g>
                    <g clip-path="url(#clip0_4262_1118)">
                    <path d="M100.795 71.8103L114.574 37.8157C114.7 37.5023 114.821 37.0503 114.893 36.7429C114.954 36.4897 114.978 36.2245 114.947 35.9653C114.809 34.6152 113.501 33.6448 112.639 33.6448H96.2324V37.3335H110.475L96.4735 71.2196C96.2626 71.7319 96.2384 72.3105 96.2384 72.865C96.2384 74.4382 97.1968 75.716 98.3721 75.716H122.144V72.0272L100.795 71.8103Z" fill="white" stroke="white" stroke-miterlimit="10"/>
                    <path d="M118.455 41.1249V43.7227H122.144V39.0454H120.535C119.383 39.0454 118.449 39.9797 118.449 41.1309" fill="white"/>
                    <path d="M118.455 41.1249V43.7227H122.144V39.0454H120.535C119.383 39.0454 118.449 39.9797 118.449 41.1309" stroke="white" stroke-miterlimit="10"/>
                    <path d="M118.455 46.1096V50.7929V55.434V55.4702V60.1113V64.7885V69.4718H122.144V64.7885V60.1113V55.4702V55.434V50.7929V46.1096H118.455Z" fill="white" stroke="white" stroke-miterlimit="10"/>
                    <path d="M128.853 33.6448H125.164V75.7823H128.853V33.6448Z" fill="white" stroke="white" stroke-miterlimit="10"/>
                    <path d="M144.54 45.76H134.933C133.36 45.76 132.082 47.0378 132.082 48.611V53.68L135.771 53.6499V51.3474C135.771 49.9671 136.596 48.8099 138.242 48.7978C138.254 48.7978 141.087 48.8038 141.087 48.8038C141.105 48.8038 141.123 48.8038 141.141 48.8038C142.582 48.8822 143.672 49.9189 143.697 51.5644V59.3217H134.662C133.088 59.3217 131.811 60.5995 131.811 62.1726V72.0334C131.811 74.0707 133.462 75.7222 135.499 75.7222L147.385 75.7885V48.6049C147.385 46.9655 146.108 45.76 144.534 45.76M143.697 69.7611C143.697 70.6049 143.648 71.5633 143.112 72.0817C142.666 72.5156 141.798 72.5699 140.852 72.5759C140.189 72.5759 136.349 72.594 135.499 72.588C135.517 71.6477 135.499 62.8778 135.499 62.6367C135.909 62.6186 142.636 62.5825 143.697 62.5825C143.697 63.0466 143.697 69.7611 143.697 69.7611Z" fill="white"/>
                    <path d="M144.54 45.76H134.933C133.36 45.76 132.082 47.0378 132.082 48.611V53.68L135.771 53.6499V51.3474C135.771 49.9671 136.596 48.8099 138.242 48.7978C138.254 48.7978 141.087 48.8038 141.087 48.8038C141.105 48.8038 141.123 48.8038 141.141 48.8038C142.582 48.8822 143.672 49.9189 143.697 51.5644V59.3217H134.662C133.088 59.3217 131.811 60.5995 131.811 62.1726V72.0334C131.811 74.0707 133.462 75.7222 135.499 75.7222L147.385 75.7885V48.6049C147.385 46.9655 146.108 45.76 144.534 45.76M143.697 69.7611C143.697 70.6049 143.648 71.5633 143.112 72.0817C142.666 72.5156 141.798 72.5699 140.852 72.5759C140.189 72.5759 136.349 72.594 135.499 72.588C135.517 71.6477 135.499 62.8778 135.499 62.6367C135.909 62.6186 142.636 62.5825 143.697 62.5825C143.697 63.0466 143.697 69.7611 143.697 69.7611Z" stroke="white" stroke-miterlimit="10"/>
                    <path d="M121.584 96.7336C120.909 96.7336 120.222 96.7155 119.553 96.6854L119.613 95.4799C120.264 95.51 120.927 95.5281 121.584 95.5281C139.292 95.5281 154.885 84.2268 160.382 67.4043L161.528 67.778C155.868 85.0947 139.817 96.7336 121.584 96.7336Z" fill="white" stroke="white" stroke-miterlimit="10"/>
                    <path d="M79.7831 58.9237C79.6444 57.5374 79.5781 56.121 79.5781 54.7166C79.5721 34.356 94.0981 16.967 114.109 13.3687L114.32 14.556C94.8877 18.0459 80.7776 34.9407 80.7776 54.7226C80.7776 56.0848 80.8439 57.4591 80.9765 58.8092L79.777 58.9297L79.7831 58.9237Z" fill="white" stroke="white" stroke-miterlimit="10"/>
                    <path d="M110.987 102.87L106.961 101.863L108.1 97.8789L111.94 98.8855L110.987 102.87Z" fill="white"/>
                    <path d="M109.408 7.287L113.459 6.38892L114.218 10.4634L110.33 11.2771L109.408 7.287Z" fill="white" stroke="white" stroke-miterlimit="10"/>
                    <path d="M77.8356 54.7105H76.0273C76.0273 29.5642 96.4843 9.11328 121.625 9.11328C123.831 9.11328 126.043 9.26999 128.213 9.58342L127.953 11.3736C125.874 11.0722 123.746 10.9215 121.625 10.9215C97.4789 10.9215 77.8356 30.5648 77.8356 54.7105Z" fill="white" stroke="white" stroke-miterlimit="10"/>
                    <path d="M121.625 100.302C115.001 100.302 108.612 98.9155 102.639 96.173L103.392 94.5275C109.124 97.1555 115.26 98.4936 121.625 98.4936C137.344 98.4936 151.943 89.9949 159.718 76.3127L161.291 77.2048C153.196 91.4536 137.995 100.302 121.625 100.302Z" fill="white" stroke="white" stroke-miterlimit="10"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_4262_1118" x="0" y="0" width="228" height="116.493" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4262_1118"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4262_1118" result="shape"/>
                    </filter>
                    <clipPath id="clip0_4262_1118">
                    <rect width="86.1858" height="96.8422" fill="white" transform="translate(75.7266 6.02734)"/>
                    </clipPath>
                    </defs>
                    </svg>

                    </div>

                </div>
                {/* <div className="z-10 w-2/3  mt-10flex flex-col justify-around mx-auto  text-center font-lexend-bold text-[2.0vw] text-[#FF7800]
                    -translate-x-0 translate-y-0 bottom-20  bg-blue-00">
                    <h1>Rendimiento óptimo por medio </h1>
                    <h1>de intercambio de calor </h1>
                </div> */}
                
                <div class="holder">
                    <canvas id="hero-lightpass7" className="mb-16" />
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
