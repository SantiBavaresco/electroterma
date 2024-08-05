"use client";
import { useEffect, useState, UIEvent, useRef } from "react";
import Image from "next/image";
// import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
// import "./styles.css";
import "./stylesWebUta8.css";

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
        require("./scrubbingWebUta8");
        return () => {};
    }, []);

    return (
        <div className="" id="frame8" ref={frameRef}>
            <section class="frames8 flex flex-col ">
            <div className="z-10 w-2/3 flex flex-col justify-center items-center mx-auto  text-center font-lexend-bold text-[2.0vw] text-[#FF7800]
                    -translate-x-0 translate-y-0 bottom-20  bg-blue-00">
                    <div>
                    <svg width="228" height="117" viewBox="0 0 228 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_4262_1096)">
                    <path d="M4 60C4 26.8629 30.8629 0 64 0H224V48.4932C224 81.6302 197.137 108.493 164 108.493H4V60Z" fill="#E52823"/>
                    </g>
                    <g clip-path="url(#clip0_4262_1096)">
                    <path d="M40.9353 82.5783C40.9353 84.3318 42.3517 85.7522 44.1002 85.7522C45.8488 85.7522 47.2651 84.3318 47.2651 82.5783C47.2651 80.8248 45.8488 79.4044 44.1002 79.4044C42.3517 79.4044 40.9353 80.8248 40.9353 82.5783ZM36 82.5783C36 78.0902 39.6249 74.4551 44.1002 74.4551C48.5756 74.4551 52.2005 78.0939 52.2005 82.5783C52.2005 87.0627 48.572 90.7015 44.1002 90.7015C39.6285 90.7015 36 87.0664 36 82.5783Z" fill="white"/>
                    <path d="M52.7695 74.9419V79.8583H57.9969V90.167H62.9359V79.8583H68.0355V74.876L52.7695 74.9419Z" fill="white"/>
                    <path d="M74.2272 82.8052H77.6184L75.8406 79.7631L74.2308 82.8052H74.2272ZM64.2871 90.167L73.0371 74.9089H78.7135L87.5511 90.167H81.747L80.389 87.7545H71.3214L69.9343 90.167H64.2871Z" fill="white"/>
                    <path d="M88.8066 74.876L96.6112 74.843L99.3563 82.4501L102.036 74.876H109.716V90.1743H104.777V82.1243L101.744 90.1596H96.8047L93.8077 82.0291L93.742 90.1596H88.8066V74.876Z" fill="white"/>
                    <path d="M84.9954 74.7736C83.747 74.7736 82.7285 75.7949 82.7285 77.0469C82.7285 78.2989 83.747 79.3202 84.9954 79.3202C86.2439 79.3202 87.2623 78.2989 87.2623 77.0469C87.2623 75.7949 86.2439 74.7736 84.9954 74.7736ZM84.9954 78.8516C84.0025 78.8516 83.1921 78.0426 83.1921 77.0469C83.1921 76.0512 83.9989 75.2385 84.9954 75.2385C85.992 75.2385 86.7987 76.0512 86.7987 77.0469C86.7987 78.0426 85.992 78.8516 84.9954 78.8516Z" fill="white"/>
                    <path d="M85.1492 75.7546H84.0176V78.1781H84.3461V77.1567H85.2514C85.5252 77.1567 85.5909 77.4166 85.5982 77.4606V78.1744H85.9267V77.413C85.9048 77.2995 85.8318 77.1347 85.6968 77.0066C85.8464 76.8968 85.9632 76.7211 85.9632 76.4429C85.9632 75.7839 85.3463 75.762 85.1419 75.7546M85.2624 76.8236H84.3461V76.0804H85.1346C85.4595 76.0951 85.6347 76.1573 85.6347 76.4429C85.6347 76.7906 85.3281 76.8236 85.2587 76.8272" fill="white"/>
                    <path d="M108.971 61.7815L109.161 63.6595C109.161 63.6595 108.818 64.0439 107.441 64.0439C105.532 64.0439 104.923 63.1616 103.32 63.1616C101.718 63.1616 101.217 63.9633 99.4251 63.9633C97.6327 63.9633 96.7165 63.2385 95.3403 63.2385C93.9641 63.2385 92.9748 64.0439 91.4453 64.0036C90.4122 63.9743 89.3828 63.6595 89.3828 63.6595L89.6529 61.8584C89.6529 61.8584 90.4122 62.0231 91.4453 62.0488C92.9748 62.089 93.9641 61.2837 95.3403 61.2837C96.7165 61.2837 97.6327 62.0085 99.4251 62.0085C101.217 62.0085 101.718 61.2068 103.32 61.2068C104.923 61.2068 105.532 62.089 107.441 62.089C108.818 62.089 108.967 61.7815 108.967 61.7815" fill="white"/>
                    <path d="M109.125 64.5417L108.899 66.416C108.899 66.416 108.822 66.8406 107.446 66.8406C105.537 66.8406 104.927 65.9584 103.325 65.9584C101.722 65.9584 101.226 66.7601 99.4298 66.7601C97.6338 66.7601 96.7176 66.0353 95.345 66.0353C93.9725 66.0353 92.9759 66.8406 91.4501 66.8004C90.417 66.7747 89.6577 66.5331 89.6577 66.5331L89.4277 64.5453C89.4277 64.5453 90.4206 64.8199 91.4537 64.8492C92.9796 64.8894 93.9725 64.0841 95.3487 64.0841C96.7249 64.0841 97.6411 64.8126 99.4335 64.8126C101.226 64.8126 101.726 64.0072 103.328 64.0072C104.931 64.0072 105.541 64.8894 107.45 64.8894C108.826 64.8894 109.129 64.5453 109.129 64.5453" fill="white"/>
                    <path d="M103.321 60.6356C102.809 60.6356 102.419 60.7161 102.054 60.8296C101.306 60.1451 100.327 59.6399 99.2357 59.6399C98.1443 59.6399 96.9688 60.0645 96.2132 60.8077C95.9358 60.7528 95.651 60.7162 95.3407 60.7162C94.1471 60.7162 93.3367 61.3019 92.1211 61.4337C93.1286 58.4538 95.9285 56.3123 99.2394 56.3123C102.55 56.3123 105.27 58.3879 106.318 61.2945C106.318 61.2945 104.73 60.6429 103.328 60.6393" fill="white"/>
                    <path d="M92.293 67.2727C93.3808 67.0896 94.2386 66.5698 95.3447 66.5698C95.4469 66.5698 95.5893 66.5661 95.5893 66.5661C96.4216 67.7156 97.7138 68.4441 99.2397 68.4441C100.766 68.4441 102.032 67.6497 102.868 66.5185C103.011 66.5039 103.164 66.4966 103.328 66.4966C104.529 66.4966 105.157 67.0201 106.208 67.269C104.949 69.8498 102.299 71.6253 99.2397 71.6253C96.1806 71.6253 93.5451 69.8828 92.293 67.28" fill="white"/>
                    <path d="M187.631 22H126.443C124.413 22 122.76 23.6949 122.76 25.7779V86.9712C122.76 89.0541 124.41 90.7491 126.443 90.7491H187.631C189.661 90.7491 191.314 89.0541 191.314 86.9712V25.7779C191.314 23.6949 189.664 22 187.631 22ZM187.631 90.0572H126.443C124.793 90.0572 123.45 88.6734 123.45 86.9712V25.7779C123.45 24.0757 124.793 22.6919 126.443 22.6919H187.631C189.281 22.6919 190.624 24.0757 190.624 25.7779V86.9712C190.624 88.6734 189.281 90.0572 187.631 90.0572Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M170.185 55.3898C170.185 55.9316 169.71 56.3672 169.17 56.3672H167.615V43.3166H169.21C169.747 43.3166 170.185 43.7559 170.185 44.294V55.3861V55.3898ZM170.922 39.8682C170.922 39.8682 163.662 39.8462 163.516 39.8682C163.37 39.8901 162.902 39.967 162.902 40.5051V71.5594C162.902 71.8449 163.129 72.0719 163.413 72.0719H166.83C167.111 72.0719 167.341 71.8412 167.341 71.5557V59.9657H170.922C172.817 59.9657 174.346 58.4246 174.346 56.521V43.3129C174.346 41.4093 172.813 39.8682 170.922 39.8682Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M144.296 49.6131V45.1799C144.296 44.4185 144.91 43.8071 145.665 43.8071C146.421 43.8071 147.034 44.4624 147.034 45.2202V50.1622C147.045 50.4368 147.272 50.6418 147.549 50.6418H150.984C151.258 50.6418 151.48 50.4331 151.495 50.1659V44.4002C151.495 41.8633 149.447 39.8096 146.917 39.8096H144.494C141.964 39.8096 139.916 41.8669 139.916 44.4002V51.3446C139.916 53.5447 140.778 54.0133 142.734 55.8986L144.3 57.4691C146.176 59.4312 147.038 60.1378 147.038 62.3342V66.8077C147.038 67.5655 146.505 68.2976 145.746 68.2976C144.986 68.2976 144.296 67.6423 144.296 66.8846V62.0157C144.296 62.0157 144.253 61.5984 143.793 61.5948H140.42C140.164 61.5948 139.953 61.7668 139.916 62.0157V67.7082C139.916 70.2415 141.964 72.2988 144.494 72.2988H146.917C149.447 72.2988 151.495 70.2415 151.495 67.7082V60.7638C151.495 58.5636 150.557 57.6228 148.6 55.7412L147.034 54.1707C144.84 51.9743 144.296 51.74 144.296 49.6204" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M156.388 69.6814C155.654 69.6814 155.07 68.7809 155.07 67.7961C155.07 67.0457 155.337 66.4014 155.935 65.7791L157.505 68.9127C157.224 69.3849 156.815 69.6851 156.392 69.6851M156.578 58.5674C157.034 58.5674 157.428 59.0176 157.428 59.7681C157.428 60.7126 156.99 61.291 156.52 61.8694C156.165 61.2251 155.771 60.4966 155.771 59.7461C155.771 58.9957 156.184 58.5674 156.578 58.5674ZM160.214 69.2092C161.064 67.9206 161.356 66.3758 161.429 64.6369C161.426 64.5088 161.323 64.4026 161.192 64.4026H159.586C159.454 64.4026 159.349 64.5344 159.349 64.6699C159.349 64.6808 159.349 64.6699 159.349 64.6772C159.305 65.3727 159.228 66.0646 158.94 66.676L157.593 63.9926C158.56 62.898 159.425 61.8694 159.425 59.9804C159.425 57.6632 158.151 56.5466 156.64 56.5466C155.129 56.5466 153.782 57.7254 153.782 60.1305C153.782 61.2873 154.384 62.704 154.807 63.5204C153.606 64.809 152.785 65.8376 152.785 68.0707C152.785 70.0036 153.592 72.3391 155.998 72.3391C157.067 72.3391 157.83 71.8669 158.593 71.0945L159.067 72.0463C159.108 72.1561 159.21 72.2257 159.334 72.2257H161.229C161.382 72.2257 161.575 72.2257 161.659 72.039L160.221 69.2092H160.214Z" fill="white"/>
                    <path d="M159.169 27.7072L158.6 27.7364V30.0244L158.614 30.6284H159.217C171.964 30.6284 183.156 41.856 183.156 54.643C183.156 55.7413 182.911 57.2568 182.678 58.3111L182.517 59.0469H185.481L185.594 58.582C185.875 57.4069 186.073 55.7888 186.073 54.643C186.073 39.7913 174.026 27.7072 159.173 27.7072" fill="white"/>
                    <path d="M155.076 81.5167C142.329 81.5167 131.137 70.2891 131.137 57.5021C131.137 56.4221 131.217 55.3166 131.371 54.211L131.466 53.5265L128.502 53.5045L128.436 54.0317C128.29 55.1702 128.217 56.3379 128.217 57.5021C128.217 72.3538 140.263 84.4379 155.117 84.4379L155.686 84.405V82.117L155.671 81.513H155.069L155.076 81.5167Z" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_4262_1096" x="0" y="0" width="228" height="116.493" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4262_1096"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4262_1096" result="shape"/>
                    </filter>
                    <clipPath id="clip0_4262_1096">
                    <rect width="155.314" height="68.7454" fill="white" transform="translate(36 22)"/>
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
                    <canvas id="hero-lightpass8" className="mb-16" />
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
