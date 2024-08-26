
import React from "react";
import { MyButton } from "./myButton";
import { BsWhatsapp } from "react-icons/bs";
import { WhatsappLogo } from "@/public/svg/whatsappLogo";
interface Props {
    css?: string;
    size?: number;
    screen?: "xs" | "md" | "lg" | "xl" | "xxl" | "sm" | undefined;
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
                        href="https://wa.me/5492236356756?text=Hola,%20visité%20tu%20página%20web%20y%20me%20gustaría%20más%20información." target="_blank"
                    >
                        <div className={`absolute rounded-full left-0 z-20 
                            ${size===15 ? " p-2" : size===10 ? " p-1.5" : " p-3 "} 
                            $}   
                            shadow-r-xl shadow-[rgba(29,29,27,0.24)] border- border-gray-200 
                            bg-gradient-to-r from-[#78E933] to-[#5C9104]
                            group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-[#fe694f]
                            group-active:bg-gradient-to-r group-active:from-[#f37a7ae5] group-active:to-[#FFFFFF]
                        `}> 
                            <WhatsappLogo size={size} css="group-${}active:text-livered p- mx-0 lg:mx-1 lg:text-2xl "/>
                            {/* <BsWhatsapp className={` text-white font-nunito  group-active:text-livered p- mx-1  lg:mx-2  
                                ${size===15? "text-[3.8vw]" : "text-[4vw] "} 
                                ${size===10? "text-[2.6vw]" : "text-[6vw] "} lg:text-[2.7vw] 2xl:text-[2.1vw] `} />  */}
                        </div>
                        <span className={`ml-[32px] sm:ml-[35px] lg:ml-14 ${screen==="xxl" && "text-5xl"} ${size===15? "text-[2.0vw] ml-[24px]" : " "} `}
                        >{label ? label : "Asesoramiento" }</span>
                    </MyButton>
            </a>
        </>
    )}