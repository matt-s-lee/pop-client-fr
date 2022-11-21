import React from "react";
import styled from "styled-components";
// import background from "../assets/openhand.jpg";
import logo from "../assets/headerLogo.png";
import { BsCheckCircleFill } from "react-icons/bs";

const Hero = ({ language }) => {
  const assessmentList = [
    "Suivez vos progrès",
    "Toujours accessible",
    "Privé et confidentiel",
    "Sans frais",
  ];

  return (
    <Wrapper>
      {/* <Row> */}
      <Image src="https://images.ctfassets.net/xavhorxgg9l4/23XMFNG8HDYC2tiLha1Teq/51eaf3b29d65b624d7b3bb6f61761db9/Option_2_pexels-lukas-296282.jpg?w=1200&h=795&q=50" />
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
  display: flex;
  flex-direction: column;
  height: 80%;
  min-width: 0;
  border-radius: 0.1875rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  background-color: rgba(0, 0, 0, 0.15);

  @media (min-width: 780px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0.5;
  position: absolute;
  z-index: -1;
  overflow: hidden;

  @media (min-width: 780px) {
    width: 100%;
  }
`;

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
  color: #555555;
  background-color: #fff;
  border-radius: 0.4em;
  font: 1em;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;

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