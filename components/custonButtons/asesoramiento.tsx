
import React from "react";
import { MyButton } from "./myButton";
import { BsWhatsapp } from "react-icons/bs";
interface Props {
    css?: string;
    size?: number;
    screen?: "xs" | "md" | "lg" | "xl" | "sm" | undefined;
    label?: string;
    link?: string;
}

export const AsesoramietoButton: React.FC<Props> = ({ css, size, screen, label, link, ...props}) => {

    return (
        <>
            <a href={link || "https://wa.me/5492236356756?text=Hola,%20visite%20tu%20pagina%20web%20y%20me%20gustaria%20mas%20informacion." }
                className={css || ""}
                target="_blank" rel="noopener noreferrer">
                    <MyButton
                        className="z-10 mt-4 bg-[#EDEDED] font-nunito text-[#4C4B4B] 3xl:ml-0 2xl:text-2xl "
                        radius="full"
                        size={screen} 
                        href="https://wa.me/5492236356756?text=Hola,%20visite%20tu%20pagina%20web%20y%20me%20gustaria%20mas%20informacion." target="_blank"
                    >
                        <div className="absolute rounded-full left-0 z-20 p-3   shadow-r-xl shadow-[rgba(29,29,27,0.24)] border- border-gray-200 
                            bg-gradient-to-r from-[#78E933] to-[#5C9104]
                            group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-[#fe694f]
                            group-active:bg-gradient-to-r group-active:from-[#f37a7ae5] group-active:to-[#FFFFFF]
                        "> 
                            <BsWhatsapp className=" text-white font-nunito  group-active:text-livered p- mx-1  lg:mx-2 lg:text-[2.7vw] 2xl:text-[1.9vw]" /> 
                        </div>
                        <span className="ml-[35px] lg:ml-14">{label ? label : "Asesoramiento" }</span>
                    </MyButton>
            </a>
        </>
    )}