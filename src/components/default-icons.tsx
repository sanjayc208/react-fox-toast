import { DefaultIcons } from './types';

export const defaultIcons: DefaultIcons = {
    success: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 100 100"
        >
            <circle cx="50" cy="50" r="0" fill="green">
                <animate
                    attributeName="r"
                    from="0"
                    to="45"
                    dur="0.3s"
                    fill="freeze"
                />
            </circle>
            <path
                d="M35,50 L45,60 L65,40"
                stroke="white"
                strokeWidth="5"
                fill="transparent"
                strokeDasharray="0, 100"
            >
                <animate
                    attributeName="stroke-dasharray"
                    from="0, 100"
                    to="100, 0"
                    dur="0.3s"
                    begin="0.3s"
                    fill="freeze"
                />
            </path>
        </svg>
    ),
    error: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 100 100"
        >
            <circle cx="50" cy="50" r="0" fill="red">
                <animate
                    attributeName="r"
                    from="0"
                    to="45"
                    dur="0.3s"
                    fill="freeze"
                />
            </circle>
            <g stroke="white" strokeWidth="5" fill="transparent">
                <line x1="35" y1="35" x2="35" y2="35">
                    <animate
                        attributeName="x2"
                        from="35"
                        to="65"
                        dur="0.2s"
                        begin="0.3s"
                        fill="freeze"
                    />
                    <animate
                        attributeName="y2"
                        from="35"
                        to="65"
                        dur="0.2s"
                        begin="0.3s"
                        fill="freeze"
                    />
                </line>
                <line x1="65" y1="35" x2="65" y2="35">
                    <animate
                        attributeName="x2"
                        from="65"
                        to="35"
                        dur="0.2s"
                        begin="0.3s"
                        fill="freeze"
                    />
                    <animate
                        attributeName="y2"
                        from="35"
                        to="65"
                        dur="0.2s"
                        begin="0.3s"
                        fill="freeze"
                    />
                </line>
            </g>
        </svg>
    ),
    info: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 100 100"
        >
            <circle cx="50" cy="50" r="0" fill="blue">
                <animate
                    attributeName="r"
                    from="0"
                    to="45"
                    dur="0.3s"
                    fill="freeze"
                />
            </circle>
            <text
                x="50"
                y="60"
                fontSize="60"
                fontWeight="bold"
                textAnchor="middle"
                fill="white"
                opacity="0"
                style={{ dominantBaseline: 'middle' }}
            >
                i
                <animate
                    attributeName="opacity"
                    from="0"
                    to="1"
                    dur="0.3s"
                    begin="0.3s"
                    fill="freeze"
                />
            </text>
        </svg>
    ),
    warning: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 100 100"
        >
            {/* First Circle: Popout animation */}
            <circle cx="50" cy="50" r="0" fill="#FFA500">
                <animate
                    attributeName="r"
                    from="0"
                    to="45"
                    dur="0.3s"
                    keyTimes="0;1"
                    fill="freeze"
                />
            </circle>

            <g>
                {/* Exclamation Line animation */}
                <line
                    x1="50"
                    y1="25"
                    x2="50"
                    y2="25"
                    stroke="white"
                    strokeWidth="8"
                    strokeLinecap="round"
                >
                    {/* Animation for the exclamation line's vertical scale (pop-up effect) */}
                    <animate
                        attributeName="y2"
                        from="25"
                        to="60"
                        dur="0.2s"
                        begin="0.3s"
                        fill="freeze"
                    />
                    <animate
                        attributeName="opacity"
                        from="0"
                        to="1"
                        dur="0.2s"
                        begin="0.3s"
                        fill="freeze"
                    />
                </line>

                {/* Exclamation Dot animation */}
                <circle cx="50" cy="73" r="0" fill="white">
                    {/* Animation for the exclamation dot's radius (pop-up effect) */}
                    <animate
                        attributeName="r"
                        from="0"
                        to="4"
                        dur="0.2s"
                        begin="0.5s"
                        fill="freeze"
                    />
                    <animate
                        attributeName="opacity"
                        from="0"
                        to="1"
                        dur="0.2s"
                        begin="0.5s"
                        fill="freeze"
                    />
                </circle>
            </g>
        </svg>
    ),
    custom: null,
    promise: (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
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
        <svg
            width="25"
            height="25"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="25"
                cy="25"
                r="24"
                fill="#FFBF00"
                stroke=""
                strokeWidth="2"
            ></circle>
            <g transform="translate(7, 7) scale(1.5)">
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                    d="M3 13h18v8.002c0 .551-.445.998-.993.998H3.993A.995.995 0 0 1 3 21.002V13zM3 2.998C3 2.447 3.445 2 3.993 2h16.014c.548 0 .993.446.993.998V11H3V2.998zM9 5v2h6V5H9zm0 11v2h6v-2H9z"
                    fill="#713f11"
                />
            </g>
        </svg>
    ),
    envelope: (
        <svg
            width="25"
            height="25"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
        >
            <g style={{ stroke: '#333333', strokeWidth: '2' }}>
                <path
                    style={{ fill: '#ffc247' }}
                    d="m 3,16 94,0 0,68 -94,0 z"
                />
                <path
                    style={{ fill: '#ffe45c' }}
                    d="m 4,16 34,33 c 7,7 15,7 23,0 L 96,16 z"
                />
                <path style={{ fill: 'none' }} d="M 96,84 59,51 M 4,84 40,51" />
            </g>
        </svg>
    ),
};
