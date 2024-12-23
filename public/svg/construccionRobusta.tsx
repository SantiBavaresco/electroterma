import React from "react";
interface Props {
    css?: string;
    size?: number;
    height?: number;
    width?: number;
}
export const ConstruccionRobusta: React.FC<Props> = ({
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
                d="M35.8678 44.7515V23.8483C35.8678 21.7932 34.2023 20.1355 32.1375 20.1355H24.6428C22.7035 20.1355 21.1406 21.691 21.1406 23.6213V70.0261C21.1406 71.593 22.4183 72.8646 23.9925 72.8646H74.8703C76.5244 72.8646 77.8591 71.5362 77.8591 69.8898V37.4507C77.8591 35.2367 75.3038 33.9763 73.5356 35.3275L58.9453 46.4547C57.7932 47.3289 56.1391 46.5114 56.1391 45.0808V36.1223C56.1391 34.7484 54.5534 33.9763 53.4583 34.8165L38.7311 46.1594C37.5675 47.0564 35.8678 46.2276 35.8678 44.7629V44.7515Z"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M36.1189 58.0132H31.6015C30.7887 58.0132 30.1299 58.669 30.1299 59.4779V63.2588C30.1299 64.0678 30.7887 64.7235 31.6015 64.7235H36.1189C36.9316 64.7235 37.5904 64.0678 37.5904 63.2588V59.4779C37.5904 58.669 36.9316 58.0132 36.1189 58.0132Z"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M52.124 58.0132H47.0134C46.3644 58.0132 45.8384 58.5368 45.8384 59.1827V63.5541C45.8384 64.2 46.3644 64.7235 47.0134 64.7235H52.124C52.7729 64.7235 53.2989 64.2 53.2989 63.5541V59.1827C53.2989 58.5368 52.7729 58.0132 52.124 58.0132Z"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M66.8169 58.0132H62.6417C61.7345 58.0132 60.999 58.7452 60.999 59.6482V63.0885C60.999 63.9915 61.7345 64.7235 62.6417 64.7235H66.8169C67.7241 64.7235 68.4596 63.9915 68.4596 63.0885V59.6482C68.4596 58.7452 67.7241 58.0132 66.8169 58.0132Z"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
        </svg>
    );
};
