import { FC } from "react";
import { IIcon } from ".";

export const ClearIcon: FC<IIcon> = ({ fill = "#fff", size = 16 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.35147 4.35147C4.8201 3.88284 5.57989 3.88284 6.04852 4.35147L27.6484 25.9513C28.117 26.42 28.117 27.1798 27.6484 27.6484C27.1798 28.117 26.42 28.117 25.9513 27.6484L4.35147 6.04852C3.88284 5.57989 3.88284 4.8201 4.35147 4.35147Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.6485 4.35147C27.1799 3.88284 26.4201 3.88284 25.9515 4.35147L4.35162 25.9513C3.88299 26.42 3.88299 27.1798 4.35162 27.6484C4.82024 28.117 5.58004 28.117 6.04866 27.6484L27.6485 6.04852C28.1172 5.57989 28.1172 4.8201 27.6485 4.35147Z"
        fill={fill}
      />
    </svg>
  );
};
