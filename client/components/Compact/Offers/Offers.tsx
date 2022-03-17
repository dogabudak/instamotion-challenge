import React, { useEffect, useState } from "react";
import { getQueryParams } from "../../../utils/getQueryParams";
import { queryToHTTPFilter } from "../../../utils/queryToHTTPFilter";
import { Filter } from "../Filter/Filter";
import { Vehicle } from "../../../types/Vehicle";
import type { HTTPFilterBody } from "../../../types/Filters";
import { useRouter } from "next/router";
import { ServerProps } from "../../../pages";
import * as StyledOffer from "./Offers.styled";
import { getOffers } from "../../../api/getOffers";

export function Offers({ offers, filters }: ServerProps["props"]): JSX.Element {
  const [sOffers, setSOffers] = useState<Vehicle[]>(offers);
  const [isLoading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const router = useRouter();
  const parsedQuery = getQueryParams(router.query);
  const [filter, setFilter] = useState<HTTPFilterBody>(
    queryToHTTPFilter(parsedQuery)
  );

  useEffect(() => {
    const lastTile = document.getElementById("last-tile");
    const observer = new IntersectionObserver(async (entries) => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting) {
        if (isLoading || !hasMore) {
          return;
        }
        if (lastTile) {
          observer.unobserve(lastTile);
        }
        setLoading(true);

        const result = await getOffers({ page: page + 1, pageSize: 9, filter });

        if (result.length === 0) {
          setHasMore(false);
          if (lastTile) {
            observer.unobserve(lastTile);
          }
        }

        setSOffers((s) => s.concat(result));
        setLoading(false);
        setPage(page + 1);
      }
    });

    if (lastTile) {
      observer.observe(lastTile);
    }

    return () => {
      if (lastTile) {
        observer.unobserve(lastTile);
      }
    };
  }, [filter, hasMore, isLoading, page]);

  const handleFilter = (selectedFilters: HTTPFilterBody) => {
    setLoading(true);
    setPage(1);
    setFilter(selectedFilters);
    getOffers({ page: 1, pageSize: 9, filter: selectedFilters }).then(
      (result) => {
        setSOffers(result);
        setLoading(false);
      }
    );
  };

  return (
    <StyledOffer.MainLayout>
      <StyledOffer.FilterContainer>
        <Filter
          filters={filters}
          onSubmit={(selectedFilters) => handleFilter(selectedFilters)}
          queryFilters={parsedQuery}
        />
      </StyledOffer.FilterContainer>
      <StyledOffer.ResultsContainer>
        {sOffers.map((offer, idx) => {
          const isLastElement = idx === sOffers.length - 1;

          // @ts-ignore
          return (
            <StyledOffer.Result
              car={offer}
              key={idx}
              id={isLastElement ? "last-tile" : null}
            />
          );
        })}
      </StyledOffer.ResultsContainer>
    </StyledOffer.MainLayout>
  );
}
