import React, { useEffect, useState } from 'react';

const ProgressBar = ({ radius, strokeWidth, percentage }:any) => {
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = (1 - percentage / 100) * circumference;

  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    setOffset(strokeDashoffset);
  }, [strokeDashoffset]);

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
    >
      <circle
        stroke="#003050"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        style={{
          strokeDasharray: `${circumference} ${circumference}`,
          strokeDashoffset: offset,
          transition: 'stroke-dashoffset 0.5s ease',
          transform: 'rotate(-90deg)',
          transformOrigin: 'center',
        }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#003050"
        fontSize="20px"
        fontWeight="bold"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default ProgressBar;
