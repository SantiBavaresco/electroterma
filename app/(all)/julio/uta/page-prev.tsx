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
        <main className="flex flex-col items-center justify-center gap- pb-4  md:pb-10 overflow-hidden">


            {/* ------------- Segmento 1 | Presentación ------------- */}
            {/* ------------- VIDEO INTRO ------------- */}      
                <section className="bg-[#eeeeee] w-full flex items-center justify-center -py-10">
                    <div className=" text-center  leading-none">
                        <Reveal duration={0.8} delay={1.6}>
                            <>
                            <h1 className="text-[10vw] lg:text-[5vw] font-lexend-bold text-[#EF771C]">UTA</h1>
                            <h2 className="text-[3vw] lg:text-[1vw] pb-10 ">UNIDAD DE TRATAMIENTO DE AIRE </h2>
                            </>
                        </Reveal>

                    </div>
                </section>
                <section className="px-[%] lg:h-[100%] -mt-[10vw] bg-[#eeeeee]"> 

                    <video
                        // className="lg:pt-[5%]"
                        muted autoPlay controls={false}
                        src="../img/uta/UTA_presentacion_v1.mp4"
                        width="100%"
                        // height="100%"
                    />
                {/* <VideoAutoPlayer url="../img/solerpalau/habitat/video/habitatPresentacion.mp4" width="100%"/> */}
                </section> 

                {/* ------------- Texto ------------- */}           
                <section className="px-[5%] lg:px-[20%] h-[100%] lg:h-[105vh] flex flex-col justify-center items-center gap-[4vw] lg:gap-[2vw] first-letter 
                bg-gradient-to-b from-[#eeeeee] to-50% to-white
                ">
                    <Reveal duration={0.8} delay={0.2}>
                        <h1 className="pb-4  text-[10vw] lg:text-[4.0vw]  font-bold lg:h- leading-none text-center">
                            Respira tranquilo. <br/>
                            Controla el aire.
                        </h1>
                    </Reveal>

                    <Reveal duration={0.8} delay={0.3}>
                        <p className="pb-10 top-0 text-[4.6vw] lg:text-[1.3vw] lg:px-[13%] text-center leading-tight text-midgray">
                        <span className="font-bold">La UTA se adapta a tus necesidades específicas</span>, integrándose fácilmente con sistemas existentes. 
                        Cumple con los más altos estándares internacionales, asegurando que cada ambiente, ya sea sanitario o industrial, 
                        cumpla con los requisitos más exigentes en todo momento. Con tecnología avanzada, eficiencia energética y monitoreo remoto, 
                        la UTA fabricada por Tempomatic ofrece soluciones HVAC que superan expectativas, brindando seguridad, personalización y rendimiento sin igual.
                        </p>
                        </Reveal>
                    
                    <Reveal duration={0.8} delay={0.4}>
                    
                        <footer className="text-[4.6vw] lg:text-[1.4vw] h-max flex">
                            <h3>Ver el video </h3> <FaRegCirclePlay className="my-auto mx-2" />
                        </footer>
                    </Reveal>
                    
                </section>
            
            {/* ------------- Segmento 2 | Diseño Modular ------------- */}
                {/* ------------- Titulo e Img ------------- */}            
                <section className=" h-[70vh] lg:h-[115vh] flex flex-col justify-center items-center gap-[2vw text-center">
                    <div className="px-[5%] lg:px-[20%]">
                    <Reveal duration={0.8} delay={0.3}> 
                        <>
                            <h3 className="text-[4.6vw] lg:text-[1.3vw]">Diseñor Modular </h3>
                            <h1 className="text-[12vw] lg:text-[4.0vw] h-[30vw] lg:h-[10vw] font-bold leading-none ">
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
                                    className="h-full pb-16"
                                    radius="none"
                                    src="../../img/uta/uta1.png"
                                    width="100%"
                                />
                    </Reveal>
                    {/* <Reveal duration={0.8} delay={0.2}> 

                    </Reveal> */}


                </section>

                {/* ------------- ARTICULO 2 COL ------------- */}            
                <section className="-mt-10 px-[10%] lg:px-[25%] h-[70vh] lg:h-[50vh] flex flex-col justify-center items-center gap-[2vw] first-letter ">
                    <article className="w-full flex flex-col lg:flex-row gap-[4vw] lg:gap-[2vw] text-[4.2vw] lg:text-[1.3vw] leading-tight">
                        <Reveal duration={1.2} delay={0.3}>
                            <p className="pb-4 lg:pl-[7%] w text-midgray">
                            Sus módulos compactos permiten una instalación sencilla y adaptable, perfecta para cualquier tipo de proyecto, desde hospitales y 
                            quirófanos que requieren aire completamente esterilizado, hasta laboratorios farmacéuticos, bioterios, industrias y hoteles. 
                            Fabricada con materiales de alta calidad que garantizan <span className="text-[#EF771C]">durabilidad y resistencia.</span> Su capacidad de personalización la convierte en una 
                            herramienta imprescindible en cualquier instalación.
                            </p>
                        </Reveal>
                        <div className="lg:w-min-1/3  space-y-[8vw] mt-[8vw] lg:mt-0 lg:space-y-[vw]">
                            <Reveal duration={1.2} delay={0.55}>
                                <div className="pb-4 ">
                                    <h2 className="text-[10vw] lg:text-[2.3vw] font-bold">3,000 nits</h2>
                                    <h3 className="text-midgray">La pantalla más brillante de Apple hasta ahora</h3>
                                </div>
                            </Reveal>
                            <Reveal duration={1.2} delay={0.7}>
                                <div className="pb-4 ">
                                    <h2 className="text-[10vw] lg:text-[2.3vw] font-bold">WR100</h2>
                                    <h3 className="text-midgray">Resistencia al agua hasta 100 metros</h3>
                                </div>
                            </Reveal>
                            <Reveal duration={1.2} delay={0.8}>
                                <div className="pb-4 ">
                                    <h2 className="text-[10vw] lg:text-[2.3vw] font-bold">IPX6</h2>
                                    <h3 className="text-midgray">Resistencia al polvo</h3>
                                </div>
                            </Reveal>
                        </div>
                    </article>
                </section>

            {/* ------------- Segmento 3 | Eficiencia Energética ------------- */}
                {/* ------------- IMG y Articulo ------------- */}            
                <Reveal duration={1.5} delay={0.8}>
                    <section className="px-[5%] lg:mx-[15%] h-[70vh] lg:h-[90vh] flex flex-col justify-center items-center lg:flex-row">
                        <div className="lg:w-2/3">
                            <Image
                                alt="product"
                                key="img2"
                                className="w-full"
                                radius="none"
                                src="../img/uta/uta2.png"
                                width="100%"
                            />
                        </div>
                        <div className="px-[7%] lg:px-0 lg:w-1/3 text-[4.2vw] lg:text-[1.3vw]">
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
                <section className=" h-[70vh] lg:h-[110vh] flex flex-col justify-center items-center gap-[2vw text-center">
                    <div className="px-[5%] lg:px-[20%]">
                    <Reveal duration={0.8} delay={0.3}> 
                        <>
                            <h3 className="text-[4.6vw] lg:text-[32px]">Control inteligente Zila</h3>
                            <h1 className="text-[12vw] lg:text-[70px] h-[30vw] lg:h-[10vw] font-bold leading-none ">
                                Cada aire que toma,<br/>
                                lo estarás observando.
                            </h1> 
                        </>

                    </Reveal>
                    </div>
                    <Reveal duration={1.2} delay={0.3}> 
                        <Image
                                    alt="product"
                                    key="img3"
                                    className="h-full pb-16"

                                    radius="none"
                                    src="../../img/uta/uta1.png"
                                    width="100%"
                                />
                    </Reveal>
                    {/* <Reveal duration={0.8} delay={0.2}> 

                    </Reveal> */}


                </section>

                {/* ------------- ARTICULO 2 COL ------------- */}    
                <section className="-mt-10 px-[10%] lg:px-[25%] h-[70vh] lg:h-[50vh] flex flex-col justify-center items-center gap-[2vw] first-letter ">
                    <article className="w-full flex flex-col lg:flex-row gap-[4vw] lg:gap-[2vw] text-[4.2vw] lg:text-[1.3vw] leading-tight">
                        <Reveal duration={1.2} delay={0.3}>
                            <p className="pb-4 lg:pl-[7%] w text-midgray">
                                Gracias a su avanzada tecnología Zila de control inteligente, la UTA ofrece una experiencia de gestión de aire integral y personalizada. 
                                Permite monitorear en tiempo real la calidad del aire,  <span className="text-[#EF771C]">ajustar la temperatura y los flujos</span>  {" "}
                                de aire según las necesidades específicas del entorno, garantizando un ambiente saludable y confortable. 
                                Su compatibilidad con sistemas de monitoreo remoto ofrece un control total y flexible desde cualquier lugar.
                            </p>
                        </Reveal>
                        <div className="lg:w-min-1/3  space-y-[8vw] mt-[8vw] lg:mt-0 lg:space-y-[vw]">
                            <Reveal duration={1.2} delay={0.55}>
                                <div className="pb-4 ">
                                    <h2 className="text-[10vw] lg:text-[2.3vw] font-bold">3,000 nits</h2>
                                    <h3 className="text-midgray">La pantalla más brillante de Apple hasta ahora</h3>
                                </div>
                            </Reveal>
                            <Reveal duration={1.2} delay={0.7}>
                                <div className="pb-4 ">
                                    <h2 className="text-[10vw] lg:text-[2.3vw] font-bold">WR100</h2>
                                    <h3 className="text-midgray">Resistencia al agua hasta 100 metros</h3>
                                </div>
                            </Reveal>
                            <Reveal duration={1.2} delay={0.8}>
                                <div className="pb-4 ">
                                    <h2 className="text-[10vw] lg:text-[2.3vw] font-bold">IPX6</h2>
                                    <h3 className="text-midgray">Resistencia al polvo</h3>
                                </div>
                            </Reveal>
                        </div>
                    </article>
                </section>


            {/* ------------- Segmento 5 | Hospitales y Quirófanos ------------- */}
             {/* ------------- BANNER 1 ------------- */} 
            <section className=" bg-[url('/img/uta/utaBanner1.jpg')] bg-cover lg:bg-fill
            bg-[center_top_0vw] bg-no-repeat h-[100vh] lg:h-[160vh]">
                    <div className="px-[5%] lg:mx-[19%] pb-[35%] lg:pb-[15%] flex flex-col justify-end h-full text-[4.2vw] lg:text-[1.3vw] text-white ">
                    <Reveal duration={0.5} delay={0.5}>
                        <>
                        <h1 className="text-[10vw] lg:text-[3vw] leading-none font-lexend-bold text-[#EF771C]">UTA</h1>
                        <h3 className="text-[#EF771C] mb-[1vw]">Hospitales y Quirófanos</h3>
                        <div className="lg:w-3/5 space-y-[8vw] lg:space-y-[2vw]">
                            <h1 className="text-[12vw] lg:text-[4.0vw] font-bold leading-none"> Cambia el aire, <br/> cambia la vida.</h1>
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
                            <h1 className="py-10 w-4/5 text-[6vw] lg:text-[1.6vw] font-bold leading-none"> Descubre más de tu compañero perfecto.</h1>
                            </>
                        </Reveal>
                    </div>

                    <div className="carousel carousel-center  px-[5%] lg:px-[24%]  space-x-[8vw] lg:space-x-[2vw] lg:h-[40vw]">
                        
                        <div id="slide1" className="carousel-item w-[38%] flex flex-col " >
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

                        <div id="slide2" className="carousel-item w-[38%] flex flex-col " >
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

                        <div id="slide3" className="carousel-item w-[38%] flex flex-col " >
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

                        <div id="slide4" className="carousel-item w-[38%] flex flex-col " >
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

        
            {/* ------------- Segmento 6 | Laboratorios y Bioterios ------------- */}
            {/* ------------- BANNER 2 ------------- */} 
            <section className=" bg-[url('/img/uta/utaBanner2.jpg')] bg-cover lg:bg-fill
            bg-[center_top_0vw] bg-no-repeat h-[100vh] lg:h-[160vh]">
                    <div className="px-[5%] lg:mx-[19%] pb-[35%] lg:pb-[12%] flex flex-col justify-end h-full text-[4.2vw] lg:text-[1.3vw] text-white ">
                    <Reveal duration={0.5} delay={0.5}>
                        <>
                        <h1 className="text-[10vw] lg:text-[3vw] leading-none font-lexend-bold text-[#EF771C]">UTA</h1>
                        <h3 className="text-[#EF771C] mb-[1vw]">Laboratorios y Bioterios</h3>
                        <div className="lg:w-full space-y-[8vw] lg:space-y-[2vw]">
                            <h1 className=" text-[12vw] lg:text-[4.0vw] font-bold leading-none"> Condiciones precisas, <br/>resultados exactos.</h1>
                            <p className="lg:w-3/5">
                            El control del ambiente es esencial para proteger la calidad de los experimentos y el bienestar de los animales. 
                            La <span className="font-bold text-mustard">UTA</span> proporciona un entorno estable, regulado y limpio, con sistemas de control remoto que aseguran el monitoreo constante.
                            </p>
                        </div>
                        </>
                    </Reveal>
                    
                    </div>
            </section>

            {/* ------------- BANNER 2 - SLIDER IMG ------------- */} 
            <section className=" ">
                    <div className="px-[5%] lg:mx-[19%] pb-[%] lg:pb-[%] flex flex-col justify-end h-full text-[4.2vw] lg:text-[1.3vw] text-whit ">
                        <Reveal duration={0.5} delay={0.5}>
                            <>
                            {/* <h2 className="text-[#EF771C] mb-[1vw]">Carrera</h2> */}
                            <h1 className="py-10 w-full text-[6vw] lg:text-[1.6vw] font-bold leading-none"> Pedal a fondo.</h1>
                            </>
                        </Reveal>
                    </div>

                    <div className="carousel carousel-center  px-[5%] lg:px-[24%]  space-x-[8vw] lg:space-x-[2vw] lg:h-[40vw]">
                        
                        <div id="slide2.1" className="carousel-item w-[38%] flex flex-col " >
                            <img className="p-6 py-14 aspect-[7.25/10]  rounded-3xl bg-white" src="../img/tempomatic/generador_de_aire_caliente/generador_de_aire_caliente_01.webp" alt="Pizza" />
                            <article className="px-3 mr-8 pt-6">
                                
                                <p className="text-midgray text-md">
                                    <span className="font-bold text-black">
                                    Kilómetros por hora, ahora.{" "}
                                    </span>
                                    Las Visualizaciones de Entrenamiento te permiten seguir de cerca los datos que más te interesan y tener tu velocidad actual justo donde la necesitas. Gira la Digital Crown para ver más métricas, como Zonas de Frecuencia Cardiaca, Tramos y Desnivel.
                                </p>
                            </article>
                        </div>

                        <div id="slide2.2" className="carousel-item w-[38%] flex flex-col " >
                            <img className="p-6 py-14 aspect-[7.25/10] rounded-3xl bg-white" src="../img/tempomatic/generador_de_aire_caliente/generador_de_aire_caliente_02.webp" alt="Pizza" />
                            <article className="px-3 mr-8 pt-6">
                                
                                <p className="text-midgray text-md">
                                    <span className="font-bold text-black">
                                    Tus datos en una pantalla más grande.{" "}
                                    </span>
                                    Inicia un entrenamiento en bici desde el Ultra 2 y de inmediato aparecerá en tu iPhone como una Actividad en Vivo. Así podrás ver tu rendimiento con total facilidad y seguridad cuando llevas el teléfono en el manubrio.
                                </p>
                            </article>
                        </div>

                        <div id="slide2.3" className="carousel-item w-[38%] flex flex-col " >
                            <img className="p-16 pt-24 aspect-[7.25/10]  rounded-3xl bg-white" src="../img/tempomatic/generador_de_aire_caliente/generador_de_aire_caliente_03.webp" alt="Pizza" />
                            <article className="px-3 mr-8 pt-6">
                                
                                <p className="text-midgray text-md">
                                    <span className="font-bold text-black">
                                    Conexión con sensores. {" "}
                                    </span>
                                    Conecta el Ultra 2 con accesorios Bluetooth para consultar datos clave como cadencia y potencia. Más fácil que andar en bicicleta.
                                </p>
                            </article>
                        </div>

                        <div id="slide2.4" className="carousel-item w-[38%] flex flex-col " >
                            <img className="p-2 py-24 aspect-[7.25/10]  rounded-3xl bg-white" src="../img/tempomatic/generador_de_aire_caliente/generador_de_aire_caliente_04.webp" alt="Pizza" />
                            <article className="px-3 mr-8 pt-6">
                                
                                <p className="text-midgray text-md">
                                    <span className="font-bold text-black">
                                    Zonas de Potencia.{" "}
                                    </span>
                                    Cuando se conecta a un medidor de potencia, el Ultra 2 calcula automáticamente tu Umbral de Potencia Funcional, que es el nivel máximo de intensidad que teóricamente puedes mantener durante una hora. Así podrás ver en qué Zona de Potencia estás y el tiempo que pasas en ella para seguir superándote.
                                </p>
                            </article>
                        </div>
                        
                    </div>
                    <div className="  pl-[75%] py-4 flex gap-4 top-1/2 fle -translate-y-1/ transfor ">
                    <a href="#slide2.1" className="btn btn-circle bg-white">❮</a>
                    <a href="#slide2.4" className="btn btn-circle bg-white">❯</a>
                    </div>

            </section>

            {/* ------------- Segmento 7 | Industrias ------------- */}
            {/* ------------- BANNER 3 ------------- */} 
            <section className=" bg-[url('/img/uta/utaBanner3.jpg')] bg-cover lg:bg-fill
            bg-[center_top_0vw] bg-no-repeat h-[100vh] lg:h-[160vh]">
                    <div className="px-[5%] lg:mx-[19%] pb-[35%] lg:pb-[15%] flex flex-col justify-end h-full text-[4.2vw] lg:text-[1.3vw] text-white ">
                    <Reveal duration={0.5} delay={0.5}>
                        <>
                        <h1 className="text-[10vw] lg:text-[3vw] leading-none font-lexend-bold text-[#EF771C]">UTA</h1>
                        <h3 className="text-[#EF771C] mb-[1vw]">Industrias</h3>
                        <div className=" w-full space-y-[8vw] lg:space-y-[2vw]">
                            <h1 className="text-[12vw] w-4/5 lg:text-[4.0vw] font-bold leading-none"> Potencia robusta, <br/>grandes proyectos.</h1>
                            <p className="lg:w-3/5">
                            En entornos industriales, donde se requieren sistemas robustos que puedan soportar altos niveles de operación, la <span className="font-bold text-mustard">UTA</span> es la solución ideal. 
                            Su capacidad para manejar grandes volúmenes de aire y garantizar una ventilación adecuada asegura el correcto funcionamiento de las instalaciones y 
                            protege la salud de los trabajadores.
                            </p>
                        </div>
                        </>
                    </Reveal>
                    
                    </div>
            </section>

            {/* ------------- BANNER 3 - SLIDER IMG ------------- */} 
            <section className=" ">
                    <div className="px-[5%] lg:mx-[19%] pb-[%] lg:pb-[%] flex flex-col justify-end h-full text-[4.2vw] lg:text-[1.3vw] text-whit ">
                    <Reveal duration={0.5} delay={0.5}>
                        <>
                        {/* <h2 className="text-[#EF771C] mb-[1vw]">Carrera</h2> */}
                        <h1 className="py-10 w-full text-[6vw] lg:text-[1.6vw] font-bold leading-none"> Funcionalidades que hacen olas.</h1>

                        
                        </>
                    </Reveal>


                    
                    </div>

                    
                    {/* <Carousel /> */}
                    {/* <Carousel */}
                    

                    <div className="carousel carousel-center  px-[5%] lg:px-[24%]  space-x-[8vw] lg:space-x-[2vw] lg:h-[41vw]">
                        
                        <div id="slide3.1" className="carousel-item w-[38%] flex flex-col " >
                            <img className="p-6 py-24 aspect-[7.25/10]  rounded-3xl bg-white" src="../img/tempomatic/unidad_manejadora_de_aire/unidad_manejadora_de_aire_01.webp" alt="Pizza" />
                            <article className="px-3 mr-8 pt-6">
                                
                                <p className="text-midgray text-md">
                                    <span className="font-bold text-black">
                                    Piscina o aguas abiertas. {" "}
                                    </span>
                                    En la piscina o en el mar, el Ultra 2 detecta al instante tu brazada, calcula la distancia y el ritmo de las series, y te ofrece datos avanzados como el índice SWOLF. Y también puedes ver la temperatura del agua directamente desde tu entrenamiento.
                                </p>
                            </article>
                        </div>

                        <div id="slide3.2" className="carousel-item w-[38%] flex flex-col " >
                            <img className="p-16 py-16 aspect-[7.25/10]  rounded-3xl bg-white" src="../img/tempomatic/unidad_manejadora_de_aire/unidad_manejadora_de_aire_02.webp" alt="Pizza" />
                            <article className="px-3 mr-8 pt-6">
                                
                                <p className="text-midgray text-md">
                                    <span className="font-bold text-black">
                                    Multideporte. Tus métricas en relevo automático. {" "}
                                    </span>
                                    El Ultra 2 cambia automáticamente de natación a ciclismo y carrera, y registra los datos de cada disciplina.
                                </p>
                            </article>
                        </div>

                        <div id="slide3.3" className="carousel-item w-[38%] flex flex-col " >
                            <img className="p-6 py-14 aspect-[7.25/10] rounded-3xl bg-white" src="../img/tempomatic/unidad_manejadora_de_aire/unidad_manejadora_de_aire_03.webp" alt="Pizza" />
                            <article className="px-3 mr-8 pt-6">
                                
                                <p className="text-midgray text-md">
                                    <span className="font-bold text-black">
                                    Fluye con tu estilo. {" "}
                                    </span>
                                    Los Entrenamientos Personalizados te permiten crear rutinas a tu medida. Tu Apple Watch también te guía automáticamente durante intervalos cronometrados de entrenamiento y recuperación en la piscina, con respuestas hápticas que te indican cuándo te toca el siguiente intervalo.
                                </p>
                            </article>
                        </div>

                        <div id="slide3.4" className="carousel-item w-[38%] flex flex-col " >
                            <img className="p-2 py-32 aspect-[7.25/10] rounded-3xl bg-white" src="../img/tempomatic/unidad_manejadora_de_aire/unidad_manejadora_de_aire_04.webp" alt="Pizza" />
                            <article className="px-3 mr-8 pt-6">
                                
                                <p className="text-midgray text-md">
                                    <span className="font-bold text-black">
                                    Nada sabiéndolo todo.{" "}
                                    </span>
                                    Conoce exactamente lo que viene después con la nueva vista A Continuación. En cada entrenamiento personalizado que crees, el Ultra 2 te permite saber cuánto queda del intervalo actual y lo que sigue.
                                </p>
                            </article>
                        </div>

                        <div id="slide3.5" className="carousel-item w-[38%] flex flex-col " >
                            <img className="p-2 py-16 aspect-[7.25/10]  rounded-3xl bg-white" src="../img/tempomatic/caja_ventiladora/caja_ventiladora_01.webp" alt="Pizza" />
                            <article className="px-6 pt-6">
                                
                                <p className="text-midgray text-md">
                                    <span className="font-bold text-black">
                                    Entrenamientos personalizados en apps de terceros.{" "}
                                    </span>
                                    Sincroniza entrenamientos personalizados de apps de terceros con tu Ultra 2 para verlos directamente en la app Entrenamiento.
                                </p>
                            </article>
                        </div>
                        
                    </div>
                    <div className="  pl-[75%] py-4  flex gap-4 top-1/2 fle -translate-y-1/ transfor ">
                        <a href="#slide3.1" className="btn btn-circle bg-white">❮</a>
                        <a href="#slide3.5" className="btn btn-circle bg-white">❯</a>
                    </div>

            </section>


            {/* ------------- Segmento 8 | Hoteles y Edificios Comerciales ------------- */}
             {/* ------------- BANNER 4 ------------- */} 
            <section className=" bg-[url('/img/uta/utaBanner4.jpg')] bg-cover lg:bg-fill
            bg-[center_top_0vw] bg-no-repeat h-[100vh] lg:h-[160vh]">
                    <div className="px-[5%] lg:mx-[19%] pb-[35%] lg:pb-[15%] flex flex-col justify-end h-full text-[4.2vw] lg:text-[1.3vw] text-white ">
                    <Reveal duration={0.5} delay={0.5}>
                        <>
                        <h1 className="text-[10vw] lg:text-[3vw] leading-none font-lexend-bold text-[#EF771C]">UTA</h1>
                        <h3 className="text-[#EF771C] mb-[1vw]">Hoteles y Edificios Comerciales</h3>
                        <div className=" space-y-[8vw] lg:space-y-[2vw]">
                            <h1 className="text-[12vw] lg:text-[4.0vw] font-bold leading-none"> Toma aire, <br/> confort sin interrupciones</h1>
                            <p className="lg:w-3/5">
                            <span className="font-bold text-mustard">La comodidad de los huéspedes es la prioridad</span>. La <span className="font-bold text-mustard">UTA</span> asegura un clima agradable con un sistema eficiente que regula tanto la 
                            temperatura como la calidad del aire. Además, su diseño silencioso asegura el confort de los ocupantes sin interrupciones.
                            </p>
                        </div>
                        </>
                    </Reveal>
                    
                    </div>
            </section>

            {/* ------------- BANNER 4 - SLIDER IMG ------------- */} 
            <section className=" ">
                    <div className="px-[5%] lg:mx-[19%] pb-[%] lg:pb-[%] flex flex-col justify-end h-full text-[4.2vw] lg:text-[1.3vw] text-whit ">
                        <Reveal duration={0.5} delay={0.5}>
                            <>
                            {/* <h2 className="text-[#EF771C] mb-[1vw]">Carrera</h2> */}
                            <h1 className="py-10 w-4/5 text-[6vw] lg:text-[1.6vw] font-bold leading-none"> Descubre más de tu compañero perfecto.</h1>
                            </>
                        </Reveal>
                    </div>

                    <div className="carousel carousel-center  px-[5%] lg:px-[24%]  space-x-[8vw] lg:space-x-[2vw] lg:h-[40vw]">
                        
                        <div id="slide1" className="carousel-item w-[38%] flex flex-col " >
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

                        <div id="slide2" className="carousel-item w-[38%] flex flex-col " >
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

                        <div id="slide3" className="carousel-item w-[38%] flex flex-col " >
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

                        <div id="slide4" className="carousel-item w-[38%] flex flex-col " >
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



            {/* ------------- Segmento 9 | Laboratorios y Bioterios ------------- */}
            {/* ------------- BANNER 5 ------------- */} 
            <section className=" bg-[url('/img/uta/utaBanner5.jpg')] bg-cover lg:bg-fill
            bg-[center_top_0vw] bg-no-repeat h-[100vh] lg:h-[160vh]">
                    <div className="px-[5%] lg:mx-[19%] pb-[35%] lg:pb-[12%] flex flex-col justify-end h-full text-[4.2vw] lg:text-[1.3vw] text-white ">
                    <Reveal duration={0.5} delay={0.5}>
                        <>
                        <h1 className="text-[10vw] lg:text-[3vw] leading-none font-lexend-bold text-[#EF771C]">UTA</h1>
                        <h3 className="text-[#EF771C] mb-[1vw]">Oficinas</h3>
                        <div className="lg:w-full space-y-[8vw] lg:space-y-[2vw]">
                            <h1 className=" text-[12vw] lg:text-[4.0vw] font-bold leading-none"> Aire sano, <br/>mentes claras.</h1>
                            <p className="lg:w-3/5">
                            <span className="font-bold text-mustard">Ambientes saludables para mejorar la productividad.</span> La calidad del aire en las oficinas afecta directamente la salud y productividad de los empleados. 
                            La UTA asegura un entorno saludable, con aire limpio y fresco, manteniendo los niveles de CO2 bajo control para evitar la fatiga y mejorar el bienestar general.
                            </p>
                        </div>
                        </>
                    </Reveal>
                    
                    </div>
            </section>

            {/* ------------- BANNER 5 - SLIDER IMG ------------- */} 
            <section className=" ">
                    <div className="px-[5%] lg:mx-[19%] pb-[%] lg:pb-[%] flex flex-col justify-end h-full text-[4.2vw] lg:text-[1.3vw] text-whit ">
                        <Reveal duration={0.5} delay={0.5}>
                            <>
                            {/* <h2 className="text-[#EF771C] mb-[1vw]">Carrera</h2> */}
                            <h1 className="py-10 w-full text-[6vw] lg:text-[1.6vw] font-bold leading-none"> Pedal a fondo.</h1>
                            </>
                        </Reveal>
                    </div>

                    <div className="carousel carousel-center  px-[5%] lg:px-[24%]  space-x-[8vw] lg:space-x-[2vw] lg:h-[40vw]">
                        
                        <div id="slide2.1" className="carousel-item w-[38%] flex flex-col " >
                            <img className="p-6 py-14 aspect-[7.25/10]  rounded-3xl bg-white" src="../img/tempomatic/generador_de_aire_caliente/generador_de_aire_caliente_01.webp" alt="Pizza" />
                            <article className="px-3 mr-8 pt-6">
                                
                                <p className="text-midgray text-md">
                                    <span className="font-bold text-black">
                                    Kilómetros por hora, ahora.{" "}
                                    </span>
                                    Las Visualizaciones de Entrenamiento te permiten seguir de cerca los datos que más te interesan y tener tu velocidad actual justo donde la necesitas. Gira la Digital Crown para ver más métricas, como Zonas de Frecuencia Cardiaca, Tramos y Desnivel.
                                </p>
                            </article>
                        </div>

                        <div id="slide2.2" className="carousel-item w-[38%] flex flex-col " >
                            <img className="p-6 py-14 aspect-[7.25/10] rounded-3xl bg-white" src="../img/tempomatic/generador_de_aire_caliente/generador_de_aire_caliente_02.webp" alt="Pizza" />
                            <article className="px-3 mr-8 pt-6">
                                
                                <p className="text-midgray text-md">
                                    <span className="font-bold text-black">
                                    Tus datos en una pantalla más grande.{" "}
                                    </span>
                                    Inicia un entrenamiento en bici desde el Ultra 2 y de inmediato aparecerá en tu iPhone como una Actividad en Vivo. Así podrás ver tu rendimiento con total facilidad y seguridad cuando llevas el teléfono en el manubrio.
                                </p>
                            </article>
                        </div>

                        <div id="slide2.3" className="carousel-item w-[38%] flex flex-col " >
                            <img className="p-16 pt-24 aspect-[7.25/10]  rounded-3xl bg-white" src="../img/tempomatic/generador_de_aire_caliente/generador_de_aire_caliente_03.webp" alt="Pizza" />
                            <article className="px-3 mr-8 pt-6">
                                
                                <p className="text-midgray text-md">
                                    <span className="font-bold text-black">
                                    Conexión con sensores. {" "}
                                    </span>
                                    Conecta el Ultra 2 con accesorios Bluetooth para consultar datos clave como cadencia y potencia. Más fácil que andar en bicicleta.
                                </p>
                            </article>
                        </div>

                        <div id="slide2.4" className="carousel-item w-[38%] flex flex-col " >
                            <img className="p-2 py-24 aspect-[7.25/10]  rounded-3xl bg-white" src="../img/tempomatic/generador_de_aire_caliente/generador_de_aire_caliente_04.webp" alt="Pizza" />
                            <article className="px-3 mr-8 pt-6">
                                
                                <p className="text-midgray text-md">
                                    <span className="font-bold text-black">
                                    Zonas de Potencia.{" "}
                                    </span>
                                    Cuando se conecta a un medidor de potencia, el Ultra 2 calcula automáticamente tu Umbral de Potencia Funcional, que es el nivel máximo de intensidad que teóricamente puedes mantener durante una hora. Así podrás ver en qué Zona de Potencia estás y el tiempo que pasas en ella para seguir superándote.
                                </p>
                            </article>
                        </div>
                        
                    </div>
                    <div className="  pl-[75%] py-4 flex gap-4 top-1/2 fle -translate-y-1/ transfor ">
                    <a href="#slide2.1" className="btn btn-circle bg-white">❮</a>
                    <a href="#slide2.4" className="btn btn-circle bg-white">❯</a>
                    </div>

            </section>
        </main>
        // 	<div className={'h-[5000px]'}>
        // 		<VideoScrollPlayer/>
        // </div>
    );
}
