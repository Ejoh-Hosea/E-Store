import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};
