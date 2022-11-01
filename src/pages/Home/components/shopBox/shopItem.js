import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editItemInShop,
  deleteFromShop,
} from "../../../../redux/actions/shopActions";
import { Counter } from "../../../../components";
import {
  ItemBox,
  ItemImg,
  ItemTitleWrapper,
  ItemBodyWrapper,
  DeleteImg,
} from "./styles";
import Trash from "./trash.svg";
import {
  editItemInOrder,
  deleteFromOrder,
} from "../../../../redux/actions/orderActions";
const ShopItem = ({ item }) => {
  const dispatch = useDispatch();
  const isEditOrder = useSelector((state) => state.orders.isEditOrder);
  return (
    <ItemBox>
      <ItemImg src={item.img} />
      <ItemBodyWrapper>
        <ItemTitleWrapper>
          <div>{item.itemName}</div>
          <Counter
            count={item.count}
            onMinus={() => {
              isEditOrder
                ? dispatch(editItemInOrder({ ...item, count: item.count === 1 ? 1 : item.count - 1 }))
                : dispatch(editItemInShop({ ...item, count: item.count === 1 ? 1 : item.count - 1 }));
            }}
            onPlus={() => {
              isEditOrder
                ? dispatch(editItemInOrder({ ...item, count: item.count + 1 }))
                : dispatch(editItemInShop({ ...item, count: item.count + 1 }));
            }}
          />
        </ItemTitleWrapper>
        <DeleteImg
          src={Trash}
          onClick={() => {
            isEditOrder
              ? dispatch(deleteFromOrder(item.id))
              : dispatch(deleteFromShop(item.id));
          }}
        />
      </ItemBodyWrapper>
    </ItemBox>
  );
};

export default ShopItem;
