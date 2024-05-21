"use client";
import React from "react";
import { MaterialGalvanizado } from "@/public/svg/materialGalvanizado";

interface Props {
    svg?: string;
    text?: string;
	size?: number;
	textSize?: number;
	customWith?: number;
}

export const DiferencialMaterialGalvanizado : React.FC<Props> =  ({size, text, textSize, customWith}) => {
	return (
		<>
			<main className="relative pl-4 flex justify-start items-center m-auto max-w-[full]">
				<span className="z-10 ">
					<MaterialGalvanizado size={size || 70}/>
				{/* <svg size={size || 70}/> */}
				</span>
				<p className={`z-0  h-2/3 pl-8 pr-2 md:px-10 py-1 -translate-x-8 
					bg-white bg-opacity-50 border-2 border-livered-title rounded-tr-2xl md:rounded-tr-3xl  
					text-start 
					${textSize ?  `text-[${textSize}px]` : "xs:text-[10px] xm:text-[12px] lg:text-2xl " }
					${customWith ?  `w-[${customWith}px]` : "xs:w-[150px] xm:w-[170px] lg:w-[400px] " }
					`}>
					<span>{text || "Material Galvanizado"}</span>
				</p>
				
			</main>
		</>
	);
};