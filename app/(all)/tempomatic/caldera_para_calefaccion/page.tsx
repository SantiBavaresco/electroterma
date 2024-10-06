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
import { Diferencial45Anio } from "@/components/diferenciales/diferencial45Anios";
import { DiferenciallMultiposicionTempomatic } from "@/components/diferenciales/diferencialMultiposicionTempomatic";
import { DiferencialFabricacionNacional } from "@/components/diferenciales/diferencialFabricacionNacional";
import { DiferencialDurabilidad } from "@/components/diferenciales/diferencialDurabilidad";
import { DiferencialRecuperacionDeCalor } from "@/components/diferenciales/diferencialRecuperacionDeCalor";



// import ScrollVideoPlayer from "@/components/videoplayer/scrollVideo";
// import VideoScrollPlayer from "@/components/videoplayer/videoplayer";
interface ItemsNavbar {
    key: string;
    label: string[];
    labelShort: string;
    img: string;
    href: string;
}

export default function CalderaParaCalefaccionPage() {

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
                    src="../img/tempomatic/caldera_para_calefaccion/caldera_para_calefaccion-Banner.png"
                    width="100%"
                />
            </section>
            {/* ------------- Tempomatic logo ------------- */}
            <section className="w-1/2    lg:w-1/3 px-5 lg:px-[5.6%] mt-4 mr-auto">
                <Image
                    alt="Home banner 1"
                    className=""
                    radius="none"
                    src="../img/tempomatic/caldera_para_calefaccion/tempomatic-Logo.jpg"
                    width="100%"
                />
            </section>  

            {BigScreen ?
            <>
            {/* ------------- WEB----------- */}

            <section className="w-full pr-[6%] mt-[6%] mr-auto flex flex-col lg:flex-row-reverse justify-between">
            {/* ------------- Unidad Manejadora de aire ------------- */}
                
                <div className="flex w-full lg:w-[60%]">
                    <div className="flex w-[3%] mr-[1.5%]">
                        <VinietaNaranjaSVG css="mt-[60%] h-[30px] w-[25px] md:h-[50px] md:h-[30px] lg:h-[45px] lg:w-[35px]"/>
                    </div>
                    <div className="w-full mr-auto text-[#4C4B4B] text-[10.5vw] lg:text-[5.5vw] font-nunito-bolder leading-none">
                        <h1 className="text-[4.7vw] lg:text-[2.7vw] font-nunito mb-[1vw]">CALEFACCIÓN</h1>
                        <h1 className="text-[#FF7800]">CALDERA PARA</h1>
                        <h1 className="text-[#FF7800]">CALEFACCIÓN</h1>

                        <h2 className="text-[4.7vw] lg:text-[2.7vw] mt-[1vw] font-lexend-bold">Dan solución a las necesidades</h2>
                        <h2 className="text-[4.7vw] lg:text-[2.7vw] mt-3 lg:mt-2 font-lexend-bold">de agua caliente <span className="text-[#FF7800]">para sistemas</span></h2>
                        <h2 className="text-[4.7vw] lg:text-[2.7vw] mt-3 lg:mt-2 font-lexend-bold text-[#FF7800]">de piso radiante, radiadores,</h2>
                        <h2 className="text-[4.7vw] lg:text-[2.7vw] mt-3 lg:mt-2 font-lexend-bold text-[#FF7800]">fan-coils, agua de piscinas</h2>
                        <h2 className="text-[4.7vw] lg:text-[2.7vw] mt-3 lg:mt-2 font-lexend-bold">y las combinaciones  de éstas.</h2>

                        <div className="w-full mt-[5%] flex justify-end">
                            <AsesoramietoButton screen={BigScreen ? "xl" : "md"} size={BigScreen ? 40 : 16}
                                link={"https://wa.me/5492236356756?text=Hola.%20Quiero%20más%20información%20sobre%20la%20%20Caldera%20para%20Calefacción."}/>
                        </div>

                    </div>

                </div>
                
                    <div className="flex w-full lg:w-1/3 lg:-mt-24">
                        <Image
                            alt="Home banner 1"
                            className=""
                            radius="none"
                            src="../img/tempomatic/caldera_para_calefaccion/caldera_para_calefaccion_01.png"
                            width="100%"
                        />
                    </div>
                    
                
            </section>


            <section className="w-full px-[3%] -mt-24 flex flex-row-reverse justify-around
            bg-[url('/svg/ondasTempomaticItems.svg')] h-[700px] 2xl:h-[750px] bg-fill  bg-[center_top_vw] md:bg-[center_top_0vw] lg:bg-[center_top_-1vw] 2xl:bg-[center_top_0vw] bg-no-repeat
            ">
            {/* -------------IMG con diferenciales ------------- */}

                <div className="w-[60%] mt-[5%] my-auto ml-[0%] xl:px-[3%] 2xl:px-[5%]">
                <Image
                        alt="Home banner 1"
                        className=""
                        radius="none"
                        src="../img/tempomatic/caldera_para_calefaccion/caldera_para_calefaccion_02.png"
                        width="100%"
                    />
                </div>

                <div className="xl:w-[39vw] 2xl:w-auto pt-[20%] my-auto  2xl:mx-[6%] space-y-8 ">
                    
                    <Diferencial15Anio size={75} customWith={10} />
                    <DiferencialAltaConfiabilidad size={75} customWith={10} />
                    <DiferencialDurabilidad size={75} customWith={10} />
                    <DiferencialRecuperacionDeCalor size={75} customWith={10} />

                </div>
            </section> 
            {/* -------------COMPONENTES ------------- */}
            <section className="w-full px-[6%] lg:mt-[10%]">
                <h1 className="font-nunito-bolder text-[#FF7800] text-[3.3vw]">COMPONENTES</h1>
                <div className="w-full flex">
                    <ul className="w-3/5 font-nunito space-y-8 mt-10">
                        <li>
                            <h1 className="h-[10%] text-[2.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[1.8%] rounded-full">1</span> COLECTOR DE CHIMENEA</h1>
                            <p className="text-[1.3vw] text-midgray">Sumergido para un mejor aprovechamiento del calor. Caja de humos desmontables.</p>
                        </li> 
                        <li>
                            <h1 className="h-[10%] text-[2.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[1.8%] rounded-full">2</span> TUBOS</h1>
                            <p className="text-[1.3vw] text-midgray">Verticales de acero sin costura certificados ASTM, con turbuladores internos de acero inoxidable.</p>
                        </li> 
                        <li>
                            <h1 className="h-[10%] text-[2.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[1.8%] rounded-full">3</span> SOLDADURA ELÉCTRICA CERTIFICADA</h1>
                            <p className="text-[1.3vw] text-midgray">Según los requerimientos del código ANSI/AWS D1 3/98 (Entre certificador INTEMA/UNMDP).</p>
                        </li> 
                        <li>
                            <h1 className="h-[10%] text-[2.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[1.8%] rounded-full">4</span> ACCESORIOS</h1>
                            <p className="text-[1.3vw] text-midgray">Ánodo de sacrificio para inhibir los procesos de corrosión, válvula de alivio por sobrepesión, purgador automático y válvula de limpieza.</p>
                        </li> 
                        <li>
                            <h1 className="h-[10%] text-[2.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[1.8%] rounded-full">5</span> CUERPO</h1>
                            <p className="text-[1.3vw] text-midgray">Cilíndro de posición vertical, fabricado de chapa F24 en espesores adecuados para garantizar una larga vida útil y soportar esfuerzos de origen termodinámico, électricamente soldado con sistema de electrodo contínuo. Aislación de lana de vidrio y revestimiento con chapa de acero inoxidable.</p>
                        </li> 
                        <li>
                            <h1 className="h-[10%] text-[2.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[1.8%] rounded-full">6</span> HOGAR</h1>
                            <p className="text-[1.3vw] text-midgray">Sumergido, diseñado acorde a la evolución de la llama.</p>
                        </li>  
                        <li>
                            <h1 className="h-[10%] text-[2.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[1.8%] rounded-full">6</span> QUEMADOR</h1>
                            <p className="text-[1.3vw] text-midgray">Monotobera de construcción nacional, con cuerpo metálico, cabeza de combustión regulable, bruida de montaje de aluminio, control electrónico de llama, doble válvula a selenoide para gas, válvula de regulación manual, electrodos y transformador de encendido automático, ventilador, presostato de aire y filtro de gas. </p>
                        </li>  
                    </ul>
                    <div className="w-2/5 pr-[3%] mt-[5%] my-auto">
                        <Image
                            alt="Home banner 1"
                            className=""
                            radius="none"
                            src="../img/tempomatic/caldera_para_calefaccion/caldera_para_calefaccion_03.png"
                        />
                    </div>
                </div>
            </section>

            {/* ------------- INFO TECNICA ------------- */}
            <section className="w-full px-[6%] mt-[3vw] ">
                <h1 className="font-nunito-bolder text-[#FF7800] text-[3.3vw]">INFORMACIÓN TÉCNICA</h1>
                
                    <div className="w-full ">
                        <Image
                            alt="Home banner 1"
                            className=""
                            radius="none"
                            src="../img/tempomatic/caldera_para_calefaccion/caldera_para_calefaccion_04.png"
                        />
                    </div>
            </section>


            {/* -------------MEDIDAS ------------- */}
            <section className="w-full px-[6%] mt-10 ">
                <h1 className="font-nunito text-[#FF7800] text-[3.3vw]">MEDIDAS</h1>

                <table className="table-auto font-nunito text-[1.4vw] w-full">
                        <thead >
                            <tr className="bg-[#FF7800] text-white ">
                                <th className="p-2 text-left px-[1.7vw] w-[20vw] text-[1.5vw] pr-auto border-r-2 rounded-b-[1.7vw] border-white">MODELO/MEDIDA</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">&Oslash; A</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">B</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">C</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">D</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">E</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">F</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">G</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">H</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">I</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">J</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">K</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">&Oslash; L</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">&Oslash; M</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">&Oslash; P</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">&Oslash; R</th>

                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-[#e7e7e7] text-[1.4vw] text-center">
                                <td className="p-2 pl-[1.7vw] text-[1.4vw] text-left">SCA 080</td>
                                <td>700</td>
                                <td>1220</td>
                                <td>420</td>
                                <td>1125</td>
                                <td>205</td>
                                <td>95</td>
                                <td>190</td>
                                <td>1135</td>
                                <td>25</td>
                                <td>790</td>
                                <td>440</td>
                                <td>200</td>
                                <td>2&quot;</td>
                                <td>1&quot;</td>
                                <td>2&quot;</td>
                                


                            
                            </tr>
                                                        
                            <tr className="bg-[#f7f7f7] text-[1.4vw] text-center">
                                <td className="p-2 pl-[1.7vw] text-[1.4vw] text-left">SCA 100</td>
                                <td>780</td>
                                <td>1620</td>
                                <td>480</td>
                                <td>1290</td>
                                <td>205</td>
                                <td>95</td>
                                <td>190</td>
                                <td>1535</td>
                                <td>25</td>
                                <td>865</td>
                                <td>490</td>
                                <td>250</td>
                                <td>2&quot;</td>
                                <td>1&quot;</td>
                                <td>2&quot;</td>
                                
                            
                            </tr>
                            
                            <tr className="bg-[#e7e7e7] text-[1.4vw] text-center">
                                <td className="p-2 pl-[1.7vw] text-[1.4vw] text-left">SCA 150</td>
                                <td>870</td>
                                <td>1855</td>
                                <td>540</td>
                                <td>1390</td>
                                <td>205</td>
                                <td>95</td>
                                <td>205</td>
                                <td>1760</td>
                                <td>35</td>
                                <td>1005</td>
                                <td>510</td>
                                <td>300</td>
                                <td>2 1/2&quot;</td>
                                <td>1&quot;</td>
                                <td>2 1/2&quot;</td>

                            </tr>
                            <tr className="bg-[#f7f7f7] text-[1.4vw] text-center">
                                <td className="p-2 pl-[1.7vw] text-[1.4vw] text-left">SCA 200</td>
                                <td>925</td>
                                <td>2060</td>
                                <td>585</td>
                                <td>1685</td>
                                <td>205</td>
                                <td>95</td>
                                <td>205</td>
                                <td>1960</td>
                                <td>35</td>
                                <td>1090</td>
                                <td>545</td>
                                <td>300</td>
                                <td>2 1/2&quot;</td>
                                <td>1&quot;</td>
                                <td>2 1/2&quot;</td>
                            </tr>

                            
                        </tbody>
                    </table>

                <h1 className="font-nunito mt-2 text-[#FF7800] text-[2.3vw] text-right">MEDIDAS EN MILÍMETROS</h1>
                
            </section>

            
            {/* -------------CARACTERÍSTICAS ------------- */}
            <section className="w-3/4 px-[6%] mt-10 mr-auto">
                <h1 className="font-nunito text-[#FF7800] text-[3.3vw]">CARACTERÍSTICAS</h1>
                {/* <h1 className="font-nunito text-[#FF7800] text-[2.3vw] text-right">TOMA DE AIRE INTECCIÓN DE AIRE</h1> */}

                    <table className="table-auto font-nunito text-[1.5vw] w-full">  
                        <thead >
                            <tr className="bg-[#FF7800] text-white ">
                                <th className="p-2 text-left px-[1.7vw] w-[20vw] text-[1.5vw] pr-auto border-r-2 rounded-b-[1.7vw] border-white">CARACTERÍSTICAS/MODELOS</th>
                                <th className="p-2 w-[6.3vw] border-r-2 rounded-b-[1.7vw] border-white">SCA 080 </th>
                                <th className="p-2 w-[6.3vw] border-r-2 rounded-b-[1.7vw] border-white">SCA 100 </th>
                                <th className="p-2 w-[6.3vw] border-r-2 rounded-b-[1.7vw] border-white">SCA 150 </th>
                                <th className="p-2 w-[6.3vw] border-r-2 rounded-b-[1.7vw] border-white">SCA 200 </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-[#e7e7e7] text-[1.5vw] text-center">
                                <td className="p-2 pl-[1.7vw]  text-left">POTENCIA MÁXIMA (Kcal/h)</td>
                                <td>700</td>
                                <td>1220</td>
                                <td>420</td>
                                <td>1125</td>
                            </tr>
                            <tr className="bg-[#e7e7e7] text-[1.5vw] text-center">
                                <td className="p-2 pl-[1.7vw]  text-left">VOLUMEN DE AGUA (L)</td>
                                <td>780</td>
                                <td>1620</td>
                                <td>480</td>
                                <td>1290</td>
                            
                            </tr>
                                                        
                            <tr className="bg-[#f7f7f7] text-[1.5vw] text-center">
                                <td className="p-2 pl-[1.7vw]  text-left">SUP. DE INTERCAMBIO (m2)</td>
                                <td>870</td>
                                <td>1855</td>
                                <td>540</td>
                                <td>1390</td>
                            </tr>
                            
                            <tr className="bg-[#e7e7e7] text-[1.5vw] text-center">
                                <td className="p-2 pl-[1.7vw]  text-left">PESO EN VACÍO (Kg)</td>
                                <td>925</td>
                                <td>2060</td>
                                <td>585</td>
                                <td>1685</td>
                            </tr>

                            <tr className="bg-[#f7f7f7] text-[1.5vw] text-center">
                                <td className="p-2 pl-[1.7vw]  text-left">CONSUMO DE GAS (m3/H)</td>
                                <td>870</td>
                                <td>1855</td>
                                <td>540</td>
                                <td>1390</td>
                            </tr>
                            
                        </tbody>
                    </table>
               
            </section>

            {/* -------------BOTON MANUAL ------------- */}
            <section className="w-full px-[6%] mt-10 flex justify-between">
                <a  className="w-[200px]" href="/zila" target="_top">
                    <Image
                        alt="Home banner 1"
                        className=""
                        radius="none"
                        src="../img/home/homeBanner/4.png"
                        width="100%"
                    />
                </a>
                    
                <ManualButtonNaranja size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"} link={"../../.pdf"} dwName={"Manual.pdf"}/>
            </section>
            </>
            :
            <>
    {/* -------------------------- MOBILE------------------------ */}

                <section className="px-[6%]">
                    
                    
                        
                
                </section>
                <section className="w-full pr-[3%] mt-[3%] flex
                    bg-[url('/svg/ondasTempomaticItemsMobile.svg')] bg-contain lg:bg-fill  bg-[center_bottom_20vw] md:bg-[center_top_0vw] lg:bg-[center_top_6vw] bg-no-repeat
                    ">
                        <div className="w-[60%] ml-[vw] ">
                            <Image
                                alt="Home banner 1"
                                className=""
                                radius="none"
                                src="../img/tempomatic/caldera_para_calefaccion/caldera_para_calefaccion_01.png"
                                width="100%"
                            />
                        </div>
                        <div className="flex flex-row w-[30%] -ml-[17%] -mt-4">
                            <div className="flex w-[3%] mr-[1.5%]">
                                <VinietaNaranjaSVG css="-mt-[60%] h-[30px] w-[25px] md:h-[50px] md:h-[30px] lg:h-[45px] lg:w-[35px]"/>
                            </div>
                            <div className="w-full mr-auto text-[#4C4B4B] text-[10.5vw] lg:text-[5.5vw] font-nunito-bolder leading-none">
                                <h1 className="text-[4.7vw] lg:text-[2.7vw] font-nunito mb-[1vw]">CALEFACCIÓN</h1>
                                <h1 className="text-[#FF7800]">CALDERA</h1>
                            
                            </div>
                        </div>
                </section>

                {/* ------------- PARRAFO ------------- */}
                <section className="w-full px-[5%] text-[#4C4B4B] -mt-0 flex flex-col">
                    <h2 className="text-[5.2vw] lg:text-[2.5vw] mt-[1vw] font-lexend-bold">Dan solución a las necesidades </h2>
                    <h2 className="text-[5.2vw] lg:text-[2.vw] mt-0 lg:mt-2 font-lexend-bold">de agua caliente <span className="text-[#FF7800]"> para sistemas </span>.</h2>
                    <h2 className="text-[5.2vw] lg:text-[2.7vw] mt-[1vw] font-lexend-bold text-[#FF7800]">de piso radiante, radiadores,</h2>
                    <h2 className="text-[5.2vw] lg:text-[2.7vw] mt-[1vw] font-lexend-bold text-[#FF7800]"> fan-coils, agua de piscinas </h2>
                    <h2 className="text-[5.2vw] lg:text-[2.7vw] mt-[1vw] font-lexend-bold">y las combinaciones de éstas.</h2>

                    <div className=" flex justify-end">
                        <AsesoramietoButton screen={BigScreen ? "xl" : "md"} size={BigScreen ? 40 : 16}
                            link={"https://wa.me/5492236356756?text=Hola.%20Quiero%20más%20información%20sobre%20la%20C%20Caldera%20para%20Calefacción."}/>
                    </div>
                </section>
                
                {/* ------------- DIFERENCIALES ------------- */}
                <section className="w-auto my-auto m    -auto mt-4 px-[%] space-y-4">
                    <Diferencial15Anio size={55} customWith={10} />
                    <DiferencialAltaConfiabilidad size={55} customWith={10} />
                    <DiferencialDurabilidad size={55} customWith={10} />
                    <DiferencialRecuperacionDeCalor size={55} customWith={10} />
                </section>


                {/* -------------COMPONENTES ------------- */}
                <section className="w-full px-[6%] mt-4 lg:-mt-10 ">
                    <h1 className="font-nunito-bolder text-[#FF7800] text-[7.3vw]">COMPONENTES</h1>
                    <div className="w-full flex flex-col-reverse">
                        <ul className="w-2/ font-nunito space-y-4 mt-0">
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">1</span> COLECTOR DE CHIMENEA</h1>
                                <p className="text-[4.3vw] text-midgray">Sumergido para un mejor aprovechamiento del calor. Caja de humos desmontables.</p>
                            </li> 
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">2</span> TUBOS</h1>
                                <p className="text-[4.3vw] text-midgray">Verticales de acero sin costura certificados ASTM, con turbuladores internos de acero inoxidable.</p>
                            </li> 
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">3</span> SOLDADURA ELÉCTRICA CERTIFICADA</h1>
                                <p className="text-[4.3vw] text-midgray">Según los requerimientos del código ANSI/AWS D1 3/98 (Entre certificador INTEMA/UNMDP).</p>
                            </li> 
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">4</span> ACCESORIOS</h1>
                                <p className="text-[4.3vw] text-midgray">Ánodo de sacrificio para inhibir los procesos de corrosión, válvula de alivio por sobrepesión, purgador automático y válvula de limpieza.</p>
                            </li> 
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">5</span> CUERPO</h1>
                                <p className="text-[4.3vw] text-midgray">Cilíndro de posición vertical, fabricado de chapa F24 en espesores adecuados para garantizar una larga vida útil y soportar esfuerzos de origen termodinámico, électricamente soldado con sistema de electrodo contínuo. Aislación de lana de vidrio y revestimiento con chapa de acero inoxidable.</p>
                            </li> 
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">6</span> HOGAR</h1>
                                <p className="text-[4.3vw] text-midgray">Sumergido, diseñado acorde a la evolución de la llama.</p>
                            </li>  
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">6</span> QUEMADOR</h1>
                                <p className="text-[4.3vw] text-midgray">Monotobera de construcción nacional, con cuerpo metálico, cabeza de combustión regulable, bruida de montaje de aluminio, control electrónico de llama, doble válvula a selenoide para gas, válvula de regulación manual, electrodos y transformador de encendido automático, ventilador, presostato de aire y filtro de gas. </p>
                            </li> 
                        </ul>
                        <div className="w- pr-[3%] pl-[5vw] mt-2">
                            <Image
                                alt="Home banner 1"
                                className=""
                                radius="none"
                                src="../img/tempomatic/caldera_para_calefaccion/caldera_para_calefaccion_03.png"
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
                            src="../img/home/homeBanner/4.png"
                            width="100%"
                        />
                        </a>
                        <ManualButtonNaranja size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"} link={"../../.pdf"} dwName={"Manual.pdf"}/>
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
            <h1 className="font-nunito-bolder text-[#FF7800] text-[5.9vw] lg:text-[3.9vw]">Otros productos Tempomatic</h1>
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
                        width={550}
                    />
                    
            </section>
        </main>
        // 	<div className={'h-[5000px]'}>
        // 		<VideoScrollPlayer/>
        // </div>
    );
}

