import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import FormComp from "../../components/Form/FormComp/FormComp";
import Layout from "../../components/Layout/Layout";
import { Form, Info, SettingsScreenComp } from "./SettingsStyled";
import { startUpdate } from "../../../actions/auth";
import illustration from "../../../assets/images/meditation.png";

const SettingsScreen = () => {
  const dispatch = useDispatch();

  const { uid, email, name } = useSelector((state) => state.auth);

  const [formUpdateValues, handleInputUpdate] = useForm({
    namel: name,
    emaill: email,
  });

  const { namel, emaill } = formUpdateValues;

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(startUpdate(uid, emaill, namel));
  };

  const formFields = {
    handleSubmit: handleUpdate,
    handleInputChange: handleInputUpdate,
    values: [
      {
        key: 1,
        icon: "fas fa-user",
        name: "namel",
        placeholder: "Name",
        value: namel,
        type: "text",
      },
      {
        key: 2,
        icon: "fas fa-envelope",
        name: "emaill",
        placeholder: "Email",
        value: emaill,
        type: "email",
      },
    ],

    valueBtn: "SEND",
    title: "UPDATE",
    type: "Profile",
  };

  return (
    <Layout>
      <SettingsScreenComp>
        <Info>
          <img src={illustration} alt="" />
        </Info>
        <Form>
          <FormComp
            handleSubmit={formFields.handleSubmit}
            handleInputChange={formFields.handleInputChange}
            values={formFields.values}
            title={formFields.title}
            valueBtn={formFields.valueBtn}
            type={formFields.type}
            route={"/"}
          />
        </Form>
      </SettingsScreenComp>
    </Layout>
  );
};

export default SettingsScreen;
