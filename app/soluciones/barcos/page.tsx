"use client"
import { title } from "@/components/primitives";
import { solucionesGeneralData } from "@/public/data/soluciones/solucionesGeneralData";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { useEffect, useState } from "react";
import { IoMailOutline } from "react-icons/io5";

export default function SolucionesBarcosPage() {

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

	return (
		<main className="flex flex-col mx-[3%] mt-4 items-center justify-center gap-1 md:gap-4 pb-4 md:pb-10 overflow-hidden ">
		{/* ------------- VIDEO INTRO ------------- */}

		<section className="w-full flex flex-row">
			<div className="w-full h-full">
					<Image
						alt="Banner 1"
						className=""
						radius="none"
						src="../../img/soluciones/barcos/SolucionesBarcosBanner1.png"
						width="100%"
					/>
				</div>
			
		</section>

		<section className="w-full grid grid-cols-[25%_75%]">
			<section className="w-full h-64 bg-red-500">

			</section>
			<article className="w-full h-64 bg-green-500">
				<div className=" mx-4 mt-6 bg-[#EF771C]">
					<h1 className="pt-2 pl-10 pb-2 text-white font-lexend-bold text-[2.5vw]"> SOLUCIÓN CLIMATIZACIÓN DE BARCOS</h1>
				</div>
			</article>

		</section>

		

		</main>
	);
}
