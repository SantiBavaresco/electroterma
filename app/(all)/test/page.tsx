import { title } from "@/components/primitives";
import { Image } from "@nextui-org/image";

export default function TestPage() {
	return (
		<main className="w-full overflow-hidden">
			{/* <h1 className={title()}>IMG FIJA</h1>
			<section className="w-full ">
				<Image  
                    className="mt-10"
                    alt="Otam Logo"
                    src="../../img/home/homeBanner.png"
                    width="100%"
                />

			</section>
			 */}

			<h1 className={title()}>TEST 3</h1>
			<section className="relative w-full h-[22vw] bg-gray-100 ">
				<div className="absolute w-[35%] top-[10.5vw] -left-[5.0vw]">
					<Image  
						className="mt-0"
						alt="Linea Izquierda"
						radius="none"
						src="../../img/home/homeBanner/r1.png"
						width="100%"
					/>
				</div>
				<div className="absolute w-[30%] top-[2.7vw]  -right-[5.0vw]">
					<Image  
						className="mt-0"
						alt="Linea Derecha"
						radius="none"
						src="../../img/home/homeBanner/r2.png"
						width="100%"
					/>
				</div>


				<span className="flex flex-4 items-center justify-center w-[80%] mt-[0vw] h-full gap-[1vw] mx-auto">
					<div
						// className="w-[20vw]" 
						className="group w-1/4 relative 
						transition-opacity duration-1000 erase-in-out
						" 

					// className="absolute w-[30%] top-[20%]  -right-[5vw]"
					>
						<div className="opacity-60 group-hover:opacity-100  transition duration-500 ease-in-out 
						">
							<Image  
								className=" mt-0"
								alt="Background Tempomatic"
								radius="none"
								src="../../img/home/homeBanner/bgTempomatic.png"
								width="100%"
							/>
						
						<div className="opacity-100 group-hover:opacity-0 transition duration-1000 ease-in-out">
							<Image  
								className="absolute w-[75%] -top-[0vw] left-[13%] -translate-y-[470%] "
								alt="Tempomatic Logo"
								radius="none"
								src="../../img/home/homeBanner/tempomatic.png"
								width="100%"
							/>
						</div>
						</div>
					</div>
					<div
						// className="w-[13.5vw]" 
						className="w-1/6 relative opacity-70 hover:opacity-100
						transition-all duration-100 
						"  
					// className="absolute w-[30%] top-[20%]  -right-[5vw]"
					>
						<div className="opacity-60 hover:opacity-80">
						<Image  
							className="mt-0"
							alt="Background S&P"
							radius="none"
							src="../../img/home/homeBanner/bgSyp.png"
							width="100%"
						/>
						</div>
						<Image  
							className="absolute w-[70%] -top-[0vw] left-[16%] -translate-y-[250%] opacity-100"
							alt="S&P Logo"
							radius="none"
							src="../../img/home/homeBanner/syp.png"
							width="100%"
						/>

					</div>
					<div
						// className="w-[13.5vw]"
						className="w-1/6 relative opacity-70 hover:opacity-100
						transition-all duration-100 
						"    
					// className="absolute w-[30%] top-[20%]  -right-[5vw]"
					>
						<div className="opacity-60 hover:opacity-80">
						<Image  
							className="mt-0"
							alt="Background DTI"
							radius="none"
							src="../../img/home/homeBanner/bgDti.png"
							width="100%"
						/></div>
						<Image  
							className="absolute w-[70%] -top-[0vw] left-[16%] -translate-y-[185%] opacity-100"
							alt="S&P Logo"
							radius="none"
							src="../../img/home/homeBanner/dti.png"
							width="100%"
						/>
					</div>
					<div
						// className="w-[20vw]" 
						className="w-1/4 relative opacity-70 hover:opacity-100
						transition-all duration-100 
						"   
					// className="absolute w-[30%] top-[20%]  -right-[5vw]"
					>
						<div className="opacity-60 hover:opacity-80">
						<Image  
							className="mt-0"
							alt="Background Zila"
							radius="none"
							src="../../img/home/homeBanner/bgZila.png"
							width="100%"
						/></div>
						<Image  
							className="absolute w-[37%] -top-[0vw] left-[30%] -translate-y-[142%] opacity-100"
							alt="S&P Logo"
							radius="none"
							src="../../img/home/homeBanner/zila.png"
							width="100%"
						/>
					</div>
				</span>
				

			</section>





			<section>
				<div
						// className="w-[20vw]" 
						className="group w-1/4 relative 
						duration-1000
						" 
						

					// className="absolute w-[30%] top-[20%]  -right-[5vw]"
					>
						<div className="transition ease-in-out  opacity-60 group-hover:opacity-100
						">
							<Image  
							
								className=" mt-0 "
								alt="Background Tempomatic"
								radius="none"
								src="../../img/home/homeBanner/bgTempomatic.png"
								width="100%"
							/>
						
						<div className="" >
							<Image  
								
								className="absolute w-[75%] -top-[0vw] left-[13%] -translate-y-[470%] transition ease-in-out  opacity-100 group-hover:opacity-0"
								alt="Tempomatic Logo"
								radius="none"
								src="../../img/home/homeBanner/tempomatic.png"
								width="100%"
							/>
						</div>
						</div>
					</div>
			</section>
		</main>
	);
}

