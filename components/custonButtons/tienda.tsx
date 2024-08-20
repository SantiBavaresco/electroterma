import React from "react";
import { MyButton } from "./myButton";
import { BsWhatsapp } from "react-icons/bs";
import { ShoppingCart } from "@/public/svg/shoppingCart";
interface Props {
    css?: string;
    size?: number;
    screen?: "xs" | "md" | "lg" | "xl" | "xxl" | "sm" | undefined;
    label?: string;
    link?: string;
}

export const TiendaButton: React.FC<Props> = ({ css, size, screen, label, link, ...props}) => {

    return (
        <>
            <a href={link || "https://www.tiendaelectroterma.com.ar/"}
                className={css || ""}
                target="_blank" rel="noopener noreferrer ">
                <MyButton
                    className="z-10 mt-4 bg-[#EDEDED] font-nunito text-[#4C4B4B] 3xl:ml-0 2xl:text-2xl"
                    radius="full"
                    size={screen} 
                    // href="https://www.tiendaelectroterma.com.ar/" target="_blank"
                >
                    <div className={`absolute rounded-full left-0 z-20 p-0   shadow-r-xl shadow-[rgba(29,29,27,0.24)] border- border-gray-200 
                        ${size===15 ? "p-1.5" : " p-3 "} 
                        bg-gradient-to-r from-[#E6EB01] to-[#FFD600]
                        group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-[#fe694f]
                        group-active:bg-gradient-to-r group-active:from-[#f37a7ae5] group-active:to-[#FFFFFF]
                        `}> 
                        <ShoppingCart size={size} css="group-${}active:text-livered p- mx-0 lg:mx-1 lg:text-2xl "/>
                    </div>
                    <span className={`ml-[35px] sm:ml-[35px] lg:ml-14 ${screen==="xxl" && "text-5xl"} ${size===15? "text-[2.0vw] ml-[25px]" : " "} `}>{label ? label : "Tienda Online" }</span>
                </MyButton>
            </a>
        </>
    )}