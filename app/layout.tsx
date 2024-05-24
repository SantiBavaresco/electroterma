import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar/navbar";
import { Link } from "@nextui-org/link";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { Image } from "@nextui-org/image";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"


import clsx from "clsx";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    icons: {
        icon: "https://electroterma.com.ar/wp-content/uploads/2020/06/cropped-imageonline-co-transparentimage-2-512x465.png",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={clsx(
                    "min-h-screen bg-background font-lexend   ",
                    fontSans.variable
                )}
            >
                <Providers
                    themeProps={{ attribute: "class", defaultTheme: "light" }}
                >
                    <SpeedInsights/> <Analytics/>
                    <Navbar />

                    <div className="relative flex flex-col h-screen">
                        <main className="container mx-auto max-w-full">
                            {children}
                        </main>
                        
                        <footer className="w-full flex flex-col text-xs md:text-base items-center justify-center py-3 bg-[#D9D9D9]">
                            <div className="flex flex-col justify-center items-center ">
                            <span className="font-lexeng-bolder font-bold">Calle 5 entre 6 y 8</span>
                            <span className="font-lexeng-bold">Parque Industrial Mar del Plata - Batán</span>
                            <div className="my-2">
                                <span className="flex items-center justify-center font-lexeng-bolder font-bold text-center">223-4649999</span>
                                <span className="flex flex-row items-center justify-center ">
									<IoMailOutline className="mx-2 text-orange-600 text-xl" /> 
									info@electroterma.com.ar
								</span>
                            </div>
                            <div className="flex flex-row gap-4 items-center justify-center text-orange-600 text-2xl">

                                <Link  isExternal  href="https://www.linkedin.com/company/electroterma/" title="Linkedin de Electroterma">
                                    <CiLinkedin className="text-orange-600 hover:text-blue-700 text-2xl" href=""/> 
                                </Link>
                                <Link  isExternal  href="https://www.instagram.com/electroterma/" title="Instragram de Electroterma">
                                    <IoLogoInstagram className="text-orange-600 hover:text-pink-600 text-2xl" />
                                </Link>
                                <Link  isExternal  href="https://www.facebook.com/Electroterma/" title="Facebook de Electroterma">
                                    <FiFacebook className="text-orange-600 hover:text-blue-500 text-2xl" /> </Link>
                                <Link  isExternal  href="https://www.youtube.com/@electroterma849" title="Youtube de Electroterma">
                                    <AiOutlineYoutube className="text-orange-600 hover:text-livered text-2xl"/></Link>
                            </div>
                            <Link
                                isExternal
                                className="flex items-center gap-1 text-current pt-2"
                                href="https://santiagobavaresco.ar"
                                title="Bavaresco Santiago Portfolio"
                            >
                                <p className="text-primary text-sm">
                                    Bavaresco Santiago
                                </p>
                                 <span className="text-default-600 text-sm">
                                    © 2024 
                                </span>
                                
                               
                                
                            </Link>
                            </div>
                            <div className=" -mt-20 absolute right-0 md:right-24 w-[60px] md:w-[90px]">
                                <Link href="/">
                                    <Image
                                    src="../electroterma-logo.png"
                                    // height={50}
                                    
                                    width="100%"
                                    alt="hola"
                                    />
                                </Link>
                            </div>
                        </footer>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
