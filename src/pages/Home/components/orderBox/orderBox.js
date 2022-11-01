import React from "react";
import { useSelector } from "react-redux";
import { Container } from "./styles";
import OrderItem from "./orderItem";

const OrderBox = () => {
  const orders = useSelector((state) => state.orders.orders);
  
  if(orders.length === 0) return null
  return (
    <>
      <h2 style={{marginLeft:'20px'}}>All orders</h2>
      <Container>
        {orders.map((item) => (
          <OrderItem key={item.id} item={item}/>
        ))}
      </Container>
    </>
  );
};

export default OrderBox;
