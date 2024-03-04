"use client";
// import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
// import { Tabs, Tab } from "@nextui-org/tabs";
import React from "react";
import InfoTecnica from "./infotecnica";
import { DotSVG } from "@/public/svg/dot";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

export default function Caracteristics() {
    const [selected, setSelected] = React.useState("descripcion");



    return (
        <div className="flex  flex-col  w-[900px] mt-10">
            
        <Tabs aria-label="tabs" items={tabs}
            variant="solid"
            size={"lg"}
            radius={"lg"}
            // color={"warning"}
            classNames={{
                // tabList: "gap-6 w-full rounded-none p-0 border-b border-divider",
                cursor: "w-full bg-orange-500",
                tab: "px-6 h-12 font-bold",
                tabContent: "group-data-[selected=true]:text-white ",
            }}
        >
                {(item) => (
                <Tab key={item.id} title={item.label}>
                    <Card>
                    <CardBody>
                        {item.content}
                    </CardBody>
                    </Card>  
                </Tab>
                )}
            </Tabs>
         
        </div>
    );

}

const tabs = [
    {
        id: "descripcion",
        label: "Descripción",
        content: 
            <p>
                La línea de{" "}
                <a className="text-orange-500 font-bold">
                    VENTILADORES CENTRIFUGOS MULTIPALA S&P
                </a>
                (motor acople directo) ha sido desarrollada para dar
                solución a necesidades de ventilación general de aire limpio
                y donde se requieren niveles medios de contrapresión.
                <br /> <br />
                Son equipos de alto rendimiento energético, de&nbsp;
                <a className="text-orange-500 font-semibold">
                    excelente calidad constructiva
                </a>{" "}
                y balanceados estática y dinámicamente. Fabricados
                íntegramente en chapa galvanizada, con turbinas de aluminio
                y chapa de acero al carbono.
            </p>,
        
    },
    {
        id: "componentes",
        label: "Componentes",
        content: 
            <div className="flex flex-row">
                <div>
                    <span className="text-orange-500 font-bold">
                        <span className="bg-orange-500 text-white px-2">
                            1
                        </span>
                        ENVOLVENTE
                    </span>
                    <p className="pl-8">
                        Fabricado íntegramente en chapa galvanizada,
                        <br />
                        posee máxima resistencia a la corrosión.
                    </p>
                    <br />
                    <span className="text-orange-500 font-bold">
                        <span className="bg-orange-500 text-white px-2">
                            2
                        </span>{" "}
                        TURBINA
                    </span>
                    <p className="pl-8">
                        Multipala de chapa galvanizada,
                        <br />
                        balanceada estática y dinámicamente.
                    </p>
                    <br />
                    <span className="text-orange-500 font-bold">
                        <span className="bg-orange-500 text-white px-2">
                            3
                        </span>
                        ENCAUSE
                    </span>
                    <p className="pl-8">
                        De diseño aerodinámico, clave para el
                        <br />
                        rendimiento y para el funcionamiento.
                    </p>
                    <br />
                    <span className="text-orange-500 font-bold">
                        <span className="bg-orange-500 text-white px-2">
                            4
                        </span>{" "}
                        MOTOR
                    </span>
                    <p className="pl-8">Normalizado de primera calidad.</p>
                </div>
                <div>
                    <Image
                        className=""
                        src="../img/solerpalau/tda/SolerPalauTda2.png"
                        width={400}
                        loading="lazy"
                    />
                </div>
            </div>,
        
    },
    {
        id: "infotecnica",
        label: "Info Tecnica",
        content:
            <div>
                <InfoTecnica/>
            </div>,
    },
    {
        id: "aplicacion",
        label: "Aplicacion",
        content: 
            <div>
                <p>
                    Los{" "}
                    <a className="text-orange-500 font-bold">
                        VENTILADORES CENTRIFUGOS MULTIPALA S&P
                    </a>{" "}
                    son utilizados como sistemas de inyección y extracción
                    de aire limpio para:
                </p>

                <ul className="pl-4 pt-2 font-bold">
                    <ol className="flex items-center pl-2">
                        <DotSVG color="#f97316" />
                        <p className="pl-2">
                            Presurización escaleras evacuación incendio
                        </p>
                    </ol>
                    <ol className="flex items-center pl-2">
                        <DotSVG color="#f97316" />
                        <p className="pl-2">Extracción de vestuarios</p>
                    </ol>
                    <ol className="flex items-center pl-2">
                        <DotSVG color="#f97316" />
                        <p className="pl-2">
                            Extracción en hospitales, quirófanos
                        </p>
                    </ol>
                    <ol className="flex items-center pl-2">
                        <DotSVG color="#f97316" />
                        <p className="pl-2">
                            Inyección de aire exterior cocinas
                        </p>
                    </ol>
                    <ol className="flex items-center pl-2">
                        <DotSVG color="#f97316" />
                        <p className="pl-2">
                            Extracción de estacionamientos
                        </p>
                    </ol>
                </ul>
            </div>
        ,
    },
];
