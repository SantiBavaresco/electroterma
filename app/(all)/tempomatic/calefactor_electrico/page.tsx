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



// import ScrollVideoPlayer from "@/components/videoplayer/scrollVideo";
// import VideoScrollPlayer from "@/components/videoplayer/videoplayer";
interface ItemsNavbar {
    key: string;
    label: string[];
    labelShort: string;
    img: string;
    href: string;
}

export default function CalefactorElectricoPage() {

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
                    src="../img/tempomatic/calefactor_electrico/calefactor_electrico-Banner.png"
                    width="100%"
                />
            </section>
            {/* ------------- Tempomatic logo ------------- */}
            <section className="w-1/2    lg:w-1/3 px-5 lg:px-[5.6%] mt-4 mr-auto">
                <Image
                    alt="Home banner 1"
                    className=""
                    radius="none"
                    src="../img/tempomatic/calefactor_electrico/tempomatic-Logo.jpg"
                    width="100%"
                />
            </section>  

            {BigScreen ?
            <>
            {/* ------------- WEB----------- */}

            <section className="w-full px-[3%] mt-[4vw] mr-auto flex flex-col lg:flex-row">
            {/* ------------- Unidad Manejadora de aire ------------- */}
                
                <div className="flex w-full lg:w-[60%]">
                    <div className="flex w-[3%] mr-[1.5%]">
                        <VinietaNaranjaSVG css="mt-[60%] h-[30px] w-[25px] md:h-[50px] md:h-[30px] lg:h-[45px] lg:w-[35px]"/>
                    </div>
                    <div className="w-full mr-auto text-[#4C4B4B] text-[10.5vw] lg:text-[5.5vw] font-nunito-bolder leading-none">
                        <h1 className="text-[4.7vw] lg:text-[2.7vw] font-nunito mb-[1vw]">CALEFACCIÓN</h1>
                        <h1 className="text-[#FF7800]">CALEFACTOR</h1>
                        <h1 className="text-[#FF7800]   ">ELÉCTRICO</h1>

                        <h2 className="text-[4.7vw] lg:text-[2.7vw] mt-[1vw] font-lexend-bold">Solución a las necesidades de</h2>
                        <h2 className="text-[4.7vw] lg:text-[2.7vw] mt-[1vw] font-lexend-bold">calefacción por aire caliente de </h2>
                        <h2 className="text-[4.7vw] lg:text-[2.7vw] mt-1 lg:mt-0 font-lexend-bold"><span className="text-[#FF7800]">tipo eléctricas.</span></h2>
                        
                    </div>
                </div>
                
                    <div className="flex w-full lg:w-1/2 lg:-mt-24">
                        <Image
                            alt="Home banner 1"
                            className=""
                            radius="none"
                            src="../img/tempomatic/calefactor_electrico/calefactor_electrico_01.png"
                            width="100%"
                        />
                    </div>
                    
                
            </section>

            <section className="w-full px-[6%] -mt-10 flex">
            {/* -------------PARRAFO CON BOTON ------------- */}

                <p className="w-3/4 font-lexend text-[#4C4B4B] text-[1.8vw] leading-none">
                    {" "}
                </p>
                <div className="w-1/4 flex justify-end">
                    <AsesoramietoButton screen={BigScreen ? "xl" : "md"} size={BigScreen ? 40 : 16}
                        link={"https://wa.me/5492236356756?text=Hola.%20Quiero%20más%20información%20sobre%20el%20Calefactor%20Eléctrico."}/>
                    </div>
            </section> 

            <section className="w-full px-[3%] -mt-10 flex
            bg-[url('/svg/ondasTempomaticItems.svg')] bg-fill  bg-[center_top_vw] md:bg-[center_top_0vw] lg:bg-[center_top_6vw] bg-no-repeat
            ">
            {/* -------------IMG con diferenciales ------------- */}

                <div className="w-[45%]">
                <Image
                        alt="Home banner 1"
                        className=""
                        radius="none"
                        src="../img/tempomatic/calefactor_electrico/calefactor_electrico_02.png"
                        width="100%"
                    />
                </div>

                <div className="xl:w-[45%] 2xl:w-auto my-auto ml-auto pr-[2%] space-y-8 ">
                    <Diferencial15Anio size={75} customWith={10} />
                    <DiferencialUnicosEnElMercado size={75} customWith={10} />
                    <DiferencialAltaConfiabilidad size={75} customWith={10} />
                    <DiferencialConVentiladorSyP size={75} customWith={10} />
                    <DiferencialElementosOpcionales size={75} customWith={10} />
                </div>
            </section> 
            {/* -------------COMPONENTES ------------- */}
            <section className="w-full px-[6%] lg:mt-10 ">
                <h1 className="font-nunito-bolder text-[#FF7800] text-[3.3vw]">COMPONENTES</h1>
                <div className="w-full flex">
                    <ul className="w-2/5 font-nunito space-y-8 mt-10">
                        <li>
                            <h1 className="h-[10%] text-[2.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">1</span> RESISTENCIAS</h1>
                            <p className="text-[1.3vw] text-midgray">Construcción indrustrial, blindadas y aletadas.</p>
                        </li> 
                        <li>
                            <h1 className="h-[10%] text-[2.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">2</span> SISTEMAS DE SEGURIDAD</h1>
                            <p className="text-[1.3vw] text-midgray">Termostato límite para prcotección ante falta de caudal de aire mínimo.</p>
                        </li> 
                        <li>
                            <h1 className="h-[10%] text-[2.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">3</span> GABINETE</h1>
                            <p className="text-[1.3vw] text-midgray">Tapas desmontables, revestido en paneles aislantes de lana de vidrio y terminacíon en pintura horneada.</p>
                        </li> 
                        <li>
                            <h1 className="h-[10%] text-[2.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">4</span> SISTEMA ELÉCTRICO</h1>
                            <p className="text-[1.3vw] text-midgray">Compuesto de tablero de fuerza y comando, instalción eléctrica y panel de comando.</p>
                        </li> 
                        <li>
                            <h1 className="h-[10%] text-[2.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">5</span> VENTILADOR</h1>
                            <p className="text-[1.3vw] text-midgray">Centrifugo multipalas, balanceado estática y dinámicamente de doble entrada, con transmisión por correas.</p>
                        </li> 
                        <li>
                            <h1 className="h-[10%] text-[2.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">6</span> MOTOR</h1>
                            <p className="text-[1.3vw] text-midgray">Blindado, normalizado para tensión 3 x 380V - 50Hz.</p>
                        </li>   

                    </ul>
                    <div className="w-3/5 pr-[3%]">
                        <Image
                            alt="Home banner 1"
                            className=""
                            radius="none"
                            src="../img/tempomatic/calefactor_electrico/calefactor_electrico_03.png"
                        />
                    </div>
                </div>
            </section>

            {/* -------------INFO TECNICA ------------- */}
            <section className="w-full px-[6%] mt-[1vw] ">
                <h1 className="font-nunito-bolder text-[#FF7800] text-[3.3vw]">INFO TÉCNICA</h1>
                
                    <div className="w-3/5 mx-auto ">
                        <Image
                            alt="Home banner 1"
                            className=""
                            radius="none"
                            src="../img/tempomatic/calefactor_electrico/calefactor_electrico_04.png"
                        />
                    </div>
               
            </section>

            {/* -------------MEDIDAS ------------- */}
            <section className="w-full px-[6%] mt-16 ">
                <h1 className="font-nunito text-[#FF7800] text-[3.3vw]">MEDIDAS</h1>
                <h1 className="font-nunito text-[#FF7800] text-[1.7vw] text-right w-4/5" >TOMA DE AIRE INTECCIÓN DE AIRE</h1>

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

                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-[#f7f7f7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">ET 15</td>
                                <td>555</td>
                                <td>735</td>
                                <td>1300</td>
                                <td>415</td>
                                <td>595</td>
                                <td>425</td>
                                <td>480</td>
                                <td>35</td>

                            </tr>
                            <tr className="bg-[#e7e7e7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">ET 18</td>
                                <td>610</td>
                                <td>825</td>
                                <td>1315</td>
                                <td>475</td>
                                <td>595</td>
                                <td>395</td>
                                <td>450</td>
                                <td>35</td>

                            </tr>
                            <tr className="bg-[#f7f7f7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">ET 27</td>
                                <td>610</td>
                                <td>825</td>
                                <td>1315</td>
                                <td>475</td>
                                <td>595</td>
                                <td>395</td>
                                <td>450</td>
                                <td>35</td>

                            </tr>
                            <tr className="bg-[#e7e7e7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">ET 40</td>
                                <td>645</td>
                                <td>835</td>
                                <td>1350</td>
                                <td>475</td>
                                <td>655</td>
                                <td>395</td>
                                <td>495</td>
                                <td>35</td>

                            </tr>
                            <tr className="bg-[#f7f7f7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">ET 54</td>
                                <td>1135</td>
                                <td>840</td>
                                <td>1335</td>
                                <td>1015</td>
                                <td>715</td>
                                <td>395</td>
                                <td>1000</td>
                                <td>35</td>

                            </tr>
                            
                        </tbody>
                    </table>
                    <h1 className="font-nunito text-[#FF7800] text-[1.7vw] text-right w-4/5">MEDIDAS EN MILÍMETROS</h1>
               
            </section>

            
            {/* -------------CARACTERÍSTICAS ------------- */}
            <section className="w-full px-[6%] mt-10 ">
                <h1 className="font-nunito text-[#FF7800] text-[3.3vw]">CARACTERÍSTICAS</h1>
                {/* <h1 className="font-nunito text-[#FF7800] text-[2.3vw] text-right">TOMA DE AIRE INTECCIÓN DE AIRE</h1> */}

                    <table className="table-auto font-nunito text-[1.5vw] w-4/5">
                        <thead >
                            <tr className="bg-[#FF7800] text-white ">
                                <th className="p-2 text-left px-[1.7vw] pr-auto border-r-2 rounded-b-[1.7vw] border-white">CARACTERISTICAS/MODELOS</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">ET 15</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">ET 18</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">ET 27</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">ET 40</th>
                                <th className="p-2 w-[10.5vw] border-r-2 rounded-b-[1.7vw] border-white">ET 54</th>
                            
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-[#f7f7f7]  text-center">
                                <td className="p-2 pl-[1.7vw] text-left">Capacidad de calor (KCAL/H)</td>
                                <td>12900</td>
                                <td>15500</td>
                                <td>23220</td>
                                <td>34400</td>
                                <td>46430</td>
                                
                            </tr>
                            <tr className="bg-[#e7e7e7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">Caudal (M3/H)</td>
                                <td>2400</td>
                                <td>3000</td>
                                <td>3600</td>
                                <td>5400</td>
                                <td>7200</td>
                            
                            </tr>
                            <tr className="bg-[#f7f7f7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">Contrapresión (MMCA)</td>
                                <td>25</td>
                                <td>25</td>
                                <td>25</td>
                                <td>25</td>
                                <td>25</td>
                                
                            
                            </tr>
                            
                            <tr className="bg-[#e7e7e7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">Potencia del motor (HP)</td>
                                <td>0,5</td>
                                <td>0,75</td>
                                <td>1</td>
                                <td>1,5</td>
                                <td>1,5</td>

                            </tr>
                            <tr className="bg-[#f7f7f7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">Consumo (AMPER)</td>
                                <td>22,8</td>
                                <td>27,3</td>
                                <td>41</td>
                                <td>61,6</td>
                                <td>82,1</td>
                                
                               
                            </tr>
                            <tr className="bg-[#e7e7e7] text-center">
                                <td className="p-2 pl-[1.7vw] text-left">Peso aproximado (KG)</td>
                                <td>100</td>
                                <td>110</td>
                                <td>112</td>
                                <td>124</td>
                                <td>170</td>
                                
                                
                               
                            </tr>
                        </tbody>
                    </table>
               
            </section>

            {/* -------------CONFIGURACION ------------- */}
            <section className="w-full px-[6%] mt-16 ">
                <h1 className="font-nunito text-[#FF7800] text-[3.3vw]">CONFIGURACIONES</h1>
                
                    <div className="w-4/5 mx-auto ">
                        <Image
                            alt="Home banner 1"
                            className=""
                            radius="none"
                            src="../img/tempomatic/calefactor_electrico/calefactor_electrico_05.png"
                        />
                    </div>
            
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
                    
                    <ManualButtonNaranja size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"} link={"../../.pdf"} dwName={"Manual.pdf"}/>
            </section>
            </>
            :
            <>
    {/* -------------------------- MOBILE------------------------ */}

                <section >
                    <div className="flex w-full lg:w-[60%]">
                        <div className="flex w-[3%] mr-[1.5%]">
                            <VinietaNaranjaSVG css="-mt-[60%] h-[30px] w-[25px] md:h-[50px] md:h-[30px] lg:h-[45px] lg:w-[35px]"/>
                        </div>
                        <div className="w-full mr-auto text-[#4C4B4B] text-[10.5vw] lg:text-[5.5vw] font-nunito-bolder leading-none">
                        <h1 className="text-[4.7vw] lg:text-[2.7vw] font-nunito mb-[1vw]">CALEFACCIÓN</h1>
                        <h1 className="text-[#FF7800]">CALEFACTOR</h1>
                        <h1 className="text-[#FF7800]   ">ELÉCTRICO</h1>

                        
                            
                        </div>
                    </div>
                    
                        
                
                </section>
                <section className="w-full px-[3%] -mt-4 flex
                    bg-[url('/svg/ondasTempomaticItemsMobile.svg')] bg-contain lg:bg-fill  bg-[center_bottom_20vw] md:bg-[center_top_0vw] lg:bg-[center_top_6vw] bg-no-repeat
                    ">
                        
                        <div className="w-1/2 ml-[0vw] mr-6">
                        <Image
                                alt="Home banner 1"
                                className=""
                                radius="none"
                                src="../img/tempomatic/calefactor_electrico/calefactor_electrico_01-mobile.png"
                                width="100%"
                            />
                        </div>
                        <p className="w-1/2 text-[4.7vw] text-[#4C4B4B] font-lexend-bold my-auto">
                            Solución a las necesidades de calefacción por aire caliente de <span className="text-[#FF7800]">tipo eléctricas</span>.
                        
                        </p>
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
                                link={"https://wa.me/5492236356756?text=Hola.%20Quiero%20más%20información%20sobre%20el%20Calefactor%20Eléctrico."}/>
                    </div>
                    

                </section> 

                <section className="w-auto my-auto m    -auto mt-4 px-[%] space-y-4">
                    <Diferencial15Anio size={55} customWith={10} />
                    <DiferencialUnicosEnElMercado size={55} customWith={10} />
                    <DiferencialAltaConfiabilidad size={55} customWith={10} />
                    <DiferencialConVentiladorSyP size={55} customWith={10} />
                    <DiferencialElementosOpcionales size={55} customWith={10} />
                </section>


                {/* -------------COMPONENTES ------------- */}
                <section className="w-full px-[6%] mt-4 lg:-mt-10 ">
                    <h1 className="font-nunito-bolder text-[#FF7800] text-[7.3vw]">COMPONENTES</h1>
                    <div className="w-full flex flex-col-reverse">
                        <ul className="w-2/ font-nunito space-y-4 mt-0">
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">1</span> RESISTENCIAS</h1>
                                <p className="text-[4.3vw] text-midgray">Construcción indrustrial, blindadas y aletadas.</p>
                            </li> 
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">2</span> SISTEMAS DE SEGURIDAD</h1>
                                <p className="text-[4.3vw] text-midgray">Termostato límite para prcotección ante falta de caudal de aire mínimo.</p>
                            </li> 
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">3</span> GABINETE</h1>
                                <p className="text-4.3vw] text-midgray">Tapas desmontables, revestido en paneles aislantes de lana de vidrio y terminacíon en pintura horneada.</p>
                            </li> 
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">4</span> SISTEMA ELÉCTRICO</h1>
                                <p className="text-[4.3vw] text-midgray">Compuesto de tablero de fuerza y comando, instalción eléctrica y panel de comando.</p>
                            </li> 
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">5</span> VENTILADOR</h1>
                                <p className="text-[4.3vw] text-midgray">Centrifugo multipalas, balanceado estática y dinámicamente de doble entrada, con transmisión por correas.</p>
                            </li> 
                            <li>
                                <h1 className="h-[10%] text-[5.3vw] text-[#FF7800]"><span className="bg-[#FF7800] text-white px-[2.5%] rounded-full">6</span> MOTOR</h1>
                                <p className="text-[4.3vw] text-midgray">Blindado, normalizado para tensión 3 x 380V - 50Hz.</p>
                            </li>  
                        </ul>
                        <div className="w- pr-[3%] mt-2">
                            <Image
                                alt="Home banner 1"
                                className=""
                                radius="none"
                                src="../img/tempomatic/calefactor_electrico/calefactor_electrico_03.png"
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

