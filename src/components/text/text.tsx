import React, { FC, ReactNode } from "react";

type Type = "titleSm" | "bodyM" | "bodyLg" | "title";

type Style = {
  fontSize: number;
  lineHeight: string;
  fontWeight: number;
};

interface ITextProps {
  type?: Type;
  className?: string;
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";
  children: ReactNode;
}

const styles: Record<Type, Style> = {
  titleSm: {
    fontSize: 20,
    lineHeight: "28px",
    fontWeight: 400,
  },
  bodyM: {
    fontSize: 16,
    lineHeight: "22px",
    fontWeight: 400,
  },
  bodyLg: {
    fontSize: 20,
    lineHeight: "28px",
    fontWeight: 400,
  },
  title: {
    fontSize: 32,
    lineHeight: "22px",
    fontWeight: 500,
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
