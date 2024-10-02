import React from "react";
interface Props {
    css?: string;
    size?: number;
    height?: number;
    width?: number;
}
export const FiltreraIncorporada: React.FC<Props> = ({
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
                d="M44.179 49.7024L45.9169 47.967C46.177 47.7073 46.6026 47.7073 46.8627 47.967L48.6833 49.785C49.0262 50.1274 49.0262 50.6823 48.6833 51.0128L46.9691 52.7246"
                stroke="white"
                stroke-width="1.16"
                stroke-miterlimit="10"
                stroke-linecap="round"
            />
            <path
                d="M43.0321 42.2059L41.2706 40.4469C41.0223 40.199 40.6321 40.199 40.3839 40.4469L38.3622 42.4656C38.114 42.7136 38.114 43.1031 38.3622 43.3511L40.2538 45.2399"
                stroke="white"
                stroke-width="1.16"
                stroke-miterlimit="10"
                stroke-linecap="round"
            />
            <path
                d="M36.5298 57.0336L38.1258 58.6273C38.4569 58.9579 39.0007 58.9579 39.3317 58.6273L41.1878 56.7739C41.4361 56.526 41.4361 56.1246 41.1878 55.8649L39.3081 53.9878"
                stroke="white"
                stroke-width="1.16"
                stroke-miterlimit="10"
                stroke-linecap="round"
            />
            <path
                d="M42.6895 34.2137L44.5101 32.3957C44.7229 32.1832 45.0658 32.1832 45.2668 32.3957L47.4066 34.5325C47.6312 34.7568 47.6312 35.1109 47.4066 35.3234L45.4677 37.2595"
                stroke="white"
                stroke-width="1.16"
                stroke-miterlimit="10"
                stroke-linecap="round"
            />
            <path
                d="M54.3818 31.5103V59.5245"
                stroke="white"
                stroke-width="1.16"
                stroke-miterlimit="10"
                stroke-linecap="round"
            />
            <path
                d="M58.2478 31.5103V59.5245"
                stroke="white"
                stroke-width="1.16"
                stroke-miterlimit="10"
                stroke-linecap="round"
            />
            <path
                d="M62.1965 31.5103V59.5245"
                stroke="white"
                stroke-width="1.16"
                stroke-miterlimit="10"
                stroke-linecap="round"
            />
            <path
                d="M47.9622 66.5606L57.7985 76.3827C58.3778 76.9612 59.3236 76.9612 59.9029 76.3827L85.8059 50.5171"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
            />
            <path
                d="M42.6538 73.3604C31.1741 70.1729 23.1821 59.6543 23.1821 47.7662C23.1821 33.1747 35.1938 21.1804 49.8064 21.1804C64.4189 21.1804 76.4306 33.1747 76.4306 47.7662C76.4306 50.269 76.0759 52.7363 75.402 55.0856"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
            />
        </svg>
    );
};
