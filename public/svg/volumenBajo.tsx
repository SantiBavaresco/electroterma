import React from "react";
interface Props {
    css?: string; 
    size?: number;
    height?: number; 
    width?: number; 
}
export const VolumenBajo: React.FC<Props> = ({ css, size, height, width, ...props }) => {
    return (
        <svg
            className={css}
            width={size || width || 25}
            height={size || height ||25}
            viewBox="0 0 99 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >


<ellipse cx="49.5" cy="51" rx="49.5" ry="51" fill="#E90303"/>
<path d="M33.74 55.1736V77.1436" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M20 67.1735L32.95 76.6235C33.41 76.9535 34.03 76.9535 34.48 76.6235L47.31 67.1335" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M41.41 36.8137L53.76 24.4637C54.75 23.4737 56.43 24.1737 56.43 25.5737V66.7937C56.43 68.1837 54.75 68.8837 53.76 67.9037L41.47 55.6137C41.18 55.3237 40.78 55.1537 40.36 55.1537H31.09C30.23 55.1537 29.53 54.4537 29.53 53.5937L29.5 38.8537C29.5 37.9937 30.2 37.2837 31.06 37.2837H40.3C40.71 37.2837 41.11 37.1237 41.41 36.8237V36.8137Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M63.3801 39.4336C63.3801 39.4336 68.2501 40.2936 68.2501 45.1636C68.2501 50.0336 63.3501 51.4036 63.3501 51.4036" stroke="white" strokeWidth="1.75" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M63.3902 33.6736C63.3902 33.6736 74.4102 35.9236 74.4102 45.0336C74.4102 54.1436 63.1602 57.0736 63.1602 57.0736" stroke="white" strokeWidth="1.75" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M63.1699 27.8835C63.1699 27.8835 79.8899 30.3935 79.8899 44.6435C79.8899 58.8935 63.1699 62.8935 63.1699 62.8935" stroke="white" strokeWidth="1.75" strokeMiterlimit="10" strokeLinecap="round"/>
</svg>




    );
};
