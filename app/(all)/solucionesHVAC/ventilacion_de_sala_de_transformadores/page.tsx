"use client"
import { title } from "@/components/primitives";
import { solucionesGeneralData } from "@/public/data/soluciones/solucionesGeneralData";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Avatar } from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { IoMailOutline } from "react-icons/io5";

export default function Soluciones_ventilacion_de_sala_de_transformadores_Page() {

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

	const mobileImagesCol = [];
    for (let i = 0; i < 2; i++) {
        mobileImagesCol.push(
            <Image
            key={i}
            alt="Electroterma Logo"
            className=""
			radius="none"
            src={`../../img/soluciones/ventilacion_de_sala_de_transformadores/Soluciones${i+4}.png`}
            width="100%"
            />
        );
    }

	return (
		<main className="flex flex-col  mt-4 items-center justify-center gap-1 md:gap-4 pb-4 md:pb-10 overflow-hidden ">
		{/* ------------- Imagen INTRO ------------- */}

		<section className="w-full rounded-tl-[43px] ml-[3%] flex flex-row bg-[#F7F6F6]">
			<div className="w-full  ml-[1vw] mt-[1vw] h-full ">
					<Image
						alt="Banner 1"
						className="rounded-tl-[30px] "
						radius="none"
						src="../../img/soluciones/ventilacion_de_sala_de_transformadores/SolucionesBanner1.png"
						width="100%"
					/>
				</div>
			
		</section>

		<section className="w-full ml-[3%] grid lg:grid-cols-[25%_75%]">
			{BigScreen ?
			<>
			<section className="w-full h-[184%] z-0 rounded-tl-[0px] -mt-10 pt-10   bg-[#F7F6F6] ">
				<div className="  ml-[0.5vw] mt-6  bg-gray-00">
					<div className=" flex mr-auto ml-4 pl-10 text-white font-lexend-bold text-[2.5vw] bg-white- rounded-l-full border-1- border-lowgray- shadow-2xl-"> 
					<Avatar  src="../../img/soluciones/ventilacion_de_sala_de_transformadores/SolucionesAutor.png" className="-ml-8 w- h-[5.0vw] my-2 text-large"/>
					<p className="my-auto ml-4 pt-4  pb-4  text-[#EF771C] font-lexend-bold text-[1.2vw]">Por: {" "}
						<span className="underline">Nicolás Cabot</span>
					</p>

					</div>
				</div>

				{/* <div className="  ml-[0.5vw] mt-6  bg-gray-00">
					<div className=" flex flex-col items-center justify-center align-middle gap-4 p-10 m-10 mx-4 mt-16  text-white font-lexend-bold text-[2.5vw] 
						bg-white rounded-[59px] border-1 border-lowgray shadow-2xl"> 
					
						<div className=" w-full flex flex-col  bg-[#EF771C] rounded-t-[30px]">
							<Image
							alt="Banner 1"
							className="p-6"
							radius="none"
							src="../../img/soluciones/ventilacion_de_sala_de_transformadores/Soluciones1.png"
							// width="100%"
							height="100%"
							/> 
							
						</div>
						<h1 className="w-full text-center text-[1.5vw] font-nunito-bold bg-white text-black">Caldera para calefacción</h1>

								<Button
									className="  z-10 bg-[#EF771C] px-16 py-4  font-nunito text-white text-xl 2xl:text-3xl shadow-xl"
									radius="full"
									size={BigScreen ? "lg" : "lg"}
									onClick={()=>(window.open("electroterma.com"))}
								>
									Saber más
								</Button>
						
					</div>
					
				</div> */}
				<div className="h-full pb-[20%] flex flex-col items-center justify-center align-middle">
					<a href="/solucionesHVAC"> 
						<Button
							className="  z-10 bg-[#EF771C] px-10 py-4  font-nunito text-white text-xl 2xl:text-3xl shadow-xl"
							radius="full"
							size={BigScreen ? "lg" : "lg"}
						>
							Ver otras soluciones
						</Button>
					</a>
				</div>
			</section>
			</>
			:
			<></>
			}
			
			<article className="w-full h-full bg-green-00">
				<div className=" ml-2 mr-4 lg:mx-4 mt-6 bg-[#EF771C">
					{/* ------------- TITULO PRINCIPAL ------------- */}
					<h1 className="lg:py-6 pl-2 lg:pl-12 py-2 text-white font-lexend-bold lg:text-[2.0vw] bg-[#EF771C] shadow-2xl"> SOLUCIÓN VENTILACIÓN DE SALA DE TRANSFORMADORES</h1>

					<div className="visible md:hidden flex mr-auto mt-1 text-white font-lexend-bold text-[2.5vw] bg-white- rounded-l-full border-1- border-lowgray- shadow-2xl-"> 
							<Avatar  src="../../img/soluciones/ventilacion_de_sala_de_transformadores/SolucionesAutor.png" className="w- h-[10.0vw] my-2 text-large"/>
							<p className="my-auto ml-2 pt-4  pb-4  text-[#EF771C] font-lexend-bold text-[3.2vw]">Por: {" "}
								<span className="underline">Nicolás Cabot</span>
							</p>
						</div>

					<div className="w-full mt-4 pl-2 pr-2 lg:pr-20 py-2 lg:py-10 grid lg:grid-cols-2 gap-10">

						{/* ------------- Contenido primario ------------- */}
						<div className="w-full flex flex-col gap-6 text-[3.8vw] lg:text-[1.20vw] font-nunito items-center ">
						    <p className="">
								Las denominadas salas de transformación son recintos donde la energía eléctrica provista por la distribuidora es adecuada para su uso dentro de instalaciones civiles o industriales. En dichos recintos, se coloca uno o más transformadores que se encargan de disminuir la tensión de distribución (generalmente alta o media) a tensiones utilizables en la industria (media o baja, siendo los más difundidos los sistemas de 380/220 V). Además de los transformadores propiamente dichos, podemos encontrar diferentes dispositivos de maniobra y protección que complementan y protegen al sistema. A continuación, vamos a mencionar las problemáticas que encontramos para una correcta ventilación de sala de transformadores y su solución. 
							</p>

							<p className="pl-">
								En un transformador eléctrico, existen diferentes factores que generan pérdidas de energía en forma de calor. En equipos de gran potencia, estas pérdidas pueden producir considerables aumentos de temperatura, tanto en la unidad como en su entorno. Si las condiciones de temperatura no son controladas en forma adecuada, pueden producirse efectos adversos sobre los equipos, los cuales van desde una merma en el rendimiento, hasta problemas más graves como una prematura degradación de los materiales aislantes. 
							</p>
							<p>
								Las condiciones de calor excesivo en los recintos pueden también ocasionar inconvenientes sobre los aparatos de protección y maniobra, provocando muchas veces falsos disparos de los mismos. El costo operativo de esto resulta muy alto, ya que pueden producirse paradas de procesos continuos, junto a un desgaste prematuro de los equipos. 
							</p>
							<p className="">
								Por estos motivos, es fundamental disipar el calor generado en las salas, y mantener así una temperatura operativa acorde a las condiciones que exigen el transformador y sus periféricos.
							</p>

							<h2 className="text-[#EF771C] text-[3.8vw] lg:text-[1.3vw] font-nunito-bold lg:mt-16">ANÁLISIS DE SITUACIÓN Y SOLUCIÓN PROPUESTA POR EL EQUIPO DE INGENIERÍA</h2>
							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
								En general las salas de transformadores se encuentran en un sector independiente de las plantas, dispuesto según normativa. Las dimensiones aproximadas son de 3x6 mts, con un volumen estimado de 54 m³. En el caso bajo estudio, encontramos dentro de la misma dos transformadores de 1.000 kVA de potencia. Cada transformador genera una importante cantidad de calor.
							</p>

							<Image
							alt="Imagen 2"
							className=""
							radius="none"
							src="../../img/soluciones/ventilacion_de_sala_de_transformadores/Soluciones2.png"
							width="100%"
							/>
							

							<p className="w-full">
							Se propuso instalar un sistema que genere una corriente de aire entre los puntos de entrada (inyección) y salida (extracción). De esta forma se producirá un “barrido” entre la inyección de aire frío, el foco generador de calor y la extracción de aire caliente en la sala de transformadores.
							</p>

						</div>
						
						<div className="w-full flex flex-col gap-6">
							

							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
								Este recinto está construido en mampostería, con dos únicas caras disponibles para la inyección/expulsión de aire, sin posibilidad de instalar extractores en la cubierta. 
								<br/><br/>
								Para el balance térmico de la sala utilizamos la cantidad de calor cedido por los transformadores (dato provisto por el fabricante de los mismos) y la diferencia de temperatura admisible. Con estos datos determinamos el caudal de aire necesario para mantener la temperatura interior dentro del rango de operación solicitado.
							</p>
							<Image
								alt="Imagen 3"
								className="lg:mt-16"
								radius="none"
								src="../../img/soluciones/ventilacion_de_sala_de_transformadores/Soluciones3.png"
								width="100%"
							/>
							<Image
								alt="Imagen 3"
								className="lg:mt-16"
								radius="none"
								src="../../img/soluciones/ventilacion_de_sala_de_transformadores/Soluciones4.png"
								width="100%"
							/>

							<h2 className="text-[#EF771C] text-[3.8vw] lg:text-[1.3vw] font-nunito-bold lg:mt-16">LA INSTALACIÓN PROPUESTA Y POSTERIORMENTE EJECUTADA CONSTÓ DE:</h2>
							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
								<h2 className="text-[#EF771C] font-nunito-bold">Inyección:</h2>
								En la zona inferior de una de las caras de la sala, 6 (seis) ventiladores axiales, marca TEMPOMATIC, modelo 3 - AX - 450, diámetro 450 mm - 1440 RPM - pala de poliamida marca OTAM/Soler & Palau.
								<br/><br/>

								<h2 className="text-[#EF771C] font-nunito-bold">Extracción:</h2>
								En la zona superior de la cara opuesta a la inyección, 2 (dos) ventiladores axiales, marca TEMPOMATIC, modelo 2 - AX - 650, diámetro 650 mm - 1440 RPM - pala de poliamida marca OTAM/Soler & Palau.
								<br/><br/>

								<h2 className="text-[#EF771C] font-nunito-bold">Sistema de control:</h2>
								Comando encargado de ordenar el encendido/apagado de los ventiladores, con el fin de optimizar el consumo energético y asegurar el funcionamiento del sistema de ventilación exclusivamente en los momentos en que este sea requerido.
								<br/><br/>
								
							</p>


						</div>
						
						{BigScreen || 
					<>
					{/* ------------------- MOBILE ------------------- */}
					<section className="bg-white border-1 border-lowgray rounded-3xl shadow-2xl w-[99.5%] mt-2">
						{/* <div className=" grid grid-cols-[50%_40%] gap-[5%] p-3 ">
							<div className=" bg-[#EF771C] rounded-2xl">
								<Image
									alt="Banner 1"
									className="pr-1"
									radius="none"
									src="../../img/soluciones/ventilacion_de_sala_de_transformadores/Soluciones1.png"
									// width="100%"
									height="100%"
									/> 
							</div>
							<div className="flex flex-col items-center mt-[1%] justify-cente h-full">
								<div className="">
									<Avatar  src="../../img/soluciones/ventilacion_de_sala_de_transformadores/SolucionesAutor.png" className="h-[15.0vw] w-[15.0vw] my-2 mx-auto text-large"/>
									<p className="px-auto py-2  text-[#EF771C] font-lexend-bold text-[3.8vw] text-center">Por: {" "}
										<span className="underline">Nicolás Cabot</span>
									</p>
									<h1 className="w-full text-center text-[6.5vw] font-nunito-bold bg-white text-black">Caldera para calefacción</h1>
								</div>
								<div className="py-4">
								<Button
											className="  z-10 bg-[#EF771C] px-2 py-4  font-nunito text-white shadow-xl"
											radius="full"
											size="sm"
											onClick={()=>(window.open("electroterma.com"))}
										>
											Saber más
										</Button>
								</div>
								<div className="">
								<a  href="/solucionesHVAC">
									<Button
											className="  z-10 bg-[#EF771C] px-2 py-4  font-nunito text-white shadow-xl"
											radius="full"
											size="sm"
											// onClick={()=>(window.open("electroterma.com"))}
										>
											Ver otras soluciones
										</Button>
									</a>
								</div>
							</div>
							
						</div> */}
					</section>
					
					</>
					}

					</div>

					
					
				</div>
			</article>

		</section>

		{/* ------------- Consultanos ------------- */}
		<section className="w-full max-h-[50%] z-20 py-0 font-size overflow-hidden">
                <div className="bg-[#EF771C]  md:w-98% py-3  flex justify-center gap-20 items-center rounded-tr-[24px] rounded-bl-[24px]">
                    <div className="ml-[35px] md:ml-24">
                        <h2 className="text-white text-xs xm:text-base md:text-2xl 2xl:text-3xl font-nunito-bold">
                            {" "}
                            ¿Cuál es tu necesidad?{" "}
                        </h2>
                    </div>
                    <div className="mr-4 md:mr-12  ">
                        <Button size={BigScreen ? "lg" : "sm"} radius="full" className="2xl:text-2xl lg:px-8 mr-[23px] lg:mr-0 shadow-2xl" onClick={handleEmailClick}>
                            <div className="absolute rounded-full left-0 z-20 p-3   shadow-r-xl shadow-[rgba(29,29,27,0.24)] border- border-gray-200 
                                    bg-gradient-to-r from-[#EF771C] to-[#F4A86F]
                                    group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-[#fe694f]
                                    group-active:bg-gradient-to-r group-active:from-[#f37a7ae5] group-active:to-[#FFFFFF]
                                "> 
                                    {/* <MailSvg css=" group-active:text-livered text-white lg:text-3xl" size={40}/> */}
                                    <IoMailOutline className=" group-active:text-livered text-white lg:text-4xl"/>
                                    </div>
                                <span className="ml-[30px] lg:ml-10">Escribinos</span>
                        </Button>
                    </div>
                </div>
            </section>

		</main>
	);
}
