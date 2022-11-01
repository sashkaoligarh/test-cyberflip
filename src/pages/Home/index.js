import React, { useState } from "react";
import { UserSelector, ProductCard, ShopBox, OrderBox } from "./components";
import { Button, Input } from "../../components";
import { Container, Header, BodyBox, ProductsContainer } from "./styles";
import { useSelector } from "react-redux";
const HomePage = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <Container>
      <Header>
        <h1>Dashboard</h1>
        <UserSelector />
      </Header>
      <BodyBox>
        <div>
          <h2>Products</h2>
          <ProductsContainer>
            {products.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </ProductsContainer>
        </div>
        <ShopBox />
      </BodyBox>

      <OrderBox />
    </Container>
  );
};

export default HomePage;
