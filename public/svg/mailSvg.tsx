import React from "react";
interface Props {
    css?: string; 
    size?: number;
    height?: number; 
    width?: number; 
}
export const MailSvg: React.FC<Props> = ({ css, size, height, width, ...props }) => {
    return (
        <svg
            className={css}
            width={size || width || 85}
            height={size || height || 85}
            viewBox="5 10 50 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M8.15309 17.9943L28.5004 28.6262L48.8478 17.9943C48.7053 17.5665 48.4721 17.1811 48.1712 16.8674C47.66 16.333 46.9553 16 46.1828 16H10.8171C10.0438 16 9.33995 16.333 8.82878 16.8674C8.52789 17.1811 8.29386 17.5665 8.15309 17.9943ZM49 21.6628L28.4996 32.3747L8 21.6628V42.0546C8 42.8631 8.31761 43.599 8.82878 44.1335C9.33995 44.6679 10.0438 45 10.8171 45H46.182C46.9553 45 47.6592 44.6679 48.1703 44.1335C48.6815 43.599 48.9991 42.8631 48.9991 42.0546L49 21.6628Z" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
        </svg>

    );
};
