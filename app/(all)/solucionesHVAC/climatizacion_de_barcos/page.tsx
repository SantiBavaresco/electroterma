"use client"
import { title } from "@/components/primitives";
import { solucionesGeneralData } from "@/public/data/soluciones/solucionesGeneralData";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Avatar } from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { IoMailOutline } from "react-icons/io5";

export default function Soluciones_climatizacion_de_barcos_Page() {

	const handleEmailClick = () => {
        const email = 'info@electroterma.com.ar';
        const subject = 'Consulta sobre equipamiento';
        const body = 'Hola! Me gustaría hacer una consulta sobre equipamiento de Electroterma';
    
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
            src={`../../img/soluciones/climatizacion_de_barcos/Soluciones${i+4}.webp`}
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
						src="../../img/soluciones/climatizacion_de_barcos/SolucionesBanner1.webp"
						width="100%"
					/>
				</div>
			
		</section>

		<section className="w-full ml-[3%] grid lg:grid-cols-[25%_75%]">
			{BigScreen ?
			<>
			<section className="w-full h-[104%] z-0 rounded-tl-[0px] -mt-10 pt-10   bg-[#F7F6F6] ">
				<div className="  ml-[0.5vw] mt-6  bg-gray-00">
					<div className=" flex mr-auto ml-4 pl-10 text-white font-lexend-bold text-[2.5vw] bg-white- rounded-l-full border-1- border-lowgray- shadow-2xl-"> 
					<Avatar  src="../../img/soluciones/climatizacion_de_barcos/SolucionesAutor.webp" className="-ml-8 w- h-[5.0vw] my-2 text-large"/>
					<p className="my-auto ml-4 pt-4  pb-4  text-[#EF771C] font-lexend-bold text-[1.2vw]">Por: {" "}
						<span className="underline">Victor Barbarito</span>
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
							src="../../img/soluciones/climatizacion_de_barcos/Soluciones1.webp"
							// width="100%"
							height="100%"
							/> 
							
						</div>
						<h1 className="w-full text-center text-[1.5vw] font-nunito-bold bg-white text-black">Calefactor Eléctrico</h1>

								<Button
									className="  z-10 bg-[#EF771C] px-16 py-4  font-nunito text-white text-xl 2xl:text-3xl shadow-xl"
									radius="full"
									size={BigScreen ? "lg" : "lg"}
									onClick={()=>(window.open("/tempomatic/calefactor_electrico", "_top"))}
								>
									Saber más
								</Button>
						
					</div>
					
				</div>
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
					<h1 className="lg:py-6 pl-2 lg:pl-24 py-2 text-white font-lexend-bold lg:text-[2.1vw] bg-[#EF771C] shadow-2xl"> SOLUCIÓN CLIMATIZACIÓN DE BARCOS</h1>

					

					<div className="w-full mt-4 pl-2 pr-2 lg:pr-20 py-2 lg:py-10 grid lg:grid-cols-2 gap-10">

						{/* ------------- Contenido primario ------------- */}
						<div className="w-full flex flex-col gap-6 text-[3.8vw] lg:text-[1.20vw] font-nunito items-center ">

							<div className="visible md:hidden flex mr-auto mt-1 text-white font-lexend-bold text-[2.5vw] bg-white- rounded-l-full border-1- border-lowgray- shadow-2xl-"> 
								<Avatar  src="../../img/soluciones/climatizacion_de_barcos/SolucionesAutor.webp" className="w- h-[10.0vw] my-2 text-large"/>
								<p className="my-auto ml-2 pt-4  pb-4  text-[#EF771C] font-lexend-bold text-[3.2vw]">Por: {" "}
									<span className="underline">Victor Barbarito</span>
								</p>
							</div>
							
						    <p className="">
								Es conocido que las personas que se desarrollan en la actividad marítima pueden estar expuestas a condiciones de lo más adversas, entre ellas, espacios reducidos, climas extremos y embarcaciones que pueden llegar a extenderse por semanas.
							</p>

							<p>
								Es por ello, que trabajar en el acondicionamiento de las áreas de descanso y espacios comunes en los Barcos, se vuelve de vital importancia. Tener temperaturas agradables y una correcta ventilación en los ambientes y espacios cerrados, marca una gran diferencia en la salud y bienestar de cada individuo.
							</p>

							
							<h2 className="text-[#EF771C] text-[3.8vw] lg:text-[1.3vw] font-nunito-bold lg:mt-16">ANÁLISIS DE SITUACIÓN Y SOLUCIÓN PROPUESTA POR EL EQUIPO DE INGENIERÍA PARA CALEFACCIÓN EN BARCOS</h2>
							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
								Ante el desafío de calefaccionar una embarcación, se evalúan diversos factores entre los cuales se encuentran, condiciones climáticas y tamaño de equipos. Esto último es de especial importancia ya que un factor común que comparten la mayoría de las embarcaciones es, sin duda la falta de “espacios”, la cual no solo dificulta la movilidad de las personas, sino que además condiciona la distribución y ubicación de los equipos y elementos necesarios para el funcionamiento.
							</p>
							<p>
								Se propone instalar un Sistema de Calefacción por inyección de aire caliente, por ofrecer las siguientes ventajas:
							</p>
							<ul>
								<li><span className="text-[#EF771C]">»</span> Ofrece resultados inmediatos</li>
								<li><span className="text-[#EF771C]">»</span> Menor peso del conjunto</li>
								<li><span className="text-[#EF771C]">»</span> La instalación ocupa menos espacio</li>
								<li><span className="text-[#EF771C]">»</span> Se renueva y acondiciona el aire al mismo tiempo</li>
								<li><span className="text-[#EF771C]">»</span> Equipo e instalación más económica</li>
								<li><span className="text-[#EF771C]">»</span> No se ve afectado por la corrosión del ambiente marino</li>
							</ul>
							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
								Dentro de las distintas opciones disponibles para la generación de aire caliente, los {}
								<a className="text-[#EF771C] font-nunito-bold underline " href="/tempomatic/calefactor_electrico" target="_top">calefactores eléctricos </a>
								poseen características que los vuelven adecuados para las condiciones impuestas. Un equipo que funcione a gas necesita un depósito para almacenar dicho combustible, haciendo que el conjunto crezca en volumen. En cambio, la energía eléctrica disponible es un barco es suficiente para destinar parte de ella en calefaccionar sin generar inconvenientes.
							</p>

							
							<h2 className="pt-6 text-center font-nunito-bold text-[#EF771C] text-[3.8vw] lg:text-[1.3vw] lg:mt-16 mr-auto">BALANCE TÉRMICO Y SELECCIÓN DE EQUIPO</h2>
							<p className="w-full">
								Se realizó el balance térmico correspondiente a la cubierta de tripulantes, la cual se quiere calefaccionar, dando como resultado una necesidad de 18.000 kcal/h. Para cubrir esta necesidad se optó por un {""}
								<a className="text-[#EF771C] font-nunito-bold underline " href="/tempomatic/generador_de_aire_caliente" target="_top">Generador de aire caliente Tempomatic ET-027.</a>
								
							</p>

						</div>
						
						<div className="w-full flex flex-col gap-6">
							<Image
							alt="Imagen 2"
							className=""
							radius="none"
							src="../../img/soluciones/climatizacion_de_barcos/Soluciones2.webp"
							width="100%"
							/>

							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
								Esta línea de calefactores ofrece una excelente respuesta a esta problemática. La instalación es rápida y sencilla, el tiempo de precalentamiento es breve y la circulación de aire genera las renovaciones necesarias rápidamente. Su gran capacidad y compacto diseño les permiten adaptarse a los espacios disponibles.
							</p>

							<Image
								alt="Imagen 3"
								className=""
								radius="none"
								src="../../img/soluciones/climatizacion_de_barcos/Soluciones3.webp"
								width="100%"
							/>

							
							<h2 className="pt-6 text-center font-nunito-bold text-[#EF771C] text-[3.8vw] lg:text-[1.3vw] lg:mt-16 mr-auto">UBICACIÓN Y TENDIDO DE CONDUCTOS</h2>
							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito w-full">
								Para lograr la correcta distribución del aire se utilizaron conductos metálicos para las líneas troncales, de los cualesparten las derivaciones hacia camarotes y espacios comunes mediante mangueras especiales para la conducción 
								de aire. 
							</p>

							<div className="w-full    flex">
							{
								mobileImagesCol
							}
							</div>

							<h2 className="pt-6 text-center font-nunito-bold text-[#9D9D9C] text-[3.8vw] lg:text-[1.3vw] lg:mt-16 mr-auto">RECOMENDACIÓN FINAL</h2>
							<p className="w-full text-[#EF771C] text-[3.8vw] lg:text-[1.20vw] font-nunito ">
							Cada embarcación tendrá sus propias características y estará expuesta a condiciones distintas de trabajo. Analizar y adaptar el sistema que mejor satisfaga las necesidades en cada caso es lo que transforma algo tan simple como acondicionar un ambiente en todo un desafío.
							</p>
						</div>
						

						{BigScreen || 
						<>
						{/* ------------------- MOBILE ------------------- */}
							<div className="space-y-2">
								<section className="bg-[#F7F6F6] h rounded-3xl">
									<div className="grid grid-cols-[40%_57%] gap-[3%] p-3 "> 
										<div className=" bg-[#EF771C] rounded-2xl shadow-2xl">
											<Image
												alt="Banner 1"
												className="p-2 px-	"
												radius="none"
												src="../../img/soluciones/climatizacion_de_barcos/Soluciones1.webp"	
												height="100%"
												/> 
										</div>
										<div className="w-full  flex flex-row justify-center items-center gap-[%]">
											<div className="h-max w-full flex flex-row " onClick={()=>(window.open("/tempomatic/calefactor_electrico", "_top"))}>
												<div className=" w-full py-auto flex items-center gap-1">
													<div className="w-[90%]  rounded-l-[12px]  bg-[#EF771C]">
														<h1 className="my-1 px-2 py-1 mr-1 font-lexend text-white text-[3.8vw] ">Calefactor Eléctrico</h1>
													</div>
													<div className="w-[8%] h-full rounded-r-[12px] flex items-center justify-center bg-[#EF771C]">
														<h1 className="text-white">+</h1>
													</div>
												</div>
												
											</div>
										</div>
									</div>
									
								</section>
								<section>
									<div className="h-full pr-[0vw] xm:pr-[16.5vw] flex flex-col items-center xm:items-end justify-center align-middle">
										<a href="/solucionesHVAC"> 
											<button
												className="  z-10 bg-[#EF771C] px-2 py-2 rounded-[12px] font-nunito text-white text-sm 2xl:text-xl shadow-xl"
												// radius="full"
												// size={BigScreen ? "sm" : "sm"}
											>
												Ver otras soluciones
											</button>
										</a>
									</div>
								</section>
							</div>
						</>
						}
						

					</div>

					
					
				</div>
			</article>

		</section>

		{/* ------------- Consultanos ------------- */}
		<section className="w-full max-h-[50%] z-20 py-0 font-size overflow-hidden">
                <div className="bg-[#EF771C]  md:w-98% py-3  flex justify-center gap-[10vw] md:gap-20 items-center rounded-tr-[24px] rounded-bl-[24px]">
                    <div className="pl-[25px] md:ml-24 ">
                        <h2 className="w-[40v] text-white text-xs xm:text-base md:text-2xl 2xl:text-3xl font-nunito-bold">
                            {" "}
                            ¿Cuál es tu necesidad?{" "}
                        </h2>
                    </div>
                    <div className="mr-0 md:mr-12  ">
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
