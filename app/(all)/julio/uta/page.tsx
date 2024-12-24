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
        <main className="flex flex-col items-center justify-center gap- pb-4  md:pb-10 overflow-hidden ">

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
            <section className=" h-[70vh] lg:h-[110vh] flex flex-col justify-center items-center gap-[2vw text-center w-full bg-white">
                <div className="px-[5%] lg:px-[20%] ">
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
            <section className="px-[10%] lg:px-[25%] h-[70vh] lg:h-[50vh] flex flex-col justify-center items-center gap-[2vw] first-letter bg-white">
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
            <section className="px-[5%] lg:px-[20%] h-[70vh] lg:h-[90vh]  bg-white" >
                <Reveal duration={0.5} delay={0.55}>
                    <div className="flex flex-col justify-center items-center lg:flex-row">
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
                    </div>
                </Reveal>

            </section>

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
                    <div className="px-[5%] lg:mx-[20%] pb-[%] lg:pb-[%] flex flex-col justify-end h-full text-[4.2vw] lg:text-[1.3vw] text-whit ">
                    <Reveal duration={0.5} delay={0.5}>
                        <>
                        {/* <h2 className="text-[#EF771C] mb-[1vw]">Carrera</h2> */}
                        <h1 className="py-10 w-4/5 text-[6vw] lg:text-[2.0vw] font-bold leading-none"> Descubre más de tu compañero perfecto.</h1>

                        
                        </>
                    </Reveal>


                    
                    </div>

                    <div className="carousel carousel-center    px-[5%] lg:px-[25%]  space-x-[8vw] lg:space-x-[2vw] lg:h-[38vw]">
                        
                        <div id="slide1" className="carousel-item w-2/5 flex flex-col " >
                            <img className="p-6 py-14 aspect-[9/11] rounded-3xl bg-white" src="../img/tempomatic/caldera_para_calefaccion/caldera_para_calefaccion_02.webp" alt="Pizza" />
                            <article className="px-6 pt-6">
                                
                                <p className="text-midgray text-xl">
                                    <span className="font-bold text-black">
                                    Información es poder.{" "}
                                    </span>
                                    Carga de Entrenamiento te da información superútil para que puedas ver el impacto de los entrenamientos en tu cuerpo con el paso del tiempo. Así será más fácil saber cuándo exigirte al máximo o cuándo descansar, sobre todo si te estás preparando para una competencia.
                                </p>
                            </article>
                        </div>

                        <div id="slide2" className="carousel-item w-2/5 flex flex-col " >
                            <img className="p-16 aspect-[9/11] rounded-3xl bg-white" src="../img/tempomatic/caldera_para_calefaccion/caldera_para_calefaccion_01.webp" alt="Pizza" />
                            <article className="px-6 pt-6">
                                
                                <p className="text-midgray text-xl">
                                    <span className="font-bold text-black">
                                    En sintonía con tu corazón de runner.{" "}
                                    </span>
                                    Las Zonas de Frecuencia Cardiaca te permiten consultar rápidamente tu nivel de intensidad. Las zonas de entrenamiento se calculan y personalizan de forma automática en función de tus datos de salud. Y si lo prefieres, también puedes crearlas manualmente.
                                </p>
                            </article>
                        </div>

                        <div id="slide3" className="carousel-item w-2/5 flex flex-col " >
                            <img className="p-16 aspect-[9/11] rounded-3xl bg-white" src="../img/tempomatic/caldera_para_calefaccion/caldera_para_calefaccion_03.webp" alt="Pizza" />
                            <article className="px-6 pt-6">
                                
                                <p className="text-midgray text-xl">
                                    <span className="font-bold text-black">
                                    Corre como relojito.{" "}
                                    </span>
                                    No pierdas de vista tus metas con funcionalidades como Ritmo y Ruta de la Carrera. Ritmo te permite establecer una meta de distancia y tiempo para correr al aire libre. Ruta de la Carrera te ayuda a superar tu último resultado o romper tu mejor marca.
                                </p>
                            </article>
                        </div>

                        <div id="slide4" className="carousel-item w-2/5 flex flex-col " >
                            <img className="p-2 py-24 aspect-[9/11] rounded-3xl bg-white" src="../img/tempomatic/caldera_para_calefaccion/caldera_para_calefaccion_04.webp" alt="Pizza" />
                            <article className="px-6 pt-6">
                                
                                <p className="text-midgray text-xl">
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

        
            {/* ------------- BANNER 2 ------------- */} 
            <section className=" bg-[url('/img/uta/utaBanner2.jpg')] bg-cover lg:bg-fill
            bg-[center_top_0vw] bg-no-repeat h-[100vh] lg:h-[160vh]">
                    <div className="px-[5%] lg:mx-[20%] pb-[35%] lg:pb-[12%] flex flex-col justify-end h-full text-[4.2vw] lg:text-[1.3vw] text-white ">
                    <Reveal duration={0.5} delay={0.5}>
                        <>
                        <h3 className="text-[#EF771C] mb-[1vw]">Ciclismo</h3>
                        <div className="lg:w-3/5 space-y-[8vw] lg:space-y-[2vw]">
                            <h1 className="text-[12vw] lg:text-[4.0vw] font-bold leading-none"> Vuela sobre ruedas.</h1>
                            <p className="">
                                El Apple Watch Ultra 2 es el compañero ideal para andar en bicicleta fija, rodar en la carretera o en la montaña, y hasta para ir de casa a la oficina. Con accesorios Bluetooth y métricas que puedes ver fácilmente mientras pedaleas, nada podrá detenerte.
                            </p>
                        </div>
                        </>
                    </Reveal>
                    
                    </div>
            </section>

            {/* ------------- BANNER 2 - SLIDER IMG ------------- */} 
            <section className=" ">
                    <div className="px-[5%] lg:mx-[20%] pb-[%] lg:pb-[%] flex flex-col justify-end h-full text-[4.2vw] lg:text-[1.3vw] text-whit ">
                    <Reveal duration={0.5} delay={0.5}>
                        <>
                        {/* <h2 className="text-[#EF771C] mb-[1vw]">Carrera</h2> */}
                        <h1 className="py-10 w-full text-[6vw] lg:text-[2.0vw] font-bold leading-none"> Pedal a fondo.</h1>

                        
                        </>
                    </Reveal>


                    
                    </div>

                    <div className="carousel carousel-center    px-[5%] lg:px-[25%]  space-x-[8vw] lg:space-x-[2vw] lg:h-[39vw]">
                        
                        <div id="slide2.1" className="carousel-item w-2/5 flex flex-col " >
                            <img className="p-6 py-14 aspect-[9/11] rounded-3xl bg-white" src="../img/tempomatic/generador_de_aire_caliente/generador_de_aire_caliente_01.webp" alt="Pizza" />
                            <article className="px-6 pt-6">
                                
                                <p className="text-midgray text-xl">
                                    <span className="font-bold text-black">
                                    Kilómetros por hora, ahora.{" "}
                                    </span>
                                    Las Visualizaciones de Entrenamiento te permiten seguir de cerca los datos que más te interesan y tener tu velocidad actual justo donde la necesitas. Gira la Digital Crown para ver más métricas, como Zonas de Frecuencia Cardiaca, Tramos y Desnivel.
                                </p>
                            </article>
                        </div>

                        <div id="slide2.2" className="carousel-item w-2/5 flex flex-col " >
                            <img className="p-16 aspect-[9/11] rounded-3xl bg-white" src="../img/tempomatic/generador_de_aire_caliente/generador_de_aire_caliente_02.webp" alt="Pizza" />
                            <article className="px-6 pt-6">
                                
                                <p className="text-midgray text-xl">
                                    <span className="font-bold text-black">
                                    Tus datos en una pantalla más grande.{" "}
                                    </span>
                                    Inicia un entrenamiento en bici desde el Ultra 2 y de inmediato aparecerá en tu iPhone como una Actividad en Vivo. Así podrás ver tu rendimiento con total facilidad y seguridad cuando llevas el teléfono en el manubrio.
                                </p>
                            </article>
                        </div>

                        <div id="slide2.3" className="carousel-item w-2/5 flex flex-col " >
                            <img className="p-16 pt-24 aspect-[9/11] rounded-3xl bg-white" src="../img/tempomatic/generador_de_aire_caliente/generador_de_aire_caliente_03.webp" alt="Pizza" />
                            <article className="px-6 pt-6">
                                
                                <p className="text-midgray text-xl">
                                    <span className="font-bold text-black">
                                    Conexión con sensores. {" "}
                                    </span>
                                    Conecta el Ultra 2 con accesorios Bluetooth para consultar datos clave como cadencia y potencia. Más fácil que andar en bicicleta.
                                </p>
                            </article>
                        </div>

                        <div id="slide2.4" className="carousel-item w-2/5 flex flex-col " >
                            <img className="p-2 py-24 aspect-[9/11] rounded-3xl bg-white" src="../img/tempomatic/generador_de_aire_caliente/generador_de_aire_caliente_04.webp" alt="Pizza" />
                            <article className="px-6 pt-6">
                                
                                <p className="text-midgray text-xl">
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


            {/* ------------- BANNER 3 ------------- */} 
            <section className=" bg-[url('/img/uta/utaBanner3.jpg')] bg-cover lg:bg-fill
            bg-[center_top_0vw] bg-no-repeat h-[100vh] lg:h-[160vh]">
                    <div className="px-[5%] lg:mx-[20%] pb-[35%] lg:pb-[15%] flex flex-col justify-end h-full text-[4.2vw] lg:text-[1.3vw] text-white ">
                    <Reveal duration={0.5} delay={0.5}>
                        <>
                        <h3 className="text-[#EF771C] mb-[1vw]">Natación</h3>
                        <div className="lg:w-3/5 space-y-[8vw] lg:space-y-[2vw]">
                            <h1 className="text-[12vw] w-4/5 lg:text-[4.0vw] font-bold leading-none"> Todo un pez en el agua.</h1>
                            <p className="">
                            Con el Apple Watch Ultra 2, tienes todas las herramientas necesarias para dominar la piscina o el mar. Crea tu propio entrenamiento y registra tus intervalos. Accede a todas las funcionalidades avanzadas que necesitas y mucho más. Te damos la bienvenida al carril de nado rápido.
                            </p>
                        </div>
                        </>
                    </Reveal>
                    
                    </div>
            </section>

            {/* ------------- BANNER 3 - SLIDER IMG ------------- */} 
            <section className=" ">
                    <div className="px-[5%] lg:mx-[20%] pb-[%] lg:pb-[%] flex flex-col justify-end h-full text-[4.2vw] lg:text-[1.3vw] text-whit ">
                    <Reveal duration={0.5} delay={0.5}>
                        <>
                        {/* <h2 className="text-[#EF771C] mb-[1vw]">Carrera</h2> */}
                        <h1 className="py-10 w-full text-[6vw] lg:text-[2.0vw] font-bold leading-none"> Funcionalidades que hacen olas.</h1>

                        
                        </>
                    </Reveal>


                    
                    </div>

                    <div className="carousel carousel-center    px-[5%] lg:px-[25%]  space-x-[8vw] lg:space-x-[2vw] lg:h-[40vw]">
                        
                        <div id="slide3.1" className="carousel-item w-2/5 flex flex-col " >
                            <img className="p-6 py-24 aspect-[9/11] rounded-3xl bg-white" src="../img/tempomatic/unidad_manejadora_de_aire/unidad_manejadora_de_aire_01.webp" alt="Pizza" />
                            <article className="px-6 pt-6">
                                
                                <p className="text-midgray text-xl">
                                    <span className="font-bold text-black">
                                    Piscina o aguas abiertas. {" "}
                                    </span>
                                    En la piscina o en el mar, el Ultra 2 detecta al instante tu brazada, calcula la distancia y el ritmo de las series, y te ofrece datos avanzados como el índice SWOLF. Y también puedes ver la temperatura del agua directamente desde tu entrenamiento.
                                </p>
                            </article>
                        </div>

                        <div id="slide3.2" className="carousel-item w-2/5 flex flex-col " >
                            <img className="p-16 py-16 aspect-[9/11] rounded-3xl bg-white" src="../img/tempomatic/unidad_manejadora_de_aire/unidad_manejadora_de_aire_02.webp" alt="Pizza" />
                            <article className="px-6 pt-6">
                                
                                <p className="text-midgray text-xl">
                                    <span className="font-bold text-black">
                                    Multideporte. Tus métricas en relevo automático. {" "}
                                    </span>
                                    El Ultra 2 cambia automáticamente de natación a ciclismo y carrera, y registra los datos de cada disciplina.
                                </p>
                            </article>
                        </div>

                        <div id="slide3.3" className="carousel-item w-2/5 flex flex-col " >
                            <img className="p-16 aspect-[9/11] rounded-3xl bg-white" src="../img/tempomatic/unidad_manejadora_de_aire/unidad_manejadora_de_aire_03.webp" alt="Pizza" />
                            <article className="px-6 pt-6">
                                
                                <p className="text-midgray text-xl">
                                    <span className="font-bold text-black">
                                    Fluye con tu estilo. {" "}
                                    </span>
                                    Los Entrenamientos Personalizados te permiten crear rutinas a tu medida. Tu Apple Watch también te guía automáticamente durante intervalos cronometrados de entrenamiento y recuperación en la piscina, con respuestas hápticas que te indican cuándo te toca el siguiente intervalo.
                                </p>
                            </article>
                        </div>

                        <div id="slide3.4" className="carousel-item w-2/5 flex flex-col " >
                            <img className="p-2 py-32 aspect-[9/11] rounded-3xl bg-white" src="../img/tempomatic/unidad_manejadora_de_aire/unidad_manejadora_de_aire_04.webp" alt="Pizza" />
                            <article className="px-6 pt-6">
                                
                                <p className="text-midgray text-xl">
                                    <span className="font-bold text-black">
                                    Nada sabiéndolo todo.{" "}
                                    </span>
                                    Conoce exactamente lo que viene después con la nueva vista A Continuación. En cada entrenamiento personalizado que crees, el Ultra 2 te permite saber cuánto queda del intervalo actual y lo que sigue.
                                </p>
                            </article>
                        </div>

                        <div id="slide3.5" className="carousel-item w-2/5 flex flex-col " >
                            <img className="p-2 py-16 aspect-[9/11] rounded-3xl bg-white" src="../img/tempomatic/caja_ventiladora/caja_ventiladora_01.webp" alt="Pizza" />
                            <article className="px-6 pt-16">
                                
                                <p className="text-midgray text-xl">
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

        </main>

    );
}
