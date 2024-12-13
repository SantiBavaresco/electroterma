"use client"
import { title } from "@/components/primitives";
import { solucionesGeneralData } from "@/public/data/soluciones/solucionesGeneralData";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { useEffect, useState } from "react";
import { IoMailOutline } from "react-icons/io5";

export default function SolucionesHVACPage() {

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


	const [BigScreen, setBigScreen] = useState(false);

    useEffect(() => {
        const handler = (e:any) => setBigScreen(e.matches);
        const mediaQuery = window.matchMedia('(min-width: 768px)');

        mediaQuery.addEventListener('change', handler);
        setBigScreen(mediaQuery.matches);

        return () => {
        mediaQuery.removeEventListener('change', handler);
        };
    }, []);

	return (
		<main className="flex flex-col mt-4 items-center justify-center gap-1 md:gap-4 pb-4 md:pb-10 overflow-hidden ">
		{/* ------------- BANNER ------------- */}

		<section className="w-full flex flex-row">
			<div className="w-full h-full">
					<Image
						alt="Banner 1"
						className=""
						radius="none"
						src={`../../img/soluciones/home/SolucionesBanner1${BigScreen ? "" : "Mobile"}.webp`}
						width="100%"
					/>
				</div>
			
		</section>

		{/* ------------- SOLUCIONES ------------- */}
		{BigScreen ? 
			<> 		{/* ------------- WEB ------------- */}
			<section className="w-full px-[3%] grid grid-cols-3 grid-rows-2 gap-4 p-3">
				{solucionesGeneralData.pageData.products.map((item, index)=>(
					<button key={index} className="w-full min-h-full flex flex-col items-center p-4 gap-4 bg-[#F7F6F6] hover:bg-[#EF771C] hover:translate-x-[1px] hover:translate-y-[2px] border-1 rounded-[36px]"
						onClick={()=>(window.open(item.href, '_top'))}
					>
						<div className="w-full bg-lowgray min-h-[300p-x]  text-white rounded-[20px] shadow-xl">
							<Image
								alt="product"
								key={index}
								className="rounded-t-[20px] min-w-full h-full"
								radius="none"
								src={item.imgUrl}
								width="100%"
							/>
						</div>
						<div className="w-full min-h-[80px] h-full rounded-b-[20px] bg-white text-[#EF771C] shadow-xl">
							<p className="w-4/5 h-full   m-auto py-2 text-full font-lexend-bold text-center align-middle text-[1.9vw]">
								<span className="font-lexend text-lowgray">{item.lable}</span> <br/>
								{item.title}

							</p>
							
						</div>
						{/* <div>
							
							<Button
								
									className="  z-10 bg-[#EF771C] px-10 font-nunito text-white text-xl 2xl:text-2xl shadow-xl"
									radius="full"
									size={BigScreen ? "lg" : "lg"}
									onClick={()=>(window.open(item.href, '_top'))}
								>
									Saber más
							</Button>
						</div> */}

					</button>
				))

				}
			</section>
			</>
		:
			<> 		{/* ------------- MOBILE ------------- */}
			<section className="px-[5%] w-full p-2  bg-white h-full flex flex-col gap-3">
				{solucionesGeneralData.pageData.products.map((item, index)=>(
					<div  key={index} className="w-full h- bg-[#D9D9D9] rounded-[12px]" onClick={()=>(window.open(item.href, '_top'))}>
						<div className="flex ">
							<div className="w-[35%] rounded-l-[12px] bg-[#D9D9D9]">
								<Image
									alt="product"
									key={index}
									className="rounded-[12px] p-1 min-w-full h-full"
									radius="none"
									src={item.imgUrl}
									width="100%"
									// height="100%"
								/>
							</div>
							<div className="w-[62%] my-1 p-1 mr-1 rounded-[12px] bg-white py-auto flex items-center">
								<h1 className=" font-lexend-bold text-[#EF771C] text-[3.5vw] ">{item.title}</h1>
							</div>
							<div className="w-[8%] rounded-r-[12px] flex items-center justify-center bg-mustard">
								<h1 className="text-white">+</h1>
							</div>
						</div>
					</div>
				))}
			</section>
			</>
		}
        {/* ------------- Consultanos ------------- */}
		<section className="w-full max-h-[50%] z-20 py-0 font-size overflow-hidden">
                <div className="bg-[#EF771C]  md:w-98% py-3  flex justify-center gap-[10vw] md:gap-20 items-center rounded-tr-[24px] rounded-bl-[24px]">
                    <div className="pl-[25px] md:ml-24 ">
                        <h2 className="w-[40v] text-white text-xs xm:text-base md:text-2xl 2xl:text-3xl font-nunito-bold">
                            {" "}
                            ¿Cuál es tu necesidad?{" "}
                        </h2>
                    </div>
                    <div className="mr-0 md:mr-12  ">
                        <Button size={BigScreen ? "lg" : "sm"} radius="full" className="2xl:text-2xl lg:px-8 mr-[23px] lg:mr-0 shadow-2xl" onClick={handleEmailClick}>
                            <div className="absolute rounded-full left-0 z-20 p-3   shadow-r-xl shadow-[rgba(29,29,27,0.24)] border- border-gray-200 
                                    bg-gradient-to-r from-[#EF771C] to-[#F4A86F]
                                    group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-[#fe694f]
                                    group-active:bg-gradient-to-r group-active:from-[#f37a7ae5] group-active:to-[#FFFFFF]
                                "> 
                                    {/* <MailSvg css=" group-active:text-livered text-white lg:text-3xl" size={40}/> */}
                                    <IoMailOutline className=" group-active:text-livered text-white lg:text-4xl"/>
                                    </div>
                                <span className="ml-[30px] lg:ml-10">Escribinos</span>
                        </Button>
                    </div>
                </div>
            </section>

		</main>
	);
}
