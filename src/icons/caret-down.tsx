import { FC } from "react";
import { IIcon } from ".";

export const CaretDownIcon: FC<IIcon> = ({ size = 6, fill = "white" }) => {
  return (
    <svg
      width={1.83 * size}
      height={size}
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M10.6875 1.71875L6.71875 5.71875C6.5 5.90625 6.25 6 6 6C5.71875 6 5.46875 5.90625 5.28125 5.71875L1.3125 1.71875C1 1.4375 0.90625 1 1.0625 0.625C1.21875 0.25 1.59375 0 2 0H9.96875C10.375 0 10.7188 0.25 10.875 0.625C11.0312 1 10.9688 1.4375 10.6875 1.71875Z"
        fill={fill}
      />
    </svg>
  );
};
