import type { ButtonProps } from "./Button";
import { colors } from "../../../styles/colors";
import { untilTablet } from "../../../styles/helpers";
import styled, { css } from "styled-components";

export const Button = styled.button<ButtonProps>`
  background-color: ${({ secondary }) =>
    secondary ? colors.secondary : colors.primary};
  border: none;
  border-radius: 5px;
  color: ${({ secondary }) => (secondary ? "black" : "white")};
  outline: none;
  padding: 5px 12px;
  transition: background-color 0.1s ease-in-out;
`;
