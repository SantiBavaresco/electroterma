"use client"
import { title } from "@/components/primitives";
import { solucionesGeneralData } from "@/public/data/soluciones/solucionesGeneralData";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Avatar } from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { IoMailOutline } from "react-icons/io5";

export default function Soluciones_ventilacion_nave_industrial_Page() {

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
            src={`../../img/soluciones/ventilacion_nave_industrial/Soluciones${i+4}.png`}
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
						src="../../img/soluciones/ventilacion_nave_industrial/SolucionesBanner1.png"
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
					<Avatar  src="../../img/soluciones/ventilacion_nave_industrial/SolucionesAutor.png" className="-ml-8 w- h-[5.0vw] my-2 text-large"/>
					<p className="my-auto ml-4 pt-4  pb-4  text-[#EF771C] font-lexend-bold text-[1.2vw]">Por: {" "}
						<span className="underline">Juan Manuel de Porras</span>
					</p>

					</div>
				</div>

				<div className="  ml-[0.5vw] mt-6  bg-gray-00">
					<div className=" flex flex-col items-center justify-center align-middle gap-4 p-10 m-10 mx-4 mt-16  text-white font-lexend-bold text-[2.5vw] 
						bg-white rounded-[59px] border-1 border-lowgray shadow-2xl"> 
					
						<div className=" w-full flex flex-col  bg-[#EF771C] rounded-t-[30px]">
							<Image
							alt="Banner 1"
							className="p-6 py-6"
							radius="none"
							src="../../img/soluciones/ventilacion_nave_industrial/Soluciones11.png"
							// width="100%"
							height="100%"
							/> 
							
						</div>
						<h1 className="w-full text-center text-[1.5vw] font-nunito-bold bg-white text-black">Caja ventiladora</h1>

								<Button
									className="  z-10 bg-[#EF771C] px-16 py-4  font-nunito text-white text-xl 2xl:text-3xl shadow-xl"
									radius="full"
									size={BigScreen ? "lg" : "lg"}
									onClick={()=>(window.open("/tempomatic/caja_ventiladora", "_top"))}
								>
									Saber más
								</Button>
						
					</div>
					
				</div>

				<div className="  ml-[0.5vw] mt-6  bg-gray-00">
					<div className=" flex flex-col items-center justify-center align-middle gap-4 p-10 m-10 mx-4 mt-16  text-white font-lexend-bold text-[2.5vw] 
						bg-white rounded-[59px] border-1 border-lowgray shadow-2xl"> 
					
						<div className=" w-full flex flex-col  bg-[#EF771C] rounded-t-[30px]">
							<Image
							alt="Banner 1"
							className="px-8"
							radius="none"
							src="../../img/soluciones/ventilacion_nave_industrial/Soluciones12.png"
							// width="100%"
							height="100%"
							/> 
							
						</div>
						<h1 className="w-full text-center text-[1.5vw] font-nunito-bold bg-white text-black">Ventilador RLS</h1>

								<Button
									className="  z-10 bg-[#EF771C] px-16 py-4  font-nunito text-white text-xl 2xl:text-3xl shadow-xl"
									radius="full"
									size={BigScreen ? "lg" : "lg"}
									onClick={()=>(window.open("/soler&palau/RLS", "_top"))}
								>
									Saber más
								</Button>
						
					</div>
					
				</div>

				
				<div className="  ml-[0.5vw] mt-6  bg-gray-00">
					<div className=" flex flex-col items-center justify-center align-middle gap-4 p-10 m-10 mx-4 mt-16  text-white font-lexend-bold text-[2.5vw] 
						bg-white rounded-[59px] border-1 border-lowgray shadow-2xl"> 
					
						<div className=" w-full flex flex-col  bg-[#EF771C] rounded-t-[30px]">
							<Image
							alt="Banner 1"
							className="p- rounded-t-[30px]"
							radius="none"
							src="../../img/soluciones/ventilacion_nave_industrial/Soluciones13.png"
							// width="100%"
							height="100%"
							/> 
							
						</div>
						<h1 className="w-full text-center text-[1.5vw] font-nunito-bold bg-white text-black">Ductos textiles</h1>

								<Button
									className="  z-10 bg-[#EF771C] px-16 py-4  font-nunito text-white text-xl 2xl:text-3xl shadow-xl"
									radius="full"
									size={BigScreen ? "lg" : "lg"}
									onClick={()=>(window.open("/dti", "_top"))}
								>
									Saber más
								</Button>
						
					</div>

					<div className="h-full  flex flex-col items-center justify-center align-middle">
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
					
				</div>

				
				
			</section>
			</>
			:
			<></>
			}
			
			<article className="w-full h-full bg-green-00">
				<div className=" ml-2 mr-4 lg:mx-4 mt-6 bg-[#EF771C">
					{/* ------------- TITULO PRINCIPAL ------------- */}
					<h1 className="lg:py-6 pl-2 lg:pl-12 py-2 text-white font-lexend-bold lg:text-[2.0vw] bg-[#EF771C] shadow-2xl">SOLUCIÓN VENTILACIÓN NAVE INDUSTRIAL</h1>

					<div className="visible md:hidden flex mr-auto mt-1 text-white font-lexend-bold text-[2.5vw] bg-white- rounded-l-full border-1- border-lowgray- shadow-2xl-"> 
							<Avatar  src="../../img/soluciones/ventilacion_nave_industrial/SolucionesAutor.png" className="w- h-[10.0vw] my-2 text-large"/>
							<p className="my-auto ml-2 pt-4  pb-4  text-[#EF771C] font-lexend-bold text-[3.2vw]">Por: {" "}
								<span className="underline">Juan Manuel de Porras</span>
							</p>
						</div>

					<div className="w-full mt-4 pl-2 pr-2 lg:pr-20 py-2 lg:py-10 grid lg:grid-cols-2 gap-10">

						{/* ------------- Contenido primario ------------- */}
						<div className="w-full flex flex-col gap-6 text-[3.8vw] lg:text-[1.40vw] font-nunito items-center ">

							
							<p className="">
								Las naves industriales son lugares habituales de trabajo que por sus procesos productivos poseen generación de calor, de vapores, de humos y/o de polvo entre alguno de los contaminantes, por lo que es necesario el diseño e instalación de un eficiente sistema de ventilación. 
							</p>
							
							<p>
								Los sistemas de ventilación se instalan para brindar al recurso humano, las mejores condiciones de trabajo, tanto en los que hace a temperatura y humedad como a limpieza del aire. 
							</p>
							<p>
								Otro motivo de la importancia de la ventilación en naves industriales, es evitar la condensación en paredes, techos y cualquier otra superficie, que en el caso de la industria alimenticia es un punto primordial. 
							</p>
							<p>
								Una selección incorrecta de los equipos de ventilación, de los sistemas de distribución y/o de los sistemas de inyección o captación de aire, implica un considerable derroche de energía eléctrica.
							</p>

							<h2 className="text-[#EF771C] text-[3.8vw] lg:text-[1.4vw] font-nunito-bold lg:mt-16 mr-auto">Desarrollo de proyecto de ventilación de nave industrial de fabricación/elaboración de empanados prefritos de origen vegetal y animal.</h2>
							<p>
								La nave industrial posee 4 líneas de producción (25tn cada una) de medallones vegetales, animales, y mixtos, que luego de formarse se bañan en batters de diferentes fórmulas según el tipo de producto, se empanan con distintos tipos de rebozadores, se fríen en un freidor continuo de 5 metros de longitud y finalmente circulan por una línea de enfriamiento para luego ingresar en el túnel de congelado.
							</p>
							<Image
								alt="Imagen 2"
								className="pl-"
								radius="none"
								src="../../img/soluciones/ventilacion_nave_industrial/Soluciones2.png"
								width="100%"
							/>

						</div>
						
						<div className="w-full flex flex-col gap-6 text-[3.8vw] lg:text-[1.40vw] font-nunito">

							<p>
								Como solución de ventilación industrial, se instalará un sistema combinado de inyección y extracción de aire, del orden de las 25 renovaciones por hora, de presión positiva por tratarse de una nave de producción de alimentos. 
							</p>
							<p>
								Por el volumen de la nave (50m x 30m x 7m de altura) se deben inyectar 262.500 m3/hora, previo filtrado con filtros de eficiencia MERV 8. Se extraerá un 85/90% del aire inyectado de modo de generar la presión positiva. Como la nave posee 4 extractores de campana de freidores, se deben extraer con el sistema de ventilación 200.000 m3/hora. 
							</p>
							
							<Image
								alt="Imagen 4"
								className="lg:mt-"
								radius="none"
								src="../../img/soluciones/ventilacion_nave_industrial/Soluciones3.png"
								width="100%"
							/>

							<ul>
								<li>
									<span className="text-[#EF771C]">»</span> Para la <span className="text-[#EF771C] font-nunito-bold"> inyección </span>, se instalaran 6 Cajas Ventiladoras Tempomatic modelo CV 665 - 045 de 40.000 m3/hora (contra 45mmca) con distribución de aire mediante {" "}
									<a className="text-[#EF771C] font-nunito-bold underline " href="/dti" target="_top">Ductos Textiles DTI</a>.
								</li>
								<br/>
								<li>
									<span className="text-[#EF771C]">»</span> Para la <span className="text-[#EF771C] font-nunito-bold"> extracción </span>, se instalaran 6 {" "}
									<a className="text-[#EF771C] font-nunito-bold underline " href="/soler&palau" target="_top">Ventiladores Centrífugos OTAM | Soler & Palau</a> modelo RLS900 con motor de acople directo a 900 rpm (potencia 12,5HP), con aspiración a través de plenos de captación instalados en cielorraso.
								</li>
							</ul>

						</div>
						
						{BigScreen || 
					<>
					{/* ------------------- MOBILE ------------------- */}
					<section className="bg-[#F7F6F6] h rounded-3xl">
						<div className="grid grid-cols-[40%_57%] gap-[3%] p-3 "> 
							<div className=" bg-[#EF771C] rounded-2xl shadow-2xl">
								<Image
									alt="Banner 1"
									className="p-1 px-2 pt-12 pb-4	"
									radius="none"
									src="../../img/soluciones/ventilacion_nave_industrial/Soluciones11.png"
									// width="100%"
									height="100%"
									/> 
							</div>
							<div className=" h-full flex flex-col justify-center items-center gap-[5%]">
								<div className="w-full h-[100%] xm:h-[50%] bg-white rounded-2xl shadow-xl flex flex-col">
									<h1 className="bg-[#EF771C] p-2 text-white text-[3.5vw] pl-[58px] -ml-10 mr-4 mt-2 rounded-r-2xl">Caja ventiladora</h1>
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

					<section className="bg-[#F7F6F6] h rounded-3xl">
						<div className="grid grid-cols-[40%_57%] gap-[3%] p-3 "> 
							<div className=" bg-[#EF771C] rounded-2xl shadow-2xl">
								<Image
									alt="Banner 1"
									className="p-1 px-2 pt-10	"
									radius="none"
									src="../../img/soluciones/ventilacion_nave_industrial/Soluciones12.png"
									// width="100%"
									height="100%"
									/> 
							</div>
							<div className=" h-full flex flex-col justify-center items-center gap-[5%]">
								<div className="w-full h-[100%] xm:h-[50%] bg-white rounded-2xl shadow-xl flex flex-col">
									<h1 className="bg-[#EF771C] p-2 text-white text-[3.5vw] pl-[58px] -ml-10 mr-4 mt-2 rounded-r-2xl">Ventilador RLS</h1>
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

					<section className="bg-[#F7F6F6] h rounded-3xl">
						<div className="grid grid-cols-[40%_57%] gap-[3%] p-3 "> 
							<div className=" bg-[#EF771C] rounded-2xl shadow-2xl">
								<Image
									alt="Banner 1"
									className="	rounded-2xl"
									radius="none"
									src="../../img/soluciones/ventilacion_nave_industrial/Soluciones13.png"
									// width="100%"
									height="100%"
									/> 
							</div>
							<div className=" h-full flex flex-col justify-center items-center gap-[5%]">
								<div className="w-full h-[100%] xm:h-[50%] bg-white rounded-2xl shadow-xl flex flex-col">
									<h1 className="bg-[#EF771C] p-2 text-white text-[3.5vw] pl-[58px] -ml-10 mr-4 mt-2 rounded-r-2xl">Ductos textiles</h1>
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
							<div className=" flex items-center bg-[#EF771C] rounded-2xl">
								<Image
									alt="Banner 1"
									className="pr-1"
									radius="none"
									src="../../img/soluciones/ventilacion_nave_industrial/Soluciones1.png"
									// width="100%"
									height="100%"
									/> 
							</div>
							<div className="flex flex-col items-center mt-[1%] justify-cente h-full">
								<div className="">
									<Avatar  src="../../img/soluciones/ventilacion_nave_industrial/SolucionesAutor.png" className="h-[15.0vw] w-[15.0vw] my-2 mx-auto text-large"/>
									<p className="px-auto py-2  text-[#EF771C] font-lexend-bold text-[3.8vw] text-center">Por: {" "}
										<span className="underline">Juan Manuel de Porras</span>
									</p>
									<h1 className="w-full text-center text-[6.5vw] font-nunito-bold bg-white text-black">Ventilador RLS</h1>
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
