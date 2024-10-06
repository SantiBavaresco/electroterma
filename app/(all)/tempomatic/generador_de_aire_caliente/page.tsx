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



// import ScrollVideoPlayer from "@/components/videoplayer/scrollVideo";
// import VideoScrollPlayer from "@/components/videoplayer/videoplayer";
interface ItemsNavbar {
    key: string;
    label: string[];
    labelShort: string;
    img: string;
    href: string;
}

export default function GeneradoDeAireCalientePage() {

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
                    src="../img/tempomatic/generador_de_aire_caliente/generador_de_aire_caliente-Banner.png"
                    width="100%"
                />
            </section>
            {/* ------------- Tempomatic logo ------------- */}
            <section className="w-1/2    lg:w-1/3 px-5 lg:px-[5.6%] mt-4 mr-auto">
                <Image
                    alt="Home banner 1"
                    className=""
                    radius="none"
                    src="../img/tempomatic/generador_de_aire_caliente/tempomatic-Logo.jpg"
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
                        <h1 className="text-[4.7vw] lg:text-[2.7vw] font-nunito mb-[1vw]">CALEFACCIÓN</h1>
                        <h1 className="text-[#FF7800]">GENERADOR DE</h1>
                        <h1 className="text-[#FF7800]   ">AIRE CALIENTE</h1>

                        <h2 className="text-[4.7vw] lg:text-[2.7vw] mt-[1vw] font-lexend-bold">Equipos para calefaccionar</h2>
                        <h2 className="text-[4.7vw] lg:text-[2.7vw] mt-3 lg:mt-2 font-lexend-bold"><span className="text-[#FF7800]">grandes dimensiones</span>.</h2>
                        
                    </div>
                </div>
                
                    <div className="flex w-full lg:w-1/2 lg:-mt-24">
                        <Image
                            alt="Home banner 1"
                            className=""
                            radius="none"
                            src="../img/tempomatic/generador_de_aire_caliente/generador_de_aire_caliente_01.png"
                            width="100%"
                        />
                    </div>
                    
                
            </section>

            <section className="w-full px-[6%] -mt-10 flex">
            {/* -------------PARRAFO CON BOTON ------------- */}

                <p className="w-4/5 font-lexend text-[#4C4B4B] text-[1.8vw] leading-tight">
                    La línea de <span className="text-[#FF7800] font-nunito-bolder">GENERADORES DE AIRE CALIENTE TEMPOMATIC</span> ha sido diseñada para dar 
                    <span className="text-[#FF7800]"> soluciones de </span> por aire caliente a requerimientos de 
                    <span className="text-[#FF7800]"> extrema confiabilidad</span>.

                </p>
                <div className="w-1/2 flex justify-end">
                    <AsesoramietoButton screen={BigScreen ? "xl" : "md"} size={BigScreen ? 40 : 16}
                        link={"https://wa.me/5492236356756?text=Hola.%20Quiero%20más%20información%20sobre%20el%20Generador%20de%20Aire%20Caliente."}/>
                    </div>
            </section> 

            <section className="w-full px-[3%] mt-10 flex flex-row justify-around
            bg-[url('/svg/ondasTempomaticItems.svg')] h-[700px] 2xl:h-[750px] bg-fill  bg-[center_top_vw] md:bg-[center_top_0vw] lg:bg-[center_top_-1vw] 2xl:bg-[center_top_4vw] bg-no-repeat
            ">
            {/* -------------IMG con diferenciales ------------- */}

                <div className="w-[45%] my-auto ml-[0%] xl:px-[3%] 2xl:px-[5%]">
                <Image
                        alt="Home banner 1"
                        className=""
                        radius="none"
                        src="../img/tempomatic/generador_de_aire_caliente/generador_de_aire_caliente_02.png"
                        width="100%"
                    />
                </div>

                <div className="xl:w-[39vw] 2xl:w-auto my-auto  2xl:mx-[6%] space-y-8 ">
                    <Diferencial45Anio size={75} customWith={10} />
                    <DiferenciallMultiposicionTempomatic size={75} customWith={10} />
                    <DiferencialConstruccionRobusta size={75} customWith={10} />
                    <DiferencialConVentiladorSyP size={75} customWith={10} />
                    <DiferencialFabricacionNacional size={75} customWith={10} />
                    <DiferencialAltaConfiabilidad size={75} customWith={10} />
                </div>
            </section> 
            {/* -------------COMPONENTES ------------- */}
            <section className="w-full px-[6%] lg:-mt-0 ">
                <h1 className="font-nunito-bolder text-[#FF7800] text-[3.3vw]">COMPONENTES</h1>
                <div className="w-full flex">
                    <ul className="w-2/5 font-nunito space-y-8 mt-10">
                        <li>
                            <h1 className="h-[10%] text-[2.0vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[1.8%] rounded-full">1</span> INTERCAMBIADOR DE CALOR</h1>
                            <p className="text-[1.0vw] text-midgray">Tubular de tres pasos, construido en chapa de acero soldada eléctricamente. Direccionadores de flujo de aire que mejoran el intercambio térmico con nuevo hogar cónico.</p>
                        </li> 
                        <li>
                            <h1 className="h-[10%] text-[2.0vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[1.8%] rounded-full">2</span> GABINETE</h1>
                            <p className="text-[1.0vw] text-midgray">Tapas desmontables, revestido en paneles aislantes de lana de vidrio y terminacíon en pintura horneada.</p>
                        </li> 
                        <li>
                            <h1 className="h-[10%] text-[2.0vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[1.8%] rounded-full">3</span> QUEMADOR</h1>
                            <p className="text-[1.0vw] text-midgray">Tipo monoblock, con altos valores de combustión. Fácil mantenimiento y limpiezo. Funcionamiento con gas natural, envasado o gas oil, totalmente automático con control electrónico.</p>
                        </li> 
                        <li>
                            <h1 className="h-[10%] text-[2.0vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[1.8%] rounded-full">4</span> MOTOR</h1>
                            <p className="text-[1.0vw] text-midgray">Blindado, normalizado para tensión 3 x 380V - 50Hz.</p>
                        </li> 
                        <li>
                            <h1 className="h-[10%] text-[2.0vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[1.8%] rounded-full">5</span> SISTEMA ELÉCTRICO</h1>
                            <p className="text-[1.0vw] text-midgray">Compuesto de tablero de protección, instalación eléctrica, control de límite y ventilador con conmutador manual-automático y panel de comando accesible desde el exterior.</p>
                        </li> 
                        <li>
                            <h1 className="h-[10%] text-[2.0vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[1.8%] rounded-full">6</span> VENTILADOR</h1>
                            <p className="text-[1.0vw] text-midgray">Centrifugo multipalas, balanceado estática y dinámicamente de doble entrada, con transmisión por correas. <br/> Nuevo soporte de grupo ventilador para multiposición.</p>
                        </li>  

                    </ul>
                    <div className="w-3/5 pr-[3%] mt-[10%] my-auto">
                        <Image
                            alt="Home banner 1"
                            className=""
                            radius="none"
                            src="../img/tempomatic/generador_de_aire_caliente/generador_de_aire_caliente_03.png"
                        />
                    </div>
                </div>
            </section>

            {/* ------------- INTERIOR ------------- */}
            <section className="w-full px-[6%] mt-[3vw] ">
                <h1 className="font-nunito-bolder text-[#FF7800] text-[3.3vw]">INTERIOR</h1>
                
                    <div className="w-full ">
                        <Image
                            alt="Home banner 1"
                            className=""
                            radius="none"
                            src="../img/tempomatic/generador_de_aire_caliente/generador_de_aire_caliente_04.png"
                        />
                    </div>
            </section>

            {/* -------------INFO TECNICA ------------- */}
            <section className="w-full px-[6%] mt-[1vw] ">
                <h1 className="font-nunito-bolder text-[#FF7800] text-[3.3vw]">INFO TÉCNICA</h1>
                
                    <div className="w-full ">
                        <Image
                            alt="Home banner 1"
                            className=""
                            radius="none"
                            src="../img/tempomatic/generador_de_aire_caliente/generador_de_aire_caliente_05.png"
                        />
                    </div>
            </section>

            {/* -------------MEDIDAS ------------- */}
            <section className="w-full px-[6%] mt-10 ">
                <h1 className="font-nunito text-[#FF7800] text-[3.3vw]">MEDIDAS</h1>
                <h1 className="font-nunito text-[#FF7800] text-[2.3vw] text-right">TOMA DE AIRE INTECCIÓN DE AIRE</h1>

                <table className="table-auto font-nunito text-[1.4vw] w-full">
                        <thead >
                            <tr className="bg-[#FF7800] text-white ">
                                <th className="p-2 text-left px-[1.7vw] w-[20vw] text-[1.5vw] pr-auto border-r-2 rounded-b-[1.7vw] border-white">MODELO/MEDIDA</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">A</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">B</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">C</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">D</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">E</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">F</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">G</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">H</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">I</th>
                                <th className="p-2 w-[4.5vw] border-r-2 rounded-b-[1.7vw] border-white">J</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">&Oslash; CHIMENEA</th>
                                

                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-[#e7e7e7] text-[1.4vw] text-center">
                                <td className="p-2 pl-[1.7vw] text-[1.4vw] text-left">TEO 040</td>
                                <td>600</td>
                                <td>810</td>
                                <td>1405</td>
                                <td className="border-l-2 border-[#FF7800]">1145</td>
                                <td className="border-r-2 border-[#FF7800]">450</td>
                                <td className="border-l-2 border-[#FF7800]">550</td>
                                <td className="border-r-2 border-[#FF7800]">415</td>
                                <td>535</td>
                                <td>35</td>
                                <td>100</td>
                                <td>145</td>
                                


                            
                            </tr>
                                                        
                            <tr className="bg-[#f7f7f7] text-[1.4vw] text-center">
                                <td className="p-2 pl-[1.7vw] text-[1.4vw] text-left">TEO 050/060</td>
                                <td>745</td>
                                <td>895</td>
                                <td>1600</td>
                                <td className="border-l-2 border-[#FF7800]">1290</td>
                                <td className="border-r-2 border-[#FF7800]">640</td>
                                <td className="border-l-2 border-[#FF7800]">790</td>
                                <td className="border-r-2 border-[#FF7800]">475</td>
                                <td>775</td>
                                <td>35</td>
                                <td>65</td>
                                <td>145</td>
                                
                            
                            </tr>
                            
                            <tr className="bg-[#e7e7e7] text-[1.4vw] text-center">
                                <td className="p-2 pl-[1.7vw] text-[1.4vw] text-left">TEO 080/100</td>
                                <td>895</td>
                                <td>1045</td>
                                <td>1925</td>
                                <td className="border-l-2 border-[#FF7800]">1430</td>
                                <td className="border-r-2 border-[#FF7800]">755</td>
                                <td className="border-l-2 border-[#FF7800]">940</td>
                                <td className="border-r-2 border-[#FF7800]">655</td>
                                <td>835</td>
                                <td>35</td>
                                <td>100</td>
                                <td>195</td>

                            </tr>
                            <tr className="bg-[#f7f7f7] text-[1.4vw] text-center">
                                <td className="p-2 pl-[1.7vw] text-[1.4vw] text-left">TEO 125/150</td>
                                <td>950</td>
                                <td>1245</td>
                                <td>2005</td>
                                <td className="border-l-2 border-[#FF7800]">1660</td>
                                <td className="border-r-2 border-[#FF7800]">835</td>
                                <td className="border-l-2 border-[#FF7800]">1140</td>
                                <td className="border-r-2 border-[#FF7800]">595</td>
                                <td>1015</td>
                                <td>35</td>
                                <td>130</td>
                                <td>195</td>
                            </tr>

                            <tr className="bg-[#f7f7f7] text-[1.4vw] text-center">
                                <td className="p-2 pl-[1.7vw] text-[1.4vw] text-left">TEO 180</td>
                                <td>1030</td>
                                <td>1325</td>
                                <td>2200</td>
                                <td className="border-l-2 border-[#FF7800]">1765</td>
                                <td className="border-r-2 border-[#FF7800]">925</td>
                                <td className="border-l-2 border-[#FF7800]">1220</td>
                                <td className="border-r-2 border-[#FF7800]">595</td>
                                <td>1195</td>
                                <td>35</td>
                                <td>165</td>
                                <td>245</td>
                            </tr>

                            <tr className="bg-white text-white text-[0.9vw] text-center">
                                <td className=" pl-[1.7vw] text-left"></td>                   
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="bg-[#FF7800] border-[#FF7800] py-3 text-right border-l- rounded-bl-[1.7vw]">INYECCIÓN</td>
                                <td className="bg-[#FF7800] border-white pl-[0.3%] text-left border-r-2 rounded-br-[1.7vw]">DE AIRE</td>
                                <td className="bg-[#FF7800]  text-right border-l-2 rounded-bl-[1.7vw]">TOMA D</td>
                                <td className="bg-[#FF7800]  border-[#FF7800] pl-[0%] text-left border-r- rounded-br-[1.7vw]">E AIRE</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>

                <h1 className="font-nunito mt-2 text-[#FF7800] text-[2.3vw] text-right">MEDIDAS EN MILÍMETROS</h1>
                
            </section>

            
            {/* -------------CARACTERÍSTICAS ------------- */}
            <section className="w-full px-[6%] mt-10 ">
                <h1 className="font-nunito text-[#FF7800] text-[3.3vw]">CARACTERÍSTICAS</h1>
                {/* <h1 className="font-nunito text-[#FF7800] text-[2.3vw] text-right">TOMA DE AIRE INTECCIÓN DE AIRE</h1> */}

                    <table className="table-auto font-nunito text-[1.5vw] w-full">  
                        <thead >
                            <tr className="bg-[#FF7800] text-white ">
                                <th className="p-2 text-left px-[1.7vw] w-[20vw] text-[1.5vw] pr-auto border-r-2 rounded-b-[1.7vw] border-white">CARACTERÍSTICAS/MODELOS</th>
                                <th className="p-2 w-[6.3vw] border-r-2 rounded-b-[1.7vw] border-white">TEO 040 </th>
                                <th className="p-2 w-[6.3vw] border-r-2 rounded-b-[1.7vw] border-white">TEO 050 </th>
                                <th className="p-2 w-[6.3vw] border-r-2 rounded-b-[1.7vw] border-white">TEO 060 </th>
                                <th className="p-2 w-[6.3vw] border-r-2 rounded-b-[1.7vw] border-white">TEO 080 </th>
                                <th className="p-2 w-[6.3vw] border-r-2 rounded-b-[1.7vw] border-white">TEO 100 </th>
                                <th className="p-2 w-[6.3vw] border-r-2 rounded-b-[1.7vw] border-white">TEO 125 </th>
                                <th className="p-2 w-[6.3vw] border-r-2 rounded-b-[1.7vw] border-white">TEO 150 </th>
                                <th className="p-2 w-[6.3vw] border-r-2 rounded-b-[1.7vw] border-white">TEO 180 </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-[#e7e7e7] text-[1.5vw] text-center">
                                <td className="p-2 pl-[1.7vw]  text-left">CAPACIDAD (KCAL/H)</td>
                                <td>40.000</td>
                                <td>50.000</td>
                                <td>65.000</td>
                                <td>80.000</td>
                                <td>100.000</td>
                                <td>125.000</td>
                                <td>150.000</td>
                                <td>180.000</td>
                        


                            
                            </tr>
                                                        
                            <tr className="bg-[#f7f7f7] text-[1.48vw] text-center">
                                <td className="p-2 pl-[1.7vw]  text-left">POTENCIA DEL QUEMADOR (KCAL/H)</td>
                                <td>50.000</td>
                                <td>70.000</td>
                                <td>80.000</td>
                                <td>90.000</td>
                                <td>110.000</td>
                                <td>150.000</td>
                                <td>180.000</td>
                                <td>200.000</td>

                                
                            
                            </tr>
                            
                            <tr className="bg-[#e7e7e7] text-[1.5vw] text-center">
                                <td className="p-2 pl-[1.7vw]  text-left">CONSUMO DE GAS NATURAL (M3/H)</td>
                                <td>5,4</td>
                                <td>7,5</td>
                                <td>8,6</td>
                                <td>9,6</td>
                                <td>11,8</td>
                                <td>16,1</td>
                                <td>19,4</td>
                                <td>21,5</td>


                            </tr>
                            <tr className="bg-[#f7f7f7] text-[1.5vw] text-center">
                                <td className="p-2 pl-[1.7vw]  text-left">CAUDAL DE AIRE (M3/H)</td>
                                <td>3.600</td>
                                <td>5.400</td>
                                <td>6.300</td>
                                <td>7.000</td>
                                <td>8.700</td>
                                <td>9.600</td>
                                <td>12.000</td>
                                <td>15.000</td>
                            
                            </tr>

                            <tr className="bg-[#e7e7e7] text-[1.5vw] text-center">
                                <td className="p-2 pl-[1.7vw]  text-left">CONTRAPRESÍON (MMCA)</td>
                                <td>25</td>
                                <td>25</td>
                                <td>25</td>
                                <td>25</td>
                                <td>25</td>
                                <td>25</td>
                                <td>25</td>
                                <td>25</td>

                            </tr>

                            <tr className="bg-[#f7f7f7] text-[1.5vw] text-center">
                                <td className="p-2 pl-[1.7vw]  text-left">POTENCIA MOTOR (HP)</td>
                                <td>1</td>
                                <td>1,5</td>
                                <td>2</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>4</td>
                                <td>5,5</td>
                            </tr>

                            <tr className="bg-[#e7e7e7] text-[1.5vw] text-center">
                                <td className="p-2 pl-[1.7vw]  text-left">POTENCIA CONSUMIDA (HP)</td>
                                <td>0,8</td>
                                <td>1,35</td>
                                <td>1,6</td>
                                <td>1,8</td>
                                <td>2,4</td>
                                <td>2,8</td>
                                <td>3,7</td>
                                <td>4</td>
                            </tr>
                            
                            <tr className="bg-[#f7f7f7] text-[1.5vw] text-center">
                                <td className="p-2 pl-[1.7vw]  text-left">CONEXIÓN DE GAS (PULG)</td>
                                <td>1/2</td>
                                <td>3/4</td>
                                <td>3/4</td>
                                <td>3/4</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>

                            <tr className="bg-[#e7e7e7] text-[1.5vw] text-center">
                                <td className="p-2 pl-[1.7vw]  text-left">PESO APROX. SIN QUEMADOR (kg)</td>
                                <td>145</td>
                                <td>225</td>
                                <td>285</td>
                                <td>290</td>
                                <td>350</td>
                                <td>325</td>
                                <td>450</td>
                                <td>450</td>
                            </tr>
                            
                        </tbody>
                    </table>
               
            </section>

            {/* ------------- CONFIGURACIONES  ------------- */}
            <section className="w-full px-[6%] mt-[1vw] ">
                <h1 className="font-nunito text-[#FF7800] text-[3.3vw]">CONFIGURACIONES</h1>
                
                    <div className="w-full ">
                        <Image
                            alt="Home banner 1"
                            className=""
                            radius="none"
                            src="../img/tempomatic/generador_de_aire_caliente/generador_de_aire_caliente_06.png"
                        />
                    </div>
               
            </section>

            {/* -------------BOTON MANUAL ------------- */}
            <section className="w-full px-[6%] mt-10 flex justify-end">
                   
                        {/* <a  className="w-[200px]" href="/soler&palau" target="_top">
                        <Image
                            alt="Home banner 1"
                            className=""
                            radius="none"
                            src="../img/home/homeBanner/2.png"
                            width="100%"
                        />
                        </a> */}
                    
                    <ManualButtonNaranja size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"} link={"../../.pdf"} dwName={"Manual.pdf"}/>
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
                        <h1 className="text-[4.7vw] lg:text-[2.7vw] font-nunito mb-[1vw]">CALEFACCIÓN</h1>
                        <h1 className="text-[#FF7800]">GENERADOR</h1>
                        <h1 className="text-[#FF7800]">DE AIRE</h1>
                        <h1 className="text-[#FF7800]   ">CALIENTE</h1>

                       
                        
                            
                        </div>
                    </div>
                    
                        
                
                </section>
                <section className="w-full px-[3%] -mt-6 flex
                    bg-[url('/svg/ondasTempomaticItemsMobile.svg')] bg-contain lg:bg-fill  bg-[center_bottom_20vw] md:bg-[center_top_0vw] lg:bg-[center_top_6vw] bg-no-repeat
                    ">
                        
                        <div className="w-[100%] ml-[12vw] ">
                        <Image
                                alt="Home banner 1"
                                className=""
                                radius="none"
                                src="../img/tempomatic/generador_de_aire_caliente/generador_de_aire_caliente_01.png"
                                width="100%"
                            />
                        </div>
                        
                       
                </section>
                {/* ------------- PARRAFO ------------- */}
                <section className="w-full px-[6%] text-[#4C4B4B] -mt-0 flex flex-col">
                    <h2 className="text-[5.7vw] lg:text-[2.7vw] mt-[1vw] font-lexend-bold">Equipos para calefaccionar</h2>
                    <h2 className="text-[5.7vw] lg:text-[2.7vw] mt-0 lg:mt-2 font-lexend-bold"><span className="text-[#FF7800]">grandes dimensiones</span>.</h2>
                    <p className="w-full mt-4 font-lexend text-[#4C4B4B] text-[4.3vw] leading-tight">
                        La línea de <span className="text-[#FF7800] font-nunito-bolder">GENERADORES DE AIRE CALIENTE TEMPOMATIC</span> ha sido diseñada para dar 
                        <span className="text-[#FF7800]"> soluciones de </span> por aire caliente a requerimientos de 
                        <span className="text-[#FF7800]"> extrema confiabilidad</span>.
                    </p>
                    <div className=" flex justify-end">
                        <AsesoramietoButton screen={BigScreen ? "xl" : "md"} size={BigScreen ? 40 : 16}
                            link={"https://wa.me/5492236356756?text=Hola.%20Quiero%20más%20información%20sobre%20el%20Generador%20de%20Aire%20Caliente."}/>
                    </div>
                </section>
                
                {/* ------------- DIFERENCIALES ------------- */}
                <section className="w-auto my-auto m    -auto mt-4 px-[%] space-y-4">
                    <Diferencial45Anio size={55} customWith={10} />
                    <DiferenciallMultiposicionTempomatic size={55} customWith={10} />
                    <DiferencialConstruccionRobusta size={55} customWith={10} />
                    <DiferencialConVentiladorSyP size={55} customWith={10} />
                    <DiferencialFabricacionNacional size={55} customWith={10} />
                    <DiferencialAltaConfiabilidad size={55} customWith={10} />
                </section>


                {/* -------------COMPONENTES ------------- */}
                <section className="w-full px-[6%] mt-4 lg:-mt-10 ">
                    <h1 className="font-nunito-bolder text-[#FF7800] text-[7.3vw]">COMPONENTES</h1>
                    <div className="w-full flex flex-col-reverse">
                        <ul className="w-2/ font-nunito space-y-4 mt-0">
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">1</span> INTERCAMBIADOR DE CALOR</h1>
                                <p className="text-[4.3vw] text-midgray">Tubular de tres pasos, construido en chapa de acero soldada eléctricamente. Direccionadores de flujo de aire que mejoran el intercambio térmico con nuevo hogar cónico.</p>
                            </li> 
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">2</span> GABINETE</h1>
                                <p className="text-[4.3vw] text-midgray">Tapas desmontables, revestido en paneles aislantes de lana de vidrio y terminacíon en pintura horneada.</p>
                            </li> 
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">3</span> QUEMADOR</h1>
                                <p className="text-[4.3vw] text-midgray">Tipo monoblock, con altos valores de combustión. Fácil mantenimiento y limpiezo. Funcionamiento con gas natural, envasado o gas oil, totalmente automático con control electrónico.</p>
                            </li> 
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">4</span> MOTOR</h1>
                                <p className="text-[4.3vw] text-midgray">Blindado, normalizado para tensión 3 x 380V - 50Hz.</p>
                            </li> 
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">5</span> SISTEMA ELÉCTRICO</h1>
                                <p className="text-[4.3vw] text-midgray">Compuesto de tablero de protección, instalación eléctrica, control de límite y ventilador con conmutador manual-automático y panel de comando accesible desde el exterior.</p>
                            </li> 
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">6</span> VENTILADOR</h1>
                                <p className="text-[4.3vw] text-midgray">Centrifugo multipalas, balanceado estática y dinámicamente de doble entrada, con transmisión por correas. <br/> Nuevo soporte de grupo ventilador para multiposición.</p>
                            </li>  
                        </ul>
                        <div className="w- pr-[3%] pl-[5vw] mt-2">
                            <Image
                                alt="Home banner 1"
                                className=""
                                radius="none"
                                src="../img/tempomatic/generador_de_aire_caliente/generador_de_aire_caliente_03.png"
                            />
                        </div>
                    </div>
                </section>

                {/* -------------BOTON MANUAL ------------- */}
                <section className="w-full px-[6%] lg:mt-4 flex justify-center">
                        {/* <a  className="w-[120px] mt-4" href="/soler&palau" target="_top">
                        <Image
                            alt="Home banner 1 "
                            className=""
                            radius="none"
                            src="../img/home/homeBanner/2.png"
                            width="100%"
                        />
                        </a> */}
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

