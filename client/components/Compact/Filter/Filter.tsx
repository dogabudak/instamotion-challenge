import React from "react";
import { Button } from "../../Basic/Button/Button";
import { buildFilters } from "../../../utils/filterBuilder";
import { RangeSelect } from "../../Basic/RangeSelect/RangeSelect";
import { Select } from "../../Basic/Select/Select";
import {
  Filters,
  FormikFilters,
  HTTPFilterBody,
  QueryFilters,
} from "../../../types/Filters";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import * as StyledFilter from "./Filter.styled";

export interface FilterBarProps {
  filters: Filters;
  onSubmit: (filters: HTTPFilterBody) => void;
  queryFilters: QueryFilters;
}

export function Filter({
  filters,
  onSubmit,
  queryFilters,
}: FilterBarProps): JSX.Element {
  const router = useRouter();

  const update = async (values: FormikFilters): Promise<void> => {
    const { generatedFilters, queryParams } = buildFilters(values);
    onSubmit(generatedFilters);
    await router.push({
      query: queryParams,
    });
  };

  const formik = useFormik<FormikFilters>({
    initialValues: {
      make: queryFilters.make,
      model: queryFilters.model,
      category: queryFilters.category,
      gearbox: queryFilters.gearbox,
      color: queryFilters.color,
      fuel: queryFilters.fuel,
      mileage: {
        from: queryFilters.mileFrom || "",
        to: queryFilters.mileTo || "",
      },
      power: {
        from: queryFilters.powerFrom || "",
        to: queryFilters.powerTo || "",
      },
      price: {
        from: queryFilters.priceFrom || "",
        to: queryFilters.priceTo || "",
      },
    },
    onSubmit: update,
    validate: update,
    validateOnBlur: true,
  });

  return (
    <StyledFilter.Filter data-testid="filterbar">
      <StyledFilter.Divider />
      <Select
        defaultValue={formik.values.make}
        options={filters.make}
        name="make"
        localizedName="Marke"
        initField={true}
        onChange={formik.handleChange}
      />
      {formik.values.make && formik.values.make !== "-" && (
        <>
          <StyledFilter.Divider />
          <Select
            defaultValue={formik.values.model}
            options={filters.model[formik.values.make as unknown as string]}
            name="model"
            localizedName="Modell"
            initField={true}
            onChange={formik.handleChange}
          />
        </>
      )}
      <StyledFilter.Divider />
      <Select
        defaultValue={formik.values.category}
        options={filters.category}
        name="category"
        localizedName="Kategorie"
        initField={true}
        onChange={formik.handleChange}
      />
      <StyledFilter.Divider />
      <Select
        defaultValue={formik.values.gearbox}
        options={filters.gearbox}
        name="category"
        localizedName="Schaltung"
        initField={true}
        onChange={formik.handleChange}
      />
      <StyledFilter.Divider />
      <Select
        defaultValue={formik.values.color}
        options={filters.color}
        name="color"
        localizedName="Farbe"
        initField={true}
        onChange={formik.handleChange}
      />
      <StyledFilter.Divider />
      <Select
        defaultValue={formik.values.fuel}
        options={filters.fuel}
        name="fuel"
        localizedName="Kraftstoff"
        initField={true}
        onChange={formik.handleChange}
      />
      <StyledFilter.Divider />
      <RangeSelect
        start={formik.values.mileage.from}
        end={formik.values.mileage.to}
        onChange={(e: any) => {
          formik.setFieldValue("mileage.from", e.start);
          formik.setFieldValue("mileage.to", e.end);
        }}
        name="km Stand"
      />
      <StyledFilter.Divider />
      <RangeSelect
        start={formik.values.power.from}
        end={formik.values.power.to}
        onChange={(e: any) => {
          formik.setFieldValue("power.from", e.start);
          formik.setFieldValue("power.to", e.end);
        }}
        name="Leistung"
      />
      <StyledFilter.Divider />
      <RangeSelect
        start={formik.values.price.from}
        end={formik.values.price.to}
        onChange={(e: any) => {
          formik.setFieldValue("price.from", e.start);
          formik.setFieldValue("price.to", e.end);
        }}
        name="Preis"
      />
      <StyledFilter.Divider />
      <Button secondary onClick={() => formik.handleSubmit()} type="submit">
        Search
      </Button>
    </StyledFilter.Filter>
  );
}
