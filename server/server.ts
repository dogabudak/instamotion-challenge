import { ApolloServer, gql } from "apollo-server";
import { initilizeDatabase, Offer } from "./seed/insert";
import "dotenv/config";

const typeDefs = gql`
  type Offer {
    id: ID
    make: String
    model: String
    mileage: Int
    power: Int
    firstRegistration: String
    fuel: String
    consumptionUnit: String
    consumptionCombined: String
    co2: Int
    price: Int
    image: String
    monthlyInstallment: Int
    gearbox: String
    condition: String
    variant: String
    category: String
    exteriorColor: String
    cubicCapacity: Int
    fourWheelDrive: Boolean
    images: [String]
  }
  input Input {
    limit: Int
    skip: Int
  }
  type Query {
    getOffers(input: Input): [Offer]
  }
`;

const resolvers = {
  Query: {
    getOffers: (arg1, filter) => {
      const { skip, limit } = filter.input;
      return new Promise((resolve, reject) => {
        Offer.find({}, {}, { skip, limit }, (err, foundItem) => {
          if (err) reject(err);
          else resolve(foundItem);
        });
      });
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.listen({ port: process.env.PORT }).then(async ({ url }) => {
  await initilizeDatabase();
  console.log(`🚀 Server ready at ${url}`);
});
