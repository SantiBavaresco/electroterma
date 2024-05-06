import React from "react";
interface Props {
    css?: string;
    size?: number;
    height?: number;
    width?: number;
}
export const Ondas04SVG: React.FC<Props> = ({
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
            width={size || width || 1552}
            
            height={size || height || 442}
            viewBox="0 0 1552 442"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M148.417 1C40.1405 14.0783 1 95.1094 1 172.76C1 250.41 66.9622 323.758 147.359 347.115C278.055 385.087 324.02 331.68 369.917 261.918C430.317 170.096 551.765 433.063 729.825 341.89C922.252 243.342 1005.75 444.059 1103.9 441.293C1243.57 437.366 1278.1 267.211 1378.7 235.283C1623.16 157.701 1814.84 89.0654 1814.84 89.0654"
                stroke="url(#paint0_linear_673_1045)"
                stroke-width="0.5"
                stroke-miterlimit="10"
            />
            <path
                d="M145.892 4.24414C40.8232 17.6639 2.94531 96.7486 2.94531 171.838C2.94531 246.928 67.5766 321.949 147.973 344.213C276.997 380.374 321.597 327.105 366.266 259.118C425.028 169.653 541.085 418.858 712.661 330.827C902.051 233.371 986.372 432.141 1085.71 426.439C1227.6 418.073 1265.95 274.86 1367.71 242.693C1605.69 167.297 1795.15 86.4703 1795.15 86.4703"
                stroke="url(#paint1_linear_673_1045)"
                stroke-width="0.5"
                stroke-miterlimit="10"
            />
            <path
                d="M143.332 7.48779C41.5391 21.2832 4.92383 98.4215 4.92383 170.916C4.92383 248.43 68.3267 319.9 148.587 341.276C276.075 375.218 319.14 322.461 362.58 256.249C419.738 169.14 530.335 404.55 695.462 319.695C881.814 223.366 966.989 420.155 1067.52 411.516C1211.63 398.711 1253.8 282.44 1356.76 250.035C1588.22 176.789 1775.49 83.8066 1775.49 83.8066"
                stroke="url(#paint2_linear_673_1045)"
                stroke-width="0.5"
                stroke-miterlimit="10"
            />
            <path
                d="M140.807 10.7656C42.256 24.8684 6.86914 100.06 6.86914 170.028C6.86914 246.517 68.9752 318.021 149.167 338.407C275.017 370.369 316.683 317.919 358.895 253.449C414.415 168.696 519.586 390.345 678.264 308.631C861.579 213.429 947.606 408.477 1049.3 396.662C1195.62 379.691 1241.65 290.089 1345.73 257.444C1570.71 186.384 1755.77 81.1769 1755.77 81.1769"
                stroke="url(#paint3_linear_673_1045)"
                stroke-width="0.5"
                stroke-miterlimit="10"
            />
            <path
                d="M138.248 14.0098C42.9387 28.454 8.81445 101.699 8.81445 169.106C8.81445 244.571 69.6238 316.109 149.782 335.47C273.994 365.486 314.226 313.275 355.21 250.615C409.092 168.218 509.042 376.447 661.065 297.533C841.582 203.868 928.224 396.56 1031.11 381.808C1179.69 360.466 1229.51 297.738 1334.75 264.854C1553.24 195.945 1736.08 78.5819 1736.08 78.5819"
                stroke="url(#paint4_linear_673_1045)"
                stroke-width="0.5"
                stroke-miterlimit="10"
            />
            <path
                d="M135.688 17.2539C43.6546 32.0737 10.793 103.339 10.793 168.218C10.793 242.659 70.3056 314.265 150.395 332.602C272.97 360.671 311.803 308.733 351.558 247.815C403.802 167.808 498.36 362.276 643.9 286.504C821.414 194.068 908.841 384.745 1012.95 366.988C1163.75 341.276 1217.39 305.421 1323.83 272.299C1535.81 205.575 1716.46 76.0211 1716.46 76.0211"
                stroke="url(#paint5_linear_673_1045)"
                stroke-width="0.5"
                stroke-miterlimit="10"
            />
            <path
                d="M133.163 20.498C44.3373 35.6594 12.7383 105.012 12.7383 167.296C12.7383 240.713 70.9542 312.353 151.01 329.666C271.946 355.823 309.346 304.09 347.907 244.981C398.547 167.331 487.679 348.071 626.736 275.406C801.281 184.165 889.492 372.828 994.766 352.1C1147.78 321.983 1205.28 313.036 1312.84 279.675C1518.33 215.136 1696.8 73.3578 1696.8 73.3578"
                stroke="url(#paint6_linear_673_1045)"
                stroke-width="0.5"
                stroke-miterlimit="10"
            />
            <path
                d="M130.604 23.7422C45.0542 39.245 14.6836 106.651 14.6836 166.375C14.6836 238.766 71.6028 310.475 151.59 326.764C270.888 351.042 306.889 299.514 344.187 242.147C393.19 166.853 476.931 333.866 609.503 264.308C781.046 174.263 870.076 360.911 976.544 337.213C1131.77 302.69 1193.1 320.651 1301.82 287.05C1500.79 224.664 1677.08 70.7286 1677.08 70.7286"
                stroke="url(#paint7_linear_673_1045)"
                stroke-width="0.5"
                stroke-miterlimit="10"
            />
            <path
                d="M128.08 27.02C45.772 42.8643 16.6641 108.29 16.6641 165.486C16.6641 236.854 72.2524 308.665 152.206 323.861C269.832 346.261 304.434 294.904 340.537 239.347C387.902 166.408 466.251 319.695 592.34 253.245C760.88 164.428 850.729 348.993 958.356 322.358C1115.81 283.396 1181.02 328.539 1290.86 294.46C1483.49 234.668 1657.43 68.1331 1657.43 68.1331"
                stroke="url(#paint8_linear_673_1045)"
                stroke-width="0.5"
                stroke-miterlimit="10"
            />
            <path
                d="M125.519 30.2637C46.4528 46.4494 18.6074 109.963 18.6074 164.564C18.6074 234.907 72.8991 306.821 152.818 320.958C268.772 341.48 301.975 290.328 336.85 236.512C382.577 165.93 455.534 305.455 575.106 242.146C740.676 154.491 831.276 337.075 940.132 307.504C1099.83 264.137 1168.87 336.222 1279.84 301.87C1465.95 244.264 1637.7 65.5376 1637.7 65.5376"
                stroke="url(#paint9_linear_673_1045)"
                stroke-width="0.5"
                stroke-miterlimit="10"
            />
            <path
                d="M122.994 33.5078C47.1696 50.035 20.5527 111.602 20.5527 163.677C20.5527 232.961 73.5136 305.011 153.398 318.056C267.68 336.734 299.518 285.752 333.165 233.678C377.253 165.452 444.819 291.216 557.907 231.083C720.475 144.622 811.894 325.158 921.944 292.65C1083.86 244.81 1156.72 343.905 1268.85 309.28C1448.48 253.859 1618.01 62.9085 1618.01 62.9085"
                stroke="url(#paint10_linear_673_1045)"
                stroke-width="0.5"
                stroke-miterlimit="10"
            />
            <path
                d="M120.436 36.752C47.8875 53.6548 22.5332 113.241 22.5332 162.755C22.5332 231.015 74.1632 303.168 154.014 315.153C266.624 332.022 297.063 281.143 329.481 230.878C371.965 165.043 434.072 277.011 540.71 220.019C700.275 134.72 792.478 313.241 903.724 277.796C1067.83 225.517 1144.54 351.554 1257.86 316.69C1431.01 263.42 1598.32 60.3134 1598.32 60.3134"
                stroke="url(#paint11_linear_673_1045)"
                stroke-width="0.5"
                stroke-miterlimit="10"
            />
            <path
                d="M117.875 40.0303C48.5683 57.2404 24.4766 114.881 24.4766 161.833C24.4766 229.069 74.7757 301.358 154.626 312.217C265.564 327.31 294.638 276.533 325.828 228.01C366.674 164.531 423.355 262.738 523.544 208.888C680.106 124.749 773.128 301.256 885.568 262.874C1051.89 206.122 1132.46 359.135 1246.91 324.032C1413.54 272.913 1578.66 57.6502 1578.66 57.6502"
                stroke="url(#paint12_linear_673_1045)"
                stroke-width="0.5"
                stroke-miterlimit="10"
            />
            <path
                d="M115.35 43.2739C49.2851 60.8597 26.4219 116.554 26.4219 160.945C26.4219 227.156 75.4243 299.616 155.207 309.348C264.473 322.665 292.147 271.957 322.143 225.244C361.351 164.12 412.64 248.532 506.345 197.858C659.87 114.88 753.712 289.338 867.345 248.088C1035.89 186.862 1120.27 366.852 1235.89 331.51C1396.03 282.543 1558.94 55.0888 1558.94 55.0888"
                stroke="url(#paint13_linear_673_1045)"
                stroke-width="0.5"
                stroke-miterlimit="10"
            />
            <path
                d="M112.791 46.5181C49.9678 64.4453 28.3672 118.193 28.3672 160.023C28.3672 225.21 76.0387 297.841 155.787 306.412C263.347 317.987 289.691 267.347 318.423 222.376C355.994 163.608 401.823 234.19 489.113 186.726C639.601 104.875 734.295 277.352 849.123 233.166C1019.85 167.467 1108.09 374.433 1224.9 338.851C1378.53 292.036 1539.25 52.4255 1539.25 52.4255"
                stroke="url(#paint14_linear_673_1045)"
                stroke-width="0.5"
                stroke-miterlimit="10"
            />
            <path
                d="M110.267 49.7617C50.6857 68.0304 30.3477 119.832 30.3477 159.101C30.3477 223.263 76.6884 296.099 156.437 303.509C262.324 313.377 287.269 262.737 314.807 219.575C350.774 163.164 391.143 219.951 471.984 175.696C619.434 94.9383 714.948 265.435 830.971 218.346C1003.91 148.174 1095.98 382.115 1213.95 346.295C1361.06 301.631 1519.6 49.8642 1519.6 49.8642"
                stroke="url(#paint15_linear_673_1045)"
                stroke-width="0.5"
                stroke-miterlimit="10"
            />
            <path
                d="M107.708 53.0403C51.4025 71.6505 32.293 121.505 32.293 158.213C32.293 221.351 77.3028 294.392 157.017 300.607C261.232 308.768 284.812 258.162 311.088 216.741C345.417 162.721 380.36 205.644 454.751 164.599C599.165 84.9337 695.395 253.245 812.748 203.458C987.737 128.471 1083.8 389.731 1202.96 353.671C1343.58 311.124 1499.91 47.2012 1499.91 47.2012"
                stroke="url(#paint16_linear_673_1045)"
                stroke-width="0.5"
                stroke-miterlimit="10"
            />
            <path
                d="M105.182 56.2838C52.1185 75.2354 34.2715 123.144 34.2715 157.291C34.2715 219.404 77.9505 292.65 157.631 297.704C260.174 304.192 282.355 253.552 307.436 213.941C340.127 162.276 369.61 191.336 437.586 153.535C578.928 74.9281 676.012 241.327 794.594 188.604C971.767 109.143 1071.65 397.106 1192 361.081C1326.04 320.412 1480.25 44.6055 1480.25 44.6055"
                stroke="url(#paint17_linear_673_1045)"
                stroke-width="0.5"
                stroke-miterlimit="10"
            />
            <path
                d="M102.623 59.5282C52.8012 78.8213 36.2168 124.783 36.2168 156.404C36.2168 217.493 78.565 291.011 158.245 294.802C259.082 299.616 279.932 248.976 303.785 211.107C334.838 161.799 358.861 176.994 420.422 142.437C558.659 64.821 656.664 229.376 776.406 173.75C955.797 89.8508 1059.5 404.789 1181.02 368.491C1308.54 330.007 1460.56 42.0107 1460.56 42.0107"
                stroke="url(#paint18_linear_673_1045)"
                stroke-width="0.5"
                stroke-miterlimit="10"
            />
            <path
                d="M100.063 62.7721C53.4839 82.4067 38.1621 126.422 38.1621 155.481C38.1621 215.546 79.1794 289.338 158.825 291.899C257.99 295.075 277.441 244.366 300.066 208.273C329.515 161.321 348.044 162.652 403.189 131.339C538.321 54.6792 637.213 217.458 758.184 158.862C939.793 70.5235 1047.32 412.404 1170.03 375.867C1291.07 339.568 1440.87 39.3472 1440.87 39.3472"
                stroke="url(#paint19_linear_673_1045)"
                stroke-width="0.5"
                stroke-miterlimit="10"
            />
            <path
                d="M97.5376 66.0502C54.1998 86.0604 40.1406 128.095 40.1406 154.594C40.1406 213.634 79.8612 287.733 159.473 288.997C256.966 290.567 275.052 239.791 296.448 205.473C324.259 160.877 337.294 148.311 386.058 120.276C517.982 44.4692 617.898 205.541 740.029 144.008C923.822 51.2304 1035.2 420.053 1159.07 383.311C1273.6 349.164 1421.22 36.7861 1421.22 36.7861"
                stroke="url(#paint20_linear_673_1045)"
                stroke-width="0.5"
                stroke-miterlimit="10"
            />
            <path
                d="M94.9775 69.2941C54.9156 89.6458 42.0508 129.734 42.0508 153.672C42.0508 211.688 80.4405 286.094 160.018 286.094C255.873 286.094 272.526 235.215 292.693 202.639C318.867 160.399 326.408 133.9 368.79 109.212C497.473 34.1568 598.412 193.624 721.771 129.154C907.783 31.9372 1023.02 427.702 1148.02 390.721C1256.05 358.759 1401.49 34.1909 1401.49 34.1909"
                stroke="url(#paint21_linear_673_1045)"
                stroke-width="0.5"
                stroke-miterlimit="10"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_673_1045"
                    x1="0.146894"
                    y1="221.146"
                    x2="1815.15"
                    y2="221.146"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E52027" />
                    <stop offset="0.18" stop-color="#E52626" />
                    <stop offset="0.45" stop-color="#E73923" />
                    <stop offset="0.76" stop-color="#EB581E" />
                    <stop offset="1" stop-color="#EE751B" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_673_1045"
                    x1="2.09221"
                    y1="215.376"
                    x2="1795.49"
                    y2="215.376"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E52027" />
                    <stop offset="0.18" stop-color="#E52626" />
                    <stop offset="0.45" stop-color="#E73923" />
                    <stop offset="0.76" stop-color="#EB581E" />
                    <stop offset="1" stop-color="#EE751B" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_673_1045"
                    x1="4.07072"
                    y1="209.673"
                    x2="1775.87"
                    y2="209.673"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E52027" />
                    <stop offset="0.18" stop-color="#E52626" />
                    <stop offset="0.45" stop-color="#E73923" />
                    <stop offset="0.76" stop-color="#EB581E" />
                    <stop offset="1" stop-color="#EE751B" />
                </linearGradient>
                <linearGradient
                    id="paint3_linear_673_1045"
                    x1="6.01603"
                    y1="203.97"
                    x2="1756.21"
                    y2="203.97"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E52027" />
                    <stop offset="0.18" stop-color="#E52626" />
                    <stop offset="0.45" stop-color="#E73923" />
                    <stop offset="0.76" stop-color="#EB581E" />
                    <stop offset="1" stop-color="#EE751B" />
                </linearGradient>
                <linearGradient
                    id="paint4_linear_673_1045"
                    x1="7.96135"
                    y1="198.336"
                    x2="1736.59"
                    y2="198.336"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E52027" />
                    <stop offset="0.18" stop-color="#E52626" />
                    <stop offset="0.45" stop-color="#E73923" />
                    <stop offset="0.76" stop-color="#EB581E" />
                    <stop offset="1" stop-color="#EE751B" />
                </linearGradient>
                <linearGradient
                    id="paint5_linear_673_1045"
                    x1="9.93986"
                    y1="192.702"
                    x2="1716.94"
                    y2="192.702"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E52027" />
                    <stop offset="0.18" stop-color="#E52626" />
                    <stop offset="0.45" stop-color="#E73923" />
                    <stop offset="0.76" stop-color="#EB581E" />
                    <stop offset="1" stop-color="#EE751B" />
                </linearGradient>
                <linearGradient
                    id="paint6_linear_673_1045"
                    x1="11.8852"
                    y1="187.102"
                    x2="1697.28"
                    y2="187.102"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E52027" />
                    <stop offset="0.18" stop-color="#E52626" />
                    <stop offset="0.45" stop-color="#E73923" />
                    <stop offset="0.76" stop-color="#EB581E" />
                    <stop offset="1" stop-color="#EE751B" />
                </linearGradient>
                <linearGradient
                    id="paint7_linear_673_1045"
                    x1="13.8305"
                    y1="181.536"
                    x2="1677.63"
                    y2="181.536"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E52027" />
                    <stop offset="0.18" stop-color="#E52626" />
                    <stop offset="0.45" stop-color="#E73923" />
                    <stop offset="0.76" stop-color="#EB581E" />
                    <stop offset="1" stop-color="#EE751B" />
                </linearGradient>
                <linearGradient
                    id="paint8_linear_673_1045"
                    x1="15.811"
                    y1="178.121"
                    x2="1657.97"
                    y2="178.121"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E52027" />
                    <stop offset="0.18" stop-color="#E52626" />
                    <stop offset="0.45" stop-color="#E73923" />
                    <stop offset="0.76" stop-color="#EB581E" />
                    <stop offset="1" stop-color="#EE751B" />
                </linearGradient>
                <linearGradient
                    id="paint9_linear_673_1045"
                    x1="17.7543"
                    y1="177.95"
                    x2="1638.31"
                    y2="177.95"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E52027" />
                    <stop offset="0.18" stop-color="#E52626" />
                    <stop offset="0.45" stop-color="#E73923" />
                    <stop offset="0.76" stop-color="#EB581E" />
                    <stop offset="1" stop-color="#EE751B" />
                </linearGradient>
                <linearGradient
                    id="paint10_linear_673_1045"
                    x1="19.6996"
                    y1="177.779"
                    x2="1618.66"
                    y2="177.779"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E52027" />
                    <stop offset="0.18" stop-color="#E52626" />
                    <stop offset="0.45" stop-color="#E73923" />
                    <stop offset="0.76" stop-color="#EB581E" />
                    <stop offset="1" stop-color="#EE751B" />
                </linearGradient>
                <linearGradient
                    id="paint11_linear_673_1045"
                    x1="21.6801"
                    y1="179.828"
                    x2="1599"
                    y2="179.828"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E52027" />
                    <stop offset="0.18" stop-color="#E52626" />
                    <stop offset="0.45" stop-color="#E73923" />
                    <stop offset="0.76" stop-color="#EB581E" />
                    <stop offset="1" stop-color="#EE751B" />
                </linearGradient>
                <linearGradient
                    id="paint12_linear_673_1045"
                    x1="23.6235"
                    y1="184.711"
                    x2="1579.31"
                    y2="184.711"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E52027" />
                    <stop offset="0.18" stop-color="#E52626" />
                    <stop offset="0.45" stop-color="#E73923" />
                    <stop offset="0.76" stop-color="#EB581E" />
                    <stop offset="1" stop-color="#EE751B" />
                </linearGradient>
                <linearGradient
                    id="paint13_linear_673_1045"
                    x1="25.5688"
                    y1="189.731"
                    x2="1559.66"
                    y2="189.731"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E52027" />
                    <stop offset="0.18" stop-color="#E52626" />
                    <stop offset="0.45" stop-color="#E73923" />
                    <stop offset="0.76" stop-color="#EB581E" />
                    <stop offset="1" stop-color="#EE751B" />
                </linearGradient>
                <linearGradient
                    id="paint14_linear_673_1045"
                    x1="27.5141"
                    y1="194.785"
                    x2="1540"
                    y2="194.785"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E52027" />
                    <stop offset="0.18" stop-color="#E52626" />
                    <stop offset="0.45" stop-color="#E73923" />
                    <stop offset="0.76" stop-color="#EB581E" />
                    <stop offset="1" stop-color="#EE751B" />
                </linearGradient>
                <linearGradient
                    id="paint15_linear_673_1045"
                    x1="29.4946"
                    y1="199.941"
                    x2="1520.31"
                    y2="199.941"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E52027" />
                    <stop offset="0.18" stop-color="#E52626" />
                    <stop offset="0.45" stop-color="#E73923" />
                    <stop offset="0.76" stop-color="#EB581E" />
                    <stop offset="1" stop-color="#EE751B" />
                </linearGradient>
                <linearGradient
                    id="paint16_linear_673_1045"
                    x1="31.4399"
                    y1="202.4"
                    x2="1500.66"
                    y2="202.4"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E52027" />
                    <stop offset="0.18" stop-color="#E52626" />
                    <stop offset="0.45" stop-color="#E73923" />
                    <stop offset="0.76" stop-color="#EB581E" />
                    <stop offset="1" stop-color="#EE751B" />
                </linearGradient>
                <linearGradient
                    id="paint17_linear_673_1045"
                    x1="33.3843"
                    y1="204.653"
                    x2="1480.97"
                    y2="204.653"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E52027" />
                    <stop offset="0.18" stop-color="#E52626" />
                    <stop offset="0.45" stop-color="#E73923" />
                    <stop offset="0.76" stop-color="#EB581E" />
                    <stop offset="1" stop-color="#EE751B" />
                </linearGradient>
                <linearGradient
                    id="paint18_linear_673_1045"
                    x1="35.3637"
                    y1="206.941"
                    x2="1461.31"
                    y2="206.941"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E52027" />
                    <stop offset="0.18" stop-color="#E52626" />
                    <stop offset="0.45" stop-color="#E73923" />
                    <stop offset="0.76" stop-color="#EB581E" />
                    <stop offset="1" stop-color="#EE751B" />
                </linearGradient>
                <linearGradient
                    id="paint19_linear_673_1045"
                    x1="37.309"
                    y1="209.263"
                    x2="1441.62"
                    y2="209.263"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E52027" />
                    <stop offset="0.18" stop-color="#E52626" />
                    <stop offset="0.45" stop-color="#E73923" />
                    <stop offset="0.76" stop-color="#EB581E" />
                    <stop offset="1" stop-color="#EE751B" />
                </linearGradient>
                <linearGradient
                    id="paint20_linear_673_1045"
                    x1="39.2534"
                    y1="211.585"
                    x2="1421.97"
                    y2="211.585"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E52027" />
                    <stop offset="0.18" stop-color="#E52626" />
                    <stop offset="0.45" stop-color="#E73923" />
                    <stop offset="0.76" stop-color="#EB581E" />
                    <stop offset="1" stop-color="#EE751B" />
                </linearGradient>
                <linearGradient
                    id="paint21_linear_673_1045"
                    x1="41.2318"
                    y1="213.907"
                    x2="1402.28"
                    y2="213.907"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#E52027" />
                    <stop offset="0.18" stop-color="#E52626" />
                    <stop offset="0.45" stop-color="#E73923" />
                    <stop offset="0.76" stop-color="#EB581E" />
                    <stop offset="1" stop-color="#EE751B" />
                </linearGradient>
            </defs>
        </svg>
    );
};
