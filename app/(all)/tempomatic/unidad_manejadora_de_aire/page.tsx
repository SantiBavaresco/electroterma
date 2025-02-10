"use client";
import { Link } from "@nextui-org/link";
import Lottie from "lottie-react";
import NextLink from "next/link";

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
import { DiferencialConVentiladorSyP } from "@/components/diferenciales/diferencialConVentiladorSyP";
import { DiferencialSerpentinaReforzada } from "@/components/diferenciales/diferencialSerpentinaReforzada";
import { DiferencialEmplazamientoInteriorExterior } from "@/components/diferenciales/diferencialEmplazamientoInteriorExterior";
import { DiferencialConstruccionRobusta } from "@/components/diferenciales/diferencialConstruccionRobusta";
import { DiferencialOptimoRendimiento } from "@/components/diferenciales/diferencialOptimoRendimiento";
import { ManualButtonNaranja } from "@/components/custonButtons/manual";



// import ScrollVideoPlayer from "@/components/videoplayer/scrollVideo";
// import VideoScrollPlayer from "@/components/videoplayer/videoplayer";
interface ItemsNavbar {
    key: string;
    label: string[];
    labelShort: string;
    img: string;
    href: string;
}

export default function UnidadManejadoraDeAirePage() {

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
        <main className="flex flex-col h-full items-center justify-center gap-4 pb-4 md:pb-10 
         overflow-hidden">

            {/* ------------- Banner------------- */}
            <section className="w-full px-[0%] mt-4">
                <Image
                    alt="Home banner 1"
                    className="rounded-[44-px]"
                    radius="none"
                    src="../img/tempomatic/unidad_manejadora_de_aire/unidad_manejadora_de_aire-Banner.webp"
                    width="100%"
                />
            </section>
            {/* ------------- Tempomatic logo ------------- */}
            <section className="w-1/2    lg:w-1/3 px-5 lg:px-[5.6%] mt-4 mr-auto">
                <Image
                    alt="Home banner 1"
                    className=""
                    radius="none"
                    src="../img/tempomatic/unidad_manejadora_de_aire/tempomatic-Logo.jpg"
                    width="100%"
                />
            </section>  

            {BigScreen ?
            <>
            {/* ------------- WEB----------- */}

            <section className="w-full pl-[3%] mt-[4vw] mr-auto flex flex-col lg:flex-row">
            {/* ------------- Unidad Manejadora de aire ------------- */}
                
                <div className="flex w-full lg:w-[60%]">
                    <div className="flex w-[3%] mr-[1.5%]">
                        <VinietaNaranjaSVG css="mt-[60%] h-[30px] w-[25px] md:h-[50px] md:h-[30px] lg:h-[45px] lg:w-[35px]"/>
                    </div>
                    <div className="w-full mr-auto text-[#4C4B4B] text-[10.5vw] lg:text-[5.5vw] font-nunito-bolder leading-none">
                        <h1 className="text-[#FF7800]">UNIDAD</h1>
                        <h1 className="text-[#FF7800]">MANEJADORA</h1>
                        <h1 className="text-[#FF7800]   ">DE AIRE</h1>

                        <h2 className="text-[4.7vw] lg:text-[2.7vw] mt-[1vw] font-lexend-bold">Equipos diseñados para sistema</h2>
                        <h2 className="text-[4.7vw] lg:text-[2.7vw] mt-1 lg:mt-0 font-lexend-bold">de <span className="text-[#FF7800]">HVAC de confort</span></h2>
                        
                    </div>
                </div>
                
                    <div className="flex w-full lg:w-3/5">
                        <Image
                            alt="Home banner 1"
                            className=""
                            radius="none"
                            src="../img/tempomatic/unidad_manejadora_de_aire/unidad_manejadora_de_aire_01.webp"
                            width="100%"
                        />
                    </div>
                    
                
            </section>

            <section className="w-full px-[6%] -mt-10 flex">
            {/* -------------PARRAFO CON BOTON ------------- */}

                <p className="w-3/4 font-lexend text-[#4C4B4B] text-[1.8vw] leading-none">
                    Presentan distintas variantes de configuración, se construyen para <br/>
                    agua caliente, agua enfriada o expansión directa, combinando a la <br/>
                    vez cualquiera de estas variantes.
                </p>
                <div className="w-1/4 flex justify-end">
                    <AsesoramietoButton screen={BigScreen ? "xl" : "md"} size={BigScreen ? 40 : 16}
                        link={"https://wa.me/5492236356756?text=Hola.%20Quiero%20más%20información%20sobre%20la%20Unidad%20Manejadora%20de%20Aire."}/>
                    </div>
            </section> 

            <section className="w-full px-[3%] -mt-10 flex
            bg-[url('/svg/ondasTempomaticItems.svg')] bg-fill  bg-[center_top_vw] md:bg-[center_top_0vw] lg:bg-[center_top_6vw] bg-no-repeat
            ">
            {/* -------------IMG con diferenciales ------------- */}

                <div className="w-1/2">
                <Image
                        alt="Home banner 1"
                        className=""
                        radius="none"
                        src="../img/tempomatic/unidad_manejadora_de_aire/unidad_manejadora_de_aire_02.webp"
                        width="100%"
                    />
                </div>

                <div className="xl:w-[45%] 2xl:w-auto my-auto ml-auto pr-[2%] space-y-4">
                    <DiferencialConVentiladorSyP size={75} customWith={10} />
                    <DiferencialSerpentinaReforzada size={75} customWith={10} />
                    <DiferencialEmplazamientoInteriorExterior size={75} customWith={10} />
                    <DiferencialConstruccionRobusta size={75} customWith={10} />
                    <DiferencialOptimoRendimiento size={75} customWith={10} />
                </div>
            </section> 
            {/* -------------COMPONENTES ------------- */}
            <section className="w-full px-[6%] lg:-mt-10 ">
                <h1 className="font-nunito-bolder text-[#FF7800] text-[3.3vw]">COMPONENTES</h1>
                <div className="w-full flex">
                    <ul className="w-2/5 font-nunito space-y-16 mt-10">
                        <li>
                            <h1 className="h-[10%] text-[2.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">1</span> FILTRADO</h1>
                            <p className="text-[1.3vw] text-midgray">Las unidades incluyen portafiltros para filtros de 2&quot; de espesor, de cualquier tipo. Son provistas con  filtros descartables MERV 8.</p>
                        </li> 
                        <li>
                            <h1 className="h-[10%] text-[2.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">2</span> SERPENTINA</h1>
                            <p className="text-[1.3vw] text-midgray">De cobre con aletas de aluminio, reforzadas aptas para limpieza con agua a presión.</p>
                        </li> 
                        <li>
                            <h1 className="h-[10%] text-[2.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">3</span> VENTILADOR</h1>
                            <p className="text-[1.3vw] text-midgray">Centrífugo multipala, balanceado estática y dinámicamente de doble entrada, con transmisión por poleas y correas.</p>
                        </li> 
                        <li>
                            <h1 className="h-[10%] text-[2.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">4</span> GABINETE</h1>
                            <p className="text-[1.3vw] text-midgray">Tapas desmontables de chapa galvanizada, revestido con espuma de polietileno con aluminio.</p>
                        </li>   

                    </ul>
                    <div className="w-3/5 pr-[3%]">
                        <Image
                            alt="Home banner 1"
                            className=""
                            radius="none"
                            src="../img/tempomatic/unidad_manejadora_de_aire/unidad_manejadora_de_aire_03.webp"
                        />
                    </div>
                </div>
            </section>

            {/* -------------INFO TECNICA ------------- */}
            <section className="w-full px-[6%] -mt-[4vw] ">
                <h1 className="font-nunito-bolder text-[#FF7800] text-[3.3vw]">INFORMACIÓN TÉCNICA</h1>
                
                    <div className="w-full ">
                        <Image
                            alt="Home banner 1"
                            className=""
                            radius="none"
                            src="../img/tempomatic/unidad_manejadora_de_aire/unidad_manejadora_de_aire_04.webp"
                        />
                    </div>
               
            </section>

            {/* -------------MEDIDAS ------------- */}
            <section className="w-full px-[6%] -mt- ">
                <h1 className="font-nunito text-[#FF7800] text-[3.3vw]">MEDIDAS</h1>

                    <table className="table-auto font-nunito text-[1.7vw] w-4/5">
                        <thead >
                            <tr className="bg-[#FF7800] text-white ">
                                <th className="p-2 text-left pl-[1.7vw] pr-auto border-r-2 rounded-b-[1.7vw] border-white">MODELO/MEDIDA</th>
                                <th className="p-2 w-[6.5vw] border-r-2 rounded-b-[1.7vw] border-white">A</th>
                                <th className="p-2 w-[6.5vw] border-r-2 rounded-b-[1.7vw] border-white">B</th>
                                <th className="p-2 w-[6.5vw] border-r-2 rounded-b-[1.7vw] border-white">C</th>
                                <th className="p-2 w-[6.5vw] border-r-2 rounded-b-[1.7vw] border-white">D</th>
                                <th className="p-2 w-[6.5vw] border-r-2 rounded-b-[1.7vw] border-white">E</th>
                                <th className="p-2 w-[6.5vw] border-r-2 rounded-b-[1.7vw] border-white">F</th>
                                <th className="p-2 w-[6.5vw] border-r-2 rounded-b-[1.7vw] border-white">G</th>
                                <th className="p-2 w-[6.5vw] border-r-2 rounded-b-[1.7vw] border-white">H</th>
                                <th className="p-2 w-[6.5vw] border-r-2 rounded-b-[1.7vw] border-white">I</th>
                                <th className="p-2 w-[6.5vw] border-r-2 rounded-b-[1.7vw] border-white">J</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-[#f7f7f7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">UMA 06/25</td>
                                <td>1000</td>
                                <td>965</td>
                                <td>1065</td>
                                <td>1195</td>
                                <td>1060</td>
                                <td>915</td>
                                <td className="border-l-2 border-[#FF7800]">710</td>
                                <td className="border-r-2 border-[#FF7800]">470</td>
                                <td className="border-l-2 border-[#FF7800]">445</td>
                                <td className="border-r-2 border-[#FF7800]">445</td>
                            </tr>
                            <tr className="bg-[#e7e7e7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">UMA 08/30</td>
                                <td>1000</td>
                                <td>965</td>
                                <td>1065</td>
                                <td>1195</td>
                                <td>1060</td>
                                <td>915</td>
                                <td className="border-l-2 border-[#FF7800]">710</td>
                                <td className="border-r-2 border-[#FF7800]">570</td>
                                <td className="border-l-2 border-[#FF7800]">445</td>
                                <td className="border-r-2 border-[#FF7800]">445</td>
                            </tr>
                            <tr className="bg-[#f7f7f7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">UMA 10/40</td>
                                <td>1000</td>
                                <td>1155</td>
                                <td>1060</td>
                                <td>1195</td>
                                <td>1250</td>
                                <td>915</td>
                                <td className="border-l-2 border-[#FF7800]">910</td>
                                <td className="border-r-2 border-[#FF7800]">570</td>
                                <td className="border-l-2 border-[#FF7800]">495</td>
                                <td className="border-r-2 border-[#FF7800]">545</td>
                            </tr>
                            <tr className="bg-[#e7e7e7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">UMA 12/50</td>
                                <td>1050</td>
                                <td>1155</td>
                                <td>1170</td>
                                <td>1245</td>
                                <td>1250</td>
                                <td>965</td>
                                <td className="border-l-2 border-[#FF7800]">910</td>
                                <td className="border-r-2 border-[#FF7800]">735</td>
                                <td className="border-l-2 border-[#FF7800]">495</td>
                                <td className="border-r-2 border-[#FF7800]">545</td>
                            </tr>
                            <tr className="bg-[#f7f7f7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">UMA 17/78</td>
                                <td>1100</td>
                                <td>1705</td>
                                <td>1195</td>
                                <td>1295</td>
                                <td>1800</td>
                                <td>1015</td>
                                <td className="border-l-2 border-[#FF7800]">1410</td>
                                <td className="border-r-2 border-[#FF7800]">735</td>
                                <td className="border-l-2 border-[#FF7800]">595</td>
                                <td className="border-r-2 border-[#FF7800]">645</td>
                            </tr>
                            <tr className="bg-[#e7e7e7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">UMA 20/100</td>
                                <td>1125</td>
                                <td>2175</td>
                                <td>1195</td>
                                <td>1320</td>
                                <td>2270</td>
                                <td>1040</td>
                                <td className="border-l-2 border-[#FF7800]">1920</td>
                                <td className="border-r-2 border-[#FF7800]">735</td>
                                <td className="border-l-2 border-[#FF7800]">700</td>
                                <td className="border-r-2 border-[#FF7800]">700</td>
                            </tr>

                            <tr className="bg-white text-white text-[0.9vw] text-center">
                                <td className="p-2 pl-[1.7vw] text-left"></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="bg-[#FF7800] border-[#FF7800] py-3  text-right border-l- rounded-bl-[1.7vw]">TOMA D</td>
                                <td className="bg-[#FF7800] border-white pr- text-left border-r-2 rounded-br-[1.7vw]">E AIRE</td>
                                <td className="bg-[#FF7800] text-[0.9vw] text-right  border-l-2 rounded-bl-[1.7vw]">INYECCIÓ</td>
                                <td className="bg-[#FF7800] text-[0.9vw]  border-[#FF7800]  text-left border-r- rounded-br-[1.7vw] whitespace-nowrap">N DE AIRE</td>
                            </tr>
                        </tbody>
                    </table>
               
            </section>

            
            {/* -------------CARACTERÍSTICAS ------------- */}
            <section className="w-full px-[6%] mt-16 ">
                <h1 className="font-nunito text-[#FF7800] text-[3.3vw] ">CARACTERÍSTICAS</h1>
                {/* <h1 className="font-nunito text-[#FF7800] text-[2.3vw] text-right">TOMA DE AIRE INTECCIÓN DE AIRE</h1> */}

                    <table className="table-auto mt-4 font-nunito text-[1.5vw] w-4/5">
                        <thead >
                            <tr className="bg-[#FF7800] text-white ">
                                <th className="p-2 text-left px-[1.7vw] pr-auto border-r-2 rounded-b-[1.7vw] border-white">CARACTERISTICAS/MODELOS</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">UMA 06/25</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">UMA 08/30</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">UMA 10/40</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">UMA 12/50</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">UMA 15/78</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">UMA 20/100</th>
                            
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-[#f7f7f7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">Capacidad de frío (TR)</td>
                                <td>6</td>
                                <td>8</td>
                                <td>10</td>
                                <td>12</td>
                                <td>15</td>
                                <td>20</td>
                              
                            </tr>
                            <tr className="bg-[#e7e7e7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">Capacidad de calor (KCAL/H)</td>
                                <td>25000</td>
                                <td>30000</td>
                                <td>40000</td>
                                <td>50000</td>
                                <td>75000</td>
                                <td>100000</td>
                                
                            </tr>
                            <tr className="bg-[#f7f7f7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">Caudal (MMCA)</td>
                                <td>4200</td>
                                <td>5400</td>
                                <td>6600</td>
                                <td>7500</td>
                                <td>8700</td>
                                <td>15000</td>
                               
                            </tr>
                            <tr className="bg-[#e7e7e7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">Contrapresión (MMCA)</td>
                                <td>25</td>
                                <td>25</td>
                                <td>25</td>
                                <td>25</td>
                                <td>25</td>
                                <td>25</td>
                             
                            </tr>
                            <tr className="bg-[#f7f7f7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">Potencia del motor (HP)</td>
                                <td>0,75</td>
                                <td>1,5</td>
                                <td>2</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                               
                            </tr>
                            <tr className="bg-[#e7e7e7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">Conexión serpentina (BSP)</td>
                                <td>1</td>
                                <td>1</td>
                                <td>11/4</td>
                                <td>11/4</td>
                                <td>11/2</td>
                                <td>11/2</td>
                               
                            </tr>
                            <tr className="bg-[#f7f7f7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">Peso (Kg)</td>
                                <td>176</td>
                                <td>179</td>
                                <td>197</td>
                                <td>273</td>
                                <td>326</td>
                                <td>418</td>
                               
                            </tr>
                        </tbody>
                    </table>
                    <h1 className="font-nunito text-[#FF7800] text-[1.7vw] text-right w-4/5">MEDIDAS EN MILÍMETROS</h1>

            </section>

            {/* -------------COMPONENTES ------------- */}
            <section className="w-full px-[6%] mt-16 ">
                <h1 className="font-nunito text-[#FF7800] text-[3.3vw]">CONFIGURACIONES</h1>
                
                    <div className="w-full ">
                        <Image
                            alt="Home banner 1"
                            className=""
                            radius="none"
                            src="../img/tempomatic/unidad_manejadora_de_aire/unidad_manejadora_de_aire_05.webp"
                        />
                    </div>
            
            </section>

            {/* -------------BOTON MANUAL ------------- */}
            <section className="w-full px-[6%] mt-10 flex justify-end">
                    <ManualButtonNaranja size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"} link={"../../manuales/05. Folleto unidad manejadora de aire.pdf"} dwName={"05. Folleto unidad manejadora de aire.pdf"}/>
            </section>
            </>
            :
            <>
    {/* -------------------------- MOBILE------------------------ */}

                <section >
                    <div className="flex w-full lg:w-[60%]">
                        <div className="flex w-[3%] mr-[1.5%]">
                            <VinietaNaranjaSVG css="mt-[60%] h-[30px] w-[25px] md:h-[50px] md:h-[30px] lg:h-[45px] lg:w-[35px]"/>
                        </div>
                        <div className="w-full mr-auto text-[#4C4B4B] text-[10.5vw] lg:text-[5.5vw] font-nunito-bolder leading-none">
                            <h1 className="text-[#FF7800]">UNIDAD</h1>
                            <h1 className="text-[#FF7800]">MANEJADORA</h1>
                            <h1 className="text-[#FF7800]   ">DE AIRE</h1>

                            <h2 className="text-[4.7vw] lg:text-[2.7vw] mt-[1vw] font-lexend-bold">Equipos diseñados para sistema</h2>
                            <h2 className="text-[4.7vw] lg:text-[2.7vw] mt-1 lg:mt-0 font-lexend-bold">de <span className="text-[#FF7800]">HVAC de confort</span></h2>
                            
                        </div>
                    </div>
                    
                        
                
                </section>
                <section className="w-full px-[%] -mt-4 flex
                    bg-[url('/svg/ondasTempomaticItemsMobile.svg')] bg-contain lg:bg-fill  bg-[center_bottom_10vw] md:bg-[center_top_0vw] lg:bg-[center_top_6vw] bg-no-repeat
                    ">
                        <div className="w- ml-[40vw] mr-6">
                        <Image
                                alt="Home banner 1"
                                className=""
                                radius="none"
                                src="../img/tempomatic/unidad_manejadora_de_aire/unidad_manejadora_de_aire_02.webp"
                                width="100%"
                            />
                        </div>
                    </section>
                <section className="w-full px-[5%] -mt-8 ">
                {/* -------------PARRAFO CON BOTON ------------- */}

                    <p className="w-full font-lexend text-[#4C4B4B] text-[4.3vw] leading-non">
                        Presentan distintas variantes de configuración, se construyen para 
                        agua caliente, agua enfriada o expansión directa, combinando a la 
                        vez cualquiera de estas variantes.
                    </p>
                    <div className=" flex justify-end">
                        <AsesoramietoButton screen={BigScreen ? "xl" : "md"} size={BigScreen ? 40 : 16}
                            link={"https://wa.me/5492236356756?text=Hola.%20Quiero%20más%20información%20sobre%20la%20Unidad%20Manejadora%20de%20Aire."}/>
                    </div>
                    

                </section> 

                <section className="w-auto my-auto m    -auto mt-4 px-[%] space-y-4">
                        <DiferencialConVentiladorSyP size={55} customWith={10} />
                        <DiferencialSerpentinaReforzada size={55} customWith={10} />
                        <DiferencialEmplazamientoInteriorExterior size={55} customWith={10} />
                        <DiferencialConstruccionRobusta size={55} customWith={10} />
                        <DiferencialOptimoRendimiento size={55} customWith={10} />
                </section>


                {/* -------------COMPONENTES ------------- */}
                <section className="w-full px-[6%] mt-4 lg:-mt-10 ">
                    <h1 className="font-nunito-bolder text-[#FF7800] text-[7.3vw]">COMPONENTES</h1>
                    <div className="w-full flex flex-col-reverse">
                        <ul className="w-2/ font-nunito space-y-4 mt-0">
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">1</span> FILTRADO</h1>
                                <p className="text-[4.3vw] text-midgray">Las unidades incluyen portafiltros para filtros de 2&quot; de espesor, de cualquier tipo. Son provistas con  filtros descartables MERV 8.</p>
                            </li> 
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">2</span> SERPENTINA</h1>
                                <p className="text-[4.3vw] text-midgray">De cobre con aletas de aluminio, reforzadas aptas para limpieza con agua a presión.</p>
                            </li> 
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">3</span> VENTILADOR</h1>
                                <p className="text-[4.3vw] text-midgray">Centrífugo multipala, balanceado estática y dinámicamente de doble entrada, con transmisión por poleas y correas.</p>
                            </li> 
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">4</span> GABINETE</h1>
                                <p className="text-[4.3vw] text-midgray">Tapas desmontables de chapa galvanizada, revestido con espuma de polietileno con aluminio.</p>
                            </li>   

                        </ul>
                        <div className="w- pr-[3%] mt-2">
                            <Image
                                alt="Home banner 1"
                                className=""
                                radius="none"
                                src="../img/tempomatic/unidad_manejadora_de_aire/unidad_manejadora_de_aire_03.webp"
                            />
                        </div>
                    </div>
                </section>

                {/* -------------BOTON MANUAL ------------- */}
                <section className="w-full px-[6%] lg:mt-4 flex justify-center">
                        <ManualButtonNaranja size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"} link={"../../manuales/05. Folleto unidad manejadora de aire.pdf"} dwName={"05. Folleto unidad manejadora de aire.pdf"}/>
                </section>
                {/* ------------- Imagenes presentacion ------------- */}
                <section className="w-full flex items-center justify-center mx-auto p-0 bg-transparent space-x-0">
                        <Image
                            alt="Otam Logo"
                            radius="none"
                            src="../img/electrotermalogoletrasProducido.png"
                            width={300}
                        />
                        
                </section>
            </>
            }
            

            {/* -------------OTROS PRODUCTOS TEMPOMATIC ------------- */}
            <section className="w-full px-[6%] mt-4 lg:mt-10 flex justify-center">
            <h1 className="font-nunito-bolder text-[#FF7800] text-[5.5vw] lg:text-[3.5vw]">Otros productos Tempomatic</h1>
            </section>

            {/* ------------- Barra de navegacion S&P ------------- */}
            <section className="z-0  h-full w-[100%]  md:mt-0 overflow-hidden ">
                <div className="flex justify-center contaainn  w-max mx-auto mt-3 lg:mt-0 gap-2  rounded-[38px] border-1 border-gray-100 bg-[#FFFFFF]  p-4">
                    
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4   "> 
                    {itemsNavTempomatic?.map((item) => (
                        <NextLink
                            className=""
                            color="foreground"
                            href={ item.labelShort === "UMDA" ? "#" : item.href}
                            target={(item.labelShort === "UMDA" ) ? "" : "_top"}
                            key={item.key}
                            >
                            <CardDisplay data={item}  actual={"UMDA"} />
                        </NextLink>
                        ))}  
                        </div>
                    </div>
                    
                
            </section>

            {/* ------------- Botonera ------------- */}
{/* 
            <section className="w-full 2xl:w-2/3 mx-auto 2xl:mx-[3%] 2xl:-translate-x-10 lg:mb-10 lg:mt-10 font-nunito flex flex-col items-center lg:flex-row justify-center md:justify-around
                overflow-hidden">
                    
                <section className=" 2xl:w-4/5 ">
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
						<div>
							<h1 className="w-mx px-1">Comprá en</h1>
							<h1>nuestra tienda</h1><br/>

                            <TiendaButton size={BigScreen ? 40 : 15} screen={BigScreen ? "xl" : "xs"}/>
                    
						</div>
                        <Divider orientation="vertical" className="bg-[#EDEDED]" />
						<div>
							<h1 className="w-max px-0.5">Escribinos a través</h1>
							<h1>de nuestro mail</h1><br/>

                            <EscribinosButton size={BigScreen ? 42 : 15} screen={BigScreen ? "xl" : "xs"} />
						</div>

					</div>
                        
                </section>
            </section> */}


            {/* ------------- Imagenes presentacion ------------- */}
            <section className=" hidden w-full lg:flex items-center justify-center mx-auto p-0 bg-transparent space-x-0">
                    <Image
                        alt="Otam Logo"
                        radius="none"
                        src="../img/electrotermalogoletrasProducido.png"
                        width={500}
                    />
                    
            </section>
        </main>
        // 	<div className={'h-[5000px]'}>
        // 		<VideoScrollPlayer/>
        // </div>
    );
}

