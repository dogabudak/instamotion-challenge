import React from "react";
import * as S from "./RangeSelect.styled";

export type RangeChangeEvent = {
  start: string;
  end: string;
};

export interface RangeSelectProps {
  start: string;
  end: string;
  name: string;
  onChange: (e: RangeChangeEvent) => void;
}

export function RangeSelect({
  start,
  end,
  onChange,
  name,
}: RangeSelectProps): JSX.Element {
  return (
    <div data-testid="range-select">
      <S.Input
        type="text"
        placeholder="von"
        onChange={(e) =>
          onChange({
            start: e.target.value,
            end,
          })
        }
        value={start}
      />
      <S.Input
        type="text"
        placeholder="bis"
        onChange={(e) =>
          onChange({
            start,
            end: e.target.value,
          })
        }
        value={end}
      />
    </div>
  );
}
