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
};
