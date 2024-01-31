import React from "react";
export const Download = ({ css, size, height, width, ...props }) => {
    return (
        <svg
            className={css}
            width={size || width || 53}
            height={size || height || 40}
            viewBox="0 0 43 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.6411 24.262H31.9235"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M21.2823 4.85229V19.4095M21.2823 19.4095L27.4896 15.1637M21.2823 19.4095L15.075 15.1637"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
