"use client"
import { title } from "@/components/primitives";
import { solucionesGeneralData } from "@/public/data/soluciones/solucionesGeneralData";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Avatar } from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { IoMailOutline } from "react-icons/io5";

export default function Soluciones_ductos_textiles_para_mejorar_la_distribucion_del_aire_Page() {

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
            src={`../../img/soluciones/ductos_textiles_para_mejorar_la_distribucion_del_aire/Soluciones${i+4}.png`}
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
						src="../../img/soluciones/ductos_textiles_para_mejorar_la_distribucion_del_aire/SolucionesBanner1.png"
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
					<Avatar  src="../../img/soluciones/ductos_textiles_para_mejorar_la_distribucion_del_aire/SolucionesAutor.png" className="-ml-8 w- h-[5.0vw] my-2 text-large"/>
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
							src="../../img/soluciones/ductos_textiles_para_mejorar_la_distribucion_del_aire/Soluciones1.png"
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
					
				</div>
				<div className="h-[115%] pb-[0%] flex flex-col items-center justify-center align-middle">
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
					<h1 className="lg:py-6 pl-2 lg:pl-12 py-2 text-white font-lexend-bold lg:text-[2.1vw] bg-[#EF771C] shadow-2xl">SOLUCIÓN DUCTOS TEXTILES PARA MEJORAR LA DISTRIBUCIÓN DEL AIRE</h1>

					<div className="visible md:hidden flex mr-auto mt-1 text-white font-lexend-bold text-[2.5vw] bg-white- rounded-l-full border-1- border-lowgray- shadow-2xl-"> 
							<Avatar  src="../../img/soluciones/ductos_textiles_para_mejorar_la_distribucion_del_aire/SolucionesAutor.png" className="w- h-[10.0vw] my-2 text-large"/>
							<p className="my-auto ml-2 pt-4  pb-4  text-[#EF771C] font-lexend-bold text-[3.2vw]">Por: {" "}
								<span className="underline">Nicolás Cabot</span>
							</p>
					</div>

					<div className="w-full mt-4 pl-2 pr-2 lg:pr-20 py-2 lg:py-10 grid lg:grid-cols-2 gap-10">

						{/* ------------- Contenido primario ------------- */}
						<div className="w-full flex flex-col gap-6 text-[3.8vw] lg:text-[1.20vw] font-nunito items-center ">

							
							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
							Una de las principales ventajas del conducto textil es que permite lograr una difusión más homogénea en comparación con el tradicional ducto metálico y rejas y podemos así obtener un mayor rendimiento de la capacidad instalada en equipos. Es decir, que con el mismo equipamiento, al instalar un conducto textil, podremos llegar con más precisión y de una forma más eficiente con el aire tratado, respecto de sistemas de conductos tradicionales.
							</p>
							<p>
							Así por ejemplo, en una industria con instalaciones de equipos de HVAC de capacidad adecuada que continúa con elevada carga térmica en los puestos de trabajo, ya sea por zonas calientes del proceso que se realiza, inadecuada distribución del aire climatizado y/o con fuentes de calor puntuales, al instalar el ducto textil DTI nos permite, sin cambiar el equipamiento, lograr una mejor y más eficiente climatización en el interior.
							</p>
							
							

							<Image
								alt="Imagen 2"
								className=""
								radius="none"
								src="../../img/soluciones/ductos_textiles_para_mejorar_la_distribucion_del_aire/Soluciones2.png"
								width="100%"
							/>

							<Image
								alt="Imagen 3"
								className="lg:mt-16"
								radius="none"
								src="../../img/soluciones/ductos_textiles_para_mejorar_la_distribucion_del_aire/Soluciones3.png"
								width="100%"
							/>

							<h2 className="text-[#EF771C] text-[3.8vw] lg:text-[1.8vw] font-nunito-bold lg:mt-16 mr-auto">Desarrollo de proyecto de distribución del aire para una industria con procesos de horneado, enfriamiento y envasado de productos</h2>

						    <p className="">
							El mismo incluía <a className="text-[#EF771C] font-nunito-bold underline " href="/tempomatic/uta" target="_top">Unidades de Tratamiento de Aire TEMPOMATIC</a>, pero el sistema de ductos a nivel de techo (a 11 metros de altura e inyección por difusores tradicionales) no aseguraba la llegada de aire tratado a los puestos de los operarios, generando elevadas cargas térmicas en determinados momentos del año.  
								 
							</p>
							


						</div>
						
						<div className="w-full flex flex-col gap-6">
							
							<h2 className="text-[#EF771C] text-[3.8vw] lg:text-[1.3vw] font-nunito-bold lg:mt-">¿Cómo se resolvió la problemática?</h2>
							
							<p className="text-[3.8vw] lg:text-[1.20vw] font-nunito">
								Para este caso, desarrollamos una solución en conjunto con nuestros colegas de{" "}
								<a className="text-[#EF771C] font-nunito-bold underline " href="/dti" target="_top">DTI</a>. Modificamos el sistema de distribución existente y lo complementamos con {" "}
								<a className="text-[#EF771C] font-nunito-bold underline " href="/dti" target="_top">ductos textiles.</a>
								{" "}La propuesta incorporó la generación de una distribución del aire en segundo plano y a 2,5 metros de altura, que se ubicó estratégicamente sobre los puestos de los operarios utilizando los mencionados ductos textiles. De esta manera se optimizó la distribución de aire tratado, eliminando las zonas de altas temperaturas y, en consecuencia, la disconformidad de los operarios. Se alcanzaron temperaturas más homogéneas en toda la nave sin la necesidad de modificar la capacidad del equipamiento instalada y acortando sus horas de uso/día.
							</p>

							<h2 className="text-[#EF771C] text-[3.8vw] lg:text-[1.8vw] font-nunito-bold lg:mt-16 mr-auto">ES IMPORTANTE DESTACAR QUE LA CAPACIDAD INSTALADA ES LA MISMA Y SE IMPLEMENTAN LOS DUCTOS TEXTILES PARA MEJORAR LA DISTRIBUCIÓN DEL AIRE DENTRO DE LA PLANTA Y ASÍ MEJORAR LAS CONDICIONES DE TRABAJO. </h2>

							<Image
								alt="Imagen 4"
								className="lg:mt-16"
								radius="none"
								src="../../img/soluciones/ductos_textiles_para_mejorar_la_distribucion_del_aire/Soluciones4.png"
								width="100%"
							/>
							

							<Image
								alt="Imagen 5"
								className="lg:mt-"
								radius="none"
								src="../../img/soluciones/ductos_textiles_para_mejorar_la_distribucion_del_aire/Soluciones5.png"
								width="100%"
							/>

							
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
												className="rounded-2xl p- px-	"
												radius="none"
												src="../../img/soluciones/ductos_textiles_para_mejorar_la_distribucion_del_aire/Soluciones1.png"		
												height="100%"
												/> 
										</div>
										<div className="w-full  flex flex-row justify-center items-center gap-[%]">
											<div className="h-max w-full flex flex-row " onClick={()=>(window.open("/dti", "_top"))}>
												<div className=" w-full py-auto flex items-center gap-1">
													<div className="w-[90%]  rounded-l-[12px]  bg-[#EF771C]">
														<h1 className="my-1 px-2 py-1 mr-1 font-lexend text-white text-[3.8vw] ">Ductos textiles</h1>
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
