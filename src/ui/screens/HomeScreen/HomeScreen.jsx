import React from "react";
import MissionSection from "../../components/HomeScreen/MissionSection/MissionSection";
import OurPeopleSection from "../../components/HomeScreen/OurPeopleSection/OurPeopleSection";
import Layout from "../../components/Layout/Layout";
import { BtnCall, CenterText, ContainerComp } from "./HomeStyled";

const HomeScreen = () => {
  return (
    <Layout>
      <ContainerComp>
        <CenterText>
          <h2>
            A Powerful Influencer Marketing <br /> Platform for Advertises{" "}
          </h2>
          <BtnCall>START YOUR FREE TRIAL</BtnCall>
        </CenterText>
      </ContainerComp>
      <MissionSection />
      <OurPeopleSection />
    </Layout>
  );
};

export default HomeScreen;
