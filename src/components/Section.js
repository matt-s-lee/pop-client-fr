import { useContext } from "react";
import { ResourcesContext } from "../contexts/ResourcesContext";

import styled from "styled-components";

import ResourceCarousel from "./ResourceCarousel";

export default function Section({ title, tag, index }) {
  const { resources } = useContext(ResourcesContext);

  return (
    <Wrapper index={index}>
      <Title>{title}</Title>
      {resources && tag && <ResourceCarousel resources={resources} tag={tag} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 0;
  width: 100%;
  overflow: hidden;
  background: ${(props) =>
    props.index === 0 || props.index % 2 === 0 ? "#eee" : "none"};
`;

const Title = styled.h2`
margin: 0 1em 1em 1em;
font-family: "Merriweather", serif;
  color: #222;
  font-weight: 600;
  font-size: 30px;
  text-align: center;

@media (min-width: 780px) {
  margin: 0 3em 1em 3em;
 
`;