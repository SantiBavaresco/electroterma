"use client"
import { useEffect, useState } from "react";
import { title } from "@/components/primitives";
import { Image } from "@nextui-org/image";


export default function ZilaPage() {
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
		<main className="flex flex-col h-full items-center justify-center gap-4 pb-4 md:pb-10 
         overflow-hidden">

            {/* ------------- Banner------------- */}
            <section className="w-full px-[0%] mt-4">
                <Image
                    alt="Home banner 1"
                    className="rounded-[44-px]"
                    radius="none"
                    src={`../img/zila/${BigScreen ? "webFija" : "mobileFija"}.png`}
                    width="100%"
                />
            </section>
		</main>
	);
}

// "use client"
// import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
// import { useCallback, useEffect, useMemo, useRef } from 'react';

// function App() {
// 	const ref = useRef<HTMLCanvasElement>(null);

// 	const { scrollYProgress } = useScroll({
// 		target: ref,
// 		offset: ['center end', 'start start'],
// 	});

// 	const images = useMemo(() => {
// 		const loadedImages: HTMLImageElement[] = [];

// 		for (let i = 1; i <= 511; i++) {
// 			const img = new Image();
// 			img.src = `/img/solerpalau/rls/video/${i}.webp`;
// 			loadedImages.push(img);
// 		}

// 		return loadedImages;
// 	}, []);

// 	const render = useCallback(
// 		(index: number) => {
// 			if (images[index - 1]) {
// 				ref.current?.getContext('2d')?.drawImage(images[index - 1], 0, 0);
// 			}
// 		},
// 		[images]
// 	);

// 	const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 511]);

// 	useMotionValueEvent(currentIndex, 'change', (latest) => {
// 		render(Number(latest.toFixed()));
// 	});

// 	useEffect(() => {
// 		render(1);
// 	}, [render]);

// 	return (
// 		<div
// 			style={{
// 				// height: '6000px',
// 				// backgroundColor: 'black',
// 				display: 'flex',
// 				justifyContent: 'center',
// 				alignItems: 'center',
// 				// position: "sticky",
// 			}}
// 		>
// 			<div style={{ height: '3000px' }} />
// 			<canvas width={1000} height={1000} ref={ref} />
// 		</div>
// 	);
// }


// export default App;