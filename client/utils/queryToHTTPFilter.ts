import type { HTTPFilterBody, QueryFilters } from "../types/Filters";

export function queryToHTTPFilter(filter: QueryFilters): HTTPFilterBody {
  const result: HTTPFilterBody = {
    "make-model": filter.make
      ? filter.make + (filter.model ? `:${filter.model}` : "")
      : undefined,
    category: filter.category,
    gearbox: filter.gearbox,
    color: filter.color,
    fuel: filter.fuel,
  };

  if (filter.mileFrom || filter.mileTo) {
    result.mileage = `["${filter.mileFrom || ""}", "${filter.mileTo || ""}"]`;
  }

  if (filter.powerFrom || filter.powerTo) {
    result.power = `["${filter.powerFrom || ""}", "${filter.powerTo || ""}"]`;
  }

  if (filter.priceFrom || filter.priceTo) {
    result.price = `["${filter.priceFrom || ""}", "${filter.priceTo || ""}"]`;
  }

  // @ts-ignore
  Object.keys(result).forEach((key) =>
    result[key] === undefined ? delete result[key] : {}
  );

  return result;
}
