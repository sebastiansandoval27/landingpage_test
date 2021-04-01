import React from "react";
import { MessageSectionComp } from "./MessageSectionStyled";
import { BtnCall } from "../ButtonStart/ButtonStart";

const MessageSection = () => {
  return (
    <MessageSectionComp>
      <p>
        No obligations or contracts. Achoo influencer Platform is available to
        all advertisers
      </p>
      <BtnCall color={"var(--pink-dark)"}>START YOUR FREE TRIAL</BtnCall>
    </MessageSectionComp>
  );
};

export default MessageSection;
