import React from "react";
interface Props {
    css?: string;
    size?: number;
    height?: number;
    width?: number;
}
export const RecuperacionDeCalor: React.FC<Props> = ({
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
                d="M81.1828 48.798L52.1906 19.8058C51.2538 18.869 49.735 18.869 48.7982 19.8058L19.806 48.798C18.8692 49.7348 18.8692 51.2536 19.806 52.1904L48.7982 81.1826C49.735 82.1194 51.2538 82.1194 52.1906 81.1826L81.1828 52.1904C82.1196 51.2536 82.1196 49.7348 81.1828 48.798Z"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M34.1694 41.1548H44.6418C45.7302 41.1548 46.7297 41.7656 47.2405 42.7318L54.2369 56.1693C54.7367 57.1355 55.7362 57.7463 56.8356 57.7463H66.7305"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M66.7417 41.1548H56.2693C55.181 41.1548 54.1815 41.7656 53.6707 42.7318L46.6743 56.1693C46.1745 57.1355 45.175 57.7463 44.0756 57.7463H34.1807"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M65.6755 55.7583L67.3636 57.4463C67.5412 57.624 67.5412 57.9016 67.3636 58.0793L65.6755 60.0339"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M35.9907 55.7583L34.3027 57.4463C34.125 57.624 34.125 57.9016 34.3027 58.0793L35.9907 60.0339"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
        </svg>
    );
};
