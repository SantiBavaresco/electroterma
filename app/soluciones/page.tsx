import { title } from "@/components/primitives";
import { Image } from "@nextui-org/image";

export default function SolucionesHVACPage() {
	return (
		<main className="flex flex-col items-center justify-center gap-1 md:gap-4 pb-4 md:pb-10 overflow-hidden ">
		{/* ------------- VIDEO INTRO ------------- */}

		<section className="w-full flex flex-row">
			<div className="w-full h-full">
					<Image
						alt="Banner 1"
						className=""
						radius="none"
						src="../../img/soluciones/imgBanner/SolucionesBanner1.png"
						width="100%"
					/>
				</div>
			
		</section>

		<section className="w-full mx-[3%] grid grid-cols-3 grid-rows-2 gap-4 p-3">
			<div className="bg-gray-200 rounded-lg">Content 1</div>
			<div className="bg-gray-200 rounded-lg">Content 2</div>
			<div className="bg-gray-200 rounded-lg">Content 3</div>
			<div className="bg-gray-200 rounded-lg">Content 4</div>
			<div className="bg-gray-200 rounded-lg">Content 5</div>
			<div className="bg-gray-200 rounded-lg">Content 6</div>
		</section>

		<section className="">
			<h1>escribinos</h1>
		</section>

		</main>
	);
}
