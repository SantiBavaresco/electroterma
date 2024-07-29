import React from "react";
interface Props {
    css?: string; 
    size?: number;
    height?: number; 
    width?: number; 
}
export const Download: React.FC<Props> = ({ css, size, height, width, ...props }) => {
    return (
        <svg
            className={css}
            width={size || width || 54}
            height={size || height || 41}
            viewBox="0 0 44 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* <svg width="44" height="41" viewBox="0 0 44 41" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
<path d="M2 39H42" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 2V30M22 30L34 21.8333M22 30L10 21.8333" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    );
};
