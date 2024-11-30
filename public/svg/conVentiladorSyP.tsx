import React from "react";
interface Props {
    css?: string;
    size?: number;
    height?: number;
    width?: number;
}
export const ConVentiladorSyP: React.FC<Props> = ({
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
                d="M48.374 50.5479C48.374 50.5479 63.4686 56.1435 59.0603 70.0507C59.0603 70.0507 54.9387 79.6589 44.7437 78.5398"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M48.183 50.4522C48.183 50.4522 33.0884 44.8566 37.4967 30.9493C37.4967 30.9493 41.6184 21.3412 51.8134 22.4603"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M49.5479 49.5104C49.5479 49.5104 55.1435 34.4158 69.0507 38.8241C69.0507 38.8241 78.6589 42.9458 77.5398 53.1408"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M49.4522 49.7016C49.4522 49.7016 43.8566 64.7962 29.9493 60.388C29.9493 60.388 20.3412 56.2663 21.4603 46.0713"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M48.8793 55.038C50.9219 55.038 52.5778 53.3821 52.5778 51.3395C52.5778 49.2968 50.9219 47.6409 48.8793 47.6409C46.8366 47.6409 45.1807 49.2968 45.1807 51.3395C45.1807 53.3821 46.8366 55.038 48.8793 55.038Z"
                fill="white"
            />
        </svg>
    );
};
