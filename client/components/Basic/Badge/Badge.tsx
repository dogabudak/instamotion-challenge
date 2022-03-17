import React from "react";
import * as S from "./Badge.styled";

export interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps): JSX.Element {
  return <S.Badge data-testid="badge">{children}</S.Badge>;
}
