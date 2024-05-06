"use client";
import React from "react";
import { StockPermanente } from "@/public/svg/stockPermanente";

// interface Props {
//     svg?: string;
//     text?: string;
// 	size?: number;

// }

export const DiferencialStockPermanente = () => {
	return (
		<>
			<main className="relative flex justify-start items-center m-auto max-w-full">
				<span className=" z-10">
					<StockPermanente size={70}/>
				{/* <svg size={size || 70}/> */}
				</span>
				<p className="z-0 -translate-x-8 bg-white bg-opacity-50 border-2 border-livered-title rounded-tr-3xl text-start text-xl lg:text-2xl h-2/3 px-10 py-1 lg:w-[400px]">
					<h1>Stock permanente</h1>
				</p>
				
			</main>
		</>
	);
};