"use client";
import { Link } from "@nextui-org/link";
import Lottie from "lottie-react";

import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import CardDisplay from "@/components/navbar/cardDisplay";
import SimpleSliderDemoImages from "@/components/imgslider/simpleSliderDemoImages";
import { BsWhatsapp } from "react-icons/bs";
import { itemsNavSolerPalauHome, itemsNavTempomatic } from "@/public/data/navbarData";
import { SolerPalauSVG } from "@/public/svg/solerPalauSVG";
import CardDisplaySypHome from "@/components/navbar/cardDisplaySypHome";
import { AsesoramietoButton } from "@/components/custonButtons/asesoramiento";
import { TiendaButton } from "@/components/custonButtons/tienda";
import { useEffect, useState } from "react";
import { EscribinosButton } from "@/components/custonButtons/escribinos";
import { Divider } from "@nextui-org/react";
import { VinietaNaranjaSVG } from "@/public/svg/vinietaNaranja";



// import ScrollVideoPlayer from "@/components/videoplayer/scrollVideo";
// import VideoScrollPlayer from "@/components/videoplayer/videoplayer";
interface ItemsNavbar {
    key: string;
    label: string[];
    labelShort: string;
    img: string;
    href: string;
}

export default function TempomaticPage() {

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

    return (
        <main className="flex flex-col h-full items-center justify-center gap-0 pb-4 md:pb-10 
        overflow-hidden">

            {/* ------------- Banner Inicial ------------- */}
            <section className="w-full px-[0%] mt-4">
                <Image
                    alt="Home banner 1"
                    className="rounded-[44-px]"
                    radius="none"
                    src="../img/dti/DtiDuctosTextilesBanner.png"
                    width="100%"
                />
            </section>

            {/* ------------- Electroterma-DTI ------------- */}
            <section className="w-full flex justify-between px-[3%] mt-4">
                <Image
                    alt="Home banner 1"
                    className=" pt-8 lg:pt-24 pr-4 lg:pl-4"
                    radius="none"
                    src="../img/electrotermalogoletrasNoPadding.png"
                    width="100%"
                />
                <Image
                    alt="Home banner 1"
                    className="rounded-[44-px] "
                    radius="none"
                    src="../img/dti/DtiDuctosTextilesLogo.png"
                    width="100%"
                />
            </section>

            {/* ------------- Distribución de aire ------------- */}
            <section className="w-full flex justify-between pl-[11%] lg:pl-[9%] mb-2 lg:mt-0">
                <h1 className="text-[2.5vw] font-lexend-bold">Distribución de aire</h1>
            </section>

            {/* ------------- DUCTOS TEXTILES ------------- */}
            <section className="w-full flex flex-row items-center justify- pl-[5vw] -mt-4">
                <VinietaNaranjaSVG css=" h-[20px] w-[10px] md:h-[50px] md:h-[30px] lg:h-[60px] lg:w-[55px]"/>
                <h1 className="text-[6.5vw] font-nunito-bolder text-livered-title ml-3">DUCTOS TEXTILES</h1>
            </section>

            {/* -------------PARRAFO CON COMILLAS ------------- */}

            <section className="relative w-full pt-6 px-[3%] lg:mt-10 lg:mb-20 text-center font-lexend text-[2.9vw] lg:text-[1.9vw] overflow-hidden text-[#4C4B4B]">
                {/* -------------PARRAFO CON COMILLAS WEB ------------- */}

                {BigScreen ? 
                    <p>
                        
                        <div className="z-20 absolute 
                            top-[26%] xm:top-[24%] sm:top-[8%] md:top-[12%] lg:top-[5%] xl:top-[2.5%]  2xl:top-[0.5%] 
                            left-[0%] lg:left-[16%] xl:left-[16%] 2xl:left-[15.5%]
                            w-[4vw] 
                            ">
                        <Image  
                                className="z-20 mt-0"
                                alt="Background Tempomatic"
                                radius="none"
                                src="../../img/dti/comillas.png"
                                width="100%"
                            />

                        </div>

                    
                        <span className="">En Electroterma, hemos formado una alianza estratégica con <span className="font-nunito-bolder">DTI</span>,</span><br/>
                        <span className="">líder en ductos textiles, para ofrecer soluciones de distribución</span><br/>
                        <span className="">de aire que marcan la diferencia.</span><br/>
                        <br/>
                        <span className="">Nuestros equipos de diseño e ingeniería crean <span className="font-nunito-bolder">sistemas HVAC</span></span><br/>
                        <span className="">líder en ductos textiles, para ofrecer soluciones de distribución</span><br/>
                        <span className="">personalizados que responden a las necesidades más exigentes.&quot;</span><br/>

                    </p>
                :
                
                    <p className="text-[3.0vw]">
                {/* -------------PARRAFO CON COMILLAS MOBILE------------- */}
                        
                        <div className="z-20 absolute 
                            top-[10%] xm:top-[10%] sm:top-[6%] md:top-[12%] lg:top-[5%] 
                            left-[3.5%] lg:left-[20%] 
                            w-[5vw] 
                            ">
                         <Image  
                                className="z-20 mt-0"
                                alt="Background Tempomatic"
                                radius="none"
                                src="../../img/dti/comillas.png"
                                width="100%"
                            />

                        </div>

                    
                        <span className="">En Electroterma, hemos formado una alianza estratégica </span><br/>
                        <span className=""> con <span className="font-nunito-bolder">DTI</span>, líder en ductos textiles, para ofrecer soluciones </span><br/>
                        <span className="">de distribución de aire que marcan la diferencia.</span><br/>
                        <br/>
                        <span className="">Nuestros equipos de diseño e ingeniería crean <span className="font-nunito-bolder">sistemas HVAC</span></span><br/>
                        <span className="">líder en ductos textiles, para ofrecer soluciones de distribución</span><br/>
                        <span className="">personalizados que responden a las necesidades más exigentes.&quot;</span><br/>
                    </p>
                }
                <div className="">
                        <div>

                        </div>
                        
                        
                    </div>
            </section>

            {/* ------------- IMG ------------- */}
            <section className="w-full px-[0%] mt-4">
                <Image
                    alt="Home banner 1"
                    className="rounded-[44-px]"
                    radius="none"
                    src={`../img/dti/DtiDuctos${BigScreen ? "Textiles01" : "Textiles01Mobile"}.png`}
                    width="100%"
                />
            </section>

            {/* ------------- Columna de diferenciales ------------- */}
            {BigScreen ? <section className="w-full px-[10%] -mt-12 gap-32 mt- flex flex-col-2 items-cente justify-center">
                {/* <div className="px-10"> */}
                    <Image
                        alt="Home banner 1 w-1/2"
                        className=""
                        radius="none"
                        src="../img/dti/DtiDuctosTextilesDiferenciales01.png"
                        width="100%"
                    />
                {/* </div>
                <div className=""> */}
                    <Image
                        alt="Home banner 1"
                        className=""
                        radius="none"
                        src="../img/dti/DtiDuctosTextilesDiferenciales02.png"
                        width="100%"
                    />
                {/* </div> */}

            </section>
            :
            <section className="w-full px-[10%] mt-4">
                <Image
                        alt="Home banner 1 w-1/2"
                        className=""
                        radius="none"
                        src="../img/dti/DtiDuctosTextilesDiferencialesMobile.png"
                        width="100%"
                    />
            </section>
            }       
            {/* ------------- IMG ------------- */}
            <section className="w-full px-[5%] lg:px-[15%] mt-12">
                <Image
                    alt="Home banner 1"
                    className="rounded-[44-px]"
                    radius="none"
                    src={`../img/dti/DtiDuctos${BigScreen ? "Textiles03" : "Textiles03Mobile"}.png`}
                    width="100%"
                />
            </section>

            {/* ------------- Electroterma ------------- */}
            <section className="w-full pl-[5%] pr-auto mt-12">
                <a href="/" target="_top">
                    <Image
                        alt="Home banner 1"
                        className=""
                        radius="none"
                        src="../img/electrotermalogoletrasNoPadding.png"
                        width={BigScreen ? "40%" : "50%"}
                    />
                </a>
            </section>

            {/* ------------- IMG ------------- */}
            <section className="w-full px-[0%] mt-4 lg:mt-12">
                <Image
                    alt="Home banner 1"
                    className="rounded-[44-px]"
                    radius="none"
                    src={`../img/dti/DtiDuctos${BigScreen ? "Textiles04" : "Textiles04Mobile"}.png`}
                    width="100%"
                />
            </section>

            {/* <section className="w-full h-[100%] px-[3%] mt-6 flex flex-col lg:grid grid-cols-[37.5%_25%_37.5%] gap-4
            ">

                
                <div className="w-full flex flex-col justify-center items-center self-start
                    bg-gradient-to-t from-[#ef771c] from-5% via-[#e80303] via-30% to-[#e80303]  rounded-[44px]">
                    <span className="rounded-[24px]">
                        <Image
                            alt="Home banner 1"
                            className="rounded-[44px]"
                            src="../img/solerpalau/imgbanner/SolerPalauHome1.jpg"
                            width="100%"
                        />
                    </span>
                    <article className="flex items-center gap-4 py-2 text-white text-start align-middle font-lexend">
                        <h1 className="text-[6.0vw] leading-none ">+60</h1>
                        <p className="m-auto">años en el <br/>mercado</p>
                    </article>
                </div>

                
                <div className="w-full p-2 flex justify-center items-center 
                    bg-gradient-to-t from-[#ef771c] to-[#E80303] rounded-[44px]">
                    <SolerPalauSVG width={240}/>
                </div>

                
                <div className="w-full  flex flex-col justify-top items-center  self-start
                    bg-gradient-to-t from-[#ef771c] from-5% via-[#e80303] via-30% to-[#e80303]  rounded-[44px]">
                    <span className="rounded-[24px]">
                        <Image
                            alt="Home banner 2"
                            className="rounded-[44px]"
                            src="../img/solerpalau/imgbanner/SolerPalauHome2.jpg"
                            width="100%"
                        />
                    </span>
                    <article className="flex items-center gap-4 py-2 text-white text-start align-middle font-lexend">
                        <h1 className="text-[6.0vw] leading-none">+90</h1>
                        <p className="m-auto">paises en el mundo cuentan
                            <br/>
                            con los servicios, productos y
                            <br/>
                            la atención de OTAM | S&P.
                        </p>
                    </article>
                </div>
            </section> */}

            {/* ------------- Barra de navegacion S&P ------------- */}
            {/* <section className="z-0  h-full w-[100%]  md:mt-2 overflow-hidden ">
                
                <div className="flex justify-center contaainn  w-max mx-auto mt-6 lg:mt-14 gap-2  rounded-[38px] border-1 border-gray-100 bg-[#FFFFFF]  p-4">
                    
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4   "> 
                    {itemsNavTempomatic?.map((item) => (
                            <a
                                className=""
                                color="foreground"
                                href={item.href}
                                key={item.key}
                            >
                                <CardDisplaySypHome data={item}  actual={""}/>

                            </a>
                        ))}  
                        </div>
                    </div>
                    
                
            </section> */}

            {/* ------------- Botonera ------------- */}

            <section className="w-full 2xl:w-2/3 mx-auto 2xl:mx-[3%] 2xl:-translate-x-10 lg:mb-10 lg:mt-10 font-nunito flex flex-col items-center lg:flex-row justify-center md:justify-around
                overflow-hidden">
                    
                <section className=" 2xl:w-1/2 ">
					<div className=" px-auto  flex h-[150px] lg:h-[250px] items-center mt-10 md:mt-2 space-x-2 lg:space-x-10  text-[12px] lg:text-3xl text-center text-[#4C4B4B]">
						<div>
							<h1 className="w-mx px-1">Contactá</h1>
							<h1>a un vendedor</h1><br/>

							<AsesoramietoButton size={BigScreen ? 42 : 15} screen={BigScreen ? "xl" : "xs"}
                            link={"https://wa.me/5492236356756?text=Hola.%20visité%20tu%20página%20web%20y%20me%20gustaría%20más%20información."}
                            // Hola,%20visite%20tu%20pagina%20web%20y%20me%20gustaria%20mas%20informacion
                            />
						</div>

						<Divider orientation="vertical" className="bg-[#EDEDED]" />
						{/* <div>
							<h1 className="w-mx px-1">Comprá en</h1>
							<h1>nuestra tienda</h1><br/>

                            <TiendaButton size={BigScreen ? 40 : 15} screen={BigScreen ? "xl" : "xs"}/>
                            
						</div>
                        <Divider orientation="vertical" className="bg-[#EDEDED]" /> */}
						<div>
							<h1 className="w-max px-0.5">Escribinos a través</h1>
							<h1>de nuestro mail</h1><br/>

                            <EscribinosButton size={BigScreen ? 42 : 15} screen={BigScreen ? "xl" : "xs"} />
						</div>

					</div>
                        
                </section>
            </section>

            {/* ------------- Asesoramiento ------------- */}
            {/* <section className="w-full 2xl:w-2/3 mx-auto 2xl:mx-[3%] 2xl:-translate-x-10 lg:mb-10 lg:mt-10 font-nunito flex flex-col items-center lg:flex-row justify-center md:justify-around
                overflow-hidden">
                    
                <section className=" 2xl:w-4/5 ">
					<div className=" px-auto  flex h-[150px] md:h-[200px] lg:h-[250px] items-center mt-10 md:mt-2 space-x-1 md:space-x-5 lg:space-x-10  text-[12px] md:text-lg lg:text-3xl text-center text-[#4C4B4B]">
						<div>
							<h1>Contactá</h1>
							<h1>a un vendedor</h1><br/>

							<AsesoramietoButton size={BigScreen ? 42 : 15} screen={BigScreen ? "xl" : "xs"}
                            link={"https://wa.me/5492236356756?text=Hola.%20visité%20tu%20página%20web%20y%20me%20gustaría%20más%20información."}
                            />
						</div>

						<Divider orientation="vertical" className="bg-[#EDEDED]" />
						<div>
							<h1>Comprá en</h1>
							<h1>nuestra tienda</h1><br/>

                            <TiendaButton size={BigScreen ? 40 : 15} screen={BigScreen ? "xl" : "xs"}/>
						</div>
                        <Divider orientation="vertical" className="bg-[#EDEDED]" />
						<div>
							<h1 className="lg:w-max">Escribinos a través</h1>
							<h1>de nuestro mail</h1><br/>

                            <EscribinosButton size={BigScreen ? 40 : 15} screen={BigScreen ? "xl" : "xs"} />
						</div>

					</div>
                        
                </section>
            </section> */}

            {/* <section className="w-1/2 mx-[3%] mb-10 mt-16 font- font-nunito flex flex-col items-center lg:flex-row justify-center md:justify-around
                overflow-hidden">
                    
                <section className=" w-3/4 ">
					<div className=" px-auto  flex h-[250px] items-center mt-10 md:mt-2 space-x-10  text-2xl text-center text-white">
						<div>
							<h1>Contactá</h1>
							<h1>a un vendedor</h1><br/>

							<AsesoramietoButton size={BigScreen ? 42 : 20} screen={BigScreen ? "xl" : "lg"}
                            link={"https://wa.me/5492236356756?text=Hola.%20visité%20tu%20página%20web%20y%20me%20gustaría%20más%20información."}   
                            />
						</div>

						<Divider orientation="vertical" className="bg-white" />

						<div>
							<h1>Escribinos a través</h1>
							<h1>de nuestro mail</h1><br/>

                            <EscribinosButton size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"} />
						</div>

					</div>
                        
                </section>

            </section> */}

            {/* ------------- Imagenes presentacion ------------- */}
            <section className="w-full flex items-center justify-center mx-auto p-0 bg-transparent space-x-0">
                    {/* <Image
                        alt="Otam Logo"
                        radius="none"
                        src="../img/tempomatic/home/1.png"
                        width={1285}
                    />
                    <Image
                        alt="Otam Logo"
                        radius="none"
                        src="../img/tempomatic/home/2.png"
                        width={870}
                    /> */}
                    {/* <Image
                        alt="Otam Logo"
                        src="../img/home/imgHome/3.png"
                        width={450}
                    />
                    <Image
                        alt="Otam Logo"
                        src="../img/home/imgHome/4.png"
                        width={450}
                    /> */}
                </section>
        </main>
        // 	<div className={'h-[5000px]'}>
        // 		<VideoScrollPlayer/>
        // </div>
    );
}

