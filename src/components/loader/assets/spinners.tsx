import React, { FC } from 'react';

interface SpinnerProps {
  className: string;
  primaryCn?: string;
  neutralCn?: string;
}

export type Spinners = 'default';

export const spinners: Record<string, FC<SpinnerProps>> = {
  default: ({ className, primaryCn, neutralCn }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: 'auto',
        background: 'transparent',
        display: 'block',
        shapeRendering: 'auto',
      }}
      className={className}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="translate(50,50)">
        <g transform="scale(0.7)">
          <circle cx="0" cy="0" r="50" className={primaryCn}></circle>
          <circle cx="0" cy="-19" r="15" className={neutralCn}>
            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="1.2s"
              repeatCount="indefinite"
              keyTimes="0;1"
              values="0 0 0;360 0 0"
            ></animateTransform>
          </circle>
        </g>
      </g>
    </svg>
  ),
};
