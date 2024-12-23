"use client";
import { Link } from "@nextui-org/link";
import Lottie from "lottie-react";
import animationData from "../../../../public/lottie/ventilador.json";

import { Reveal } from "@/components/revealFramemotion";

// import { Carousel } from 'antd';

import { FaRegCirclePlay } from "react-icons/fa6";
import { Image } from "@nextui-org/image";

import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import VideoAutoPlayer from "@/components/videoplayer/videoautoplayer";

// import ScrollVideoPlayer from "@/components/videoplayer/scrollVideo";
// import VideoScrollPlayer from "@/components/videoplayer/videoplayer";


export default function Uta() {

    const contentStyle: React.CSSProperties = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };


    return (
        <main className="flex flex-col items-center justify-center gap- pb-4  md:pb-10">

            {/* ------------- VIDEO INTRO ------------- */}            
            <section className="px-[%] lg:h-screen bg-[#eeeeee]"> 
                <div className="absolute left-[45%] lg:left-[41%] lg:top-[15%] ">
                    <Reveal duration={0.8} delay={1.6}>
                        <h1 className="text-[60px] lg:text-[10vw] font-lexend-bold text-[#EF771C]">UTA</h1>

                    </Reveal>

                </div>
                <video
                    muted autoPlay controls={false}
                    src="../img/uta/UTA_presentacion_v1.mp4"
                    width="100%"
                    // height="100%"
                />
            {/* <VideoAutoPlayer url="../img/solerpalau/habitat/video/habitatPresentacion.mp4" width="100%"/> */}
            </section> 

            {/* ------------- NUEVA ARMADURA ------------- */}            
            <section className="px-[5%] lg:px-[20%] h-[70vh] lg:h-[135vh] flex flex-col justify-center items-center gap-[4vw] lg:gap-[2vw] first-letter 
            bg-gradient-to-b from-[#eeeeee] to-50% to-white
            ">
                <Reveal duration={0.5} delay={0.2}>
                    <h1 className="text-[12vw] lg:text-[4.0vw]  font-bold lg:h- leading-none text-center">
                        Nueva armadura. <br/>
                        Nuevas aventuras.
                    </h1>
                </Reveal>
                <Reveal duration={0.5} delay={0.3}>

                    <p className="text-[4.6vw] lg:text-[1.3vw] lg:px-[13%] text-center leading-tight text-midgray">
                        Ahora disponible en una nueva e impresionante caja de titanio negro, el Apple Watch Ultra 2 es el compañero perfecto para el deporte y la aventura. 
                        Incluye un GPS de precisión increíble para hacer frente a los entornos más complejos, entrenamientos personalizados para natación y funcionalidades 
                        de conectividad, salud y seguridad para todos los días.
                    </p>
                    </Reveal>
                
                <Reveal duration={0.5} delay={0.4}>
                
                    <footer className="text-[4.6vw] lg:text-[1.4vw] h-max flex">
                        <h3>Ver el video </h3> <FaRegCirclePlay className="my-auto mx-2" />
                    </footer>
                </Reveal>
                
            </section>
            
            {/* ------------- DISEÑO ------------- */}            
            <section className=" h-[70vh] lg:h-[110vh] flex flex-col justify-center items-center gap-[2vw text-center">
                <div className="px-[5%] lg:px-[20%]">
                <Reveal duration={0.5} delay={0.3}> 
                    <>
                        <h3 className="text-[4.6vw] lg:text-[1.3vw]">Diseño</h3>
                        <h1 className="text-[12vw] lg:text-[4.0vw] h-[30vw] lg:h-[10vw] font-bold leading-none ">
                            Titanio, sudor <br/>
                            y lágrimas.
                        </h1> 
                    </>

                </Reveal>
                </div>
                <Reveal duration={0.5} delay={0.3}> 
                    <Image
								alt="product"
								key="img1"
								className="h-full"
								radius="none"
								src="../../img/uta/uta1.png"
								width="100%"
							/>
                </Reveal>
                {/* <Reveal duration={0.8} delay={0.2}> 

                </Reveal> */}


            </section>

            {/* ------------- ARTICULO 2 COL ------------- */}            
            <section className="px-[10%] lg:px-[25%] h-[70vh] lg:h-[50vh] flex flex-col justify-center items-center gap-[2vw] first-letter ">
                <article className="w-full flex flex-col lg:flex-row gap-[4vw] lg:gap-[2vw] text-[4.2vw] lg:text-[1.3vw] leading-tight">
                    <Reveal duration={0.5} delay={0.3}>
                        <p className="lg:pl-[7%] w text-midgray">
                            El Apple Watch Ultra 2 viene equipado para afrontar cualquier reto. La caja de 49 mm, ahora disponible en titanio negro, está diseñada para soportar 
                            las condiciones más extremas y cuenta con la certificación <span className="text-[#EF771C]">EN13319</span>, la norma reconocida a nivel internacional para accesorios de buce
                        </p>
                    </Reveal>
                    <div className="lg:w-min-1/3  space-y-[8vw] mt-[8vw] lg:mt-0 lg:space-y-[1vw]">
                        <Reveal duration={0.5} delay={0.55}>
                            <div>
                                <h2 className="text-[10vw] lg:text-[2.3vw] font-bold">3,000 nits</h2>
                                <h3 className="text-midgray">La pantalla más brillante de Apple hasta ahora</h3>
                            </div>
                        </Reveal>
                        <Reveal duration={0.5} delay={0.65}>
                            <div>
                                <h2 className="text-[10vw] lg:text-[2.3vw] font-bold">WR100</h2>
                                <h3 className="text-midgray">Resistencia al agua hasta 100 metros</h3>
                            </div>
                        </Reveal>
                        <Reveal duration={0.5} delay={0.75}>
                            <div>
                                <h2 className="text-[10vw] lg:text-[2.3vw] font-bold">IPX6</h2>
                                <h3 className="text-midgray">Resistencia al polvo</h3>
                            </div>
                        </Reveal>
                    </div>
                </article>
            </section>

            {/* ------------- ARTICULO 2 COL ------------- */}            
            <Reveal duration={0.5} delay={0.55}>
            <section className="px-[5%] lg:mx-[15%] h-[70vh] lg:h-[90vh] flex flex-col justify-center items-center lg:flex-row">
                <div className="lg:w-2/3">
                    <Image
                        alt="product"
                        key="img2"
                        className="w-full"
                        radius="none"
                        src="../../img/uta/uta2.png"
                        width="100%"
                    />
                </div>
                <div className="px-[7%] lg:px-0 lg:w-1/3 text-[4.2vw] lg:text-[1.3vw]">
                    <h2 className="">Controla toda la acción.</h2>
                    <p className="text-midgray">
                     Personaliza el Botón de Acción para acceder rápidamente a diferentes funcionalidades, como iniciar un entrenamiento, marcar un segmento o pasar al siguiente intervalo.
                    </p>
                </div>

            </section>
            </Reveal>

            {/* ------------- BANNER 1 ------------- */} 
            <section className=" bg-[url('/img/uta/utaBanner1.jpg')] bg-cover lg:bg-fill
            bg-[center_top_0vw] bg-no-repeat h-[100vh] lg:h-[160vh]">
                    <div className="px-[5%] lg:mx-[20%] pb-[35%] lg:pb-[15%] flex flex-col justify-end h-full text-[4.2vw] lg:text-[1.3vw] text-white ">
                    <Reveal duration={0.5} delay={0.5}>
                        <>
                        <h3 className="text-[#EF771C] mb-[1vw]">Carrera</h3>
                        <div className="lg:w-3/5 space-y-[8vw] lg:space-y-[2vw]">
                            <h1 className="text-[12vw] lg:text-[4.0vw] font-bold leading-none"> Métricas para retar a tu mejor versión.</h1>
                            <p className="">
                            El Apple Watch Ultra 2 te permite optimizar cada zancada para llegar más rápido a tus metas. El GPS de precisión y doble frecuencia usa modelos avanzados de señales y satélites, algoritmos de localización personalizados y datos de Mapas de Apple. Así tendrás en tus manos un reloj deportivo con un GPS de precisión increíble.1 Y con las métricas avanzadas, tú serás tu mejor rival.
                            </p>
                        </div>
                        </>
                    </Reveal>
                    
                    </div>
            </section>

            {/* ------------- BANNER 1 - SLIDER IMG ------------- */} 
            <section className=" ">
                    <div className="px-[5%] lg:mx-[20%] pb-[%] lg:pb-[%] flex flex-col justify-end h-full text-[4.2vw] lg:text-[1.3vw] text-white ">
                    <Reveal duration={0.5} delay={0.5}>
                        <>
                        {/* <h2 className="text-[#EF771C] mb-[1vw]">Carrera</h2> */}
                        <h1 className="py-10 w-4/5 text-[6vw] lg:text-[2.0vw] font-bold leading-none"> Descubre más de tu compañero perfecto..</h1>

                        
                        </>
                    </Reveal>


                    
                    </div>


                    {/* <>
                    <Carousel arrows dotPosition="bottom" infinite={false}>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                    </Carousel>
                    </> */}

                    <div className="carousel carousel-center   rounded px-[5%] lg:px-[25%]  space-x-[8vw] lg:space-x-[2vw] lg:h-[35vw]">
                        <div className="carousel-item" id="slide1">
                            <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Pizza" />
                            
                        </div>
                        <div className="carousel-item">
                            <img
                            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                            alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img
                            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                            alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img
                            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                            alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Pizza" />
                        </div>
                        <div className="carousel-item" id="slide4">
                            <img
                            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                            alt="Pizza" />
                        </div>

                        
                    </div>
                    <div className=" left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>

            </section>

        
        </main>

    );
}
