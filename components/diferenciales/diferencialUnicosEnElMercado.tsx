"use client";
import React from "react";

import { D15Anios } from "@/public/svg/D15Anios";
import { UnicosEnElMercado } from "@/public/svg/unicosEnElMercado";


interface Props {
    svg?: string;
    text?: string;
	size?: number;
	textSize?: number;
	customWith?: number;
}

export const DiferencialUnicosEnElMercado : React.FC<Props> =  ({size, text, textSize, customWith}) => {
	return (
		<>
			<main className="relative pl-4 flex justify-start items-center  w-full">
				<span className=" z-10">

				<UnicosEnElMercado size={size || 70}/>	
						
				{/* <svg size={size || 70}/> */}
				</span>
				<p className={`z-0   h-2/3 pl-8 pr-1 md:px-10 py-1 -translate-x-8 
					bg-white bg-opacity-100 border-2 border-[#FF7800] rounded-tr-2xl md:rounded-tr-3xl  
					text-center
					${textSize ?  `text-[${textSize}px]` : "xs:text-[12px] xm:text-[14px] lg:text-2xl " }
					w-[110%]
					
					`}>

					<span className="w-full pl-1 py-0 flex justify-start items-center">{text || "Únicos en el mercado"}</span>
				</p>
				
			</main>
		</>
	);
};