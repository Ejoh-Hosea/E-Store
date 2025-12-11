import { useSelector } from "react-redux";
import CartItem from "./CartItem";
CartItem;
const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);
  return (
    <>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} CartItem={item}></CartItem>;
      })}
    </>
  );
};
export default CartItemsList;
