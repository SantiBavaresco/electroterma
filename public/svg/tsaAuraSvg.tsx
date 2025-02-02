import React from "react";
interface Props {
    css?: string;
    size?: number;
    height?: number;
    width?: number;
}
export const TsaAuraSVG: React.FC<Props> = ({
    css,
    size,
    height,
    width,
    ...props
}) => {
    return (
        // <svg width="1538" height="797" viewBox="0 0 1538 797" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
        <svg
            className={css}
            // width="100%"
            width={size || width || 645}

            // height="100%"
            height={size || height || 645}

            viewBox="0 0 632 645"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M579.83 284.982L566.924 282.176C569.132 271.886 571.509 257.173 571.509 246.628C571.509 122.465 472.509 21.4336 350.755 21.4336L350.585 8.25195C479.896 8.337 584.67 115.236 584.67 246.628C584.67 261.255 580.934 279.71 579.83 284.982ZM350.585 14.8853L350.33 8.25195H350.585V14.8853Z"
                fill="#E61E25"
            />
            <path
                d="M350.585 8.25195L350.755 21.4336C472.509 21.4336 571.509 122.465 571.509 246.628C571.509 257.173 569.132 271.886 566.924 282.176L579.83 284.982C580.934 279.71 584.67 261.255 584.67 246.628C584.67 115.236 479.896 8.337 350.585 8.25195ZM350.585 8.25195H350.33L350.585 14.8853V8.25195Z"
                stroke="#E61E25"
                strokeMiterlimit="10"
            />
            <path
                d="M9.16996 364.018L22.0756 366.824C19.8681 377.114 17.4907 391.827 17.4907 402.372C17.4907 526.535 116.491 627.566 238.245 627.566L238.415 640.748C109.104 640.663 4.33033 533.764 4.33034 402.372C4.33034 387.745 8.06619 369.29 9.16996 364.018ZM238.415 634.115L238.67 640.748L238.415 640.748L238.415 634.115Z"
                fill="#E61E25"
            />
            <path
                d="M238.415 640.748L238.245 627.566C116.491 627.566 17.4907 526.535 17.4907 402.372C17.4907 391.827 19.8681 377.114 22.0756 366.824L9.16996 364.018C8.06619 369.29 4.33034 387.745 4.33034 402.372C4.33033 533.764 109.104 640.663 238.415 640.748ZM238.415 640.748L238.67 640.748L238.415 634.115L238.415 640.748Z"
                stroke="#E61E25"
                strokeMiterlimit="10"
            />
        </svg>
    );
};
