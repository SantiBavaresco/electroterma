import React from "react";
interface Props {
    css?: string;
    size?: number;
    height?: number;
    width?: number;
}
export const SerpentinaReforzada: React.FC<Props> = ({
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
            <ellipse cx="49.5"
                cy="49.5"
                rx="49.5"
                ry="49.5" fill="#FF7800" />
          
                <path
                    d="M44.1792 48.7024L45.9171 46.967C46.1772 46.7073 46.6028 46.7073 46.8629 46.967L48.6836 48.785C49.0264 49.1274 49.0264 49.6823 48.6836 50.0128L46.9693 51.7246"
                    stroke="white"
                    stroke-width="1.16"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                />
                <path
                    d="M43.0324 41.2059L41.2708 39.4469C41.0225 39.199 40.6324 39.199 40.3841 39.4469L38.3625 41.4656C38.1142 41.7136 38.1142 42.1031 38.3625 42.3511L40.2541 44.2399"
                    stroke="white"
                    stroke-width="1.16"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                />
                <path
                    d="M36.5298 56.0336L38.1258 57.6273C38.4569 57.9579 39.0007 57.9579 39.3317 57.6273L41.1878 55.7739C41.4361 55.526 41.4361 55.1246 41.1878 54.8649L39.3081 52.9878"
                    stroke="white"
                    stroke-width="1.16"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                />
                <path
                    d="M42.6895 33.2137L44.5101 31.3957C44.7229 31.1832 45.0658 31.1832 45.2668 31.3957L47.4066 33.5325C47.6312 33.7568 47.6312 34.1109 47.4066 34.3234L45.4677 36.2595"
                    stroke="white"
                    stroke-width="1.16"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                />
                <path
                    d="M54.3818 30.5103V58.5245"
                    stroke="white"
                    stroke-width="1.16"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                />
                <path
                    d="M58.2476 30.5103V58.5245"
                    stroke="white"
                    stroke-width="1.16"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                />
                <path
                    d="M62.1963 30.5103V58.5245"
                    stroke="white"
                    stroke-width="1.16"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                />
                <path
                    d="M47.9624 65.5606L57.7987 75.3827C58.378 75.9612 59.3238 75.9612 59.9031 75.3827L85.8062 49.5171"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                />
                <path
                    d="M42.6538 72.3604C31.1741 69.1729 23.1821 58.6543 23.1821 46.7662C23.1821 32.1747 35.1938 20.1804 49.8064 20.1804C64.4189 20.1804 76.4306 32.1747 76.4306 46.7662C76.4306 49.269 76.0759 51.7363 75.402 54.0856"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                />
           
        </svg>
    );
};
