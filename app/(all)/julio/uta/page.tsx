"use client";
import { Link } from "@nextui-org/link";
import Lottie from "lottie-react";
import animationData from "../../../../public/lottie/ventilador.json";

import { Reveal } from "@/components/revealFramemotion";

import { FaRegCirclePlay } from "react-icons/fa6";
import { Image } from "@nextui-org/image";

import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import VideoAutoPlayer from "@/components/videoplayer/videoautoplayer";
import Caracteristics from "../../nosotros/tabs";
import Carousel from "./swiperCards";
// import { Carousel } from "antd";

// import ScrollVideoPlayer from "@/components/videoplayer/scrollVideo";
// import VideoScrollPlayer from "@/components/videoplayer/videoplayer";


export default function Uta() {
    return (
        <main className="flex flex-col items-center justify-center gap- pb-4  md:pb-10 overflow-hidden bg-[#eeeeee]">
            {/* ------------- Segmento 1 | Presentación ------------- */}
            {/* ------------- VIDEO INTRO ------------- */}      
                <section className="bg-[#eeeeee] w-full  flex items-center justify-center lg:py-10 ">
                    <div className=" text-center  leading-none">
                        <Reveal duration={0.8} delay={1.6}>
                            <>
                            <h1 className="text-[10vw] lg:text-[80px] font-lexend-bold text-[#EF771C]">UTA</h1>
                            <h2 className="text-[3vw] lg:text-[20px] lg:pb-10 ">UNIDAD DE TRATAMIENTO DE AIRE </h2>
                            </>
                        </Reveal>

                    </div>
                </section>
                <section className=" px-[%] lg:h-[100%] lg:w-[1920px] h-full  lg:-mt-[300px] bg-[#eeeeee]"> 

                    <video
                        className="mx-auto"
                        muted autoPlay controls={false}
                        src="../img/uta/UTA_presentacion_v1.mp4"
                        width="1920px"
                        // height="100%"
                    />
                {/* <VideoAutoPlayer url="../img/solerpalau/habitat/video/habitatPresentacion.mp4" width="100%"/> */}
                </section> 
             {/* ------------- Texto ------------- */}           
             <section className="px-[5%] lg:px-[0%] w-full h-[100%] lg:h-[1080px] flex flex-col justify-center items-center gap-[4vw] lg:gap-[2vw] first-letter 
                bg-gradient-to-b from-[#eeeeee] to-50% to-white
                ">
                    <Reveal duration={0.8} delay={0.2}>
                        <h1 className="pb-4  text-[10vw] lg:text-[80px]  font-bold lg:h- leading-none text-center">
                            Respira tranquilo. <br/>
                            Controla el aire.
                        </h1>
                    </Reveal>

                    <Reveal duration={0.8} delay={0.3}>
                        <p className="pb-10 top-0 text-[4.5vw] lg:text-[26px] lg:px-[0%] text-center leading-tight text-midgray">
                        <span className="font-bold">La UTA se adapta a tus necesidades específicas</span>, integrándose <br/>
                        fácilmente con sistemas existentes. Cumple con los más altos <br/> 
                        estándares internacionales, asegurando que cada ambiente, ya sea <br/>
                        sanitario o industrial, cumpla con los requisitos más exigentes en todo<br/>
                        momento. Con tecnología avanzada, eficiencia energética y monitoreo<br/>
                        remoto, la UTA fabricada por Tempomatic ofrece soluciones HVAC que<br/>
                        superan expectativas, brindando seguridad, personalización <br/>
                        y rendimiento sin igual.
                        </p>
                        </Reveal>
                    
                    <Reveal duration={0.8} delay={0.4}>
                    
                        <footer className="text-[4.6vw] lg:text-[32px] h-max flex">
                            <h3>Ver el video </h3> <FaRegCirclePlay className="my-auto mx-2" />
                        </footer>
                    </Reveal>
                    
                </section>


            {/* ------------- Segmento 2 | Diseño Modular ------------- */}
                {/* ------------- Titulo e Img ------------- */}            
                <section className=" mt-10 h-[120%] lg:h-full flex flex-col justify-center items-center gap-[2vw text-center">
                    <div className="px-[5%] lg:px-[20%]">
                    <Reveal duration={0.8} delay={0.3}> 
                        <>
                            <h3 className="text-[4.6vw] lg:text-[32px]">Diseñor Modular </h3>
                            <h1 className="text-[12vw] lg:text-[80px] h-[100%] lg:h-[250px] font-bold leading-none ">
                                Robusta y adaptable <br/>
                                a cualquier entorno.
                            </h1> 
                        </>

                    </Reveal>
                    </div>
                    <Reveal duration={1.2} delay={0.3}> 
                        <Image
                                    alt="product"
                                    key="img1"
                                    className="h-full pb-16 lg:-mt-10"
                                    radius="none"
                                    src="../../img/uta/uta1.png"
                                    width="1920px"
                                />
                    </Reveal>
                    {/* <Reveal duration={0.8} delay={0.2}> 

                    </Reveal> */}
                </section>

                {/* ------------- ARTICULO 2 COL ------------- */}            
                <section className="lg:-mt-10 mx-10 lg:w-[1080px] h-[70vh] lg:h-[600px] flex flex-col justify-center items-center gap-[10px] first-letter ">
                    <article className="w-full flex flex-col lg:flex-row gap-[4vw] lg:gap-[2vw] text-[4.2vw] lg:text-[26px] leading-tight">
                        <Reveal duration={1.2} delay={0.3}>
                            <p className="pb-4 lg:pl-[15%] w text-midgray">
                            Sus módulos compactos permiten una instalación sencilla y adaptable, perfecta para cualquier tipo de proyecto, desde hospitales y 
                            quirófanos que requieren aire completamente esterilizado, hasta laboratorios farmacéuticos, bioterios, industrias y hoteles. 
                            Fabricada con materiales de alta calidad que garantizan <span className="text-[#EF771C]">durabilidad y resistencia.</span> Su capacidad de personalización la convierte en una 
                            herramienta imprescindible en cualquier instalación.
                            </p>
                        </Reveal>
                        <div className="lg:w-min-1/3  space-y-[10px] mt-[10px] lg:mt-0 lg:space-y-[vw]">
                            <Reveal duration={1.2} delay={0.55}>
                                <div className="pb-4 ">
                                    <h2 className="text-[10vw] lg:text-[48px] font-bold">3,000 nits</h2>
                                    <h3 className="text-midgray">La pantalla más brillante de Apple hasta ahora</h3>
                                </div>
                            </Reveal>
                            <Reveal duration={1.2} delay={0.7}>
                                <div className="pb-4 ">
                                    <h2 className="text-[10vw] lg:text-[48px] font-bold">WR100</h2>
                                    <h3 className="text-midgray">Resistencia al agua hasta 100 metros</h3>
                                </div>
                            </Reveal>
                            <Reveal duration={1.2} delay={0.8}>
                                <div className="pb-4 ">
                                    <h2 className="text-[10vw] lg:text-[48px] font-bold">IPX6</h2>
                                    <h3 className="text-midgray">Resistencia al polvo</h3>
                                </div>
                            </Reveal>
                        </div>
                    </article>
                </section>


            {/* ------------- Segmento 3 | Eficiencia Energética ------------- */}
                {/* ------------- IMG y Articulo ------------- */}            
                <Reveal duration={1.5} delay={0.8}>
                    <section className="px-6 lg:px-[12%] lg:mx-[%] h-[70vh] lg:h-[700px] lg:w-[1920px] flex flex-col justify-center items-center lg:flex-row">
                        <div className="lg:w-[700px]">
                            <Image
                                alt="product"
                                key="img2"
                                className="w-full"
                                radius="none"
                                src="../img/uta/uta2.png"
                                width="100%"
                            />
                        </div>
                        <div className="px-4 lg:px-0 lg:w-1/3 text-[4.2vw] lg:text-[24px]">
                            <h2 className="">Máximo rendimiento. Minimo consumo.</h2>
                            <p className="text-midgray">
                                Gracias al sistema avanzado de recuperación de calor y ventiladores de bajo consumo, la UTA no solo reduce el consumo eléctrico, 
                                sino que también minimiza el impacto ambiental, cumpliendo con los estándares de eficiencia energética más exigentes.
                            </p>
                        </div>
                    </section>
                </Reveal>





            {/* ------------- Segmento 4 | Control inteligente Zila ------------- */}
                {/* ------------- Titulo e Img ------------- */}           
                
                <section className=" mt-10 h-[120%] lg:h-full flex flex-col justify-center items-center gap-[2vw text-center">
                    <div className="px-[5%] lg:px-[20%]">
                    <Reveal duration={0.8} delay={0.3}> 
                        <>
                            <h3 className="text-[4.6vw] lg:text-[32px]">Control inteligente Zila </h3>
                            <h1 className="text-[12vw] lg:text-[80px] h-[100%] lg:h-[250px] font-bold leading-none ">
                                Cada aire que toma,<br/>
                                lo estarás observando.
                            </h1> 
                        </>

                    </Reveal>
                    </div>
                    <Reveal duration={1.2} delay={0.3}> 
                        <Image
                                    alt="product"
                                    key="img1"
                                    className="h-full pb-16 lg:-mt-10"
                                    radius="none"
                                    src="../../img/uta/uta1.png"
                                    width="1920px"
                                />
                    </Reveal>
                    {/* <Reveal duration={0.8} delay={0.2}> 

                    </Reveal> */}
                </section>


                {/* ------------- ARTICULO 2 COL ------------- */}    
                <section className="lg:-mt-10 mx-10 lg:w-[1080px] h-[70vh] lg:h-[600px] flex flex-col justify-center items-center gap-[10px] first-letter ">
                    <article className="w-full flex flex-col lg:flex-row gap-[4vw] lg:gap-[2vw] text-[4.2vw] lg:text-[26px] leading-tight">
                        <Reveal duration={1.2} delay={0.3}>
                            <p className="pb-4 lg:pl-[15%] w text-midgray">
                            Sus módulos compactos permiten una instalación sencilla y adaptable, perfecta para cualquier tipo de proyecto, desde hospitales y 
                            quirófanos que requieren aire completamente esterilizado, hasta laboratorios farmacéuticos, bioterios, industrias y hoteles. 
                            Fabricada con materiales de alta calidad que garantizan <span className="text-[#EF771C]">durabilidad y resistencia.</span> Su capacidad de personalización la convierte en una 
                            herramienta imprescindible en cualquier instalación.
                            </p>
                        </Reveal>
                        <div className="lg:w-min-1/3  space-y-[10px] mt-[10px] lg:mt-0 lg:space-y-[vw]">
                            <Reveal duration={1.2} delay={0.55}>
                                <div className="pb-4 ">
                                    <h2 className="text-[10vw] lg:text-[48px] font-bold">3,000 nits</h2>
                                    <h3 className="text-midgray">La pantalla más brillante de Apple hasta ahora</h3>
                                </div>
                            </Reveal>
                            <Reveal duration={1.2} delay={0.7}>
                                <div className="pb-4 ">
                                    <h2 className="text-[10vw] lg:text-[48px] font-bold">WR100</h2>
                                    <h3 className="text-midgray">Resistencia al agua hasta 100 metros</h3>
                                </div>
                            </Reveal>
                            <Reveal duration={1.2} delay={0.8}>
                                <div className="pb-4 ">
                                    <h2 className="text-[10vw] lg:text-[48px] font-bold">IPX6</h2>
                                    <h3 className="text-midgray">Resistencia al polvo</h3>
                                </div>
                            </Reveal>
                        </div>
                    </article>
                </section>


                
            {/* ------------- Segmento 5 | Hospitales y Quirófanos ------------- */}
             {/* ------------- BANNER 1 ------------- */} 
            <section className=" bg-[url('/img/uta/utaBanner1.jpg')] w-[2000px] bg-
            bg-[center_top_0 bg-no-repeat h-[1080px] lg:h-[1440px] rounded-3xl">
                    <div className="px-[5%] lg:ml-[22%] lg:mr-[15%] pb-[35%] lg:pb-[15%] flex flex-col justify-end h-full text-[4.2vw] lg:text-[24px] text-white ">
                    <Reveal duration={0.5} delay={0.5}>
                        <>
                        <h1 className="text-[10vw] lg:text-[48px] leading-none font-lexend-bold text-[#EF771C]">UTA</h1>
                        <h3 className="text-[#EF771C] mb-[1vw]">Hospitales y Quirófanos</h3>
                        <div className="lg:w-3/5 space-y-[8vw] lg:space-y-[2vw]">
                            <h1 className="text-[12vw] lg:text-[80px] font-bold leading-none"> Cambia el aire, <br/> cambia la vida.</h1>
                            <p className="">
                            En los hospitales, la calidad del aire es fundamental para prevenir infecciones y mantener el bienestar de los pacientes y el personal. 
                            La <span className="font-bold text-mustard">UTA</span> cumple con estrictas normativas internacionales y asegura un control avanzado de la temperatura y la pureza del aire en áreas sensibles 
                            como salas de recuperación, UCI y áreas comunes. Los quirófanos requieren un ambiente controlado con aire estéril para evitar cualquier riesgo de contaminación. 
                            La <span className="font-bold text-mustard">UTA</span>, con su sistema de filtración avanzada y control de temperatura preciso, asegura condiciones óptimas para cirugías seguras y efectivas.
                            </p>
                        </div>
                        </>
                    </Reveal>
                    
                    </div>
            </section>

            {/* ------------- BANNER 1 - SLIDER IMG ------------- */} 
            <section className=" ">
                    <div className="px-[5%] lg:mx-[19%] pb-[%] lg:pb-[%] flex flex-col justify-end h-full text-[4.2vw] lg:text-[1.3vw] text-whit ">
                        <Reveal duration={0.5} delay={0.5}>
                            <>
                            {/* <h2 className="text-[#EF771C] mb-[1vw]">Carrera</h2> */}
                            <h1 className="py-10 w-4/5 text-[6vw] lg:text-[26px] font-bold leading-none"> Descubre más de tu compañero perfecto.</h1>
                            </>
                        </Reveal>
                    </div>

                    <div className="carousel carousel-center  px-[5%] lg:px-[24%]  space-x-[8vw] lg:space-x-[2vw] lg:h-[800px]">
                        
                        <div id="slide1" className="carousel-item w-[400px] flex flex-col " >
                            <img className="p-6 py-14 aspect-[7.25/10] rounded-3xl bg-white" src="../img/tempomatic/caldera_para_calefaccion/caldera_para_calefaccion_02.webp" alt="Pizza" />
                            <article className="px-3 mr-8 pt-6">
                                
                                <p className="text-midgray text-md">
                                    <span className="font-bold text-black">
                                    Información es poder.{" "}
                                    </span>
                                    Carga de Entrenamiento te da información superútil para que puedas ver el impacto de los entrenamientos en tu cuerpo con el paso del tiempo. Así será más fácil saber cuándo exigirte al máximo o cuándo descansar, sobre todo si te estás preparando para una competencia.
                                </p>
                            </article>
                        </div>

                        <div id="slide2" className="carousel-item w-[400px] flex flex-col " >
                            <img className="p-6 py-14 aspect-[7.25/10] rounded-3xl bg-white" src="../img/tempomatic/caldera_para_calefaccion/caldera_para_calefaccion_01.webp" alt="Pizza" />
                            <article className="px-3 mr-8 pt-6">
                                
                                <p className="text-midgray text-md">
                                    <span className="font-bold text-black">
                                    En sintonía con tu corazón de runner.{" "}
                                    </span>
                                    Las Zonas de Frecuencia Cardiaca te permiten consultar rápidamente tu nivel de intensidad. Las zonas de entrenamiento se calculan y personalizan de forma automática en función de tus datos de salud. Y si lo prefieres, también puedes crearlas manualmente.
                                </p>
                            </article>
                        </div>

                        <div id="slide3" className="carousel-item w-[400px] flex flex-col " >
                            <img className="p-6 py-14 aspect-[7.25/10] rounded-3xl bg-white" src="../img/tempomatic/caldera_para_calefaccion/caldera_para_calefaccion_03.webp" alt="Pizza" />
                            <article className="px-3 mr-8 pt-6">
                                
                                <p className="text-midgray text-md">
                                    <span className="font-bold text-black">
                                    Corre como relojito.{" "}
                                    </span>
                                    No pierdas de vista tus metas con funcionalidades como Ritmo y Ruta de la Carrera. Ritmo te permite establecer una meta de distancia y tiempo para correr al aire libre. Ruta de la Carrera te ayuda a superar tu último resultado o romper tu mejor marca.
                                </p>
                            </article>
                        </div>

                        <div id="slide4" className="carousel-item w-[400px] flex flex-col " >
                            <img className="p-2 py-24 aspect-[7.25/10]  rounded-3xl bg-white" src="../img/tempomatic/caldera_para_calefaccion/caldera_para_calefaccion_04.webp" alt="Pizza" />
                            <article className="px-3 mr-8 pt-6">
                                
                                <p className="text-midgray text-md">
                                    <span className="font-bold text-black">
                                    Corre como relojito.{" "}
                                    </span>
                                    No pierdas de vista tus metas con funcionalidades como Ritmo y Ruta de la Carrera. Ritmo te permite establecer una meta de distancia y tiempo para correr al aire libre. Ruta de la Carrera te ayuda a superar tu último resultado o romper tu mejor marca.
                                </p>
                            </article>
                        </div>
                        
                    </div>
                    <div className="  pl-[75%] py-4 flex gap-4 top-1/2 fle -translate-y-1/ transfor ">
                        <a href="#slide1" className="btn btn-circle bg-white">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-white">❯</a>
                    </div>
            </section>

        

        </main>
        // 	<div className={'h-[5000px]'}>
        // 		<VideoScrollPlayer/>
        // </div>
    );
}
