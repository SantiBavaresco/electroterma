import React from "react";
import { MyButton } from "./myButton";

import { EscribinosMail } from "@/public/svg/escribinosMail";
interface Props {
    css?: string;
    size?: number;
    screen?: "xs" | "md" | "lg" | "xl" | "xxl" | "sm" | undefined;
    label?: string;
    link?: string;
}

export const EscribinosButton: React.FC<Props> = ({ css, size, screen, label, link, ...props}) => {

    const handleEmailClick = () => {
        const email = 'info@electroterma.com.ar';
        const subject = 'Consulta sobre equipamiento';
        const body = 'Hola! Me gustaria hacer una consulta sobre equipamiento de Electroterma';
    
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    
        // window.location.href = mailtoLink;
        window.open(mailtoLink, '_blank');
    };

    return (
        <>
            <a className={css || ""}>
            <MyButton
                className="z-10 mt-4 bg-[#EDEDED] min-w-[] font-nunito text-[#4C4B4B] 3xl:ml-0 2xl:text-2xl"
                radius="full"
                size={screen}
                onClick={handleEmailClick} target="_blank"
            >
                <div className={`absolute rounded-full left-0 z-20 p-0   shadow-r-xl shadow-[rgba(29,29,27,0.24)] border- border-gray-200
                     ${size===15 ? " p-1.5" : " p-3 "} 
                    bg-gradient-to-r from-[#FF994B] to-[#F46900]
                    group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-[#E80303]
                    group-active:bg-gradient-to-r group-active:from-[#f37a7ae5] group-active:to-[#FFFFFF]
                    `}> 
                    <EscribinosMail size={size} css="group-active:text-livered p- mx-0 lg:mx-1 lg:text-2xl"/>
                    {/* <svg width="42" height="38" viewBox="0 0 52 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.36448 4.04718L25.4053 16.0887C25.7792 16.2836 26.2248 16.2836 26.5987 16.0887L49.6395 4.04718C50.3754 3.66131 50.5743 2.67078 50.0015 2.07009C50.0015 2.07009 49.9935 2.06214 49.9896 2.05816C49.365 1.40576 48.5058 1 47.5669 1H4.43703C3.49424 1 2.63498 1.40576 2.01043 2.05816C2.01043 2.05816 2.00247 2.06611 1.99849 2.07009C1.42565 2.67078 1.62456 3.66131 2.3605 4.04718H2.36448ZM49.1184 8.88845L26.5947 20.6555C26.2208 20.8504 25.7752 20.8504 25.4013 20.6555L2.88162 8.88845C2.02634 8.43894 1 9.06349 1 10.0302V32.7726C1 33.7592 1.38587 34.6582 2.01043 35.3066C2.63498 35.959 3.49026 36.3648 4.43703 36.3648H47.563C48.5058 36.3648 49.365 35.959 49.9896 35.3066C50.6141 34.6542 51 33.7592 51 32.7726V10.0302C51 9.06349 49.9736 8.44291 49.1184 8.88845Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                    </svg> */}

                        {/* <IoMailOutline className=" text-white  group-active:text-livered p- mx-1 lg:mx-2 lg:text-[2vw]" />  */}
                </div>
                <span className={`ml-[24px] xm:ml-[28px] sm:ml-[35px] lg:ml-14 
                    mr-[12px] xm:mr-[14px] sm:mr-[17px] lg:mr-0
                    ${screen==="xxl" && "text-5xl"} ${size===15? "text-[2.0vw] ml-[25px]" : " "} `}>{label ? label : "Escribinos" }</span>
            </MyButton>
            </a>
        </>
    )}