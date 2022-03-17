import axios from "axios";
import { initilizeDatabase, insertRecords } from "./insert";

let page = 1;
const query = JSON.stringify({
  query: `query getOffers($q: JSON!) {
  getOffers(q: $q) {
    records {
      make
      model
      mileage
      power
      firstRegistration
      fuel
      consumptionUnit
      consumptionCombined
      co2
      price
      image
      monthlyInstallment
      gearbox
      condition
      variant
      category
      exteriorColor
      cubicCapacity
      fourWheelDrive
      images
    }
  }
}`,
  variables: {
    q: {
      "page-size": 10,
      "sort-by": "financing.monthlyInstallment::asc",
      page,
    },
  },
});

const fetchData = async () => {
  const response = await axios({
    method: "post",
    url: "https://im-graphql.instamotion.com/",
    headers: {
      "Content-Type": "application/json",
    },
    data: query,
  });
  const values = response?.data?.data;
  if (values) {
    await insertRecords(values.getOffers.records);
    page++;
    await fetchData();
  }
};

(async () => {
  await initilizeDatabase();
  await fetchData().catch((e) => {
    console.error("Error on fetching the data", e);
  });
})();
