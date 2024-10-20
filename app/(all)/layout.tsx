// "use client"
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

import { usePathname } from 'next/navigation'

import clsx from "clsx";
import Footer from "../../components/footer";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'
import Head from 'next/head';
// import { GoogleAnalytics } from "nextjs-google-analytics";


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

    // const measurementId = 'G-X8EBB5PW7Y';
    // const ga= GoogleAnalytics(measurementId);

    return (
        <html lang="es" suppressHydrationWarning>
            <Head>
                <script src="/gtag.js" async/>
            </Head>
            <body   
                id="home" accessKey="home"
                className={clsx(
                    "min-h-screen bg-background font-lexend   ",
                    fontSans.variable
                )}
            >

                
            {/* <GoogleAnalytics gaId='G-X8EBB5PW7Y' /> */}
            {/* <GoogleAnalytics  gaMeasurementId="G-X8EBB5PW7Y"/> */}
            

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


                            <Script id="clarity-script" type="text/javascript" strategy="afterInteractive">
                            {`
                                (function(c,l,a,r,i,t,y){
                                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                                })(window, document, "clarity", "script", "ojjh5gdoug");
                            `}
                            </Script>

                            
                        </main>
                        
                       <Footer/>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
