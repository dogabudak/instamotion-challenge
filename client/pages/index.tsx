import React from "react";
import { getFilters } from "../api/getFilters";
import { getOffers } from "../api/getOffers";
import { getQueryParams } from "../utils/getQueryParams";
import { queryToHTTPFilter } from "../utils/queryToHTTPFilter";
import { Offers } from "../components/Compact/Offers/Offers";
import { Vehicle } from "../types/Vehicle";
import { Filters } from "../types/Filters";
import { NextPageContext } from "next";

export type ServerProps = {
  props: { offers: Vehicle[]; filters: Filters };
};

export default function Index({
  offers,
  filters,
}: ServerProps["props"]): JSX.Element {
  return (
    <>
      <Offers offers={offers} filters={filters} />
    </>
  );
}

export async function getServerSideProps({
  query,
}: NextPageContext): Promise<ServerProps> {
  const prettyQuery = getQueryParams(query);
  const offers = await getOffers({
    page: 1,
    pageSize: 27,
    filter: queryToHTTPFilter(prettyQuery),
  });
  const filters = await getFilters();
  return {
    props: {
      offers,
      filters,
    },
  };
}
