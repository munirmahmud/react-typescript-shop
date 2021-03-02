import { Button } from "@material-ui/core";
import React, { FC } from "react";
import { ProductItem } from "../../../App";
import { Wrapper } from "./CartItem.styles";

type Props = {
  product: ProductItem;
  addToCart: (cartItem: ProductItem) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: FC<Props> = ({ product, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h3>{product.title}</h3>
      <div className="info">
        <p>Price: ${product.price}</p>
        <p>Total: ${(product.amount * product.price).toFixed(2)}</p>
      </div>
      <div className="buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(product.id)}
        >
          -
        </Button>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(product)}
        >
          +
        </Button>
      </div>
      <img src={product.image} alt={product.title} />
    </Wrapper>
  );
};

export default CartItem;
