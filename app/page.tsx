"use client";
import { Link } from "@nextui-org/link";
import Lottie from "lottie-react";
import animationData from "../public/lottie/bulding-page.json";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

// import ScrollVideoPlayer from "@/components/videoplayer/scrollVideo";
import VideoScrollPlayer from "@/components/videoplayer/videoplayer";


export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 pb-4 md:pb-10">
            <section className="flex flex-col items-center justify-center gap-4 py-2 md:py-4">
                <div className="inline-block max-w-2xl text-center justify-center ">
                    <h1 className={title()}>Lo Sentimos &nbsp;</h1>
                    <br />
                    <h2 className="w-3/4 mx-auto">
                        Estamos desarrollando una página web de catálogo online,
                        intuitiva y atractiva, que permite a los usuarios
                        explorar productos con facilidad.
                    </h2>
                </div>
                <div className="w-[200px] lg:w-[350px]">
                    <Lottie
                        animationData={animationData}
                        // speed={2}
                    />
                </div>

                <div className="flex gap-3">
                    <Link
                        isExternal
                        // href={siteConfig.links.docs}
                        href={"https://electroterma.com.ar/"}
                        className={buttonStyles({
                            color: "warning",
                            radius: "full",
                            variant: "shadow",
                        })}
                    >
                        Pagina Electroterma
                    </Link>
                    <Link
                        isExternal
                        className={buttonStyles({
                            variant: "bordered",
                            radius: "full",
                        })}
                        // href={siteConfig.links.github}
                        href={"https://github.com/SantiBavaresco/electroterma"}
                    >
                        <GithubIcon size={20} />
                        GitHub
                    </Link>
                </div>

                <div className=" -top-8">
                    <div className=" flex flex-col lg:flex-row justify-center items-center">
                        <h1>No dude en contactaser via mail:&nbsp;</h1>
                        <Snippet
                            hideSymbol
                            variant="solid"
                            color="warning"
                            tooltipProps={{
                                color: "foreground",
                                content: "Copiar Email",
                                disableAnimation: true,
                                placement: "right",
                                closeDelay: 0,
                            }}
                        >
                            info@electroterma.com.ar
                        </Snippet>
                    </div>
                </div>
				<div className="text-xl gap-4">
					<div>
						<p className="font-nunito">Texto en nunito, NUNITO REGULAR</p>
						<p className="font-nunito-bold">Texto en nunito-bold, NUNUTITO BOLD</p>
					</div>
					<hr/>
					<div>
						<p className="font-lexend">Texto en lexend, LEXEND REGULAR</p>
						<p className="font-lexend-bold">Texto en lexend-bold, LEXEND BOLD</p>
					</div>
				</div>
            </section>
        </section>
        // 	<div className={'h-[5000px]'}>
        // 		<VideoScrollPlayer/>
        // </div>
    );
}
