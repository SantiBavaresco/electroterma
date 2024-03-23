"use client"
import { title } from "@/components/primitives";
import React, { useRef, useEffect } from 'react';
// import { useEffect, useState } from "react";
import "./styles1.css";

export default function TempomaticPage( ) {
	const videoRef = useRef(null);
  	const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;

//     const video = videoRef.current;

//     if (video && section) {
//       const scroll = () => {
//         const distance = window.scrollY - section?.offsetTop;
//         const total = section?.clientHeight - window.innerHeight;

//         let percentage = distance / total;
//         percentage = Math.max(0, percentage);
//         percentage = Math.min(percentage, 1);

//         // Use requestAnimationFrame for smoother playback on mobile
//         requestAnimationFrame(() => {
//           if (video?.duration > 0) {
//             video?.currentTime = video.duration * percentage;
//           }
//         });
//       };

//       scroll();
//       window.addEventListener('scroll', scroll);

//       return () => window.removeEventListener('scroll', scroll);
//     }
//   }, [videoRef, sectionRef]);

	useEffect(() => {
        // Cargar el archivo JS después del renderizado
        // myScript();
        require("./scrubbing1");

        // Devolver una función de limpieza
        return () => {
            // Cualquier limpieza que se necesite al desmontar el componente
        };
    }, []);
	return (

			<section>
				<canvas id="hero-lightpass" className="mb-16"/>
			</section>

		// <div> <h1>Tempomatic</h1></div>
		// <section ref={sectionRef} class="vid" id="video-ventilador" className="">
		// <div class="holder">

		// 	<video
		// 		ref={videoRef}
		// 		// type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
		// 		playsinline
		// 		muted
		// 		loop
		// 		autoplay="autoplay"
		// 		autobuffer
		// 		// controls
		// 		preload="auto"
		// 		id="video"
		// 	>
		// 		<source 
		// 		type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' 
		// 		src="../img/solerpalau/tda/SolerPalauVideo1.mkv" />
		   
		// 	</video>


		// </div>
		// </section>



		// <div>
		// 	 <div className="intro">
        //         <h1>The New Dev Ed Pro</h1>
        //         <video  type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' src="../img/solerpalau/tda/SolerPalauVideo1.mkv"></video>
        //     </div>
        //     <section>
        //         <h1>REVOLUTIONARY</h1>
        //     </section>
		// 	{/* <script src="scrubbing1.js"></script> */}
		// </div>
	);
}
