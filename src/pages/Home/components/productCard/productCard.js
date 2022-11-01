import React from "react";
import { useDispatch } from "react-redux";
import { addToShop } from "../../../../redux/actions/shopActions";
import { Button } from "../../../../components";
import { Card, HeaderCard, Image, Operator } from "./styles";
import Delete from "./delete.svg";
import {deleteProduct} from '../../../../redux/actions/productActions'

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const onAddToShop = (item) => {
    let product = {
      id: item.id,
      itemName: item.title,
      count: 1,
      img: item.img,
    };
    dispatch(addToShop(product));
  };
  return (
    <Card>
      <HeaderCard>
        <Operator src={Delete} onClick={() => dispatch(deleteProduct(item.id))} />
      </HeaderCard>
      <Image src={item.img} />
      <h3>{item.title || item.itemName}</h3>

      <div style={{ display: "flex", width: "200px" }}>
        <Button onClick={() => onAddToShop(item)} title={"Add to shop"} />
      </div>
    </Card>
  );
};

export default ProductCard;
