import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../../../redux/actions/userActions";
import { Button, Input } from "../../../../components";
import { StyledDialog, BodyDialog } from "./styles";
import { addId } from "../../../../helpers/functions";

const UserModalCreate = ({ isOpenEdit, setIsOpenEdit }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users)
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const saveEditedUser = () => {
    dispatch(
      addUser({
        id: addId(users),
        name: userName,
        email: userEmail,
        password: userPassword,
        orders: [],
        img: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      })
    );
    setUserName("");
    setUserEmail("");
    setUserPassword("");
    setIsOpenEdit(false);
  };
  return (
    <StyledDialog open={isOpenEdit}>
      <BodyDialog>
        <Input placeholder="name" value={userName} handleChange={setUserName} />
        <Input
          placeholder="email"
          value={userEmail}
          handleChange={setUserEmail}
        />
        <Input
          placeholder="password"
          value={userPassword}
          handleChange={setUserPassword}
        />
        <div style={{ display: "flex", justifyContent:'space-between' }}>
          <div style={{width:'180px'}}>
            <Button onClick={saveEditedUser} title="Save" />
          </div>
          <div style={{width:'180px'}}>
            <Button onClick={() => setIsOpenEdit(false)} title="Close" />
          </div>
        </div>
      </BodyDialog>
    </StyledDialog>
  );
};
export default UserModalCreate;
