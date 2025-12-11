import { formatPrice, generateAmountOptions } from "../utils";
import { removeItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ CartItem }) => {
  const { cartID, title, price, image, amount, company, productColor } =
    CartItem;

  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      {/* image */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      {/* info */}
      <div className="sm:ml-16 sm:w-48">
        {/* title */}
        <h3 className="capitalize font-medium">{title}</h3>

        {/* company */}
        <h4 className=" mt-2 capitalize text-sm text-neutral-content"></h4>
        {/* color */}
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color:{" "}
          <span
            className="badge badge-sm"
            style={{ background: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-ml-24">
        {/* amount */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>

          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-bordered select-xs"
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        {/* remove */}
        <button className="mt-2 link link-primary link-hover text-sm">
          remove
        </button>
      </div>
      {/* price */}
      <p className="font-medium ml-auto">{formatPrice(price)}</p>
    </article>
  );
};
export default CartItem;
