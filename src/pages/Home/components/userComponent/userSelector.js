import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../components";
import { setCurrentUser } from "../../../../redux/actions/userActions";
import UserModalEdit from "./userEditForm";
import UserModalCreate from "./userCreateForm";
import { Select } from "./styles";
const UserSelector = () => {
  const users = useSelector((state) => state.users.users);
  const currentUser = useSelector((state) => state.users.currentUser);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenCreate, setIsOpenCreate] = useState(false);

  const dispatch = useDispatch();
  const onSelectChange = (e) => {
    dispatch(setCurrentUser(e.target.value));
  };
  useEffect(() => {
    dispatch(setCurrentUser(users[0].id));
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          width: "490px",
          justifyContent: "space-between",
        }}
      >
        <Select style={{ width: "150px" }} onChange={onSelectChange}>
          {users.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </Select>
        <div style={{ width: "150px" }}>
          <Button
            title={"Edit user"}
            onClick={() => {
              setIsOpenEdit(true);
            }}
          />
        </div>
        <div style={{ width: "150px" }}>
          <Button
            title={"Create user"}
            onClick={() => {
              setIsOpenCreate(true);
            }}
          />
        </div>
        {currentUser && (
          <UserModalEdit
            isOpenEdit={isOpenEdit}
            setIsOpenEdit={setIsOpenEdit}
            currentUser={currentUser}
          />
        )}
        {currentUser && (
          <UserModalCreate
            isOpenEdit={isOpenCreate}
            setIsOpenEdit={setIsOpenCreate}
          />
        )}
      </div>
    </div>
  );
};

export default UserSelector;
