import React from "react";
interface Props {
    css?: string;
    size?: number;
    height?: number;
    width?: number;
}
export const MaterialGalvanizado: React.FC<Props> = ({
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

                <ellipse cx="49.5" cy="51" rx="49.5" ry="51" fill="#E90303" />
                <g clip-path="url(#clip0_352_556)">
                    <path
                        d="M44.8612 31.0281L26.146 64.82"
                        stroke="white"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                    />
                    <path
                        d="M54.2131 31.0281L30.822 73.5934"
                        stroke="white"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                    />
                    <path
                        d="M70.8539 34.7581L43.5547 85.0295"
                        stroke="white"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                    />
                    <path
                        d="M69.811 53.6421L58.3733 74.6609"
                        stroke="white"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                    />
                    <path
                        d="M66.4302 26.7822L33.4236 85.8271"
                        stroke="white"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                    />
                    <path
                        d="M43.3713 23.6974C43.3713 23.6974 49.5601 24.5419 49.6747 30.4534C49.6747 30.4534 49.9039 24.0727 56.0239 24.0727C56.0239 24.0727 50.0987 22.6887 49.7893 17C49.7893 17 48.2421 23.8616 43.3713 23.6974Z"
                        fill="white"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_352_556">
                        <rect
                            width="47"
                            height="70"
                            fill="white"
                            transform="translate(25 17)"
                        />
                    </clipPath>
                </defs>
            
        </svg>
    );
};
