import {extendVariants, Button} from "@nextui-org/react";

export const MyButton = extendVariants(Button, {  
    variants: {    
      size: {      
        xs: "px-2 min-w-12 h-6 text-tiny gap-1 rounded-full",      
        md: "px-4 min-w-20 h-10 text-small gap-2 rounded-full",      
        xl: "px-10 min-w-32 h-16 text-xl gap-6 rounded-full", // <- new size variant
        xxl: "px-20 min-w-42 h-[92px] text-4xl gap-10 rounded-full",
      },  
    },  
    defaultVariants: { 
      size: "xl",  // <- set new size variant as default
    },
  });