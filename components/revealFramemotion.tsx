import React, {useEffect, useRef} from "react";
import {motion, useInView, useAnimation} from "framer-motion"

interface Props{
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export const Reveal: React.FC<Props> = ({ children, width = "fit-content" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true,} );

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
            slideControls.start("visible");
        }
    },[isInView])

    return(
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden"}}>
            <motion.div
                className=""
                variants={{
                    hidden: {opacity:0.1,  scale: 0},
                    visible: {opacity:1,  scale: 1},
                }}
                exit="hidden"
                initial="hidden"
                animate={mainControls}
                transition={{duration: 1.0, delay:0.5}}
            >
               
                {children}

            </motion.div>

            <motion.div
                variants={{
                    hidden: {left:0},
                    visible: {left:"100%"},
                }}
                initial="hidden"
                animate={slideControls}
                transition={{duration: 1.0, ease:"easeIn"}}
                style={{
                    position:"absolute",
                    top:4,
                    bottom:4,
                    left:0,
                    right:0,
                    background:"#ff1100",
                    zIndex: 20,
                }}
            />
                
        </div>
    )
}