import React from "react";
import PropTypes from "prop-types";

import {
  PeopleItemCom,
  PhotoPeopleItem,
  TextPeopleItem,
} from "./PeopleItemStyled";

const PeopleItem = ({ name, desc, user, img }) => {
  return (
    <PeopleItemCom>
      <PhotoPeopleItem>
        <img src={img} alt="People-One" />
      </PhotoPeopleItem>
      <TextPeopleItem>
        <h3>{name}</h3>
        <p>{desc}</p>
        <hr />
        <span>{user}</span>
      </TextPeopleItem>
    </PeopleItemCom>
  );
};

PeopleItem.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  user: PropTypes.string,
  img: PropTypes.string,
};

export default PeopleItem;
