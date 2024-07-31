"use client";
import { title } from "@/components/primitives";
import VideoScrollPlayer from "@/components/videoplayer/videoplayer";
import VideoScrubber from "@/components/videoScrubber/videoScrubber";
import FrameScrubber from "@/components/frameScrubber/frameScrubber";
// import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.cjs.jsx';


import { lazy, Suspense, useState, useEffect } from "react";

import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import NextLink from "next/link";
 import { itemsNavSolerPalau } from "@/public/data/navbarData";
import { tsaData } from "@/public/data/soler&palau/tsaData";

import { Accordion, AccordionItem } from "@nextui-org/react";

import { Chip } from "@nextui-org/chip";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Ondas01SVG } from "@/public/svg/ondas01svg";
import { Ondas02SVG } from "@/public/svg/ondas02svg";
import { Ondas03SVG } from "@/public/svg/ondas03svg";


import { ConstruccionDuradera } from "@/public/svg/construccionDuradera";
import { EficienciaEnergetica } from "@/public/svg/eficienciaEnergetica";
import { FacilInstalacion } from "@/public/svg/facilInstalacion";
import { VersatilidadAplicacion } from "@/public/svg/versatilidadAplicacion";

import { IoLogoInstagram } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";

import { Download } from "@/public/svg/download";
import SimpleSlider from "@/components/imgslider/slickSlider";
import SimpleSliderDemoImages from "@/components/imgslider/simpleSliderDemoImages";
import { Reveal } from "@/components/revealFramemotion";
import { DiferencialMaterialGalvanizado } from "@/components/diferenciales/diferencialMaterialGalvanizado";
import { DiferencialMultiposicion } from "@/components/diferenciales/diferencialMultiposicion";
import { DiferencialVolumenBajo } from "@/components/diferenciales/diferencialVolumenBajo";
import { DiferencialStockPermanente } from "@/components/diferenciales/diferencialStockPermanente";
import CardDisplay from "@/components/navbar/cardDisplay";
import { VinietaNaranjaSVG } from "@/public/svg/vinietaNaranja";
import { IoMailOutline } from "react-icons/io5";
import ScrollVideoPlayer from "@/components/videoplayer/scrollVideo";

import { TsaAuraSVG } from "@/public/svg/tsaAuraSvg";
import { Ondas04SVG } from "@/public/svg/ondas04svg";
import { TableSolerPalau } from "@/components/table/tableSoler&palau";
import { VinietaRojaSVG } from "@/public/svg/vinietaRoja";
import { MailSvg } from "@/public/svg/mailSvg";
import ModalPdf from "@/components/pdfReader/modalPdfReader";
import { ManualButton } from "@/components/custonButtons/manual";
import { AsesoramietoButton } from "@/components/custonButtons/asesoramiento";


export default function TSAPage() {

        const handleEmailClick = () => {
        const email = 'info@electroterma.com.ar';
        const subject = 'Consulta sobre equipamiento';
        const body = 'Hola! Me gustaria hacer una consulta sobre equipamiento de Electroterma';
    
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    
        // window.location.href = mailtoLink;
        window.open(mailtoLink, '_blank');
    };

    const handlePdfDownload = () => {
        const link = document.createElement('a');
        link.href = '../../TSA.pdf'; // Ruta del archivo PDF en la carpeta public
        link.download = 'tsa.pdf'; // Nombre con el que se descargará el archivo
        link.click();
      };

    const [BigScreen, setBigScreen] = useState(false);

    useEffect(() => {
        const handler = (e:any) => setBigScreen(e.matches);
        const mediaQuery = window.matchMedia('(min-width: 768px)');

        mediaQuery.addEventListener('change', handler);
        setBigScreen(mediaQuery.matches);

        return () => {
        mediaQuery.removeEventListener('change', handler);
        };
    }, []);


    const FrameFan = lazy(
        () => import("@/components/frameScrubber/frameScrubber")
    );

    const FrameFanWeb1 = lazy(
        () => import("@/components/frameScrubber/UtaMultipleVideo/frameScrubberWebUta1")
    );
	const FrameFanWeb2 = lazy(
        () => import("@/components/frameScrubber/UtaMultipleVideo/frameScrubberWebUta2")
    );
	const FrameFanWeb3 = lazy(
        () => import("@/components/frameScrubber/UtaMultipleVideo/frameScrubberWebUta3")
    );


    return (
        <div id="vent" accessKey="uta" className="h-full flex flex-col items-center justify-center  ">
			{/* ------------- VIDEO INTRO ------------- */}

            <section className="w-full flex flex-row">
                <div className="w-full h-full">
                        <Image
                            alt="Banner 1"
                            className=""
                            radius="none"
                            src="../../img/tempomatic/uta/TempomaticUtaBanner1.png"
                            width="100%"
                        />
                    </div>

            </section>

          
    {/* --------------------------- FIN MOBILE --------------------------- */}


            {/* <ScrollVideoPlayer/> */}

            {/* <VideoScrollPlayer/> */}
            {/* <FrameScrubber /> */}
            
    {/* --------------------------- VIDEO SCROLL --------------------------- */}
        <>
            {BigScreen ? 
                <>   {/* ----- Web ----- */}
                    {/* <VideoScrubber/> */}
                    
                    {/* <ScrollyVideo src="../img/solerpalau/rls/video/original.mkv" transitionSpeed={1} /> */}
                    {/* <ScrollVideoPlayer/> */}
                    {/* <VideoScrollPlayer/> */}
					<section className="h-[1000px] fixed">
						<h1 className="bg-red-400">SANTIAGO 1</h1>
					</section>
                    <Suspense fallback={<div>Loading</div>}>
                        <FrameFanWeb1 />
                    </Suspense>

					<section className="h-[1000px] fixed">
						<h1 className="bg-red-400">SANTIAGO 2</h1>
					</section>
                    <Suspense fallback={<div>Loading</div>}>
                        <FrameFanWeb2 />
                    </Suspense>

					<section className="h-[1000px] fixed">
						<h1 className="bg-red-400">SANTIAGO 3</h1>
					</section>
                    <Suspense fallback={<div>Loading</div>}>
                        <FrameFanWeb3 />
                    </Suspense>

                </> 
                
                : <div className="-mt-32"> {/* ----- Mobile ----- */}

                    <Suspense fallback={<div>Loading</div>}>
                        <FrameFan />
                    </Suspense>
                </div>
            }
            
            
            
            

        </>
    {/* --------------------------- FIN VIDEO SCROLL --------------------------- */}


            

             {/* -------------------------Tabla de especificadiones------------------------- */}

           

          
            {/* ----------------- FIN Otros Porductos ----------------- */}
            
        </div>
    );
}