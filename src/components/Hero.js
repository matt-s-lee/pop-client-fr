import React from "react";
import styled from "styled-components";
import background from "../assets/openhand.jpg";
import logo from "../assets/headerLogo.png";
import { BsCheckCircleFill } from "react-icons/bs";

const Hero = ({ language }) => {
  return (
    <Wrapper style={{ backgroundImage: `url(${background})` }}>
      {/* <Row> */}
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
          Commencez votre voyage
        </Title>
        <AssessmentBody>
          Conçu pour les adultes (18 ans et plus) et les professionnels de la
          douleur partout au Canada
        </AssessmentBody>
        <List>
          <ListItem>
            <Check>
              <BsCheckCircleFill />
            </Check>
            Suivez vos progrès
          </ListItem>
          <ListItem>
            <Check>
              <BsCheckCircleFill />
            </Check>
            Toujours accessible
          </ListItem>
          <ListItem>
            <Check>
              <BsCheckCircleFill />
            </Check>
            Privé et confidentiel
          </ListItem>
        </List>
        <StyledButton>Commencer aujourd'hui*</StyledButton>
        <AssessmentBody>
          *Présentement disponible en anglais seulement
        </AssessmentBody>
      </Assessment>
      {/* </Row> */}
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  height: 80%;
  width: 100%;
  background-position: bottom;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(background);
  background-size: cover;
  background-repeat: no-repeat;
`;

// const Row = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;

//   & > * {
//     margin: 150px;
//     width: 100%;
//   }

//   @media (min-width: 450px) {
//     flex-direction: row;
//     justify-content: space-around;
//   }
// `;

const TextBox = styled.div`
  color: black;
  min-width: 300px;
  padding: 10%;
`;

const Title = styled.div`
  font-size: 2.2em;
  font-family: "Merriweather", serif;
  font-weight: 700;
`;

const Body = styled.div`
  font-size: 1.2em;
`;
const Bold = styled.span`
  font-weight: 700;
`;

const Assessment = styled.div`
  background-color: #fff;
  border-radius: 4px;
  min-width: 300px;
  font: 1em;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1em 1em 1em;

  & > * {
    margin: 15px 0;
  }
`;

const AssessmentBody = styled.div`
  text-align: center;
  font-size: 1em;
`;

const StyledLogo = styled.img`
  width: 40%;
  margin: 20px 0 0 0;
`;

const List = styled.ul`
  text-align: left;
  padding: 0;
  width: 100%;
`;

const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  padding: 0.5em 0;
`;

const Check = styled.div`
  margin-right: 1em;
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
