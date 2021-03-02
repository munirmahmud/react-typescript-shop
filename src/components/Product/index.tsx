import { Button } from "@material-ui/core";
import React, { FC } from "react";
import { ProductItem } from "../../App";
import { Wrapper } from "./Product.styles";

type Props = {
  product: ProductItem;
  handleAddToCart: (item: ProductItem) => void;
};

const Product: FC<Props> = ({ product, handleAddToCart }) => {
  return (
    <Wrapper>
      <img src={product.image} alt={product.title} />
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </Button>
      </div>
    </Wrapper>
  );
};

export default Product;
