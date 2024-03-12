"use client";
import { title } from "@/components/primitives";
import VideoScrollPlayer from "@/components/videoplayer/videoplayer";

export default function NosotrosPage() {
	return (
		<div className="h-full">
			{/* <h1 className={title()}>Nosotros</h1> */}
				<div className={'h-[6000px] '}>
					<VideoScrollPlayer/>
				</div>
		</div>
	);
}
