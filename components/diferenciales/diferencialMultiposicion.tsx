"use client";
import React from "react";
import { VersatilidadAplicacion } from "@/public/svg/versatilidadAplicacion";

// interface Props {
//     svg?: string;
//     text?: string;
// 	size?: number;

// }

export const DiferencialMultiposicion = () => {
	return (
		<>
			<main className="relative flex flex-grow justify-start items-center  ">
				<span className="z-10 ">
					<VersatilidadAplicacion size={70}/>
				{/* <svg size={size || 70}/> */}
				</span>
				<p className="z-0 -translate-x-8 bg-white bg-opacity-50 border-2 border-livered-title text-start rounded-tr-3xl text-xl lg:text-2xl h-2/3 px-10 py-1 lg:w-[400px]">
					<h1>Multiposición</h1>
				</p>
				
			</main>
		</>
	);
};