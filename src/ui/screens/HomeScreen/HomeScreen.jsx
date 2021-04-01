import React from "react";
import MessageSection from "../../components/HomeScreen/MessageSection/MessageSection";
import MissionSection from "../../components/HomeScreen/MissionSection/MissionSection";
import OurPeopleSection from "../../components/HomeScreen/OurPeopleSection/OurPeopleSection";
import Layout from "../../components/Layout/Layout";
import { CenterText, ContainerComp } from "./HomeStyled";
import { BtnCall } from "../../components/HomeScreen/ButtonStart/ButtonStart";

const HomeScreen = () => {
  return (
    <Layout>
      <ContainerComp>
        <CenterText>
          <h2>
            A Powerful Influencer Marketing <br /> Platform for Advertises{" "}
          </h2>
          <BtnCall color={"var(--pink)"}>START YOUR FREE TRIAL</BtnCall>
        </CenterText>
      </ContainerComp>
      <MissionSection />
      <OurPeopleSection />
      <MessageSection />
    </Layout>
  );
};

export default HomeScreen;
