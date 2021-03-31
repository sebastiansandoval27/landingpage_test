import React from "react";
import { OurPeopleComp, People, Title } from "./OurPeopleSectionStyled";
import PeopleItem from "./PeopleItem/PeopleItem";
import { people } from "../../../../data/people";

const OurPeopleSection = () => {
  return (
    <OurPeopleComp>
      <Title>
        <h2>Our People</h2>
        <p>
          Behind Achoo is a dedicated team of digital marketing experts.
          client-focused relationship managers. data nerds and bloggers whose
          ambition is helping clients achieve awesome influencer marketing
          results
        </p>
      </Title>
      <People>
        {people.map((p) => (
          <PeopleItem
            key={p.id}
            name={p.name}
            img={p.image}
            desc={p.desc}
            user={p.user}
          />
        ))}
      </People>
    </OurPeopleComp>
  );
};

export default OurPeopleSection;
