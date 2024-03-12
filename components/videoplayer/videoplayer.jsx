// "use client"
// import React, { useEffect, useRef, useState } from "react";
// // import "./styles.css";

// export default function VideoScrollPlayer() {
//   const videoRef = useRef(null);
//   const scrollSectionRef = useRef(null);
//   const [hasLoaded, setLoaded] = useState(false);

//   useEffect(() => {
//     setLoaded(true);
//     const playbackConst = 500; // Adjust the constant as needed
//     // Use requestAnimationFrame for smooth playback
//     function scrollPlay() {
//       if (videoRef.current) {
//         const frameNumber = window.pageYOffset / playbackConst;
//         videoRef.current.currentTime = frameNumber;
//       }
//       window.requestAnimationFrame(scrollPlay);
//     }

//     window.requestAnimationFrame(scrollPlay);
//   }, []);

//   useEffect(() => {
//     const video = videoRef.current;

//     video.addEventListener("loadedmetadata", () => {
//       const { duration } = video;
//       const playbackConst = 1500;
//       const scrollSection = scrollSectionRef.current;
//       console.log("scrollSection", videoRef.current.duration);
//       if (videoRef?.current) {
//         scrollSection.style.height =
//           Math.floor(duration) * playbackConst + "px";
//       }
//       console.log(duration); // Output: video duration in seconds
//     });

//     return () => {
//       video.removeEventListener("loadedmetadata", () => {});
//     };
//   }, []);

//   return (
//     // <div className="video-container">
//     //   <div ref={scrollSectionRef} className="scroll-section">
//     //     <video ref={videoRef} id="v0" preload="preload">
//     //       <source
//     //         type="video/mp4; codecs='avc1.42E01E, mp4a.40.2'"
//     //         src="../img/solerpalau/tda/SolerPalauVideo1.mkv"
//     //       />
//     //     </video>
//     //   </div>
//     // </div>

// <div className="w-400 h-400 overflow-y-scroll bg-gray-100 rounded-lg">
// <video
//   ref={videoRef}
//   id="v0"
//   preload="preload"
//   className="w-full h-full object-cover"
// >
//   <source
//     type="video/mp4; codecs='avc1.42E01E, mp4a.40.2'"
//     src="../img/solerpalau/tda/SolerPalauVideo1.mkv"
//   />
// </video>
// </div>
//     // <div className="App">
//     //   <div>
//     //     <video ref={videoRef} id="v0" preload="preload">
//     //       <source
//     //         type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
//     //         src="../img/solerpalau/tda/SolerPalauVideo1.mkv"
//     //       ></source>
//     //     </video>
//     //     <div ref={scrollSectionRef} id="scrollSection"></div>
//     //   </div>
//     // </div>
//   );
// }



"use client";
// import React, { useEffect, useRef, useState } from "react";
// import "./styles.css";

// Interface for video data
// interface VideoData {
//     videoRef: React.RefObject<HTMLVideoElement>;
//     scrollSectionRef: React.RefObject<HTMLElement>;
//     playbackConst: number;
//     duration: number;
//   }
  
import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const scrollSectionRef = useRef(null);
  const [hasLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const playbackConst = 500; // Adjust the constant as needed
    // Use requestAnimationFrame for smooth playback
    function scrollPlay() {
      if (videoRef.current) {
        const frameNumber = window.pageYOffset / playbackConst;
        videoRef.current.currentTime = frameNumber;
      }
      window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    video.addEventListener("loadedmetadata", () => {
      const { duration } = video;
      const playbackConst = 500;
      const scrollSection = scrollSectionRef.current;
      console.log("scrollSection", videoRef.current.duration);
      if (videoRef?.current) {
        scrollSection.style.height =
          Math.floor(duration) * playbackConst + "px";
      }
      console.log(duration); // Output: video duration in seconds
    });

    return () => {
      video.removeEventListener("loadedmetadata", () => {});
    };
  }, []);

  return (
    <div className="App">
      <div>
        <video ref={videoRef} id="v0" preload="preload">
          <source
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            src="../img/solerpalau/tda/SolerPalauVideo1.mkv"
          ></source>
        </video>
        <div ref={scrollSectionRef} id="scrollSection"></div>
      </div>
    </div>
  );
}



  // export default function VideoPlayer(): React.ReactElement {
  //   // Use state for loading state
  //   const [hasLoaded, setLoaded] = useState(false);
  
  //   // Define video data using the interface
  //   const videoData: VideoData = {
  //     videoRef: useRef(null),
  //     scrollSectionRef: useRef(null),
  //     playbackConst: 500,
  //     duration: 0,
  //   };
  
  //   // First useEffect for playback and setting scroll height
  //   useEffect(() => {
  //     setLoaded(true);
  
  //     const { videoRef, scrollSectionRef, playbackConst } = videoData;
  
  //     useEffect(() => {
  //       const handleScrollPlay = () => {
  //         if (videoRef.current) { // Check if videoRef.current exists before accessing it
  //           const frameNumber = window.pageYOffset / playbackConst;
  //           videoRef.current.currentTime = frameNumber;
  //           window.requestAnimationFrame(handleScrollPlay);
  //         }
  //       };
    
  //       // Initial call to set video position on mount
  //       handleScrollPlay();
    
  //       // Use event listener with cleanup for performance and clarity
  //       const scrollListener = () => handleScrollPlay();
  //       window.addEventListener('scroll', scrollListener);
    
  //       return () => {
  //         window.removeEventListener('scroll', scrollListener);
  //       };
  //     }, [videoRef.current]); // Dependency on videoRef to ensure correct execution
    
  //   }, [videoData.videoRef.current]);
  
  //   // Second useEffect for setting video height on metadata load
  //   useEffect(() => {
  //     const { videoRef, scrollSectionRef, duration } = videoData;
  
  //     const video = videoRef.current;
  
  //     if (video) {
  //       video.addEventListener("loadedmetadata", () => {
  //         videoData.duration = video.duration;
  
  //         const scrollSection = scrollSectionRef.current;
  //         const playbackConst = 500;
  //         if (scrollSection) {
  //           scrollSection.style.height = `${Math.floor(duration) * playbackConst}px`;
  //         }
  
  //         console.log(duration); // Output: video duration in seconds
  //       });
  //     }
  
  //     // Cleanup function to remove event listener on unmount
  //     return () => {
  //       if (video) {
  //         video.removeEventListener("loadedmetadata", () => {});
  //       }
  //     };
  //   }, [videoData.videoRef.current]);
  
  //   return (
  //     <div className="App overflow-hidden">
  //       <div>
  //         <video ref={videoData.videoRef} id="v0" preload="preload">
  //           <source
  //             type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
  //             src="../img/solerpalau/tda/SolerPalauVideo1.mkv"
  //           />
  //         </video>
  //         <div ref={videoData.scrollSectionRef.current} id="scrollSection"></div>
  //       </div>
  //     </div>
  //   );
  // }
