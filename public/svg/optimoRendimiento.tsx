import React from "react";
interface Props {
    css?: string;
    size?: number;
    height?: number;
    width?: number;
}
export const OptimoRendimiento: React.FC<Props> = ({
    css,
    size,
    height,
    width,
    ...props
}) => {
    return (
        <svg
            className={css}
            width={size || width || 100}
            height={size || height || 100}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <ellipse cx="49.5" cy="49.5" rx="49.5" ry="49.5" fill="#FF7800" />

            <path
                d="M17.2524 65.7386L44.8657 49.7827L56.8502 61.2104L78.6904 39.8687"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
            />
            <path
                d="M63.5122 36.2612L78.8529 38.1154C79.3914 38.1785 79.8297 38.5947 79.9299 39.1371L82.7476 54.3613"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
            />
        </svg>
    );
};
