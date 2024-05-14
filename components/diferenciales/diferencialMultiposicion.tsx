"use client";
import React from "react";
import { VersatilidadAplicacion } from "@/public/svg/versatilidadAplicacion";

interface Props {
    svg?: string;
    text?: string;
	size?: number;

}

export const DiferencialMultiposicion : React.FC<Props> =  ({size, text}) => {
	return (
		<>
			<main className="relative pl-4  flex flex-grow justify-start items-center  ">
				<span className="z-10 ">
					<VersatilidadAplicacion size={size || 70}/>
				{/* <svg size={size || 70}/> */}
				</span>
				<p className="z-0  h-2/3 pl-8 pr-2 md:px-10 py-1 -translate-x-8 
					bg-white bg-opacity-50 border-2 border-livered-title rounded-tr-2xl md:rounded-tr-3xl  
					text-start xs:text-[9px] xm:text-[12px] lg:text-2xl  
					xs:w-[140px]
					xm:w-[170px]
					lg:w-[400px] ">

					<span>{text ||"Multiposición"}</span>
				</p>
				
			</main>
		</>
	);
};