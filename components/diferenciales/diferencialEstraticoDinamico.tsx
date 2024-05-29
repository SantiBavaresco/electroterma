"use client";
import React from "react";

import { EstaticoDinamico } from "@/public/svg/estaticoDinamico";

interface Props {
    svg?: string;
    text?: string;
	size?: number;
	textSize?: number;
	customWith?: number;
}

export const DiferencialEstaticoDinamico : React.FC<Props> =  ({size, text, textSize, customWith}) => {
	return (
		<>
			<main className="relative pl-4 mb-14 lg:mb-20 flex justify-start items-center  w-full">
				<span className="z-10 ">
					
					<EstaticoDinamico size={size || 70}/>
				{/* <svg size={size || 70}/> 
				
				 }
				*/}
				</span>
				<p className={`z-0  pb-10 h-2/3 pl-8 pr-2 md:px-10 py-1 -translate-x-8 
					bg-livered-title bg-opacity-100 border-2 border-livered-title rounded-tr-2xl md:rounded-tr-3xl  
					text-start
					
					${textSize ?  `text-[${textSize}px]` : "xs:text-[13px] xm:text-[14px] lg:text-2xl " }
					w-full
					`}>
					<span className="w-full px-2 py-1   flex justify-start items-center text-white ">{text || "Equilibrio estático y dinámico"}</span>
					<span className="absolute indent-10 lg:indent-20 xs:text-[10px] xm:text-[10px] lg:text-lg top-16 left-0.5 bg-white w-full h-[180%]">

						<h5>Niveles de velocidad de vibración en</h5>
						<h5>funcionamiento inferiores a 6 mm/s; -</h5>

						<h5>Alcanzar rendimientos de hasta el 70%</h5>

					</span>
					
				</p>
			
				
			</main>
		</>
	);
};