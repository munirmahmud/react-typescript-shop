import React, { FC } from "react";
import { ProductItem } from "../../App";
import { Wrapper } from "./Cart.styles";
import CartItem from "./CartItem";

type Props = {
  cartItems: ProductItem[];
  addToCart: (cartItem: ProductItem) => void;
  removeFromCart: (id: number) => void;
};

const Cart: FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (cartItems: ProductItem[]) => {
    return cartItems.reduce(
      (total: number, item) => total + item.amount * item.price,
      0
    );
  };

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 && <p>No items in your cart</p>}
      {cartItems.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}

      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
