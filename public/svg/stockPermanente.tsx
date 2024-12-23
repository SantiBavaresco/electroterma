import React from "react";
interface Props {
    css?: string;
    size?: number;
    height?: number;
    width?: number;
}
export const StockPermanente: React.FC<Props> = ({
    css,
    size,
    height,
    width,
    ...props
}) => {
    return (
        <svg
            className={css}
            width={size || width || 25}
            height={size || height || 25}
            viewBox="0 0 99 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <ellipse cx="49.5" cy="51" rx="49.5" ry="51" fill="#E90303" />

            <path
                d="M44.0625 34.0328V65.3851C44.0625 65.9579 44.4938 66.4364 45.0577 66.4903L53.1116 67.2182C53.7551 67.2789 54.3057 66.7599 54.2991 66.1062L54.1797 32.8938C54.1797 32.2198 53.5892 31.7076 52.9324 31.802L44.998 32.941C44.4606 33.0151 44.0559 33.4869 44.0559 34.0395L44.0625 34.0328Z"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M55.3938 67.326H78.2419C78.8457 67.326 79.3366 66.8272 79.3366 66.214V33.8642C79.3366 33.2711 78.8788 32.7859 78.295 32.7589L55.3208 31.6739C54.6972 31.6469 54.1731 32.1524 54.1797 32.7859L54.2992 66.214C54.2992 66.8272 54.7901 67.3192 55.3938 67.3192V67.326Z"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M59.3146 51.3061C59.3146 51.3061 59.4738 40.9609 67.5211 41.244C75.5684 41.527 75.2964 49.6212 75.2964 51.3465C75.2964 53.0719 73.7572 62.0085 67.5609 61.5704C61.3646 61.1323 59.1554 56.0777 59.3146 51.3061Z"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M16.6633 40.6576V64.9671C16.6633 65.4119 17.0017 65.7826 17.4329 65.823L23.6823 66.3824C24.1799 66.4296 24.6045 66.032 24.6045 65.5198L24.5116 39.7613C24.5116 39.2423 24.0538 38.838 23.5496 38.9121L17.3931 39.795C16.9751 39.8556 16.6633 40.2196 16.6633 40.6442V40.6576Z"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M25.4538 66.47H43.1737C43.6381 66.47 44.0229 66.0859 44.0229 65.6074V40.5228C44.0229 40.0646 43.6646 39.6871 43.2135 39.6669L25.4007 38.8245C24.9164 38.8043 24.5117 39.1952 24.5117 39.6871L24.6046 65.6141C24.6046 66.0859 24.9827 66.47 25.4538 66.47Z"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M28.4921 54.0491C28.4921 54.0491 28.6115 46.0291 34.8543 46.2448C41.0971 46.4604 40.8848 52.7417 40.8848 54.0761C40.8848 55.4105 39.6906 62.3455 34.8875 62.0018C30.0843 61.658 28.3727 57.7424 28.4921 54.0424V54.0491Z"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
        </svg>
    );
};
