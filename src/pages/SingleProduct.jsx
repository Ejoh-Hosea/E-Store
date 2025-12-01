import { Link, useLoaderData } from "react-router-dom";
import { formatPrice, customFetch } from "../utils";
import { useState } from "react";

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);


  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);
   const [productColor,setProduct] = useState(colors[0])
  console.log(image);

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* Products */}
      <div className="mt-6 grid gap-y-y lg:grid-cols-2 lg:gap-x-16">
        {/* image */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        {/* product */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 tex-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* colors */}
          <div className="mt-6">
            <h4 className="text md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color)=>{
                return<button key={color} type="button" className={`badge w-6 h-6 mr-2${color === productColor && 'border-2 border-secondary'}`} style={{backgroundVolor:color}} onClick={()=>setProductColor(color)}>
                      
                </button>
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
