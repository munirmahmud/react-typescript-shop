import {
  Container,
  Drawer,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { StyledBadge, StyledIconButton } from "./App.styles";
import Product from "./components/Product";

const url = `https://fakestoreapi.com/products`;

export type ProductItem = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: string;
};

const getProducts = async (): Promise<ProductItem[]> => {
  const data = await (await fetch(url)).json();
  return data;
};

const App = (): JSX.Element => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as ProductItem[]);
  const { data, isLoading, error } = useQuery("produadsfadscts", getProducts);

  const getTotalProducts = () => null;
  const handleAddToCart = (item: ProductItem) => {
    console.log(item);

    return item;
  };
  const handleRemoveFromCart = (id: number) => {};

  if (isLoading) {
    return <LinearProgress />;
  }

  if (error) {
    return (
      <Typography variant="subtitle1" color="primary">
        Something went worng
      </Typography>
    );
  }

  return (
    <Container>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        Cart Goes here
      </Drawer>
      <StyledIconButton aria-label="cart" onClick={() => setCartOpen(true)}>
        <StyledBadge badgeContent={4} color="secondary">
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
