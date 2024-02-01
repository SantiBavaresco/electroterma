"use client";
import Lottie from 'lottie-react';
import animationData from "../public/img/redWaves.json"

export const LottieWave = ()=> {
    return (
        // <div className="absolute rotate-12 -top-80 left-[260px] z-20 w-3/4">
            <Lottie animationData={animationData} 
                // speed={2}
            />

        // </div>
    )} 

export const LottieWave1 = ()=> {
        return (
            // <div className=" absolute rotate-12 -top-80 left-[260px] z-10 w-3/4">
                <Lottie animationData={animationData} 
                    // speed={2}
                />
    
            // </div>
        )} 