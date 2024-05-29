import React from "react";
interface Props {
    css?: string;
    size?: number;
    height?: number;
    width?: number;
}
export const EstaticoDinamico: React.FC<Props> = ({
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
            viewBox="0 0 99 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M98 51C98 78.6426 76.2579 101 49.5 101C22.7421 101 1 78.6426 1 51C1 23.3574 22.7421 1 49.5 1C76.2579 1 98 23.3574 98 51Z"
                fill="white"
                stroke="#E80303"
                stroke-width="2"
            />
            <g clip-path="url(#clip0_0_1)">
                <path
                    d="M25.6734 78.3191H46.5017C48.8788 78.3191 51.2424 77.9309 53.4714 77.1C59.2761 74.941 68.3131 69.1042 68.3131 53.6779C68.3131 30.9574 34.4613 24.5622 30.6633 47.2759C26.8653 69.9896 46.1246 72.278 54.0774 66.7954C64.1784 59.828 58.697 45.1169 48.569 44.7968C38.4411 44.4767 38.7441 61.5103 46.3401 61.1152C54.6229 60.6862 49.5253 50.3747 49.5253 50.3747"
                    stroke="#E90303"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                />
                <path
                    d="M74.3266 56.1093V24.6302C74.3266 23.0024 73.0202 21.6812 71.4108 21.6812H25.6734"
                    stroke="#E90303"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_0_1">
                    <rect
                        width="50"
                        height="58"
                        fill="white"
                        transform="translate(25 21)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};
