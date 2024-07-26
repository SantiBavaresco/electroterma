import {extendVariants, Button} from "@nextui-org/react";

export const MyButton = extendVariants(Button, {  
    variants: {    
      size: {      
        xs: "px-2 min-w-12 h-6 text-tiny gap-1 rounded-small",      
        md: "px-4 min-w-20 h-10 text-small gap-2 rounded-small",      
        xl: "px-10 min-w-32 h-16 text-xl gap-6 rounded-full", // <- new size variant
      },  
    },  
    defaultVariants: { 
      size: "xl",  // <- set new size variant as default
    },
  });