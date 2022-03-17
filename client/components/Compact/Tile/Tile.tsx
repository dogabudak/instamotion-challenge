import React from "react";
import { Badge } from "../../Basic/Badge/Badge";
import { Vehicle } from "../../../types/Vehicle";
import Link from "next/link";
import * as StyledTile from "./Tile.styled";

export interface CarTileProps {
  car: Vehicle;
  className?: string;
  id?: string;
}

export function CarTile({ car, className, id }: CarTileProps): JSX.Element {
  const {
    image,
    make,
    model,
    images,
    variant,
    monthlyInstallment,
    price,
    offerID,
    fuel,
    mileage,
    power,
    firstRegistration,
    co2,
    consumptionCombined,
  } = car;

  return (
    <Link passHref href={`/auto/${offerID}`}>
      <StyledTile.CarTile className={className} id={id} data-testid="cartile">
        <StyledTile.ImageContainer>
          <StyledTile.Image src={image} alt={`${make} ${model}`} />
          <StyledTile.ImageBadge>
            {images.length} {images.length === 1 ? "Bild" : "Bilder"}
          </StyledTile.ImageBadge>
        </StyledTile.ImageContainer>
        {make} {model} {variant}
        <StyledTile.Badges>
          <Badge>{fuel}</Badge>
          <Badge>{mileage}km</Badge>
          <Badge>{firstRegistration} EZ</Badge>
          <Badge>{power} PS</Badge>
          <Badge>
            {consumptionCombined}l/100km{" "}
            <StyledTile.Combined>(komb)</StyledTile.Combined>
          </Badge>
          <Badge>{co2}g/km CO2</Badge>
          <Badge>{monthlyInstallment} Monthly</Badge>
          <Badge>{price}€</Badge>
        </StyledTile.Badges>
      </StyledTile.CarTile>
    </Link>
  );
}
