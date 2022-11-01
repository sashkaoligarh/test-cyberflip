import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { editUser } from "../../../../redux/actions/userActions";
import { Button, Input } from "../../../../components";
import { StyledDialog, BodyDialog } from "./styles";
const UserModalEdit = ({ isOpenEdit, setIsOpenEdit, currentUser }) => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(currentUser.name);
  const [userEmail, setUserEmail] = useState(currentUser.email);
  const [userPassword, setUserPassword] = useState(currentUser.password);
  useEffect(() => {
    setUserName(currentUser.name);
    setUserEmail(currentUser.email);
    setUserPassword(currentUser.password);
  }, [currentUser]);
  const saveEditedUser = () => {
    if (
      userName === currentUser.name &&
      userEmail === currentUser.email &&
      userPassword === currentUser.password
    ) {
      setIsOpenEdit(false);
      return;
    } else {
      dispatch(
        editUser({
          ...currentUser,
          name: userName,
          email: userEmail,
          password: userPassword,
        })
      );
      setIsOpenEdit(false);
    }
  };
  return (
    <StyledDialog open={isOpenEdit}>
      <BodyDialog>
        <Input value={userName} handleChange={setUserName} />
        <Input value={userEmail} handleChange={setUserEmail} />
        <Input value={userPassword} handleChange={setUserPassword} />
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
export default UserModalEdit;
