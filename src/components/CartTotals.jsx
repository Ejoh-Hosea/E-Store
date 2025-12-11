import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  return (
    <div className="card bg-base-200">
      {/* subtotal */}
      <p className="flex justify-between text-xs border-b border-base-300 pb-2">
        <span>Subtotal</span>
        <span>{formatPrice(cartTotal)}</span>
      </p>
      {/* shipping */}
      <p className="flex justify-between text-xs border-b border-base-300 pb-2">
        <span>Shipping</span>
        <span>{formatPrice(shipping)}</span>
      </p>
      {/* tax */}
      <p className="flex justify-between text-xs border-b border-base-300 pb-2">
        <span>Tax</span>
        <span>{formatPrice(tax)}</span>
      </p>
      {/* total */}
      <p className="flex justify-between text-sm mt-4 pb-2">
        <span>Order Total</span>
        <span>{formatPrice(orderTotal)}</span>
      </p>
    </div>
  );
};
export default CartTotals;
