import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../../../../redux/actions/orderActions";
import { clearShop } from "../../../../redux/actions/shopActions";
import {
  editUser,
  setCurrentUser,
} from "../../../../redux/actions/userActions";
import { Button } from "../../../../components";
import { Container } from "./styles";
import ShopItem from "./shopItem";
import { addId } from "../../../../helpers/functions";
const ShopBox = () => {
  const dispatch = useDispatch();
  const shop = useSelector((state) => state.shop.shop);
  const user = useSelector((state) => state.users.currentUser);

  const orders = useSelector((state) => state.orders.orders);
  const addNewOrder = () => {
    let order = {
      id: addId(orders),
      items: shop,
      user: user,
    };
    dispatch(addOrder(order));
    dispatch(
      editUser({
        ...user,
        orders: [...user.orders, order],
      })
    );
    dispatch(setCurrentUser(user.id));
    dispatch(clearShop());
  };
  if (shop.length === 0) return;
  return (
    <div>
      <h2>Shop</h2>
      <Container>
        {shop.map((item) => (
          <ShopItem
            key={item.id}
            item={item}
          />
        ))}
        <Button onClick={addNewOrder} title={"PLACE ORDER"} />
      </Container>
    </div>
  );
};

export default ShopBox;
