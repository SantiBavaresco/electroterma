// "use client"
import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "../(all)/providers";
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

import { usePathname } from 'next/navigation'

import clsx from "clsx";
import Footer from "../../components/footer";



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

   

//   const Layout = isHomePage ? HomepageLayout : OtherPagesLayout;
    // const pathname = usePathname()

    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                id="home" accessKey="home"
                className={clsx(
                    "min-h-screen bg-background font-lexend   ",
                    fontSans.variable
                )}
            >
                <Providers
                    themeProps={{ attribute: "class", defaultTheme: "light" }}
                >
                    <SpeedInsights/> <Analytics/>
                    
                    {/* {<section className="${h-screen w-full flex items-center justify-center overflow-hidden bg-lowgray">
                        <p className=" h-full w-max  py-[45vh] text-xl text-center align-middle">Video para la web</p>
                    </section>} */}

                    {/* <Navbar />  */}

                    <div className="relative flex flex-col h-screen">
                        <main className="container mx-auto max-w-full">
                            {children}
                        </main>
                        
                       <Footer/>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
