import React from "react";
interface Props {
    css?: string;
    size?: number;
    height?: number;
    width?: number;
    color?: string;
}
export const VinietaRojaSVG: React.FC<Props> = ({
    css,
    size,
    height,
    width,
    color,
    ...props
}) => {
    return (
        <svg
            className={css}
            width={size || width || 10}
            height={size || height || 25}
            viewBox="0 0 20 57"
            xmlns="http://www.w3.org/2000/svg"
            // fill={color || "#000000"}
            // stroke={color || "#000000"}
        >
            <g clip-path="url(#clip0_1_1216)">
                <path
                    d="M0 40.8931L7.0073 32.591C8.9781 30.292 8.9781 26.5667 7.0073 24.2676L0 16.072V0L16.8978 19.7121C18.7591 21.8834 19.854 24.7785 19.9818 27.8652C19.9818 28.2484 19.9818 28.6528 19.9818 29.036C19.854 32.1227 18.7591 34.9965 16.8978 37.1891L0 56.9012V40.8931Z"
                    fill="#E80303"
                />
            </g>
            <defs>
                <clipPath id="clip0_1_1216">
                    <rect width="20" height="56.9012" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
