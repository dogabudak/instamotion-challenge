import type { ChangeEventHandler } from "react";
import React from "react";
import * as S from "./Select.styled";

export interface SelectProps {
  options: string[];
  name: string;
  localizedName: string;
  initField?: boolean;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  defaultValue?: string;
}
export function Select({
  options,
  name,
  initField,
  onChange,
  localizedName,
  defaultValue,
}: SelectProps): JSX.Element | null {
  return (
    <>
      <S.Select
        onChange={onChange}
        name={name}
        defaultValue={defaultValue}
        data-testid="select"
      >
        {initField ? <option value="">{localizedName}</option> : null}
        {options?.map((option, key) => {
          if (option === "") {
            return null;
          }

          return (
            <option key={key} value={option}>
              {option}
            </option>
          );
        })}
      </S.Select>
    </>
  );
}
