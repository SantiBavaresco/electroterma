import React from "react";
interface Props {
    css?: string;
    size?: number;
    height?: number;
    width?: number;
}
export const MultiposicionTempomatic: React.FC<Props> = ({
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
                d="M14.0651 65.7849V72.3722C14.0651 73.3226 14.838 74.0942 15.79 74.0942H31.6476C32.1439 74.0942 32.6239 73.8749 32.9494 73.5013L41.2891 63.9167C41.5657 63.6 41.7122 63.2019 41.7122 62.7877V28.722C41.7122 27.7716 40.9392 27 39.9873 27H24.3982C23.9263 27 23.4788 27.1949 23.1533 27.528L14.48 36.5277C14.1709 36.8526 14 37.275 14 37.7217V60.5784"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
            />
            <path
                d="M20.574 36.7795H32.1763V55.8755H14.0649"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
            />
            <path
                d="M32.2659 36.9337L41.232 27.5198"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
            />
            <path
                d="M41.7204 45.1863L32.1765 55.8755V63.267"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
            />
            <path
                d="M32.1926 67.5149L32.3147 73.7124"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
            />
            <path
                d="M39.2387 69.9762L44.6412 63.202L44.0553 49.7593L38.7993 55.5262L39.2387 69.9762Z"
                fill="#FF7800"
            />
            <path
                d="M48.2214 74.0699H41.6228C40.6709 74.0699 39.8979 73.2983 39.8979 72.348V56.3466C39.8979 55.9486 40.0363 55.5588 40.2966 55.2501L46.944 47.217C47.2694 46.819 47.7576 46.5915 48.2702 46.5915L83.4107 46.5347C84.3952 46.5347 84.6149 47.615 84.5661 48.5978L84.3952 63.9574C84.379 64.3067 84.2569 64.6397 84.0454 64.924L77.5364 73.4689C77.2109 73.8993 76.6983 74.1511 76.1613 74.1511H53.4286"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
            />
            <path
                d="M76.5924 67.5637L76.747 57.833C76.7632 56.8745 75.9903 56.0867 75.0302 56.0785L59.8723 55.9973C58.9204 55.9973 58.1393 56.7608 58.1393 57.7112L58.0742 74.1267"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
            />
            <path
                d="M76.3645 56.7201L84.094 47.1274"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
            />
            <path
                d="M65.8523 46.5264L58.6679 55.3474C58.3425 55.7535 57.8462 55.9809 57.3255 55.9809H50.9629"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
            />
            <path
                d="M46.887 55.9405L39.8979 55.843"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
            />
        </svg>
    );
};
