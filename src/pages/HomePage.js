import { useContext } from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Section from "../components/Section";
import { ResourcesContext } from "../contexts/ResourcesContext";

const HomePage = () => {
  const { sections } = useContext(ResourcesContext);

  return (
    <Wrapper>
      <Hero />
      {/* <Section
        key={"allTools"}
        title={"Apprendre sur votre douleur, son impact et comment la gérer"}
        description={""}
        tag={""}
      /> */}
      {sections &&
        sections.items.map((section, index) => {
          return (
            <Section
              key={section.sys.id}
              index={index}
              title={section.fields.sectionTitle}
              description={
                section.fields.description.content[0].content[0].value
              }
              tag={section.metadata.tags[0].sys.id}
            />
          );
        })}
      {/* 
        <Button>View All Available Tools</Button>
      */}
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

// const Center = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;


// const Button = styled.button`
//   font-size: 16px;
//   font-weight: 700;
//   color: #fff;
//   background-color: #f54e5f;
//   border: none;
//   outline: none;
//   border-radius: 3px;
//   padding: 10px 20px;
// `;
