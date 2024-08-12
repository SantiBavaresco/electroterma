import React from "react";
import { MyButton } from "./myButton";
import { Download } from "@/public/svg/download"
interface Props {
    css?: string;
    size?: number;
    screen?: "xs" | "md" | "lg" | "xl" | "sm" | undefined;
    label?: string;
    link?: string;
    dwName?: string;
}

export const ManualButton: React.FC<Props> = ({ css, size, screen, label, link, dwName, ...props}) => {

    const linktomanual = link, dwn = dwName;
    

    const handlePdfDownload = () => {
        const link = document.createElement('a');
        link.href = linktomanual || ""; // Ruta del archivo PDF en la carpeta public
        link.download = dwn || ""; // Nombre con el que se descargará el archivo
        link.click();
      };

    return (
        <>
            <a className={css || ""}>
                <MyButton
                    className="z-10 mt-4 bg-[#EDEDED] font-nunito text-[#4C4B4B] 3xl:ml-32 2xl:text-2xl"
                    radius="full"
                    size={screen}
                    onClick={handlePdfDownload}
                >
                    <div className="absolute rounded-full left-0 z-20 p-3 px-[12px] lg:px-[20px]  shadow-r-xl shadow-[rgba(29,29,27,0.24)] border- border-gray-200 
                        bg-gradient-to-r from-[#EF771CE5] to-[#E80303]
                        group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-[#fe694f]
                        group-active:bg-gradient-to-r group-active:from-[#f37a7ae5] group-active:to-[#FFFFFF]
                    ">  
                        <Download css=" text-white  group-active:text-livered mx-0 lg:mx-0 lg:text-[2.7vw] 2xl:text-[1.9vw]" size={size} /> 
                    </div>
                    <span className="ml-[35px] lg:ml-14 lg:text-xl xl:text-2xl">{label ? label : "Manual" }</span>
                </MyButton>
            </a>

        </>
    )}