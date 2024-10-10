"use client"
import { title } from "@/components/primitives";
import { solucionesGeneralData } from "@/public/data/soluciones/solucionesGeneralData";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Avatar } from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { IoMailOutline } from "react-icons/io5";

export default function Soluciones_extraccion_de_aire_localizada_Page() {

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
            src={`../../img/soluciones/extraccion_de_aire_localizada/Soluciones${i+4}.png`}
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
						src="../../img/soluciones/extraccion_de_aire_localizada/SolucionesBanner1.png"
						width="100%"
					/>
				</div>
			
		</section>

		<section className="w-full ml-[3%] grid lg:grid-cols-[25%_75%]">
			{BigScreen ?
			<>
			<section className="w-full h-[144%] z-0 rounded-tl-[0px] -mt-10 pt-10   bg-[#F7F6F6] ">
				<div className="  ml-[0.5vw] mt-6  bg-gray-00">
					<div className=" flex mr-auto ml-4 pl-10 text-white font-lexend-bold text-[2.5vw] bg-white- rounded-l-full border-1- border-lowgray- shadow-2xl-"> 
					<Avatar  src="../../img/soluciones/extraccion_de_aire_localizada/SolucionesAutor.png" className="-ml-8 w- h-[5.0vw] my-2 text-large"/>
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
							className="p-6"
							radius="none"
							src="../../img/soluciones/extraccion_de_aire_localizada/Soluciones1.png"
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
					<h1 className="lg:py-6 pl-2 lg:pl-12 py-2 text-white font-lexend-bold lg:text-[2.0vw] bg-[#EF771C] shadow-2xl">SOLUCIÓN EXTRACCIÓN DE AIRE LOCALIZADA</h1>

					<div className="visible md:hidden flex mr-auto mt-1 text-white font-lexend-bold text-[2.5vw] bg-white- rounded-l-full border-1- border-lowgray- shadow-2xl-"> 
							<Avatar  src="../../img/soluciones/extraccion_de_aire_localizada/SolucionesAutor.png" className="w- h-[10.0vw] my-2 text-large"/>
							<p className="my-auto ml-2 pt-4  pb-4  text-[#EF771C] font-lexend-bold text-[3.2vw]">Por: {" "}
								<span className="underline">Juan Manuel de Porras</span>
							</p>
						</div>

					<div className="w-full mt-4 pl-2 pr-2 lg:pr-20 py-2 lg:py-10 grid lg:grid-cols-2 gap-10">

						{/* ------------- Contenido primario ------------- */}
						<div className="w-full flex flex-col gap-6 text-[3.8vw] lg:text-[1.20vw] font-nunito items-center ">

							
							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
								Cuando en una nave industrial, taller de soldadura, cocina de un restaurant u otro local se originan gases, vapores, olores y polvo, aplicar exclusivamente los principios de <span className="font-nunito-bolder">ventilación general</span>
								{" "}puede generar alguna problemática, como por ejemplo, la extensión a todo el recinto, del contaminante que originalmente estaba localizado. Para estos casos con fuentes de contaminantes puntuales, la mejor solución suele ser una 
								<span className="font-nunito-bolder"> extracción de aire localizada.</span>
							</p>
							<p>
								La extracción localizada pretende mantener los contaminantes en el nivel más bajo, capturándolos antes que sean esparcidos en todo el ambiente. Este tipo de extracción se compone de los siguientes elementos:
							</p>
							<ul>
								<li><span className="text-[#EF771C]">»</span> Sistema de captación.</li>
								<li><span className="text-[#EF771C]">»</span> Canalización de transporte del contaminante.</li>
								<li><span className="text-[#EF771C]">»</span> Ventilador de extracción adecuado para la aplicación.</li>
								<li><span className="text-[#EF771C]">»</span> Y en determinadas instalaciones: sistema separador.</li>
							</ul>

							<Image
								alt="Imagen 2"
								className=""
								radius="none"
								src="../../img/soluciones/extraccion_de_aire_localizada/Soluciones2.png"
								width="100%"
							/>



							<h2 className="text-[#EF771C] text-[3.8vw] lg:text-[1.3vw] font-nunito-bold lg:mt-16 mr-auto">ANÁLISIS DE SITUACIÓN Y SOLUCIÓN PROPUESTA POR EL EQUIPO DE INGENIERÍAS</h2>
						    <p className="">
								En este caso presentaremos un ejemplo de diseño de este tipo de instalaciones, para una industria de fraccionado y envasado de polvos (no inflamables, ni explosivos), cuyo informe de granulometría nos permitió clasificarlo como pesado y seco. En esta instalación se requería extraer sólidos en suspensión generados por procesos de carga de tolvas mezcladoras, descarga y envasado de mezclas, puesto de fraccionado y pesado.
							</p>
							<Image
								alt="Imagen 3"
								className="lg:mt-16"
								radius="none"
								src="../../img/soluciones/extraccion_de_aire_localizada/Soluciones3.png"
								width="100%"
							/>

							<h2 className="text-[#EF771C] text-[3.8vw] lg:text-[1.3vw] font-nunito-bold lg:mt-16 mr-auto">SISTEMA DE CAPTACIÓN</h2>
						    <p className="">
								El sistema de captación es la parte más importante de la instalación ya que una mala concepción de este dispositivo puede afectar el desempeño de todo el sistema. Puede ser tipo campana, flauta o rendija de aspiración, una boca de conexión en un equipo o tipo cabina.
							</p>
							<p className="">
								Para asegurar la efectividad de la captación deberán asegurarse las velocidades mínimas de aspiración. Las cuales dependerán del tipo, tamaño y peso de las partículas de contaminante que estemos trabajando (gas, vapor, humo, polvo).
							</p>
							<p className="">
								Además, se deberá tener en cuenta que la ubicación de los dispositivos de captado sea lo más cerca posible de la zona de emisión de los contaminantes, que a su vez el operario no quede entre este y la fuente de contaminación.
							</p>


						</div>
						
						<div className="w-full flex flex-col gap-6">
							
							<h2 className="text-[#EF771C] text-[3.8vw] lg:text-[1.3vw] font-nunito-bold lg:mt-">En el caso de análisis se requería la captación en diversos puntos:</h2>

							<table className="table-fixed text-[14px] font-nunito">
								<thead>
									<tr className="text-white border-1 border-highgray ">
										<th className="bg-[#ff994c] border-1 border-highgray py-1">ETAPA DEL PROCESO</th>
										<th className="bg-midgray border-1 border-highgray">Tipo de captacion</th>
										<th className="bg-midgray border-1 border-highgray px-4">Cantidad</th>
										<th className="bg-midgray text-[12px]">Superficie de captacion(m2)</th>

									</tr>
								</thead>
								<tbody>
									<tr className="text-center bg-gray-200 ">
										<td className="border-1 border-highgray">Tolva de mezcla</td>
										<td className="border-1 border-highgray">Boca de equipo</td>
										<td className="border-1 border-highgray">2</td>
										<td className="border-1 border-highgray">0.3</td>

									</tr>
									<tr className="text-center ">
										<td className="border-1 border-highgray">Descarga en envasadora</td>
										<td className="border-1 border-highgray">Boca de equipo</td>
										<td className="border-1 border-highgray">2</td>
										<td className="border-1 border-highgray">0.3</td>

									</tr>
									<tr className="text-center bg-gray-200">
										<td className="border-1 border-highgray">Pesado y dosificación</td>
										<td className="border-1 border-highgray">Campana sobre proceso</td>
										<td className="border-1 border-highgray">2</td>
										<td className="border-1 border-highgray">0.25</td>

									</tr>
									<tr className="text-center">
										<td className="border-1 border-highgray">Cerrado</td>
										<td className="border-1 border-highgray">Boca de equipo</td>
										<td className="border-1 border-highgray">2</td>
										<td className="border-1 border-highgray">0.3</td>

									</tr>
									<tr className="text-center bg-gray-200">
										<td className="border-1 border-highgray">Cerrado</td>
										<td className="border-1 border-highgray">Rejilla</td>
										<td className="border-1 border-highgray">1</td>
										<td className="border-1 border-highgray">0.05</td>

									</tr>
								</tbody>
							</table>
							{/* <Image
								alt="Imagen 4"
								className="lg:mt-"
								radius="none"
								src="../../img/soluciones/extraccion_de_aire_localizada/Soluciones4.png"
								width="100%"
							/> */}

							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito-bolder">La superficie total de captación (A) = 1.2 m 2</p>

							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
								En nuestro caso la velocidad de captación en la cara abierta (v) es un requerimiento del fabricante de la línea de producción, la cual se había definido en 600 m/min y se determina considerando que es polvo que es liberado con alta velocidad inicial, en una zona de movimiento rápido de aire.
								<br/><br/>
								Por medio de la superficie y velocidad de captación podremos determinar el caudal que deberá tener el sistema:
							</p>

							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito-bolder">Q = A x v | Q = 1.2 m 2 x 600 m/min | Q = 720 m 3 /min</p>

							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
								En base a estos cálculos se diseñó una campana de extracción de las dimensiones adecuadas.
							</p>

							<h2 className="text-[#EF771C] text-[3.8vw] lg:text-[1.3vw] font-nunito-bold lg:mt-16">CONDUCTOS DE TRANSPORTE</h2>
							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
								Para los sistemas de extracciones localizadas, los conductos de transporte del contaminante se recomienda que sean de sección circular y la velocidad del aire en el interior será determinada por el tipo de contaminante que se esté extrayendo, la cual resultará crítica para evitar decantación del contaminante en el sistema de transporte.
								<br/><br/>
								Según el análisis del polvo los conductos deberán lograr una velocidad de flujo de 1.200m/min, ya que el polvo que se transporta se clasificó como pesado.
								<br/><br/>
								El sistema de unión entre conductos, para el proyecto, será por medio de bridas y juntas. Este sistema se selecciona por la facilidad de montaje, aseguramiento de estanqueidad y la posibilidad de desarme para procesos de limpieza. 
								<br/><br/>
								En función de estas recomendaciones, se definieron conductos de sección circular con bridas y juntas estancas.
								<br/><br/>

							</p>


							<h2 className="text-[#EF771C] text-[3.8vw] lg:text-[1.3vw] font-nunito-bold lg:mt-16">VENTILADOR DE EXTRACCIÓN</h2>
							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
								En el caso de análisis 
								<span className="font-nunito-bolder"> se seleccionó un <span className="text-[#EF771C]">ventilador centrífugo</span>  de simple aspiración de palas inclinadas hacia atrás, marca  Soler & Palau,</span> modelo RLS para el caudal correspondiente. Para la selección del ventilador, se deberá tener en cuenta la pérdida de carga infringida por los conductos y por el sistema separador.
							</p>

							<h2 className="text-[#EF771C] text-[3.8vw] lg:text-[1.3vw] font-nunito-bold lg:mt-16">SISTEMA SEPARADOR</h2>
							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
								Para el sistema separador de sólidos, existen diversas alternativas tecnológicas, según el contaminante que se busque retener. Además, cada una de ellas con sus ventajas y desventajas: costo de inversión, frecuencia de mantenimiento, costos operativos.
							</p>
							

							<h2 className="pt-6 text-center font-nunito-bold text-[#9D9D9C] text-[3.8vw] lg:text-[1.3vw] lg:mt-16 mr-auto">RECOMENDACIÓN FINAL</h2>
							<p className="w-full text-[#EF771C] text-[3.8vw] lg:text-[1.20vw] font-nunito ">
								La ventilación general no siempre es recomendada cuando en un ambiente se generan contaminantes puntuales como gases, vapores, olores y polvo, ya que ello puede empeorar la situación. Se recomienda primero analizar la opción de captación en el lugar y extraer con ductos y ventiladores calculados adecuadamente. Al final del sistema, es necesario contar con un sistema separador según el contaminante y siempre es recomendable que el mismo sea de operación y limpieza automática, para elevar la eficiencia del sistema completo.
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
									className="p-1 px-1 pt-6	"
									radius="none"
									src="../../img/soluciones/extraccion_de_aire_localizada/Soluciones1.png"
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
