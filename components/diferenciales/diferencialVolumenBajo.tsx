"use client";
import React from "react";
import { VolumenBajo } from "@/public/svg/volumenBajo";

interface Props {
    svg?: string;
    text?: string;
	size?: number;
}

export const DiferencialVolumenBajo : React.FC<Props> =  ({size, text}) => {
	return (
		<>
			<main className="relative pl-4 flex justify-start items-center m-auto max-w-full">
				<span className=" z-10">
					<VolumenBajo size={size || 70}/>
				{/* <svg size={size || 70}/> */}
				</span>
				<p className="z-0 w-[190px] -translate-x-8 bg-white bg-opacity-50 border-2 border-livered-title rounded-tr-2xl md:rounded-tr-3xl  
					text-start text-sm lg:text-2xl h-2/3 pl-8 pr-2 md:px-10 py-1 lg:w-[400px] ">

					<span>{text || "Niveles Bajos de volumen"}</span>
				</p>
				
			</main>
		</>
	);
};