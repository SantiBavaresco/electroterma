"use client";
import React from "react";

import { AmbienteCorrosivo } from "@/public/svg/ambienteCorrosivo";


interface Props {
    svg?: string;
    text?: string;
	size?: number;
	textSize?: number;
	customWith?: number;
}

export const DiferencialAmbienteCorrosivo : React.FC<Props> =  ({size, text, textSize, customWith}) => {
	return (
		<>
			<main className="relative pl-4 flex justify-start items-center  w-full">
				<span className="z-10 ">
					<AmbienteCorrosivo size={size || 70}/>
					
					
					
				{/* <svg size={size || 70}/> 
				
				 }
				*/}
				</span>
				<p className={`z-0  h-2/3 pl-8 pr-2 md:px-10 py-1 -translate-x-8 
					bg-white bg-opacity-100 border-2 border-livered-title rounded-tr-2xl md:rounded-tr-3xl  
					text-start
					
					${textSize ?  `text-[${textSize}px]` : "xs:text-[13px] xm:text-[14px] lg:text-2xl " }
					w-full
					`}>
					<span className="w-full px-2 py-1  flex justify-start items-center">{text || "No se deteriora en ambientes corrosivos y no generan condensación"}</span>
				</p>
				
			</main>
		</>
	);
};