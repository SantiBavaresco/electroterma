import React from "react";
interface Props {
    css?: string;
    size?: number;
    height?: number;
    width?: number;
}
export const BajoMantenimiento: React.FC<Props> = ({
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
                d="M59.4453 51.1414V76.8702"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M43.8665 65.6045L58.5603 76.2825C59.0823 76.6554 59.7857 76.6554 60.2963 76.2825L74.854 65.5593"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M52.4444 23.1412C36.6726 24.9378 36.3208 36.6101 36.7634 41.0056C36.8768 42.1017 36.5024 43.1864 35.7195 43.9661C33.3594 46.3163 28.3101 51.3559 25.2239 54.418C23.7828 55.8531 23.7488 58.1469 25.1217 59.6271L31.1581 66.1469C31.9978 67.0621 33.4388 67.0847 34.3125 66.2147L47.6334 52.9491C48.2802 52.305 49.1765 51.9548 50.0956 52.0339C66.0943 53.4237 68.2615 40.4632 68.4998 35.4124C68.5339 34.6666 67.6375 34.2712 67.1042 34.7909L60.2054 41.4237C59.7289 41.887 59.0594 42.113 58.4013 42.0452L50.5835 41.2316C49.8346 41.1525 49.2446 40.5875 49.1425 39.8418L47.9398 31.4915C47.8717 30.983 48.0192 30.4632 48.3596 30.0678L53.1592 24.4971C53.6471 23.9322 53.1705 23.0508 52.4217 23.1412H52.4444Z"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
        </svg>
    );
};
