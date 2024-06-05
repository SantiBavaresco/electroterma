import React from "react";
interface Props {
    css?: string;
    size?: number;
    height?: number;
    width?: number;
}
export const CompuertaAntiretorno: React.FC<Props> = ({
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
            viewBox="0 0 99 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <ellipse
                cx="49.5"
                cy="49.5"
                rx="49.5"
                ry="49.5"
                fill="#E90303"
            />
            <g clip-path="url(#clip0_0_1)">
                <path
                    d="M51.0039 18.1826C51.0039 18.1826 80.8523 19.7788 81.4901 48.6837C82.1296 77.5886 51.0039 81.8997 51.0039 81.8997V18.1826Z"
                    stroke="white"
                    stroke-miterlimit="10"
                />
                <path
                    d="M27.4989 29.2305L33.6919 34.0256C33.6919 34.0256 21.5355 45.9657 19.0073 50.3296"
                    stroke="white"
                    stroke-miterlimit="10"
                />
                <path
                    d="M18.9363 55.8617L24.1132 52.8428C24.1132 52.8428 24.1396 56.635 28.8951 62.4513L25.478 69.2839"
                    stroke="white"
                    stroke-miterlimit="10"
                />
                <path
                    d="M49.5795 18.1826C49.5795 18.1826 20.4614 20.6645 18.6653 51.924C18.6653 51.924 17.5466 64.021 33.2772 77.3557C33.2772 77.3557 40.1279 81.4668 48.4129 81.4668"
                    stroke="white"
                    stroke-miterlimit="10"
                />
                <path
                    d="M48.6129 18.3049C48.6129 18.3049 39.3448 24.3295 38.3881 49.8437C38.3881 49.8437 36.7307 68.8327 41.9192 80.6505L44.3465 81.1115C44.9843 81.2321 45.6288 81.3114 46.2765 81.3478L48.413 81.4668L49.1367 18.2686L48.6129 18.3049Z"
                    stroke="white"
                    stroke-miterlimit="10"
                />
                <path
                    d="M49.9992 83.8329C68.6852 83.8329 83.8332 68.6849 83.8332 49.999C83.8332 31.313 68.6852 16.165 49.9992 16.165C31.3133 16.165 16.1653 31.313 16.1653 49.999C16.1653 68.6849 31.3133 83.8329 49.9992 83.8329Z"
                    stroke="white"
                    stroke-miterlimit="10"
                />
            </g>

            <defs>
                <clipPath id="clip0_0_1">
                    <rect
                        width="68"
                        height="68"
                        fill="white"
                        transform="translate(16 16)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};
