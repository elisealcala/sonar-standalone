import React, { FC, ReactNode } from "react";

type Type = "titleSm" | "bodyM" | "bodyLg";

interface ITextProps {
  type?: Type;
  className?: string;
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";
  children: ReactNode;
}

const styles: Record<Type, { fontSize: number; lineHeight: string }> = {
  titleSm: {
    fontSize: 20,
    lineHeight: "28px",
  },
  bodyM: {
    fontSize: 16,
    lineHeight: "22px",
  },
  bodyLg: {
    fontSize: 20,
    lineHeight: "28px",
  },
};

export const Text: FC<ITextProps> = ({
  type = "bodyM",
  className,
  children,
  component = "div",
}) => {
  const Component = component;

  return (
    <Component className={className} style={styles[type]}>
      {children}
    </Component>
  );
};
