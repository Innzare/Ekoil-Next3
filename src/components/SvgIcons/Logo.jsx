import React from 'react';

export default function Logo({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 122 71" fill="none">
      <path
        d="M103.08 54.6025C87.034 65.8495 31.0646 49.2423 1 40.819C32.4629 55.3683 98.5516 83.3001 117.063 63.0258C133.144 45.4135 96.7871 17.0808 65.3242 1C87.6978 14.7835 120.559 42.3505 103.08 54.6025Z"
        fill={color}
        stroke={color}
        strokeWidth="0.2"
      />
      <path
        d="M65.3242 41.5847V5.59448C77.4433 13.7625 117.762 43.882 65.3242 41.5847Z"
        fill="#CC2828"
        stroke="#CC2828"
        strokeWidth="0.2"
      />
    </svg>
  );
}
