"use client";
import React from "react";
import { VolumenBajo } from "@/public/svg/volumenBajo";

// interface Props {
//     svg?: string;
//     text?: string;
// 	size?: number;

// }

export const DiferencialVolumenBajo = () => {
	return (
		<>
			<main className="relative flex justify-start items-center m-auto max-w-full">
				<span className=" z-10">
					<VolumenBajo size={70}/>
				{/* <svg size={size || 70}/> */}
				</span>
				<p className="z-0 -translate-x-8 border-2 border-livered-title rounded-tr-3xl text-start text-2xl h-2/3 pl-10 pr-6 py-1 lg:w-[400px]">
					<h1>Niveles Bajos de volumen</h1>
				</p>
				
			</main>
		</>
	);
};