import React, {useEffect, useRef} from "react";
import {motion, useInView, useAnimation} from "framer-motion"

interface Props{
    children: JSX.Element;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;

}

export const Reveal: React.FC<Props> = ({ children, width = "fit-content", delay, duration  }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { root: useRef(null), amount: "some" },  );


    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(()=>{
        // if (isInView) {
        //     mainControls.start({ 
        //       opacity: 1, 
        //       y: 0, 
        //       transition: { duration:duration, delay:delay, ease: "easeInOut", } 
        //     });
        //     slideControls.start("visible");
        //   } else {
        //     mainControls.start({ 
        //       opacity: 0, 
        //       y: 50, 
        //       transition: { duration: 0.3, ease: "easeInOut" } 
        //     }); 
        //     slideControls.start("hidden");
        //   }
        if(isInView){
            mainControls.start("visible");
            slideControls.start("visible");
        }
        else {
            mainControls.start({ 
                opacity: 0, 
                translateY:"10%", 
                transition: { duration: 0.3, ease: "easeInOut" } 
                }); 
            slideControls.start("hidden");
        }
    },[isInView])

    return(
        // <section ref={ref}>
        //     <span
        //         style={{
        //         transform: isInView ? "none" : "translateX(-200px)",
        //         opacity: isInView ? 1 : 0,
        //         transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        //         }}
        //     >
        //         {children}
        //     </span>
        // </section>
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden"}}>
            <motion.div
                className=""
                variants={{
                    hidden: {opacity:0,  scale: 1,  translateY:"10%", },
                    visible: {opacity:1,  scale: 1, translateY:"0%"},
                }}
                exit="hidden"
                initial="hidden"
                animate={mainControls}
                transition={{duration:duration , delay:delay, ease:"easeIn"}}

                // animate={slideControls}
                // transition={{duration: 1.0, ease:"easeIn"}}
                // style={{
                //     position:"absolute",
                //     top:4,
                //     bottom:4,
                //     left:0,
                //     right:0,
                //     // background:"#ff1100",
                //     zIndex: 20,
                // }}
            >
               
                {children}

            </motion.div>

        </div>
    )
}