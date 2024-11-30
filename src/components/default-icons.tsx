// import React from "react";

// export const defaultIcons = {
//     success: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 100 100">
//         <circle cx="50" cy="50" r="0" fill="green">
//             <animate attributeName="r" from="0" to="45" dur="0.3s" fill="freeze" />
//         </circle>
//         <path d="M35,50 L45,60 L65,40" stroke="white" strokeWidth="5" fill="transparent" strokeDasharray="0, 100">
//             <animate attributeName="stroke-dasharray" from="0, 100" to="100, 0" dur="0.3s" begin="0.3s" fill="freeze" />
//         </path>
//     </svg>

//     ,
//     error: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 100 100">
//         <circle cx="50" cy="50" r="0" fill="red">
//             <animate attributeName="r" from="0" to="45" dur="0.3s" fill="freeze" />
//         </circle>
//         <g stroke="white" strokeWidth="5" fill="transparent">
//             <line x1="35" y1="35" x2="35" y2="35">
//                 <animate attributeName="x2" from="35" to="65" dur="0.2s" begin="0.3s" fill="freeze" />
//                 <animate attributeName="y2" from="35" to="65" dur="0.2s" begin="0.3s" fill="freeze" />
//             </line>
//             <line x1="65" y1="35" x2="65" y2="35">
//                 <animate attributeName="x2" from="65" to="35" dur="0.2s" begin="0.3s" fill="freeze" />
//                 <animate attributeName="y2" from="35" to="65" dur="0.2s" begin="0.3s" fill="freeze" />
//             </line>
//         </g>
//     </svg>
//     ,
//     info:
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 100 100">
//             <circle cx="50" cy="50" r="0" fill="blue">
//                 <animate attributeName="r" from="0" to="45" dur="0.3s" fill="freeze" />
//             </circle>
//             <text x="50" y="68" fontSize="60" fontWeight="bold" textAnchor="middle" fill="white" opacity="0">
//     i
//     <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.3s" fill="freeze" />
//   </text>
//         </svg>
//     ,
//     custom: null,
//     promise: <>
//         <svg className="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
//             width="24" height="24">
//             <path
//                 d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
//                 stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path>
//             <path
//                 d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
//                 stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
//             </path>
//         </svg>
//     </>,
// }


import React from "react";

export const defaultIcons = {
    success: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="0" fill="green">
                <animate attributeName="r" from="0" to="45" dur="0.3s" fill="freeze" />
            </circle>
            <path
                d="M35,50 L45,60 L65,40"
                stroke="white"
                strokeWidth="5"
                fill="transparent"
                strokeDasharray="0, 100"
            >
                <animate attributeName="stroke-dasharray" from="0, 100" to="100, 0" dur="0.3s" begin="0.3s" fill="freeze" />
            </path>
        </svg>
    ),
    error: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="0" fill="red">
                <animate attributeName="r" from="0" to="45" dur="0.3s" fill="freeze" />
            </circle>
            <g stroke="white" strokeWidth="5" fill="transparent">
                <line x1="35" y1="35" x2="35" y2="35">
                    <animate attributeName="x2" from="35" to="65" dur="0.2s" begin="0.3s" fill="freeze" />
                    <animate attributeName="y2" from="35" to="65" dur="0.2s" begin="0.3s" fill="freeze" />
                </line>
                <line x1="65" y1="35" x2="65" y2="35">
                    <animate attributeName="x2" from="65" to="35" dur="0.2s" begin="0.3s" fill="freeze" />
                    <animate attributeName="y2" from="35" to="65" dur="0.2s" begin="0.3s" fill="freeze" />
                </line>
            </g>
        </svg>
    ),
    info: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="0" fill="blue">
                <animate attributeName="r" from="0" to="45" dur="0.3s" fill="freeze" />
            </circle>
            <text
                x="50"
                y="60"
                fontSize="60"
                fontWeight="bold"
                textAnchor="middle"
                fill="white"
                opacity="0"
                style={{ dominantBaseline: "middle" }}
            >
                i
                <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.3s" fill="freeze" />
            </text>
        </svg>
    ),
    custom: null,
    promise: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <style>
        {`
          .spinner_Pcrv {
            transform-origin: center;
            animation: spinner_xeMo 0.6s linear infinite;
          }
          @keyframes spinner_xeMo {
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <path
        className="spinner_Pcrv"
        d="M2,12A10.94,10.94,0,0,1,5,4.65c-.21-.19-.42-.36-.62-.55h0A11,11,0,0,0,12,23c.34,0,.67,0,1-.05C6,23,2,17.74,2,12Z"
      />
    </svg>
    ),
};
