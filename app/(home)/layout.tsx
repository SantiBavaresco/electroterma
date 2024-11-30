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

import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";


export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    // themeColor: [
    //     { media: "(prefers-color-scheme: light)", color: "white" },
    //     { media: "(prefers-color-scheme: dark)", color: "black" },
    // ],
    icons: {
        icon: "/electroterma-logo.png",
        shortcut: "electroterma-logo.ico",
        apple: "electroterma-logo.png",
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
        <html lang="en" suppressHydrationWarning style={{scrollbarColor: "#EF771C #ffedd5", }}>
            <head />
            <body
                id="home" accessKey="home"
                className={clsx(
                    "min-h-screen bg-background font-lexend   ",
                    fontSans.variable
                )}
                // style={{scrollbarColor: "#007 #bada55"}}
            >
                <Providers
                    themeProps={{ attribute: "class", defaultTheme: "light" }}
                >
                    <SpeedInsights/> <Analytics/>
                    <GoogleAnalytics gaId="G-BVSRLKEKLX" />

                    <Script id="clarity-script" type="text/javascript" strategy="afterInteractive">
                            {`
                                (function(c,l,a,r,i,t,y){
                                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                                })(window, document, "clarity", "script", "ojjh5gdoug");
                            `}
                    </Script>
                    
                    {/* {<section className="${h-screen w-full flex items-center justify-center overflow-hidden bg-lowgray">
                        <p className=" h-full w-max  py-[45vh] text-xl text-center align-middle">Video para la web</p>
                    </section>} */}

                    {/* <Navbar />  */}

                    <div className="relative flex flex-col h-screen ">
                        <main className="container mx-auto max-w-[100%]">
                            {children}
                        </main>
                        
                       <Footer/>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
