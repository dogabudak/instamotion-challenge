import type { Vehicle } from "../types/Vehicle";
import axios from "axios";

const getOfferQuery = `
  query getOffer($offerID: ID!) {
    getOffer(offerID: $offerID) {
        make
        model
        mileage
        power
        firstRegistration
        fuel
        consumptionCombined
        co2
        price
        image
        monthlyInstallment
        variant
        images
        offerID
        color
        gearbox
        category
    }
  }
`;

export async function getOffer(offerID: string): Promise<Vehicle> {
  const result = await axios.post("https://im-graphql.instamotion.com/", {
    query: getOfferQuery,
    variables: {
      offerID,
    },
  });
  return result.data.getOffer;
}
