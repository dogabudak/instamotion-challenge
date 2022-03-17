import type { ParsedUrlQuery } from "querystring";

// TODO Change this
export function getQueryParams(query: ParsedUrlQuery): Record<string, string> {
  const keys = Object.keys(query);
  const result: Record<string, string> = {};
  keys.forEach((key) => {
    const value = query[key];
    if (typeof value === "object") {
      [result[key]] = value;
    } else if (value) {
      result[key] = value;
    }
  });

  return result;
}
