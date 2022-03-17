import { FlattenSimpleInterpolation } from "styled-components";
import { css } from "styled-components";

type QueryCheck = {
  minHeight?: number;
  maxHeight?: number;
  minWidth?: number;
  maxWidth?: number;
};
const mobileBreakPoint = {
  max: 539,
};

const tabletBreakPoint = {
  min: mobileBreakPoint.max + 1, // 540
  max: 1223,
};

const desktopBreakPoint = {
  min: tabletBreakPoint.max + 1, // 1224
};

const createQueryCheck = ({
  minHeight,
  minWidth,
  maxWidth,
  maxHeight,
}: QueryCheck): string => {
  const checks: Array<string> = [];

  if (minHeight) {
    checks.push(`(min-height: ${minHeight}px)`);
  }

  if (minWidth) {
    checks.push(`(min-width: ${minWidth}px)`);
  }

  if (maxHeight) {
    checks.push(`(max-height: ${maxHeight}px)`);
  }

  if (maxWidth) {
    checks.push(`(max-width: ${maxWidth}px)`);
  }

  return checks.join(" and ");
};

type MediaQuery = (
  styles: FlattenSimpleInterpolation
) => FlattenSimpleInterpolation;

const createMediaQuery = (items: QueryCheck[]): MediaQuery => {
  const checkParams = items.map((query) => createQueryCheck(query)).join(", ");

  return (styles: FlattenSimpleInterpolation) => css`
    @media ${checkParams} {
      ${styles}
    }
  `;
};

export const untilMobile = createMediaQuery([
  { maxWidth: mobileBreakPoint.max },
]);

export const untilTablet = createMediaQuery([
  { maxWidth: tabletBreakPoint.max },
]);

export const fromTablet = createMediaQuery([
  { minWidth: tabletBreakPoint.min },
]);

export const onlyTablet = createMediaQuery([
  {
    minWidth: tabletBreakPoint.min,
    maxWidth: tabletBreakPoint.max,
  },
]);

export const fromDesktop = createMediaQuery([
  {
    minWidth: desktopBreakPoint.min,
  },
]);

export const queries: Record<string, MediaQuery> = {
  untilMobile,
  untilTablet,
  fromTablet,
  onlyTablet,
  fromDesktop,
};
