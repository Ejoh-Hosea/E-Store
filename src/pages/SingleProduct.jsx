import { Link, useLoaderData } from "react-router-dom";
import { formatPrice, customFetch } from "../utils";
import { useState } from "react";

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);

  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } = product;
  const dollarsAmount = formatPrice(price);

  return <div>SingleProduct</div>;
};
export default SingleProduct;
