"use client";
import React from "react";
import { StockPermanente } from "@/public/svg/stockPermanente";

interface Props {
    svg?: string;
    text?: string;
	size?: number;
	textSize?: number;
	customWith?: number;
}

export const DiferencialStockPermanente : React.FC<Props> =  ({size, text, textSize, customWith}) => {
	return (
		<>
			<main className="relative pl-4 flex justify-start items-center  w-full">
				<span className=" z-10">
					<StockPermanente size={size || 70}/>
				{/* <svg size={size || 70}/> */}
				</span>
				<p className={`z-0  h-2/3 pl-8 pr-2 md:px-10 py-1 -translate-x-8 
					bg-white bg-opacity-100 border-2 border-livered-title rounded-tr-2xl md:rounded-tr-3xl  
					text-start
					${textSize ?  `text-[${textSize}px]` : "xs:text-[13px] xm:text-[14px] lg:text-2xl " }
					w-full
					`}>

					<span className="w-full px-2 py-1 flex justify-start items-center">{text || "Stock permanente"}</span>
				</p>
				
			</main>
		</>
	);
};