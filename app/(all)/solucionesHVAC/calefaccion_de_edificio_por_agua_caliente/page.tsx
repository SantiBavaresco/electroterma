"use client"
import { title } from "@/components/primitives";
import { solucionesGeneralData } from "@/public/data/soluciones/solucionesGeneralData";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Avatar } from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { IoMailOutline } from "react-icons/io5";

export default function Soluciones_calefaccion_de_edificio_por_agua_caliente_Page() {

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
            src={`../../img/soluciones/calefaccion_de_edificio_por_agua_caliente/Soluciones${i+4}.png`}
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
						src="../../img/soluciones/calefaccion_de_edificio_por_agua_caliente/SolucionesBanner1.png"
						width="100%"
					/>
				</div>
			
		</section>

		<section className="w-full ml-[3%] grid lg:grid-cols-[25%_75%]">
			{BigScreen ?
			<>
			<section className="w-full h-[134%] z-0 rounded-tl-[0px] -mt-10 pt-10   bg-[#F7F6F6] ">
				<div className="  ml-[0.5vw] mt-6  bg-gray-00">
					<div className=" flex mr-auto ml-4 pl-10 text-white font-lexend-bold text-[2.5vw] bg-white- rounded-l-full border-1- border-lowgray- shadow-2xl-"> 
					<Avatar  src="../../img/soluciones/calefaccion_de_edificio_por_agua_caliente/SolucionesAutor.png" className="-ml-8 w- h-[5.0vw] my-2 text-large"/>
					<p className="my-auto ml-4 pt-4  pb-4  text-[#EF771C] font-lexend-bold text-[1.2vw]">Por: {" "}
						<span className="underline">Nicolás Cabot</span>
					</p>

					</div>
				</div>

				<div className="  ml-[0.5vw] mt-6  bg-gray-00">
					<div className=" flex flex-col items-center justify-center align-middle gap-4 p-10 m-10 mx-4 mt-16  text-white font-lexend-bold text-[2.5vw] 
						bg-white rounded-[59px] border-1 border-lowgray shadow-2xl"> 
					
						<div className=" w-full flex flex-col  bg-[#EF771C] rounded-t-[30px]">
							<Image
							alt="Banner 1"
							className="p-6"
							radius="none"
							src="../../img/soluciones/calefaccion_de_edificio_por_agua_caliente/Soluciones1.png"
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
					
				</div>
				<div className="h-full pb-[0%] flex flex-col items-center justify-center align-middle">
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
					<h1 className="lg:py-6 pl-2 lg:pl-12 py-2 text-white font-lexend-bold lg:text-[2.0vw] bg-[#EF771C] shadow-2xl"> SOLUCIÓN CALEFACCIÓN DE EDIFICIOS POR AGUA CALIENTE</h1>

					<div className="visible md:hidden flex mr-auto mt-1 text-white font-lexend-bold text-[2.5vw] bg-white- rounded-l-full border-1- border-lowgray- shadow-2xl-"> 
							<Avatar  src="../../img/soluciones/calefaccion_de_edificio_por_agua_caliente/SolucionesAutor.png" className="w- h-[10.0vw] my-2 text-large"/>
							<p className="my-auto ml-2 pt-4  pb-4  text-[#EF771C] font-lexend-bold text-[3.2vw]">Por: {" "}
								<span className="underline">Nicolás Cabot</span>
							</p>
						</div>
					

					<div className="w-full mt-4 pl-2 pr-2 lg:pr-20 py-2 lg:py-10 grid lg:grid-cols-2 gap-10">

						{/* ------------- Contenido primario ------------- */}
						<div className="w-full flex flex-col gap-6 text-[3.8vw] lg:text-[1.20vw] font-nunito items-center ">
						    <p className="">
							    A menudo se presentan problemas en los sistemas de calefacción por agua en edificios de propiedad horizontal, tales como  aire en los circuitos de piping,  fallas en las calderas, excesivos consumos por departamentos no habitados, altos costos y frecuencia de mantenimientos correctivos. Estos problemas, se originan principalmente por las siguientes causas:  
							</p>

							<article className="pl-2">
								<p className="flex ">
									<span className="pr-2">1.</span>
									<span>Proyecto mal desarrollado para ahorrar costos. </span> <br/>
								</p>
								<p className="flex ">
									<span className="pr-2">2.</span>
									<span>Errónea selección de materiales de cañería por desconocimiento técnico. </span> <br/>
								</p>
								<p className="flex ">
									<span className="pr-2">3.</span>
									<span>Salas de máquinas con equipamiento domiciliario no apto para uso en calefacción central. </span> <br/>
								</p>
							</article>
							
							<p>
								Al desarrollar un proyecto de propiedad horizontal, lo primero que nos dice la experiencia, es que el sistema de calefacción y climatización rondará el 5% del valor del proyecto. No se debería confiar en soluciones mágicas que prometan grandes ahorros, si bien este tipo de instalaciones no se ven a simple vista, son las que aseguran confort en los momentos de mayor necesidad y paradójicamente, debería resultar la de mayor confiabilidad y la que no fallara una vez que las propiedades sean habitadas.
							</p>
							<p className="text-[#EF771C]">
								Desarrollaremos un caso a modo de ejemplo, con calefacción por radiadores en un edificio de la Patagonia.
							</p>

							<Image
							alt="Imagen 2"
							className=""
							radius="none"
							src="../../img/soluciones/calefaccion_de_edificio_por_agua_caliente/Soluciones2.png"
							width="100%"
							/>
							
							<h2 className="text-[#EF771C] text-[3.8vw] lg:text-[1.3vw] font-nunito-bold lg:mt-16">1. DEFINIMOS LA CAPACIDAD DE LA SALA DE MÁQUINAS</h2>
							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
								El edificio cuenta con 26 espacios que requieren climatización, entre espacios comunes y departamentos, lo cual suma un total de 850 m2. 
								<br/> <br/>
								Para alimentar todos los puntos de consumo de Agua Caliente de Calefacción (ACC), se dispusieron dos calderas marca TEMPOMATIC chequear link a caldera de agua caliente tempomatic, de alta confiabilidad, de 120.000 kcal/h cada una.
							</p>
														
							
							<h2 className="text-[#EF771C] text-[3.8vw] lg:text-[1.3vw] font-nunito-bold lg:mt-16">2. LOCACIÓN Y DISEÑO DE LA SALA DE MÁQUINAS (SMAQ)</h2>

							<p className="w-full">
								Para la locación de una sala de calderas, en este tipo de proyectos, se deben tener en cuenta varios factores, entre ellos podemos citar: <br/><br/>


								<article className="pl-2">
									<p className="flex ">
										<span className="pr-2">•</span>
										<span>Acceso para la instalación de la caldera. </span> <br/>
									</p>
										<p className="flex ">
									<span className="pr-2">•</span>

										<span>Espacio para mantenimiento.</span> <br/>
									</p>
									<p className="flex ">
										<span className="pr-2">•</span>
										<span>Salida de gases de combustión. </span> <br/>
									</p>
									<p className="flex ">
										<span className="pr-2">•</span>
										<span>Costo por unidad de superficie del espacio seleccionado. </span> <br/>
									</p>
									<p className="flex ">
										<span className="pr-2">•</span>
										<span>Marco regulatorio para estas instalaciones según ente de incumben.</span> <br/>
									</p>
								</article>

								<p><br/>Una vez definido el espacio dentro del edificio, se diseñan las distintas partes: <br/><br/></p>

								<article className="pl-2">
									<p className="flex ">
										<span className="pr-2">1.</span>
										<span>Sistema de circulación de ACC: se definen cuadros compuestos por colectores de mandada y retorno, con bombas centrifugas con sellos aptos para temperatura y de la capacidad requerida para la totalidad del sistema. Las bombas serán redundantes para darle mayor confiabilidad a la instalación y realizarles correcto mantenimiento preventivo. </span> <br/>
									</p>
									<p className="flex ">
										<span className="pr-2">2.</span>
										<span>Vasos de expansión de la capacidad de diseño de acuerdo con las características de la instalación.   </span> <br/>
									</p>
									<p className="flex ">
										<span className="pr-2">3.</span>
										<span>Piping de interconexión entre todos los elementos de SMAQ: se realiza en caño de acero calidad SCH40 con aislación de goma elastomérica, de diámetros adecuados para los caudales y presiones de la instalación.  </span> <br/>
									</p>
									<p className="flex ">
										<span className="pr-2">4.</span>
										<span>Se diseña un tablero eléctrico, con componentes de primera calidad, para control automático del sistema, alarmas y capacidad de retransmitir información del estado del sistema, a un dispositivo móvil para monitoreo y control a distancia.</span> <br/>
									</p>
								</article>

								
							</p>

						</div>
						
						<div className="w-full flex flex-col gap-6">
							
							<h2 className="text-[#EF771C] text-[3.8vw] lg:text-[1.3vw] font-nunito-bold lg:mt-">3. DISTRIBUCIÓN CENTRAL Y CONEXIÓN A VIVIENDAS</h2>

							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
								La distribución de ACC entre SMAQ y los distribuidores de cada vivienda será por medio de caños plásticos con uniones por termofusión, de baja conductividad térmica con recubrimiento de aluminio y propiedades no adherentes para no favorecer la incrustación de sarro. 
								<br/><br/>
								Los distribuidores deben incluir los colectores junto con las cajas metálicas diseñadas para dicha aplicación con válvulas motorizadas para cada uno de los circuitos que se instalarán en los departamentos. En la alimentación a los distribuidores de cada vivienda, recomendamos instalar un medidor de consumo, para poder prorratear el gasto total del sistema, según el uso de cada departamento.
							</p>

							<h2 className="text-[#EF771C] text-[3.8vw] lg:text-[1.3vw] font-nunito-bold lg:mt-16">4. DISEÑO DE CIRCUITOS Y RADIADORES DE CALEFACCIÓN</h2>
							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
								El diseño de los circuitos dentro de los departamentos se realiza según el destino y simultaneidad de usos, se deberá buscar un equilibrio entre lo económico para la instalación y la posterior operación.
								<br/><br/>
								Las cañerías de alimentación y retorno, entre los distribuidores y los radiadores se realizan en cañerías tipo “pex” con uniones por sistemas de presión.
								<br/><br/>
								Determinamos la cantidad de elementos por ambiente, en función de su superficie. Así por ejemplo un dormitorio de aproximadamente 8 m2, se le colocará un radiador de no menos de 7 elementos. 
								<br/><br/>
								Los radiadores a utilizar serán de aluminio con certificaciones según reglamentación vigente, los cuales se instalarán con sus kits, válvulas, detentores, niples cromados y rosetas metálicas, para asegurar el correcto funcionamiento.
								<br/><br/>
								Para el comando y control del sistema, se instalan termostatos ambientes digitales, uno por circuito, con conexión remota para comando por dispositivos móviles.
								<br/><br/>

							</p>


							<Image
								alt="Imagen 3"
								className="lg:mt-16"
								radius="none"
								src="../../img/soluciones/calefaccion_de_edificio_por_agua_caliente/Soluciones3.png"
								width="100%"
							/>

							
							

							<h2 className="pt-6 text-center font-nunito-bold text-[#9D9D9C] text-[3.8vw] lg:text-[1.3vw] lg:mt-16 mr-auto">RECOMENDACIÓN FINAL</h2>
							<p className="w-full text-[#EF771C] text-[3.8vw] lg:text-[1.20vw] font-nunito ">
							Antes de comenzar a desarrollar un proyecto de este tipo, el paso “cero”, la piedra fundamental debe ser conocer la calidad del agua con la que trabajará el sistema a fines de saber que la calidad y materiales de accesorios que elijamos, no se deteriorarán antes de cumplir con su vida útil programada.
							</p>
						</div>
						
						{BigScreen || 
					<>
					{/* ------------------- MOBILE ------------------- */}
					<section className="bg-[#F7F6F6] h rounded-3xl">
						<div className="grid grid-cols-[40%_57%] gap-[3%] p-3 "> 
							<div className=" bg-[#EF771C] rounded-2xl shadow-2xl">
								<Image
									alt="Banner 1"
									className="p-2 px-	"
									radius="none"
									src="../../img/soluciones/calefaccion_de_edificio_por_agua_caliente/Soluciones1.png"
									// width="100%"
									height="100%"
									/> 
							</div>
							<div className=" h-full flex flex-col justify-center items-center gap-[5%]">
								<div className="w-full h-[100%] xm:h-[50%] bg-white rounded-2xl shadow-xl flex flex-col">
									<h1 className="bg-[#EF771C] px-2 text-white text-[3.5vw] pl-12 -ml-10 mr-4 mt-2 rounded-r-2xl">Caldera para calefaccion</h1>
									<div className="mt-auto m-1 xm:mb-2 xm:ml-2">
										<Button
											className=" w-auto z-10 bg-[#EF771C] p-1 py- px-4 xm:py-4  font-nunito text-white shadow-xl"
											radius="full"
											size="sm"
											onClick={()=>(window.open("electroterma.com"))}
										>
											Saber más
										</Button>
										</div>
								</div>
								<div className="w-full h-[40%] bg-white rounded-2xl shadow-xl flex align-bottom justif	">
									
										<Button
											className="mt-auto m-1 2 xm:mt-auto  ml-2 mb-2 z-10 bg-[#EF771C] xm:px-4 xm:py-4  font-nunito text-white shadow-xl"
											radius="full"
											size="sm"
											onClick={()=>(window.open("/solucionesHVAC", "_top"))}
										>
											Ver otras soluciones
										</Button>
									
								</div>
							</div>

						</div>
					</section>


					{/* <section className="bg-white border-1 border-lowgray rounded-3xl shadow-2xl w-[99.5%] mt-2">
						<div className=" grid grid-cols-[50%_40%] gap-[5%] p-3 ">
							<div className=" bg-[#EF771C] rounded-2xl">
								<Image
									alt="Banner 1"
									className="pr-1"
									radius="none"
									src="../../img/soluciones/calefaccion_de_edificio_por_agua_caliente/Soluciones1.png"
									// width="100%"
									height="100%"
									/> 
							</div>
							<div className="flex flex-col items-center mt-[1%] justify-cente h-full">
								<div className="">
									<Avatar  src="../../img/soluciones/calefaccion_de_edificio_por_agua_caliente/SolucionesAutor.png" className="h-[15.0vw] w-[15.0vw] my-2 mx-auto text-large"/>
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
							
						</div>
					</section> */}
					
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
