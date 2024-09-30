import React from "react";
interface Props {
    css?: string;
    size?: number;
    height?: number;
    width?: number;
}
export const UnicosEnElMercado: React.FC<Props> = ({
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
            <rect
                x="24.5"
                y="28.5"
                width="21"
                height="42"
                rx="2.5"
                stroke="white"
            />
            <rect
                x="55.5"
                y="28.5"
                width="21"
                height="42"
                rx="2.5"
                stroke="white"
            />
            <rect
                x="40"
                y="26"
                width="20"
                height="45"
                rx="2"
                fill="white"
                stroke="#FF7800"
                stroke-width="2"
            />
        </svg>
    );
};
