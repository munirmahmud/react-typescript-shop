import { Container, Drawer, Grid } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { StyledBadge, StyledIconButton } from "./App.styles";
import Cart from "./components/Cart";
import Product from "./components/Product";

const url = `https://fakestoreapi.com/products`;

export type ProductItem = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<ProductItem[]> => {
  const data = await (await fetch(url)).json();
  return data;
};

const App = (): JSX.Element => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as ProductItem[]);
  const { data, isLoading, error } = useQuery("produadsfadscts", getProducts);

  const getTotalProducts = (cartItems: ProductItem[]) => {
    const totals = cartItems.reduce(
      (total: number, item) => total + item.amount,
      0
    );
    console.log(totals);

    return totals;
  };

  const handleAddToCart = (item: ProductItem) => {
    console.log(item);

    return item;
  };
  const handleRemoveFromCart = (id: number) => {};

  return (
    <Container>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledIconButton aria-label="cart" onClick={() => setCartOpen(true)}>
        <StyledBadge
          badgeContent={getTotalProducts(cartItems)}
          color="secondary"
        >
          <AddShoppingCartIcon />
        </StyledBadge>
      </StyledIconButton>

      <Grid container spacing={2}>
        {data?.length &&
          data?.map((product) => (
            <Grid item key={product.id} sm={3}>
              <Product handleAddToCart={handleAddToCart} product={product} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default App;
