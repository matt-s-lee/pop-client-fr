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
      <InfoBar />
      {sections &&
        sections.items.map((section) => {
          return (
            <Section
              key={section.sys.id}
              title={section.fields.sectionTitle}
              description={
                section.fields.description.content[0].content[0].value
              }
              tag={section.metadata.tags[0].sys.id}
            />
          );
        })}
      {/* <SectionStyle>
        <Title>Obtenez le soutien. Toujours gratuit.</Title>
        {resources && <ResourceCarousel resources={resources} />}
        <Button>View All Available Tools</Button>
      </SectionStyle> */}
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoBar = styled.div`
  background-color: #0a69b5;
  width: 100%;
  height: 60px;
`;

// const Center = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const SectionStyle = styled.section`
  border: 1px solid black;
  background-color: #f2f3f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1em;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 2em;
  width: 80%;
  margin: auto;
  margin-top: 30px;
  text-align: center;
`;

const Button = styled.button`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: #f54e5f;
  border: none;
  outline: none;
  border-radius: 3px;
  padding: 10px 20px;
`;
