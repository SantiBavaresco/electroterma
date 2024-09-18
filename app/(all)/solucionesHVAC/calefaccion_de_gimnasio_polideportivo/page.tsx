"use client"
import { title } from "@/components/primitives";
import { solucionesGeneralData } from "@/public/data/soluciones/solucionesGeneralData";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Avatar } from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { IoMailOutline } from "react-icons/io5";

export default function Soluciones_calefaccion_de_gimnasio_polideportivo_Page() {

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
            src={`../../img/soluciones/calefaccion_de_gimnasio_polideportivo/Soluciones${i+4}.png`}
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
						src="../../img/soluciones/calefaccion_de_gimnasio_polideportivo/SolucionesBanner1.png"
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
					<Avatar  src="../../img/soluciones/calefaccion_de_gimnasio_polideportivo/SolucionesAutor.png" className="-ml-8 w- h-[5.0vw] my-2 text-large"/>
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
							src="../../img/soluciones/calefaccion_de_gimnasio_polideportivo/Soluciones1.png"
							// width="100%"
							height="100%"
							/> 
							
						</div>
						<h1 className="w-full text-center text-[1.5vw] font-nunito-bold bg-white text-black">Generador de aire caliente</h1>

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
				<div className="h-full pb-[70%] flex flex-col items-center justify-center align-middle">
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
					<h1 className="lg:py-6 pl-2 lg:pl-12 py-2 text-white font-lexend-bold lg:text-[2.0vw] bg-[#EF771C] shadow-2xl">SOLUCIÓN CALEFACCIÓN DE GIMNASIO POLIDEPORTIVO</h1>

					

					<div className="w-full mt-4 pl-2 pr-2 lg:pr-20 py-2 lg:py-10 grid lg:grid-cols-2 gap-10">

						{/* ------------- Contenido primario ------------- */}
						<div className="w-full flex flex-col gap-6 text-[3.8vw] lg:text-[1.20vw] font-nunito items-center ">

							
							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
							La <span className="font-nunito-bolder">calefacción de gimnasios polideportivos,</span> es clave para el normal desarrollo de las actividades deportivas y sociales que allí se realizan. De la correcta selección del sistema de calefacción, dependerá contar o no con un sistema energéticamente eficiente, durable y de bajo costo de mantenimiento.
							</p>
							
							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
								En la búsqueda de esos objetivos, <span className="font-nunito-bolder">los sistemas de calefacción por aire caliente industriales a gas</span> (natural o envasado) son la opción ideal para calefaccionar estos espacios, por rendimiento y confiabilidad.
							</p>

							

							<Image
								alt="Imagen 2"
								className=""
								radius="none"
								src="../../img/soluciones/calefaccion_de_gimnasio_polideportivo/Soluciones2.png"
								width="100%"
							/>
							<h2 className="text-[#EF771C] text-[3.8vw] lg:text-[1.8vw] font-nunito-bold lg:mt-16 mr-auto">Desarrollo de proyecto de <span className="font-nunito-bolder">calefacción de gimnasio polideportivo</span> de 1250m2 ubicado en la provincia de Tierra del Fuego.</h2>

							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
								Se trata de un gimnasio de 50m de largo x 25m de ancho, con techo a dos aguas, de 9m de altura promedio, con paredes de doble chapa con 100mm de lana de vidrio mineral y techo de chapa con aislacion de lana de vidrio de 50mm.
							</p>

						    {/* <p className="">
								Realizado el balance térmico, se decide instalar 80.000 Kcal/hora de calefacción por planta, por lo cual se instalan 2 (dos) <a className="text-[#EF771C] font-nunito-bold underline " href="https://electroterma.com.ar/producto/unidad-manejadora-de-aire-tempomatic/" target="_blank">Unidades Manejadores de Aire</a> Caliente marca 
								<a className="text-[#EF771C] font-nunito-bold underline " href="/tempomatic" target="_blank"> TEMPOMATIC</a> chequear link a uma modelo UMA 10/40.
							</p> */}
							


						</div>
						
						<div className="w-full flex flex-col gap-6">
							
							<h2 className="text-[#EF771C] text-[3.8vw] lg:text-[1.8vw] font-nunito-bolder lg:mt- mr-auto">¿Cómo se resolvió la problemática utilizando productos TEMPOMATIC?</h2>
							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
								La calefacción del gimnasio, se resolvió instalando <a className="text-[#EF771C] font-nunito-bold underline " href="/tempomatic" target="_blank">Generadores de Aire Caliente TEMPOMATIC</a> a gas natural. Se realizó un balance térmico del edificio, con un resultado de 414.000 Kcal/hora de pérdidas totales.
							</p>
							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
								Para compensar estas pérdidas, se instalaron 6 <a className="text-[#EF771C] font-nunito-bold underline " href="/tempomatic" target="_blank">Generadores de Aire Caliente TEMPOMATIC</a> modelo TEO 080 mp, a 3 metros de altura del piso, con inyección a pleno mediante plenos direccionables.
							</p>
							<Image
								alt="Imagen 3"
								className="lg:mt-16"
								radius="none"
								src="../../img/soluciones/calefaccion_de_gimnasio_polideportivo/Soluciones3.png"
								width="100%"
							/>
							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
							Para aumentar la eficiencia energética del sistema, se puede instalar en el centro del gimnasio un <a className="text-[#EF771C] font-nunito-bold underline " href="/tempomatic" target="_blank">CEILING FAN</a> de 7.2m de diámetro. El funcionamiento de este equipo evitará la estratificación del aire, impulsando el aire caliente de la parte alta del gimnasio hacia el piso del mismo, que es donde se requiere realmente el control de temperatura.
							</p>
							<Image
								alt="Imagen 4"
								className="lg:mt-"
								radius="none"
								src="../../img/soluciones/calefaccion_de_gimnasio_polideportivo/Soluciones4.png"
								width="100%"
							/>
							
							
						</div>
						
						{BigScreen || 
					<>
					{/* ------------------- MOBILE ------------------- */}
					<section className="bg-white border-1 border-lowgray rounded-3xl shadow-2xl w-[99.5%] mt-2">
						<div className=" grid grid-cols-[50%_40%] gap-[5%] p-3 ">
							<div className=" flex items-center bg-[#EF771C] rounded-2xl">
								<Image
									alt="Banner 1"
									className="pr-1"
									radius="none"
									src="../../img/soluciones/calefaccion_de_gimnasio_polideportivo/Soluciones1.png"
									// width="100%"
									height="100%"
									/> 
							</div>
							<div className="flex flex-col items-center mt-[1%] justify-cente h-full">
								<div className="">
									<Avatar  src="../../img/soluciones/calefaccion_de_gimnasio_polideportivo/SolucionesAutor.png" className="h-[15.0vw] w-[15.0vw] my-2 mx-auto text-large"/>
									<p className="px-auto py-2  text-[#EF771C] font-lexend-bold text-[3.8vw] text-center">Por: {" "}
										<span className="underline">Juan Manuel de Porras</span>
									</p>
									<h1 className="w-full text-center text-[6.5vw] font-nunito-bold bg-white text-black">Generador de aire caliente</h1>
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
