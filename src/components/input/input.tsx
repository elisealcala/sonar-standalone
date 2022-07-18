import React, { FC } from "react";
import { Icons } from "../../icons";
import "./input.css";

interface IInputProps {
  type?: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  icon?: keyof typeof Icons;
  iconSize?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearValue?: () => void;
}

const renderIcon = (icon: keyof typeof Icons, size?: number) => {
  const component = Icons[icon];

  return (
    <div className="input-icon">
      {component({
        size,
      })}
    </div>
  );
};

export const Input: FC<IInputProps> = ({
  type,
  value,
  className,
  placeholder,
  disabled,
  onChange,
  icon,
  iconSize,
  clearValue,
}) => {
  return (
    <div className={`input-container ${className}`}>
      {icon ? renderIcon(icon, iconSize) : null}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {clearValue && value ? (
        <span className="clear-value" onClick={clearValue}>
          {renderIcon("clear", iconSize)}
        </span>
      ) : null}
    </div>
  );
};
