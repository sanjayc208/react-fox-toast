import React from "react";

export const defaultIcons: any = {
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
            <text x="50" y="60" fontSize="60" fontWeight="bold" textAnchor="middle" fill="white" opacity="0"
                style={{ dominantBaseline: "middle" }}
            >
                i
                <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.3s" fill="freeze" />
            </text>
        </svg>
    ),
    warning: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 100 100">
      {/* First Circle: Popout animation */}
      <circle cx="50" cy="50" r="0" fill="#FFA500">
        <animate attributeName="r" from="0" to="45" dur="0.3s" keyTimes="0;1" fill="freeze" />
      </circle>

      <g>
        {/* Exclamation Line animation */}
        <line x1="50" y1="25" x2="50" y2="25" stroke="white" strokeWidth="8" strokeLinecap="round" >
          {/* Animation for the exclamation line's vertical scale (pop-up effect) */}
          <animate attributeName="y2" from="25" to="60" dur="0.2s" begin="0.3s" fill="freeze" />
          <animate attributeName="opacity" from="0" to="1" dur="0.2s" begin="0.3s" fill="freeze" />
        </line>
        
        {/* Exclamation Dot animation */}
        <circle cx="50" cy="73" r="0" fill="white">
          {/* Animation for the exclamation dot's radius (pop-up effect) */}
          <animate attributeName="r" from="0" to="4" dur="0.2s" begin="0.5s" fill="freeze" />
          <animate attributeName="opacity" from="0" to="1" dur="0.2s" begin="0.5s" fill="freeze" />
        </circle>
      </g>
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
    drawer: (
      <svg width="25" height="25" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="24" fill="#FFBF00" stroke="" strokeWidth="2"></circle>
        <g transform="translate(7, 7) scale(1.5)">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 13h18v8.002c0 .551-.445.998-.993.998H3.993A.995.995 0 0 1 3 21.002V13zM3 2.998C3 2.447 3.445 2 3.993 2h16.014c.548 0 .993.446.993.998V11H3V2.998zM9 5v2h6V5H9zm0 11v2h6v-2H9z" fill="#713f11" />
        </g>
      </svg>
    ),
    envelope: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="24" height="24">
        <defs>
          <style>
            {`
              .cls-1 { fill: #ffc247; }
              .cls-2 { fill: #ffe45c; }
              .cls-5 { fill: #fff; }
              .cls-8 { fill: #2b1505; }
            `}
          </style>
        </defs>
        <g id="_11-Envelop" data-name="11-Envelop">
          <path
            className="cls-1"
            d="m57 21 .24-.24A5.944 5.944 0 0 1 59 25v28a5.944 5.944 0 0 1-1.76 4.24L57 57 36 36l-.06-.08zM3 57l-.24.24A5.944 5.944 0 0 1 1 53V25a5.944 5.944 0 0 1 1.76-4.24L3 21l21.06 14.92L24 36z"
          />
          <path
            className="cls-2"
            d="m57 57 .24.24A5.944 5.944 0 0 1 53 59H7a5.944 5.944 0 0 1-4.24-1.76L3 57l21-21 .06-.08L27 38a4.38 4.38 0 0 0 3 1 4.38 4.38 0 0 0 3-1l2.94-2.08.06.08z"
          />
          <path
            className="cls-2"
            d="M2.76 20.76A5.944 5.944 0 0 1 7 19h46a5.944 5.944 0 0 1 4.24 1.76L57 21 35.94 35.92 33 38a4.38 4.38 0 0 1-3 1 4.38 4.38 0 0 1-3-1l-2.94-2.08L3 21z"
          />
          <path
            className="cls-1"
            d="M27 42a4.38 4.38 0 0 0 3 1 4.38 4.38 0 0 0 3-1l2.94-2.08 2.33-1.65L36 36l-.06-.08L33 38a4.38 4.38 0 0 1-3 1 4.38 4.38 0 0 1-3-1l-2.94-2.08L24 36l-2.27 2.27 2.33 1.65z"
          />
          <path
            d="M55 55H5l-2 2-.24.24A5.944 5.944 0 0 0 7 59h46a5.944 5.944 0 0 0 4.24-1.76L57 57z"
            style={{ fill: '#ffda45' }}
          />
          <path
            className="cls-5"
            d="M13.616 19H7a5.944 5.944 0 0 0-4.24 1.76L3 21l4.862 3.444-.1-.219C9.252 20.989 11.323 19 13.616 19z"
          />
          <path
            d="M43 1a16 16 0 1 1-12.82 25.54A20.715 20.715 0 0 0 26 31a12.222 12.222 0 0 1 2.4-7.48A15.979 15.979 0 0 1 43 1z"
            style={{ fill: '#f2f6fc' }}
          />
          <circle className="cls-5" cx="39" cy="18" r="2" />
          <circle className="cls-5" cx="47" cy="18" r="2" />
          <path
            d="M59 17A15.984 15.984 0 0 0 36.463 2.4a15.991 15.991 0 0 1 10.074 30.2A15.992 15.992 0 0 0 59 17z"
            style={{ fill: '#cdd2e1' }}
          />
          <path
            className="cls-8"
            d="M60 17a17 17 0 0 0-34 0c0 .336.029.667.048 1H7a7.008 7.008 0 0 0-7 7v28a7.008 7.008 0 0 0 7 7h46a7.008 7.008 0 0 0 7-7V25a7 7 0 0 0-.731-3.083A16.96 16.96 0 0 0 60 17zM43 2a15 15 0 1 1-12.021 23.943 1 1 0 0 0-1.4-.2 17.467 17.467 0 0 0-2.13 1.91 10.818 10.818 0 0 1 1.751-3.536 1 1 0 0 0 .113-1.007A14.844 14.844 0 0 1 28 17 15.017 15.017 0 0 1 43 2zM26.278 20a16.974 16.974 0 0 0 .979 3.4A13.248 13.248 0 0 0 25 31a1 1 0 0 0 1.831.556 20.859 20.859 0 0 1 3.19-3.6A16.841 16.841 0 0 0 38 33.235l-5.575 3.949a1.1 1.1 0 0 0-.117.1A3.469 3.469 0 0 1 30 38a3.478 3.478 0 0 1-2.293-.707 1.033 1.033 0 0 0-.129-.109L4.387 20.757A4.955 4.955 0 0 1 7 20zM2 25a4.959 4.959 0 0 1 .9-2.846l19.629 13.9L2.833 55.753A4.969 4.969 0 0 1 2 53zm5 33a4.969 4.969 0 0 1-2.753-.833L24.184 37.23l2.184 1.548A5.441 5.441 0 0 0 30 40a5.441 5.441 0 0 0 3.632-1.222l2.184-1.548 19.937 19.937A4.969 4.969 0 0 1 53 58zm51-33v28a4.969 4.969 0 0 1-.833 2.753L37.472 36.058l3.162-2.24A16.813 16.813 0 0 0 58 24.985z"
          />
          <path
            className="cls-8"
            d="M36 18a3 3 0 0 0 6 0c0-6.92-4.95-7-5-7a.994.994 0 0 0-.993.987 1.006 1.006 0 0 0 .98 1.013 2.945 2.945 0 0 1 2.519 2.051A2.958 2.958 0 0 0 36 18zm3 1a1 1 0 1 1 1-1 1 1 0 0 1-1 1zM44 18a3 3 0 0 0 6 0c0-6.92-4.95-7-5-7a.994.994 0 0 0-.993.987 1.006 1.006 0 0 0 .98 1.013 2.945 2.945 0 0 1 2.519 2.051A2.958 2.958 0 0 0 44 18zm3 1a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"
          />
        </g>
      </svg>
    )
};
