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
import { DiferencialConVentiladorSyP } from "@/components/diferenciales/diferencialConVentiladorSyP";
import { DiferencialSerpentinaReforzada } from "@/components/diferenciales/diferencialSerpentinaReforzada";
import { DiferencialEmplazamientoInteriorExterior } from "@/components/diferenciales/diferencialEmplazamientoInteriorExterior";
import { DiferencialConstruccionRobusta } from "@/components/diferenciales/diferencialConstruccionRobusta";
import { DiferencialOptimoRendimiento } from "@/components/diferenciales/diferencialOptimoRendimiento";
import { ManualButtonNaranja } from "@/components/custonButtons/manual";
import { Diferencial15Anio } from "@/components/diferenciales/diferencial15Anios";
import { DiferencialUnicosEnElMercado } from "@/components/diferenciales/diferencialUnicosEnElMercado";
import { DiferencialAltaConfiabilidad } from "@/components/diferenciales/diferencialAltaConfiabilidad";
import { DiferencialElementosOpcionales } from "@/components/diferenciales/diferencialElementosOpcionales";
import { DiferencialFiltreraIncorporada } from "@/components/diferenciales/diferencialFiltreraIncorporada";
import { DiferencialBajoMantenimiento } from "@/components/diferenciales/diferenciaBajoMantenimiento";



// import ScrollVideoPlayer from "@/components/videoplayer/scrollVideo";
// import VideoScrollPlayer from "@/components/videoplayer/videoplayer";
interface ItemsNavbar {
    key: string;
    label: string[];
    labelShort: string;
    img: string;
    href: string;
}

export default function CajaVentiladoraPage() {

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

    const handleAnchor = (link:string) => {
        window.open(link, '_top', 'noopener noreferrer');
      };

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
                    src="../img/tempomatic/caja_ventiladora/caja_ventiladora-Banner.png"
                    width="100%"
                />
            </section>
            {/* ------------- Tempomatic logo ------------- */}
            <section className="w-1/2    lg:w-1/3 px-5 lg:px-[5.6%] mt-4 mr-auto">
                <Image
                    alt="Home banner 1"
                    className=""
                    radius="none"
                    src="../img/tempomatic/caja_ventiladora/tempomatic-Logo.jpg"
                    width="100%"
                />
            </section>  

            {BigScreen ?
            <>
            {/* ------------- WEB----------- */}

            <section className="w-full px-[3%] mt-[4vw] mr-auto flex flex-col lg:flex-row-reverse">
            {/* ------------- Unidad Manejadora de aire ------------- */}
                
                <div className="flex w-full lg:w-[60%]">
                    <div className="flex w-[3%] mr-[1.5%]">
                        <VinietaNaranjaSVG css="mt-[60%] h-[30px] w-[25px] md:h-[50px] md:h-[30px] lg:h-[45px] lg:w-[35px]"/>
                    </div>
                    <div className="w-full mr-auto text-[#4C4B4B] text-[10.5vw] lg:text-[5.5vw] font-nunito-bolder leading-none">
                        <h1 className="text-[4.7vw] lg:text-[2.7vw] font-nunito mb-[1vw]">VENTILACIÓN</h1>
                        <h1 className="text-[#FF7800]">CAJA</h1>
                        <h1 className="text-[#FF7800]">VENTILADORA</h1>

                        <h2 className="text-[4.7vw] lg:text-[2.7vw] mt-[1vw] font-lexend-bold">Inyección de aire para confort de</h2>
                        <h2 className="text-[4.7vw] lg:text-[2.7vw] mt-3 lg:mt-2 font-lexend-bold">personas en <span className="text-[#FF7800]">espacios habitados</span></h2>
                        
                    </div>
                </div>
                
                    <div className="flex w-full lg:w-1/2 lg:-mt-24">
                        <Image
                            alt="Home banner 1"
                            className=""
                            radius="none"
                            src="../img/tempomatic/caja_ventiladora/caja_ventiladora_01.png"
                            width="100%"
                        />
                    </div>
                    
                
            </section>

            <section className="w-full px-[6%] -mt-10 flex">
            {/* -------------PARRAFO CON BOTON ------------- */}

                <p className="w-2/4 font-lexend text-[#4C4B4B] text-[1.8vw] leading-tight">
                    Estas unidades pueden ser acopladas a cualquier circuito de conductos o funcionar con <span className="text-[#FF7800]">plenos de inyección directa</span>, 
                    ofreciendo además una amplia gama de caudales desde 40 hasta 195 m3/min. a través de los <span className="text-[#FF7800]">8 modelos TEMPOMATIC estándar</span>.
                </p>
                <div className="w-1/2 flex justify-end">
                    <AsesoramietoButton screen={BigScreen ? "xl" : "md"} size={BigScreen ? 40 : 16}
                        link={"https://wa.me/5492236356756?text=Hola.%20Quiero%20más%20información%20sobre%20la%20Caja%20Ventiladora."}/>
                    </div>
            </section> 

            <section className="w-full px-[3%] mt-10 flex flex-row-reverse 
            bg-[url('/svg/ondasTempomaticItems.svg')] h-[700px] 2xl:h-[750px] bg-fill  bg-[center_top_vw] md:bg-[center_top_0vw] lg:bg-[center_top_-1vw] 2xl:bg-[center_top_4vw] bg-no-repeat
            ">
            {/* -------------IMG con diferenciales ------------- */}

                <div className="w-[60%] my-auto">
                <Image
                        alt="Home banner 1"
                        className=""
                        radius="none"
                        src="../img/tempomatic/caja_ventiladora/caja_ventiladora_02.png"
                        width="100%"
                    />
                </div>

                <div className="xl:w-[45%] 2xl:w-[32%] my-auto mr-auto pl-[3%] space-y-8 ">
                    <DiferencialConstruccionRobusta size={75} customWith={10} />
                    <DiferencialFiltreraIncorporada size={75} customWith={10} />
                    <DiferencialAltaConfiabilidad size={75} customWith={10} />
                    <DiferencialOptimoRendimiento size={75} customWith={10} />
                    <DiferencialBajoMantenimiento size={75} customWith={10} />
                    <DiferencialConVentiladorSyP size={75} customWith={10} />
                   
                </div>
            </section> 
            {/* -------------COMPONENTES ------------- */}
            <section className="w-full px-[6%] lg:mt-10 ">
                <h1 className="font-nunito-bolder text-[#FF7800] text-[3.3vw]">COMPONENTES</h1>
                <div className="w-full flex">
                    <ul className="w-[45%] font-nunito space-y-16 mt-10">
                        <li>
                            <h1 className="h-[10%] text-[2.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">1</span> GABINETE</h1>
                            <p className="text-[1.3vw] text-midgray">Tapas desmontables, paneles aislados con poliuretano con foil de aluminio  y terminación con pintura horneada.</p>
                            <p className="text-[1.3vw] text-midgray">Posee filtro para protección del conjunto ventilador.</p>
                        </li> 
                        <li>
                            <h1 className="h-[10%] text-[2.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">2</span> MOTOR</h1>
                            <p className="text-[1.3vw] text-midgray">Blindado, normalizado para tensiones 3 x 380V - 50Hz.</p>
                        </li>  
                        <li>
                            <h1 className="h-[10%] text-[2.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">3</span> VENTILADOR SOLER & PALAU</h1>
                            <p className="text-[1.3vw] text-midgray">Centrífugo multipalas, balanceado estática y dinámicamente de doble entrada, con transmisión por correas.</p>
                        </li> 
                        <li>
                            <h1 className="h-[10%] text-[2.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">4</span> SISTEMA ELÉCTRICO</h1>
                            <p className="text-[1.3vw] text-midgray">Seleccionador rotativo para garantizar la protección en el mantenimiento.</p>
                        </li>  

                    </ul>
                    <div className="w-3/5 px-[5%] mt-10">
                        <Image
                            alt="Home banner 1"
                            className=""
                            radius="none"
                            src="../img/tempomatic/caja_ventiladora/caja_ventiladora_03.png"
                        />
                    </div>
                </div>
            </section>

            {/* -------------INFO TECNICA ------------- */}
            <section className="w-full px-[6%] mt-[1vw] ">
                <h1 className="font-nunito-bolder text-[#FF7800] text-[3.3vw]">INFORMACIÓN TÉCNICA</h1>
                
                    <div className="w-full ">
                        <Image
                            alt="Home banner 1"
                            className=""
                            radius="none"
                            src="../img/tempomatic/caja_ventiladora/caja_ventiladora_04.png"
                        />
                    </div>
               
            </section>

            {/* -------------MEDIDAS ------------- */}
            <section className="w-full px-[6%] mt-16 ">
                <h1 className="font-nunito text-[#FF7800] text-[3.3vw]">MEDIDAS</h1>
                <h1 className="font-nunito text-[#FF7800] text-[2.3vw] text-right w-4/5">TOMA / INYECCIÓN DE AIRE</h1>

                    <table className="table-auto font-nunito text-[1.3vw] w-4/5">
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
                                <td className="p-2 pl-[1.7vw] text-left">CV 050</td>                   
                                <td>965</td>
                                <td>1000</td>
                                <td>655</td>
                                <td>1070</td>
                                <td>915</td>
                                <td className="border-l-2 border-[#FF7800]">750</td>
                                <td className="border-r-2 border-[#FF7800]">450</td>
                                <td className="border-l-2 border-[#FF7800]">350</td>
                                <td className="border-r-2 border-[#FF7800]">350</td>
                                <td>1060</td>

                            </tr>
                            <tr className="bg-[#e7e7e7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">CV 070 / 090</td>                   
                                <td>965</td>
                                <td>1000</td>
                                <td>895</td>
                                <td>1070</td>
                                <td>915</td>
                                <td className="border-l-2 border-[#FF7800]">695</td>
                                <td className="border-r-2 border-[#FF7800]">505</td>
                                <td className="border-l-2 border-[#FF7800]">445</td>
                                <td className="border-r-2 border-[#FF7800]">445</td>
                                <td>1060</td>

                            </tr>
                            <tr className="bg-[#f7f7f7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">CV 110</td>                   
                                <td>1155</td>
                                <td>1000</td>
                                <td>1020</td>
                                <td>1070</td>
                                <td>915</td>
                                <td className="border-l-2 border-[#FF7800]">900</td>
                                <td className="border-r-2 border-[#FF7800]">610</td>
                                <td className="border-l-2 border-[#FF7800]">495</td>
                                <td className="border-r-2 border-[#FF7800]">545</td>
                                <td>1220</td>

                            </tr>
                            <tr className="bg-[#e7e7e7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">CV 125 / 145</td>                   
                                <td>1155</td>
                                <td>1000</td>
                                <td>1020</td>
                                <td>1070</td>
                                <td>915</td>
                                <td className="border-l-2 border-[#FF7800]">900</td>
                                <td className="border-r-2 border-[#FF7800]">750</td>
                                <td className="border-l-2 border-[#FF7800]">545</td>
                                <td className="border-r-2 border-[#FF7800]">495</td>
                                <td>1220</td>
                            </tr>

                            <tr className="bg-[#f7f7f7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">CV 190</td>                   
                                <td>1705</td>
                                <td>1100</td>
                                <td>1195</td>
                                <td>1170</td>
                                <td>1015</td>
                                <td className="border-l-2 border-[#FF7800]">1390</td>
                                <td className="border-r-2 border-[#FF7800]">750</td>
                                <td className="border-l-2 border-[#FF7800]">645</td>
                                <td className="border-r-2 border-[#FF7800]">645</td>
                                <td>1800</td>

                            </tr>

                            <tr className="bg-[#e7e7e7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">CV 250</td>                   
                                <td>1705</td>
                                <td>1100</td>
                                <td>1195</td>
                                <td>1170</td>
                                <td>1415</td>
                                <td className="border-l-2 border-[#FF7800]">1500</td>
                                <td className="border-r-2 border-[#FF7800]">1200</td>
                                <td className="border-l-2 border-[#FF7800]">850</td>
                                <td className="border-r-2 border-[#FF7800]">695</td>
                                <td>1800</td>
                            </tr>

                            <tr className="bg-[#f7f7f7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">CV 335</td>                   
                                <td>2000</td>
                                <td>1500</td>
                                <td>1500</td>
                                <td>1570</td>
                                <td>1415</td>
                                <td className="border-l-2 border-[#FF7800]">1500</td>
                                <td className="border-r-2 border-[#FF7800]">1200</td>
                                <td className="border-l-2 border-[#FF7800]">850</td>
                                <td className="border-r-2 border-[#FF7800]">950</td>
                                <td>1560</td>
                            </tr>

                            <tr className="bg-[#e7e7e7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">CV 500</td>                   
                                <td>2000</td>
                                <td>1500</td>
                                <td>1800</td>
                                <td>1570</td>
                                <td>1415</td>
                                <td className="border-l-2 border-[#FF7800]">1700</td>
                                <td className="border-r-2 border-[#FF7800]">1550</td>
                                <td className="border-l-2 border-[#FF7800]">1000</td>
                                <td className="border-r-2 border-[#FF7800]">1100</td>
                                <td>1560</td>
                            </tr>

                            <tr className="bg-[#f7f7f7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">CV 665</td>                   
                                <td>2200</td>
                                <td>1800</td>
                                <td>2000</td>
                                <td>1870</td>
                                <td>1715</td>
                                <td className="border-l-2 border-[#FF7800]">1900</td>
                                <td className="border-r-2 border-[#FF7800]">1250</td>
                                <td className="border-l-2 border-[#FF7800]">1250</td>
                                <td className="border-r-2 border-[#FF7800]">1250</td>
                                <td>1860</td>
                            </tr>

                            <tr className="bg-[#e7e7e7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">CV 1000</td>                   
                                <td>2700</td>
                                <td>1900</td>
                                <td>2600</td>
                                <td>1970</td>
                                <td>1815</td>
                                <td className="border-l-2 border-[#FF7800]">2500</td>
                                <td className="border-r-2 border-[#FF7800]">2100</td>
                                <td className="border-l-2 border-[#FF7800]">1400</td>
                                <td className="border-r-2 border-[#FF7800]">1650</td>
                                <td>1960</td>
                            </tr>

                            <tr className="bg-[#f7f7f7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">CV 1330</td>                   
                                <td>3200</td>
                                <td>2100</td>
                                <td>2600</td>
                                <td>2170</td>
                                <td>2015</td>
                                <td className="border-l-2 border-[#FF7800]">2800</td>
                                <td className="border-r-2 border-[#FF7800]">2500</td>
                                <td className="border-l-2 border-[#FF7800]">1600</td>
                                <td className="border-r-2 border-[#FF7800]">2000</td>
                                <td>3260</td>
                            </tr>

                            <tr className="bg-white text-white text-[0.9vw] text-center">
                                <td className="p-2 pl-[1.7vw] text-left"></td>                   
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="bg-[#FF7800] border-[#FF7800] py-3 text-right border-l- rounded-bl-[1.7vw]">TOMA D</td>
                                <td className="bg-[#FF7800] border-white pl-[0.0%] text-left border-r-2 rounded-br-[1.7vw]">E AIRE</td>
                                <td className="bg-[#FF7800]  text-right border-l-2 rounded-bl-[1.7vw]">INYECCIÓ</td>
                                <td className="bg-[#FF7800]  border-[#FF7800] pl-[0%] text-left border-r- rounded-br-[1.7vw]">N DE AIRE</td>
                                <td></td>
                            </tr>

                           
                            
                        </tbody>
                    </table>
                    
            </section>

            
            {/* -------------CARACTERÍSTICAS ------------- */}
            <section className="w-full px-[6%] mt-16 ">
                <h1 className="font-nunito text-[#FF7800] text-[3.3vw]">CARACTERÍSTICAS</h1>
                {/* <h1 className="font-nunito text-[#FF7800] text-[2.3vw] text-right">TOMA DE AIRE INTECCIÓN DE AIRE</h1> */}

                    <table className="table-auto font-nunito text-[0.8vw] w-full">
                        <thead >
                            <tr className="bg-[#FF7800] text-white ">
                                <th className="p-2 text-left px-[1.7vw] w-[20vw] text-[1.5vw] pr-auto border-r-2 rounded-b-[1.7vw] border-white">MODELOS</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">CV 050 <br/> 025/035</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">CV 070 <br/> 025/035</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">CV 090 <br/> 025/035</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">CV 110 <br/> 025/035</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">CV 125 <br/> 025/035</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">CV 145 <br/> 025/035</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">CV 190 <br/> 025/035</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">CV 250 <br/> 025/035</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">CV 335 <br/> 045</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">CV 500 <br/> 045</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">CV 665 <br/> 045</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">CV 1000 <br/> 045</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">CV 1330 <br/> 045</th>



                            
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-[#e7e7e7] text-[1.2vw] text-center">
                                <td className="p-2 pl-[1.7vw] text-[1.0vw] text-left">Caudal (M3/H)</td>
                                <td>3000</td>
                                <td>4200</td>
                                <td>5400</td>
                                <td>6600</td>
                                <td>7500</td>
                                <td>8700</td>
                                <td>11400</td>
                                <td>15000</td>
                                <td>20000</td>
                                <td>30000</td>
                                <td>40000</td>
                                <td>60000</td>
                                <td>80000</td>


                            
                            </tr>
                                                        
                            <tr className="bg-[#f7f7f7] text-[1.2vw] text-center">
                                <td className="p-2 pl-[1.7vw] text-[1.0vw] text-left">Contrapresión (MMCA)</td>
                                <td>25/35</td>
                                <td>25/35</td>
                                <td>25/35</td>
                                <td>25/35</td>
                                <td>25/35</td>
                                <td>25/35</td>
                                <td>25/35</td>
                                <td>25/35</td>
                                <td>45</td>
                                <td>45</td>
                                <td>45</td>
                                <td>45</td>
                                <td>45</td>
                                
                            
                            </tr>
                            
                            <tr className="bg-[#e7e7e7] text-[1.2vw] text-center">
                                <td className="p-2 pl-[1.7vw] text-[1.0vw] text-left">Potencia del motor (HP)</td>
                                <td>0,75</td>
                                <td>1 / 1,5</td>
                                <td>1,5</td>
                                <td>2</td>
                                <td>2/3</td>
                                <td>3</td>
                                <td>4</td>
                                <td>4 / 5,5</td>
                                <td>7,5</td>
                                <td>10</td>
                                <td>12,5</td>
                                <td>20</td>
                                <td>25</td>

                            </tr>
                            <tr className="bg-[#f7f7f7] text-[1.2vw] text-center">
                                <td className="p-2 pl-[1.7vw] text-[1.0vw] text-left">Peso (kg)</td>
                                <td>70</td>
                                <td>90</td>
                                <td>100</td>
                                <td>110</td>
                                <td>120</td>
                                <td>130</td>
                                <td>165</td>
                                <td>190</td>
                                <td>390</td>
                                <td>480</td>
                                <td>610</td>
                                <td>920</td>
                                <td>1060</td>
                               
                            </tr>
                            
                        </tbody>
                    </table>
               
            </section>



            {/* -------------BOTON MANUAL ------------- */}
            <section className="w-full px-[6%] mt-10 flex justify-between">
                   
                        <a  className="w-[200px]" href="/soler&palau" target="_top">
                        <Image
                            alt="Home banner 1"
                            className=""
                            radius="none"
                            src="../img/home/homeBanner/2.png"
                            width="100%"
                        />
                        </a>
                    
                    <ManualButtonNaranja size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"} link={"../../manuales/04. Folleto Caja ventiladora.pdf"} dwName={"04. Folleto Caja ventiladora.pdf"}/>
            </section>
            </>
            :
            <>
    {/* -------------------------- MOBILE------------------------ */}

                <section className="px-[6%]">
                    <div className="flex w-full lg:w-[60%]">
                        <div className="flex w-[3%] mr-[1.5%]">
                            <VinietaNaranjaSVG css="-mt-[60%] h-[30px] w-[25px] md:h-[50px] md:h-[30px] lg:h-[45px] lg:w-[35px]"/>
                        </div>
                        <div className="w-full mr-auto text-[#4C4B4B] text-[10.5vw] lg:text-[5.5vw] font-nunito-bolder leading-none">
                        <h1 className="text-[4.7vw] lg:text-[2.7vw] font-nunito mb-[1vw]">VENTILACIÓN</h1>
                        <h1 className="text-[#FF7800]">CAJA</h1>
                        <h1 className="text-[#FF7800]   ">VENTILADORA</h1>

                       
                        <p className="px-[1.5%] text-[4.7vw] text-[#4C4B4B] font-lexend-bold my-auto leading-tight">
                        Inyección de aire para confort de
                        personas en <span className="text-[#FF7800]">espacios habitados</span>.
                        </p>
                            
                        </div>
                    </div>
                    
                        
                
                </section>
                <section className="w-full px-[3%] -mt-0 flex
                    bg-[url('/svg/ondasTempomaticItemsMobile.svg')] bg-contain lg:bg-fill  bg-[center_bottom_20vw] md:bg-[center_top_0vw] lg:bg-[center_top_6vw] bg-no-repeat
                    ">
                        
                        <div className="w-[80%] ml-[12vw] ">
                        <Image
                                alt="Home banner 1"
                                className=""
                                radius="none"
                                src="../img/tempomatic/caja_ventiladora/caja_ventiladora_02.png"
                                width="100%"
                            />
                        </div>
                       
                    </section>
                <section className="w-full px-[5%] mt-2 ">
                {/* -------------PARRAFO CON BOTON ------------- */}

                    <p className="w-full font-lexend text-[#4C4B4B] text-[4.3vw] leading-non">
                        Estas unidades pueden ser acopladas a cualquier circuito de conductos o funcionar con <span className="text-[#FF7800]">plenos de inyección directa</span>,
                        ofreciendo además una amplia gama de caudales desde 40 hasta 195 m3/min. 
                        a través de los <span className="text-[#FF7800]">8 modelos TEMPOMATIC estándar</span>.
                    </p>
                    <div className=" flex justify-end">
                        <AsesoramietoButton screen={BigScreen ? "xl" : "md"} size={BigScreen ? 40 : 16}
                            link={"https://wa.me/5492236356756?text=Hola.%20Quiero%20más%20información%20sobre%20la%20Caja%20Ventiladora."}/>
                    </div>
                    

                </section> 

                <section className="w-auto my-auto m    -auto mt-4 px-[%] space-y-4">
                    <DiferencialConstruccionRobusta size={55} customWith={10} />
                    <DiferencialFiltreraIncorporada size={55} customWith={10} />
                    <DiferencialAltaConfiabilidad size={55} customWith={10} />
                    <DiferencialOptimoRendimiento size={55} customWith={10} />
                    <DiferencialBajoMantenimiento size={55} customWith={10} />
                    <DiferencialConVentiladorSyP size={55} customWith={10} />
                </section>


                {/* -------------COMPONENTES ------------- */}
                <section className="w-full px-[6%] mt-4 lg:-mt-10 ">
                    <h1 className="font-nunito-bolder text-[#FF7800] text-[7.3vw]">COMPONENTES</h1>
                    <div className="w-full flex flex-col-reverse">
                        <ul className="w-2/ font-nunito space-y-4 mt-0">
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">1</span> GABINETE</h1>
                                <p className="text-[4.3vw] text-midgray">Tapas desmontables, paneles aislados con poliuretano con foil de aluminio  y terminación con pintura horneada. Posee filtro para protección del conjunto ventilador.</p>
                            </li> 
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">2</span> MOTOR</h1>
                                <p className="text-[4.3vw] text-midgray">Blindado, normalizado para tensiones 3 x 380V - 50Hz.</p>
                            </li> 
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">3</span> VENTILADOR SOLER & PALAU</h1>
                                <p className="text-4.3vw] text-midgray">Centrífugo multipalas, balanceado estática y dinámicamente de doble entrada, con transmisión por correas.</p>
                            </li> 
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">4</span> SISTEMA ELÉCTRICO</h1>
                                <p className="text-[4.3vw] text-midgray">Seleccionador rotativo para garantizar la protección en el mantenimiento.</p>
                            </li> 

                        </ul>
                        <div className="w- pr-[3%] pl-[5vw] mt-2">
                            <Image
                                alt="Home banner 1"
                                className=""
                                radius="none"
                                src="../img/tempomatic/caja_ventiladora/caja_ventiladora_03.png"
                            />
                        </div>
                    </div>
                </section>

                {/* -------------BOTON MANUAL ------------- */}
                <section className="w-full px-[6%] lg:mt-4 flex justify-between">
                        <a  className="w-[120px] mt-4" href="/soler&palau" target="_top">
                        <Image
                            alt="Home banner 1 "
                            className=""
                            radius="none"
                            src="../img/home/homeBanner/2.png"
                            width="100%"
                        />
                        </a>
                        <ManualButtonNaranja size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"} link={"../../manuales/04. Folleto Caja ventiladora.pdf"} dwName={"04. Folleto Caja ventiladora.pdf"}/>
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
                            <a
                                className=""
                                color="foreground"
                                href={item.href}
                                key={item.key}
                            >
                                {/* <CardDisplay data={item}  actual={""} /> */}
                                <CardDisplaySypHome data={item}  actual={""}/>

                            </a>
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

