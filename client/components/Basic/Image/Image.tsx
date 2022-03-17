import React from "react";
import * as S from "./Image.styled";

export interface ImageBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Image({ children, className }: ImageBadgeProps): JSX.Element {
  return (
    <S.ImageBadge className={className} data-testid="imagebadge">
      {children}
    </S.ImageBadge>
  );
}
