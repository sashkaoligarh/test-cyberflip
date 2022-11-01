import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  OrderCard,
  UserAvatar,
  SettingsBox,
  BodyWrapper,
  Select,
} from "./styles";
import Settings from "./settings.svg";
import Remove from "./remove.svg";
import { removeOrder } from "../../../../redux/actions/orderActions";
import { setIsEditOrder, setEditedOrder } from "../../../../redux/actions/orderActions";
import ModalOrderEdit from "./modalEditOrder";
const OrderItem = ({ item }) => {
  const dispatch = useDispatch();
  const [editOrder, setEditOrder] = useState(false);
  return (
    <OrderCard>
      <BodyWrapper>
        <UserAvatar src={item.user.img} />
        <div style={{ width: "150px" }}>{item.user.email}</div>
      </BodyWrapper>
      <Select>
        <option>{item.items.length}</option>
        {item.items.map((product) => (
          <option key={product.id}>
            {product.itemName}
          </option>
        ))}
      </Select>
      <SettingsBox onClick={() => {
        dispatch(setIsEditOrder(true))
        dispatch(setEditedOrder(item))
        setEditOrder(true)
        }}>
        <img alt='no img' src={Settings} />
        Edit Order
      </SettingsBox>
      <SettingsBox onClick={() => dispatch(removeOrder(item.id))}>
        <img alt='no img' src={Remove} />
        Remove Order
      </SettingsBox>
      <ModalOrderEdit order={item} isOpenEdit={editOrder} close={() => {
        dispatch(setIsEditOrder(false))
        setEditOrder(false)
        }} />
    </OrderCard>
  );
};

export default OrderItem;
