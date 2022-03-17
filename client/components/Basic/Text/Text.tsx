import React from "react";
import * as S from "./Text.styled";

export interface TextProps {
  children: React.ReactNode;
  style?: "italic" | "regular";
  weight?: 400 | 700;
  className?: string;
}

export function Text({
  children,
  style = "regular",
  weight = 400,
  className,
}: TextProps): JSX.Element {
  return (
    <S.Text textStyle={style} textWeight={weight} className={className}>
      {children}
    </S.Text>
  );
}
