import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../components";
import { StyledDialog, BodyDialog } from "../userComponent/styles";
import { Select } from "./styles";
import ShopItem from "../shopBox/shopItem";
import { editOrder, setEditedOrder } from "../../../../redux/actions/orderActions";
const ModalOrderEdit = ({ isOpenEdit, close }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const order = useSelector((state) => state.orders.editedOrder);
  const onSelectChange = (e) => {
    dispatch(setEditedOrder({
      ...order,
      user: users.find(item => item.id === e.target.value)
    }));
  };
  return (
    <StyledDialog style={{ overflow: "auto" }} open={isOpenEdit}>
      <BodyDialog>
        <Select
          defaultValue={order?.user?.id}
          style={{ width: "150px" }}
          onChange={onSelectChange}
        >
          {users.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </Select>
        {order?.items.map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "180px" }}>
            <Button
              onClick={() => {
                dispatch(editOrder());
                close(false);
              }}
              title="Save"
            />
          </div>
          <div style={{ width: "180px" }}>
            <Button onClick={() => close(false)} title="Close" />
          </div>
        </div>
      </BodyDialog>
    </StyledDialog>
  );
};
export default ModalOrderEdit;
