const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  make: String,
  model: String,
  mileage: Number,
  power: Number,
  firstRegistration: String,
  fuel: String,
  consumptionUnit: String,
  consumptionCombined: String,
  co2: Number,
  price: Number,
  image: String,
  monthlyInstallment: Number,
  gearbox: String,
  condition: String,
  variant: String,
  category: String,
  exteriorColor: String,
  cubicCapacity: Number,
  fourWheelDrive: Boolean,
  images: [
    {
      type: String,
    },
  ],
});
export const Offer = mongoose.model("Offer", offerSchema);

export const initilizeDatabase = async () => {
  await mongoose.connect("mongodb://localhost:27017/offers");
};

export const insertRecords = async (offers: any[]) => {
  await Offer.insertMany(offers).catch((e) => {
    console.error(`There was an error on insert: ${e}`);
  });
};
