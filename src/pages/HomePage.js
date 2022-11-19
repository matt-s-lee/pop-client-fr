import React from "react";
import styled from "styled-components";
import HelpWindow from "../components/HelpWindow";
import Hero from "../components/Hero";
import ResourceCarousel from "../components/ResourceCarousel";

const HomePage = () => {
  return (
    <Wrapper>
      <Hero />
      <InfoBar />
      <Section>
        <Title>Obtenez le soutien. Toujours gratuit.</Title>
        <ResourceCarousel />
        <Button>View All Available Tools</Button>
      </Section>
      <div>
        <HelpWindow />
      </div>
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

const Section = styled.section`
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
