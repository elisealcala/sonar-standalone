import React, { FC } from "react";
import { Icons, ListIcons } from "../../icons";
import "./input.css";

interface IInputProps {
  type?: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  icon?: ListIcons;
  iconSize?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const renderIcon = (icon: ListIcons, size?: number) => {
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
    </div>
  );
};
