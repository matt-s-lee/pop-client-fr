import React from "react";
import styled from "styled-components";
// import background from "../assets/openhand.jpg";
import logo from "../assets/PoP-Portal-Adult_FRENCH-768x357.png";
import { BsCheckCircleFill } from "react-icons/bs";

const Hero = ({ myRef }) => {
  const assessmentList = [
    "Toujours accessible",
    "Privé et confidentiel",
    "Sans frais",
  ];

  const executeScroll = () =>
    myRef.current?.scrollIntoView({ behaviour: "smooth" });

  return (
    <Wrapper>
      <TextBox>
        <Title>Bienvenue</Title>
        <Body>
          Apprendre à faire face à la douleur par soi-même est un défi, mais
          vous n'êtes pas seul dans ce voyage:
          <Bold> il y a de l'espoir</Bold>. Nous sommes là pour vous fournir des
          ressources et du soutien afin que vous puissiez vous sentir autonome!
        </Body>
      </TextBox>
      <Assessment>
        <StyledLogo src={logo} />
        <Title style={{ textAlign: "center", fontSize: "1.4em" }}>
          Commencez dès maintenant!
        </Title>
        <AssessmentBody>
          Conçu pour les adultes (18 ans et plus) et les professionnels de la
          douleur partout au Canada
        </AssessmentBody>
        <List>
          {assessmentList.map((element) => {
            return (
              <ListItem key={element}>
                <Check>
                  <BsCheckCircleFill />
                </Check>
                {element}
              </ListItem>
            );
          })}
        </List>
        <StyledButton onClick={executeScroll}>
          Cliquer pour voir les ressources plus bas
        </StyledButton>
      </Assessment>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
  padding: 2.5em;
  background: linear-gradient(
      rgba(112, 112, 112, 0.6),
      rgba(112, 112, 112, 0.6)
    ),
    url("https://images.ctfassets.net/xavhorxgg9l4/5GgtHiOYLIGNH0bAmHLOTh/9c1a33a1de5c1dc4c48272c87e55a91c/image.png?w=400&q=50");
  background-size: cover;

  @media (min-width: 780px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const TextBox = styled.div`
  color: white;
  min-width: 300px;
  padding: 10%;
`;

const Title = styled.div`
  font-size: 2.2em;
  font-weight: 700;
`;

const Body = styled.div`
  font-size: 1.2em;
`;

const Bold = styled.span`
  font-weight: 700;
`;

const Assessment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* margin: 2.5em; */
  overflow: hidden;

  min-height: 600px;
  min-width: 300px;
  max-width: 500px;
  color: #555555;
  background-color: #fff;
  border-radius: 0.4em;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  font: 1em;
  padding: 2em;

  & > * {
    margin: 15px 0;
  }

  @media (min-width: 780px) {
    min-width: 425px;
  }
`;

const AssessmentBody = styled.div`
  text-align: center;
  font-size: 1em;
`;

const StyledLogo = styled.img`
  width: 80%;
  margin: 20px 0 0 0;
`;

const List = styled.ul`
  text-align: left;
  padding: 0;
  width: 100%;
  color: #555555;
`;

const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  padding: 0.5em 0;
  font-weight: 600;
`;

const Check = styled.div`
  font-weight: 400;
  margin-right: 1em;
  font-size: 1.2em;
`;

const StyledButton = styled.button`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: #f54e5f;
  border: none;
  outline: none;
  border-radius: 3px;
  padding: 10px 20px;
  width: 100%;
`;