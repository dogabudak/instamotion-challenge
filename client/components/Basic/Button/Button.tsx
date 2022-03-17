import type { MouseEvent } from "react";
import React from "react";
import * as S from "./Button.styled";

export interface ButtonProps {
  children: React.ReactNode;
  secondary?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "button";
}

/**
 * Description of Button.
 */
export function Button({
  children,
  secondary,
  onClick,
  type = "button",
}: ButtonProps): JSX.Element {
  return (
    <S.Button
      secondary={secondary}
      data-testid="button"
      onClick={onClick}
      type={type}
    >
      {children}
    </S.Button>
  );
}
